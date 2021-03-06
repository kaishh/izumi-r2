package com.github.pshirshov.izumi.sbt

import java.nio.file.Path
import java.security.MessageDigest

import com.github.pshirshov.izumi.fundamentals.platform.files.IzFiles
import com.github.pshirshov.izumi.fundamentals.platform.time.IzTime
import com.github.pshirshov.izumi.idealingua.il.loader.LocalModelLoader
import com.github.pshirshov.izumi.idealingua.translator.TypespaceCompiler.UntypedCompilerOptions
import com.github.pshirshov.izumi.idealingua.translator.tocsharp.CSharpTranslator
import com.github.pshirshov.izumi.idealingua.translator.tocsharp.extensions.CSharpTranslatorExtension
import com.github.pshirshov.izumi.idealingua.translator.togolang.GoLangTranslator
import com.github.pshirshov.izumi.idealingua.translator.togolang.extensions.GoLangTranslatorExtension
import com.github.pshirshov.izumi.idealingua.translator.toscala.extensions.ScalaTranslatorExtension
import com.github.pshirshov.izumi.idealingua.translator.toscala.{CirceDerivationTranslatorExtension, ScalaTranslator}
import com.github.pshirshov.izumi.idealingua.translator.totypescript.TypeScriptTranslator
import com.github.pshirshov.izumi.idealingua.translator.totypescript.extensions.TypeScriptTranslatorExtension
import com.github.pshirshov.izumi.idealingua.translator.{IDLCompiler, IDLLanguage}
import sbt.Keys.{sourceGenerators, watchSources, _}
import sbt._
import sbt.internal.util.ConsoleLogger
import sbt.plugins._
import scalacache.MD5

object IdealinguaPlugin extends AutoPlugin {

  final case class Scope(project: ProjectRef, source: Path, buildTarget: Path, target: Path)

  sealed trait Mode

  object Mode {

    case object CompiledArtifact extends Mode

    case object SourceArtifact extends Mode

  }

  final case class Invokation(options: UntypedCompilerOptions, mode: Mode, subclassifier: Option[String] = None)

  object Keys {
    val compilationTargets = settingKey[Seq[Invokation]]("IDL targets")
    val idlDefaultExtensionsScala = settingKey[Seq[ScalaTranslatorExtension]]("Default list of translator extensions for scala")
    val idlDefaultExtensionsTypescript = settingKey[Seq[TypeScriptTranslatorExtension]]("Default list of translator extensions for typescript")
    val idlDefaultExtensionsGolang = settingKey[Seq[GoLangTranslatorExtension]]("Default list of translator extensions for golang")
    val idlDefaultExtensionsCSharp = settingKey[Seq[CSharpTranslatorExtension]]("Default list of translator extensions for csharp")
  }

  import Keys._

  private val logger: ConsoleLogger = ConsoleLogger()

  override def requires = JvmPlugin

  implicit class ArtifactExt(a: Artifact) {
    def format: String = s"${a.name}${a.classifier.map(s => s"_$s").getOrElse("")}.${a.extension}"
  }

  implicit class FileExt(a: File) {
    def format: String = {
      val tpe = a match {
        case f if f.isDirectory =>
          "d"
        case f if f.isFile =>
          s"f:${f.length()}b"
        case f if !f.exists() =>
          ""
        case _ =>
          "?"
      }

      val existence = if (a.exists()) {
        "+"
      } else {
        "-"
      }

      s"[$existence$tpe]@${a.getCanonicalPath}"
    }
  }
  implicit class PathExt(a: Path) {
    def format: String = {
      a.toFile.format
    }
  }

