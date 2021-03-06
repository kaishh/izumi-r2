package com.github.pshirshov.izumi.distage.staticinjector

import com.github.pshirshov.izumi.distage.fixtures.InnerClassCases.{InnerClassCase1, InnerClassCase2}
import com.github.pshirshov.izumi.distage.model.definition.StaticModuleDef
import org.scalatest.WordSpec

import scala.util.Try

class StaticInnerClassesTest extends WordSpec with MkInjector {

  "macros can handle class local path-dependent injections" in {
    val definition = new StaticModuleDef {
      stat[TopLevelPathDepTest.TestClass]
      stat[TopLevelPathDepTest.TestDependency]
    }

    val injector = mkInjector()
    val plan = injector.plan(definition)

    val context = injector.produce(plan)

    assert(context.get[TopLevelPathDepTest.TestClass].a != null)
  }

  "macros can handle inner path-dependent injections" in {
    new InnerPathDepTest().testCase
  }

  "progression test: macros can't handle function local path-dependent injections" in {
    val fail = Try {
      import InnerClassCase1._

      val testModule = new TestModule

      val definition = new StaticModuleDef {
        stat[testModule.TestClass]
        stat[testModule.TestDependency]
      }

      val injector = mkInjector()
      val plan = injector.plan(definition)

      val context = injector.produce(plan)

      assert(context.get[testModule.TestClass].a != null)
    }.isFailure
    assert(fail)
  }

  "macros can instantiate inner classes from stable objects where the classes are inherited from a trait" in {
    import InnerClassCase2._
    import StableObjectInheritingTrait._

    val definition = new StaticModuleDef {
      stat[TestDependency]
    }

    val context = mkInjector().produce(definition)

    assert(context.get[TestDependency] == TestDependency())
  }

  "macros can instantiate inner classes from stable objects where the classes are inherited from a trait and depend on types defined inside trait" in {
    import InnerClassCase2._
    import StableObjectInheritingTrait._

    val definition = new StaticModuleDef {
      stat[TestDependency]
      stat[TestClass]
    }

    val context = mkInjector().produce(definition)

    assert(context.get[TestClass] == TestClass(TestDependency()))
  }

  "progression test: compile-time ReflectionProvider can't handle factories inside stable objects that contain inner classes from inherited traits that depend on types defined inside trait" in {
    assertTypeError("""
      import InnerClassCase2._
      import StableObjectInheritingTrait._

      val definition = new StaticModuleDef {
        stat[TestFactory]
      }

      val context = mkInjector().produce(definition)

      assert(context.get[TestFactory].mk(TestDependency()) == TestClass(TestDependency()))
      """)
  }

  class InnerPathDepTest extends InnerClassCase1.TestModule {
    private val definition = new StaticModuleDef {
      stat[TestClass]
      stat[TestDependency]
    }

    def testCase = {
      val injector = mkInjector()
      val plan = injector.plan(definition)

      val context = injector.produce(plan)

      assert(context.get[TestClass].a != null)
    }
  }

  object TopLevelPathDepTest extends InnerClassCase1.TestModule
}
