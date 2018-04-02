package com.github.pshirshov.izumi.idealingua.model.il

import com.github.pshirshov.izumi.idealingua.model.common.TypeId
import com.github.pshirshov.izumi.idealingua.model.common.TypeId.{DTOId, InterfaceId, ServiceId}
import com.github.pshirshov.izumi.idealingua.model.exceptions.IDLException
import com.github.pshirshov.izumi.idealingua.model.il.ast.typed._
import com.github.pshirshov.izumi.idealingua.model.il.ast.typed.Service.DefMethod.{DeprecatedRPCMethod, RPCMethod}
import com.github.pshirshov.izumi.idealingua.model.il.ast.typed.TypeDef._

class TypeCollection(domain: DomainDefinition) {
  val services: Map[ServiceId, Service] = domain.services.groupBy(_.id).mapValues(_.head)

  val serviceEphemerals: Seq[DTO] = (for {
    service <- services.values
    method <- service.methods
  } yield {
    method match {
      case m: DeprecatedRPCMethod =>
        val inIid = DTOId(service.id, s"In${m.name.capitalize}")
        val outIid = DTOId(service.id, s"Out${m.name.capitalize}")

        Seq(
          DTO(inIid, Structure.interfaces(m.signature.input))
          , DTO(outIid, Structure.interfaces(m.signature.output))
        )
      case m: RPCMethod =>
        Seq() // TODO
    }
  }).flatten.toSeq

  val interfaceEphemerals: Seq[DTO] = {
    domain.types
      .collect {
        case i: Interface =>
          val iid = DTOId(i.id, toDtoName(i.id))
          DTO(iid, Structure.interfaces(List(i.id)))
      }
  }

  val all: Seq[TypeDef] = {
    val definitions = Seq(
      domain.types
      , serviceEphemerals
      , interfaceEphemerals
    ).flatten

    verified(definitions)
  }

  val structures: Seq[WithStructure] = all.collect { case t: WithStructure => t }

  def index: Map[TypeId, TypeDef] = {
    all.map(t => (t.id, t)).toMap
  }

  def toDtoName(id: TypeId): String = {
    id match {
      case _: InterfaceId =>
        s"${id.name}Impl"
      case _ =>
        s"${id.name}"

    }
  }

  protected def verified(types: Seq[TypeDef]): Seq[TypeDef] = {
    val conflictingTypes = types.groupBy(_.id).filter(_._2.lengthCompare(1) > 0)
    if (conflictingTypes.nonEmpty) {
      throw new IDLException(s"Conflicting types in: $conflictingTypes")
    }

    types
  }
}