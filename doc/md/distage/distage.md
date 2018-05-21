DIStage by example
==================

This tutorial will teach you all you need to know to build applications quickly and efficiently by using the goodies provided by DIStage! DIStage is a library that takes care of _all_ the boring parts of wiring your app together, letting you focus on just the essentials. Due to being *staged*, it's incredibly flexible and extensible, yet keeps a simple API.

We'll hit the ground with basic examples and by the end of this tutorial we'll make a full-fledged web application, complete with tests and configurations! So hang on tight, and let's start with –

Defining simple modules
=======================

In this tutorial, we'll build a simple questionnaire app, our app will play an inquisitive judge, asking the user a set of facts about himself, then pointing out the disrepancies in case it finds contradictions!

Our app has to start somewhere, so let's start with Hello World!

```scala
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
```

That's a lot to chew in one go, so let's go line by line.

```scala
object AppModules extends ModuleDef {
  make[Main]
}
```

Here we define a *Module* for our application. A *module* is a set of classes we want to have in our application. 

Using Multiple Bindings
=======================

...

Plugins and Configurations
==========================

...

Testing our App and using GC
============================

...

Import Injections
=================
...


SPI, Hooks and Planning – writing our first DIStage extension
=======================

...

Detailed Feature Overview
=========================

PPER 
----

WIP. Testing and Static Configurations
--------------------------------------
