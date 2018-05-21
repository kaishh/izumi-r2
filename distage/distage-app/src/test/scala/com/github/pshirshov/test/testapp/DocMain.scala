package com.github.pshirshov.test.testapp

import com.github.pshirshov.izumi.distage.Injectors
import com.github.pshirshov.izumi.distage.model.definition.ModuleDef

class Main {
  def helloWorld(): Unit =
    println("Hello World!")
}

object AppModules extends ModuleDef {
  make[Main]
}

object Main extends App {
  val injector = Injectors.bootstrap()
  val plan = injector.plan(AppModules)
  val app = injector.produce(plan)

  app.get[Main].helloWorld()
}
