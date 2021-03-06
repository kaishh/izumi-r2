package com.github.pshirshov.izumi.idealingua.translator.toscala.types

import com.github.pshirshov.izumi.idealingua.model.il.ast.typed.Interfaces
import com.github.pshirshov.izumi.idealingua.translator.toscala.STContext

import scala.meta._


class CompositeStructure(ctx: STContext, val fields: ScalaStruct) {
  val t: ScalaType = ctx.conv.toScala(fields.id)

  import ScalaField._

  val composite: Interfaces = fields.fields.superclasses.interfaces

  val constructors: List[Defn.Def] = {
    val struct = fields.fields

    ctx.typespace.structure.constructors(struct).map {
      cdef =>
        val constructorSignature = ctx.tools.makeParams(cdef)
        val fullConstructorCode = ctx.tools.makeConstructor(cdef)

        val instantiator = q" new ${t.typeFull}(..$fullConstructorCode) "

        q"""def apply(..${constructorSignature.params}): ${t.typeFull} = {
           ..${constructorSignature.assertion}
           $instantiator
         }"""
    }
  }



  val decls: List[Term.Param] = fields.all.toParams

  val names: List[Term.Name] = fields.all.toNames
}
