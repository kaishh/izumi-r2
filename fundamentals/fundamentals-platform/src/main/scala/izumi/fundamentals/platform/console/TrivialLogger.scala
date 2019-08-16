package izumi.fundamentals.platform.console

import izumi.fundamentals.platform.console.TrivialLogger.{Config, Level}
import izumi.fundamentals.platform.strings.IzString._

import scala.reflect.ClassTag
import izumi.fundamentals.platform.exceptions.IzThrowable._

trait TrivialLogger {
  def log(s: => String): Unit

  def log(s: => String, e: => Throwable): Unit

  def err(s: => String): Unit

  def err(s: => String, e: => Throwable): Unit

  def sub(): TrivialLogger = sub(1)

  def sub(delta: Int): TrivialLogger
}

trait AbstractStringTrivialSink {
  def flush(value: => String): Unit

  def flushError(value: => String): Unit
}

object AbstractStringTrivialSink {

  object Console extends AbstractStringTrivialSink {
    override def flush(value: => String): Unit = System.out.println(value)

    override def flushError(value: => String): Unit = System.err.println(value)
  }

}

class TrivialLoggerImpl(config: Config, id: String, loggerLevel: Int) extends TrivialLogger {
  override def log(s: => String): Unit = {
    flush(Level.Info, format(s))
  }

  override def log(s: => String, e: => Throwable): Unit = {
    flush(Level.Info, formatError(s, e))
  }

  override def err(s: => String): Unit = {
    flush(Level.Error, format(s))
  }

  override def err(s: => String, e: => Throwable): Unit = {
    flush(Level.Error, formatError(s, e))
  }

  override def sub(delta: Int): TrivialLogger = new TrivialLoggerImpl(config, id, loggerLevel + delta)


  @inline private[this] def format(s: => String): String = {
    s"$s"
  }

  @inline private[this] def formatError(s: => String, e: => Throwable) = {
    s"$s\n${e.stackTrace}"
  }


  private val logMessages: Boolean = checkLog(false)

  private val logErrors: Boolean = checkLog(true)

  @inline private[this] def flush(level: Level, s: => String): Unit = {
    level match {
      case Level.Info =>
        if (logMessages) {
          config.sink.flush(s.shift(loggerLevel * 2))
        }
      case Level.Error =>
        if (logErrors) {
          config.sink.flushError(s.shift(loggerLevel * 2))
        }
    }
  }

  private def checkLog(default: Boolean) = {
    val parts = id.split('.')
    val candidates = parts.tail.scanLeft(parts.head) {
      case (acc, chunk) =>
        acc + "." + chunk
    }
    config.forceLog || candidates.exists(c => System.getProperty(c).asBoolean().getOrElse(default))
  }
}

object TrivialLogger {

  sealed trait Level

  object Level {

    case object Info extends Level

    case object Error extends Level

  }

  case class Config(
                     sink: AbstractStringTrivialSink = AbstractStringTrivialSink.Console,
                     forceLog: Boolean = false
                   )

  def make[T: ClassTag](id: String, config: Config = Config()): TrivialLogger = {
    new TrivialLoggerImpl(config, id, 0)
  }
}
