package com.github.pshirshov.izumi.sbt.plugins.optional

import com.github.pshirshov.izumi.sbt.plugins.IzumiPropertiesPlugin
import com.typesafe.sbt.pgp.PgpKeys._
import laughedelic.sbt.PublishMore
import sbt.Keys.{credentials, _}
import sbt.internal.util.ConsoleLogger
import sbt.io.syntax
import sbt.io.syntax.File
import sbt.librarymanagement.PublishConfiguration
import sbt.sbtpgp.Compat.publishSignedConfigurationTask
import sbt.{AutoPlugin, Credentials, MavenRepository, _}

object IzumiPublishingPlugin extends AutoPlugin {

  override def requires = super.requires && PublishMore

  case class MavenTarget(id: String, credentials: Credentials, repo: MavenRepository)

  object Keys {
    lazy val sonatypeTarget = settingKey[MavenRepository]("Sonatype repository based on isSnapshot value")
    lazy val publishTargets = settingKey[Seq[MavenTarget]]("Publishing target")
  }

  import Keys._

  protected val logger: ConsoleLogger = ConsoleLogger()

  override lazy val globalSettings = Seq(
    pomIncludeRepository := (_ => false)
    , publishTargets := Seq.empty
  )

  import laughedelic.sbt.PublishMore.autoImport._

  override lazy val projectSettings = Seq(
    publishConfiguration := withOverwrite(publishConfiguration.value, isSnapshot.value)
    , publishSignedConfiguration := withOverwrite(publishSignedConfigurationTask.value, isSnapshot.value)
    , publishLocalConfiguration ~= withOverwriteEnabled
    , publishLocalSignedConfiguration ~= withOverwriteEnabled
    , sonatypeTarget := {
      if (isSnapshot.value)
        Opts.resolver.sonatypeSnapshots
      else
        Opts.resolver.sonatypeStaging
    }
    , credentials ++= publishTargets.value.map(_.credentials)
    , publishResolvers ++= publishTargets.value.map(_.repo)
  )

  private def withOverwriteEnabled(config: PublishConfiguration) = {
    config.withOverwrite(true)
  }

  private def withOverwrite(config: PublishConfiguration, isSnapshot: Boolean) = {
    import IzumiPropertiesPlugin.autoImport._
    val doOverwrite = sys.props.getBoolean("build.publish.overwrite", config.overwrite)
    // in case overwrite is already enabled (snapshots, smth else) we should not disable it
    config.withOverwrite(doOverwrite || config.overwrite || isSnapshot)
  }


  object autoImport {
    object PublishTarget {
      def typical(realmId: String, url: String): Seq[MavenTarget] = {
        filter(
          env("PUBLISH"),
          file(realmId, url, syntax.file(s".secrets/credentials.$realmId.properties")),
          file(realmId, url, Path.userHome / s".sbt/credentials.$realmId.properties"),
        )
      }

      def filter(targets: Option[MavenTarget]*): Seq[MavenTarget] = {
        targets.flatMap(_.toSeq)
      }

      def env(prefix: String): Option[MavenTarget] = {
        val props = List(
          Option(System.getProperty(s"${prefix}_USER"))
          , Option(System.getProperty(s"${prefix}_PASSWORD"))
          , Option(System.getProperty(s"${prefix}_REALM_NAME"))
          , Option(System.getProperty(s"${prefix}_REALM"))
          , Option(System.getProperty(s"${prefix}_URL"))
        )

        props match {
          case Some(user) :: Some(password) :: Some(realmname) :: Some(realmId) :: Some(url) :: Nil =>
            import sbt.librarymanagement.syntax._
            Some(MavenTarget(realmId, Credentials(realmname, realmId, user, password), realmId at url))

          case _ =>
            None
        }
      }

      def file(realmId: String, url: String, path: File): Option[MavenTarget] = {
        if (path.exists()) {
          import sbt.librarymanagement.syntax._
          Some(MavenTarget(realmId, Credentials(path), realmId at url))
        } else {
          None
        }
      }
    }
  }

}
