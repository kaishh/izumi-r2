package com.github.pshirshov.izumi.distage.provisioning.strategies.cglib

import java.lang.reflect.Method

import com.github.pshirshov.izumi.distage.model.plan.ExecutableOp
import com.github.pshirshov.izumi.distage.model.plan.ExecutableOp.WiringOp
import com.github.pshirshov.izumi.distage.model.provisioning.strategies.{JustExecutor, TraitIndex}
import com.github.pshirshov.izumi.distage.model.provisioning.{OpResult, OperationExecutor, ProvisioningKeyProvider}
import com.github.pshirshov.izumi.distage.model.reflection.universe.RuntimeDIUniverse
import com.github.pshirshov.izumi.distage.model.reflection.universe.RuntimeDIUniverse.Wiring._
import com.github.pshirshov.izumi.distage.provisioning.FactoryTools
import com.github.pshirshov.izumi.distage.provisioning.strategies.cglib.exceptions.CgLibCallException
import com.github.pshirshov.izumi.fundamentals.reflection.TypeUtil
import net.sf.cglib.proxy.MethodProxy


protected[distage] class CgLibFactoryMethodInterceptor
(
  factoryMethodIndex: Map[Method, RuntimeDIUniverse.Wiring.FactoryMethod.WithContext]
  , dependencyMethodIndex: TraitIndex
  , narrowedContext: ProvisioningKeyProvider
  , executor: OperationExecutor
  , op: WiringOp.InstantiateFactory
) extends CgLibTraitMethodInterceptor(dependencyMethodIndex, narrowedContext) {

  override def intercept(o: scala.Any, method: Method, objects: Array[AnyRef], methodProxy: MethodProxy): AnyRef = {
    if (factoryMethodIndex.contains(method)) {
      val wiringWithContext = factoryMethodIndex(method)
      val justExecutor = mkExecutor(objects, wiringWithContext)

      val results = justExecutor.execute(
        FactoryTools.mkExecutableOp(op.target, wiringWithContext.wireWith, op.origin)
      )

      FactoryTools.interpret(results)

    } else {
      super.intercept(o, method, objects, methodProxy)
    }
  }

  private def mkExecutor(arguments: Array[AnyRef], wiringWithContext: FactoryMethod.WithContext): JustExecutor = {
    if (arguments.length != wiringWithContext.methodArguments.length) {
      throw new CgLibCallException(
        s"Divergence between constructor arguments count: ${arguments.toSeq} vs ${wiringWithContext.methodArguments} "
        , arguments.toSeq
        , wiringWithContext.methodArguments
      )
    }

    val providedValues = wiringWithContext.methodArguments.zip(arguments).toMap

    val unmatchedTypes = providedValues.filter {
      case (key, value) =>
        val runtimeClass = RuntimeDIUniverse.mirror.runtimeClass(key.tpe.tpe.erasure)
        !TypeUtil.isAssignableFrom(runtimeClass, value)
    }

    if (unmatchedTypes.nonEmpty) {
      throw new CgLibCallException(
        s"Divergence between constructor arguments types and provided values: $unmatchedTypes"
        , arguments.toSeq
        , wiringWithContext.methodArguments
      )
    }

    val extendedContext = narrowedContext.extend(providedValues)
    new JustExecutor {
      override def execute(step: ExecutableOp): Seq[OpResult] = {
        executor.execute(extendedContext, step)
      }
    }
  }

}


