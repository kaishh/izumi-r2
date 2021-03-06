package com.github.pshirshov.izumi.distage.model.plan

import com.github.pshirshov.izumi.distage.model.references.WithDIKey
import com.github.pshirshov.izumi.distage.model.reflection.universe._

trait WithDIWiring {
  this: DIUniverseBase
    with WithDISafeType
    with WithDICallable
    with WithDIKey
    with WithDIAssociation
    with WithDIDependencyContext
    with WithDISymbolInfo
  =>

  sealed trait Wiring {
    def associations: Seq[Association]
    def requiredKeys: Set[DIKey] = associations.map(_.wireWith).toSet
  }

  object Wiring {

    sealed trait UnaryWiring extends Wiring {
      def instanceType: SafeType

      def associations: Seq[Association]
    }

    object UnaryWiring {

      sealed trait ProductWiring extends UnaryWiring

      case class Constructor(instanceType: SafeType, associations: Seq[Association.Parameter]) extends ProductWiring

      case class AbstractSymbol(instanceType: SafeType, associations: Seq[Association.AbstractMethod]) extends ProductWiring

      case class Function(provider: Provider, associations: Seq[Association.Parameter]) extends UnaryWiring {
        override def instanceType: SafeType = provider.ret
      }

      case class Instance(instanceType: SafeType, instance: Any) extends UnaryWiring {
        override def associations: Seq[Association] = Seq.empty
      }

      case class Reference(instanceType: SafeType, key: DIKey, weak: Boolean) extends UnaryWiring {
        override def associations: Seq[Association] = Seq.empty

        override def requiredKeys: Set[DIKey] = super.requiredKeys ++ Set(key)
      }
    }

    case class FactoryMethod(factoryType: SafeType, factoryMethods: Seq[FactoryMethod.WithContext], fieldDependencies: Seq[Association.AbstractMethod]) extends Wiring {
      /**
        * this method returns product dependencies which aren't present in any signature of factory methods.
        * Though it's a kind of a heuristic that can be spoiled at the time of plan initialization
        *
        * Complete check can only be performed at runtime.
        */
      override def associations: Seq[Association] = {
        val factoryMethodsArgs = factoryMethods.flatMap(_.methodArguments).toSet

        val factorySuppliedProductDeps = factoryMethods.flatMap(_.wireWith.associations).filterNot(v => factoryMethodsArgs.contains(v.wireWith))

        factorySuppliedProductDeps ++ fieldDependencies
      }
    }

    object FactoryMethod {
      case class WithContext(factoryMethod: SymbolInfo.Runtime, wireWith: UnaryWiring.ProductWiring, methodArguments: Seq[DIKey]) {
        def associationsFromContext: Seq[Association] = wireWith.associations.filterNot(methodArguments contains _.wireWith)
      }
    }

    case class FactoryFunction(
                                provider: Provider
                                , factoryIndex: Map[Int, FactoryFunction.WithContext]
                                , providerArguments: Seq[Association.Parameter]
                              ) extends Wiring {
      val factoryMethods: Seq[FactoryFunction.WithContext] = factoryIndex.values.toSeq

      override def associations: Seq[Association] = {
        val factoryMethodsArgs = factoryMethods.flatMap(_.methodArguments).toSet

        val factorySuppliedProductDeps = factoryMethods.flatMap(_.wireWith.associations).filterNot(v => factoryMethodsArgs.contains(v.wireWith))

        factorySuppliedProductDeps ++ providerArguments
      }
    }

    object FactoryFunction {
      // FIXME: wireWith should be Wiring.UnaryWiring.Function - generate providers for concrete classes in distage-static, instead of using reflection
      case class WithContext(factoryMethod: SymbolInfo, wireWith: Wiring.UnaryWiring, methodArguments: Seq[DIKey]) {
        def associationsFromContext: Seq[Association] = wireWith.associations.filterNot(methodArguments contains _.wireWith)
      }
    }

    implicit class WiringReplaceKeys(wiring: Wiring) {
      def replaceKeys(f: Association => DIKey): Wiring =
        wiring match {
          case w: UnaryWiring.Constructor => w.replaceKeys(f) // duplication only because of 'the outer reference in this type test cannot be checked at runtime warning'
          case w: UnaryWiring.AbstractSymbol => w.replaceKeys(f)
          case w: UnaryWiring.Function => w.replaceKeys(f)
          case w: UnaryWiring.Instance => w.replaceKeys(f)
          case w: UnaryWiring.Reference => w.replaceKeys(f)
          case w: FactoryMethod => w.replaceKeys(f)
          case w: FactoryFunction => w.replaceKeys(f)
        }
    }

    implicit class UnaryWiringReplaceKeys(wiring: UnaryWiring) {
      def replaceKeys(f: Association => DIKey): UnaryWiring =
        wiring match {
          case w: UnaryWiring.Constructor => w.replaceKeys(f)
          case w: UnaryWiring.AbstractSymbol => w.replaceKeys(f)
          case w: UnaryWiring.Function => w.replaceKeys(f)
          case w: UnaryWiring.Instance => w
          case w: UnaryWiring.Reference => w
        }
    }

    implicit class ProductWiringReplaceKeys(wiring: UnaryWiring.ProductWiring) {
      def replaceKeys(f: Association => DIKey): UnaryWiring.ProductWiring =
        wiring match {
          case w: UnaryWiring.Constructor => w.replaceKeys(f)
          case w: UnaryWiring.AbstractSymbol => w.replaceKeys(f)
        }
    }

    implicit class ConstructorReplaceKeys(constructor: UnaryWiring.Constructor) {
      def replaceKeys(f: Association.Parameter => DIKey): UnaryWiring.Constructor =
        constructor.copy(associations = constructor.associations.map(a => a.withWireWith(f(a))))
    }

    implicit class AbstractSymbolReplaceKeys(abstractSymbol: UnaryWiring.AbstractSymbol) {
      def replaceKeys(f: Association.AbstractMethod => DIKey): UnaryWiring.AbstractSymbol =
        abstractSymbol.copy(associations = abstractSymbol.associations.map(a => a.withWireWith(f(a))))
    }

    implicit class FunctionReplaceKeys(function: UnaryWiring.Function) {
      def replaceKeys(f: Association.Parameter => DIKey): UnaryWiring.Function =
        function.copy(associations = function.associations.map(a => a.withWireWith(f(a))))
    }

    implicit class FactoryMethodReplaceKeys(factoryMethod: FactoryMethod) {
      def replaceKeys(f: Association => DIKey): FactoryMethod =
        factoryMethod.copy(
          fieldDependencies = factoryMethod.fieldDependencies.map(a => a.withWireWith(f(a)))
          , factoryMethods = factoryMethod.factoryMethods.map(m => m.copy(wireWith = m.wireWith.replaceKeys(f)))
        )
    }

    implicit class FactoryFunctionReplaceKeys(factoryMethod: FactoryFunction) {
      def replaceKeys(f: Association => DIKey): FactoryFunction =
        factoryMethod.copy(
          providerArguments = factoryMethod.providerArguments.map(a => a.withWireWith(f(a)))
          , factoryIndex = factoryMethod.factoryIndex.mapValues(m => m.copy(wireWith = m.wireWith.replaceKeys(f))).toMap // 2.13 compat
        )
    }

  }
}