  override lazy val projectSettings = Seq(
    idlDefaultExtensionsScala := ScalaTranslator.defaultExtensions ++ Seq(
      CirceDerivationTranslatorExtension
    )

    , idlDefaultExtensionsTypescript := TypeScriptTranslator.defaultExtensions
    , idlDefaultExtensionsGolang := GoLangTranslator.defaultExtensions
    , idlDefaultExtensionsCSharp := CSharpTranslator.defaultExtensions

    , compilationTargets := Seq(
      Invokation(UntypedCompilerOptions(IDLLanguage.Scala, idlDefaultExtensionsScala.value), Mode.CompiledArtifact)
      , Invokation(UntypedCompilerOptions(IDLLanguage.Scala, idlDefaultExtensionsScala.value), Mode.SourceArtifact)

      , Invokation(UntypedCompilerOptions(IDLLanguage.Typescript, idlDefaultExtensionsTypescript.value), Mode.SourceArtifact)

      , Invokation(UntypedCompilerOptions(IDLLanguage.Go, idlDefaultExtensionsGolang.value), Mode.SourceArtifact)

      , Invokation(UntypedCompilerOptions(IDLLanguage.CSharp, idlDefaultExtensionsCSharp.value), Mode.SourceArtifact)
    )

    , watchSources += Watched.WatchSource(baseDirectory.value / "src/main/izumi")

    , artifacts ++= {
      val ctargets = compilationTargets.value
      val pname = name.value
      artifactTargets(ctargets, pname).map(_._1)
    }

    , packagedArtifacts := {
      val ctargets = compilationTargets.value
      val pname = name.value
      val src = sourceDirectory.value.toPath
      val versionValue = version.value
      val scalaVersionValue = scalaVersion.value

      val artifacts = artifactTargets(ctargets, pname)

      val artifactFiles = artifacts.flatMap {
        case (a, t) =>
          val targetDir = target.value / "idealingua" / s"${a.name}-${a.classifier.get}-$versionValue-$scalaVersionValue"

          val scope = Scope(thisProjectRef.value, src.resolve("main/izumi"), target.value.toPath, targetDir.toPath)

          val zipFile = targetDir / s"${a.name}-${a.classifier.get}-$versionValue.zip.source"

          val result = generateCode(scope, t, (dependencyClasspath in Compile).value)

          result match {
            case Some(r) =>
              logger.info(s"${a.format}: Have new compilation result for artifact, copying ${r.zippedOutput.format} into ${zipFile.format}")
              IO.copyDirectory(r.zippedOutput.toFile, zipFile)
              logger.info(s"${a.format}: populated target ${zipFile.format}")
              Seq(a -> zipFile)

            case None =>
              if (zipFile.exists()) {
                logger.info(s"${a.format}: Compiler didn't return a result for artifact, reusing existing target ${zipFile.format}")
                Seq(a -> zipFile)
              } else {
                logger.info(s"${a.format}: Compiler didn't return a result for artifact, target is missing, What the fuck? Okay, let's return nothing :/ Missing target: ${zipFile.format}")
                Seq.empty
              }
          }

      }.toMap

      packagedArtifacts.value ++ artifactFiles
    }

    , sourceGenerators in Compile += Def.task {
      val src = sourceDirectory.value.toPath
      val srcManaged = (sourceManaged in Compile).value.toPath
      //val resManaged = (resourceManaged in Compile).value.toPath

      val izumiSrcDir = src.resolve("main/izumi")


      val scope = Scope(thisProjectRef.value, izumiSrcDir, target.value.toPath, srcManaged)

      val (scalacInputTargets, nonScalacInputTargets) = compilationTargets
        .value
        .filter(_.mode == Mode.CompiledArtifact)
        .partition(i => i.options.language == IDLLanguage.Scala)

      if (nonScalacInputTargets.nonEmpty) {
        import com.github.pshirshov.izumi.fundamentals.platform.strings.IzString._
        logger.warn(s"${name.value}: We don't know how to compile native artifacts for ${nonScalacInputTargets.niceList()}")
      }

      val depClasspath = (dependencyClasspath in Compile).value
      val scala_result = scalacInputTargets
        .map {
          invokation =>
            (invokation, scope) -> generateCode(scope, invokation, depClasspath)
        }

      val files = scala_result.flatMap {
        case (_, Some(result)) =>
          result.compilationProducts.flatMap(_._2.paths)
        case ((_, s), _) if s.target.toFile.exists() =>
          val existing = IzFiles.walk(scope.target.toFile).filterNot(_.toFile.isDirectory)
          logger.info(s"${name.value}: Compiler didn't return a result, target ${s.target.format} exists. Reusing ${existing.size} files there...")
          existing
        case ((_, s), _) if !s.target.toFile.exists() =>
          logger.info(s"${name.value}: Compiler didn't return a result, target ${s.target.format} does not exist. What the fuck? Okay, let's return nothing :/")
          Seq.empty
      }

      files.map(_.toFile)
    }.taskValue

    , resourceGenerators in Compile += Def.task {
      val idlbase = sourceDirectory.value / "main" / "izumi"
      logger.debug(s"""${name.value}: Generating resources in ${idlbase.format} ...""")
      val allModels = (idlbase ** "*.domain").get ++ (idlbase ** "*.model").get
      val mapped = allModels.map {
        f =>
          val relative = idlbase.toPath.relativize(f.toPath)
          val targetPath = ((resourceManaged in Compile).value / "idealingua").toPath.resolve(relative).toFile
          f -> targetPath
      }
      IO.copy(mapped, CopyOptions().withOverwrite(true))
      mapped.map(_._2)
    }.taskValue
  )

