package com.github.pshirshov.izumi.models

sealed trait FileRotation

object FileRotation {
  case object DisabledRotation extends FileRotation
  case class FileLimiterRotation(limit: Int) extends FileRotation
}