  private def artifactTargets(ctargets: Seq[Invokation], pname: String): Seq[(Artifact, Invokation)] = {
    ctargets
      .filter(i => i.mode == Mode.SourceArtifact)
      .map {
        target =>
          val classifier = target.subclassifier match {
            case Some(sc) =>
              s"${target.options.language.toString}_$sc"
            case None =>
              target.options.language.toString
          }

          Artifact(pname, "src", "zip", classifier) -> target
      }
  }

  private def generateCode(scope: Scope, invokation: Invokation, classpath: Classpath): Option[IDLCompiler.Result] = {
    val cp = classpath.map(_.data)
    val target = scope.target
    val projectId = scope.project.project
    logger.debug(s"""$projectId: Loading models from $scope...""")

    val digest = MD5.messageDigest.clone().asInstanceOf[MessageDigest]
    digest.reset()
    val hash = digest.digest(scope.toString.getBytes).map("%02X".format(_)).mkString

    val tsCache = scope.buildTarget.resolve(s"izumi-$hash.timestamp")

    val srcLastModified = IzFiles.getLastModified(scope.source.toFile)
    val targetLastModified = IzFiles.getLastModified(tsCache.toFile)

    val isNew = srcLastModified.flatMap(src => targetLastModified.map(tgt => (src, tgt)))

    if (isNew.exists({ case (src, tgt) => src.isAfter(tgt) }) || isNew.isEmpty) {
      // TODO: maybe it's unsafe to destroy the whole directory?..
      val toCompile = new LocalModelLoader(scope.source, cp).load()
      if (toCompile.nonEmpty) {
        logger.info(s"""$projectId: Going to compile the following models: ${toCompile.map(_.domain.id).mkString(",")} into ${invokation.options.language}""")
      } else {
        logger.info(s"""$projectId: Nothing to compile at ${scope.source}""")
      }

      val result = new IDLCompiler(toCompile)
        .compile(target, invokation.options)

      result.compilationProducts.foreach {
        case (id, s) =>
          logger.debug(s"$projectId: Model $id produced ${s.paths.size} source files...")
      }

      IO.write(tsCache.toFile, IzTime.isoNow)
      Some(result)
    } else {
      logger.info(s"""$projectId: Output timestamp is okay, not going to recompile ${scope.source.format} : ts=$tsCache""")
      None
    }
  }

  object autoImport {
    lazy val SbtIdealingua: IdealinguaPlugin.type = IdealinguaPlugin
    lazy val IdealinguaPluginKeys: Keys.type = IdealinguaPlugin.Keys
  }

}

