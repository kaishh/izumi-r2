package com.github.pshirshov.izumi.idealingua.translator.togolang

import com.github.pshirshov.izumi.fundamentals.platform.strings.IzString._
import com.github.pshirshov.izumi.idealingua.model.common.TypeId._
import com.github.pshirshov.izumi.idealingua.model.common._
import com.github.pshirshov.izumi.idealingua.model.il.ast.typed.Service.DefMethod
import com.github.pshirshov.izumi.idealingua.model.il.ast.typed.Service.DefMethod.Output.{Algebraic, Singular, Struct}
import com.github.pshirshov.izumi.idealingua.model.il.ast.typed.TypeDef._
import com.github.pshirshov.izumi.idealingua.model.il.ast.typed._
import com.github.pshirshov.izumi.idealingua.model.typespace.Typespace
import com.github.pshirshov.izumi.idealingua.translator.togolang.extensions.GoLangTranslatorExtension
import com.github.pshirshov.izumi.idealingua.translator.togolang.products.RenderableCogenProduct
import com.github.pshirshov.izumi.idealingua.model.output.Module
import com.github.pshirshov.izumi.idealingua.translator.togolang.products.CogenProduct._
import com.github.pshirshov.izumi.idealingua.translator.togolang.types._

object GoLangTranslator {
  final val defaultExtensions = Seq(
  )
}

class GoLangTranslator(ts: Typespace, extensions: Seq[GoLangTranslatorExtension]) {
  protected val ctx: GLTContext = new GLTContext(ts, extensions)

  import ctx._

  def translate(): Seq[Module] = {
    val modules = Seq(
      typespace.domain.types.flatMap(translateDef)
      , typespace.domain.services.flatMap(translateService)
    ).flatten

    modules
  }


  protected def translateService(definition: Service): Seq[Module] = {
    ctx.modules.toSource(definition.id.domain, ctx.modules.toModuleId(definition.id),
      ctx.modules.toTestModuleId(definition.id), renderService(definition))
  }

  protected def translateDef(definition: TypeDef): Seq[Module] = {
    val defns = definition match {
      case i: Alias =>
        renderAlias(i)
      case i: Enumeration =>
        renderEnumeration(i)
      case i: Identifier =>
        renderIdentifier(i)
      case i: Interface =>
        renderInterface(i)
      case d: DTO =>
        renderDto(d)
      case d: Adt =>
        renderAdt(d)
      case _ =>
        RenderableCogenProduct.empty
    }

    ctx.modules.toSource(definition.id.path.domain, ctx.modules.toModuleId(definition),
      ctx.modules.toTestModuleId(definition), defns)
  }

  protected def renderRegistrationCtor(interface: InterfaceId, structName: String, imports: GoLangImports): String = {
    s"""func ctor${structName}For${interface.name}() ${imports.withImport(interface)}${interface.name} {
       |    return &$structName{}
       |}
     """.stripMargin
  }

  protected def renderRegistrations(interfaces: Interfaces, structName: String, imports: GoLangImports): String = {
    if (interfaces.isEmpty) {
      return ""
    }

    s"""${interfaces.map(sc => renderRegistrationCtor(sc, structName, imports)).mkString("\n")}
       |
       |func init() {
       |    // Here we register current DTO in other interfaces
       |${interfaces.map(sc => s"Register${sc.name}(rtti${structName}FullClassName, ctor${structName}For${sc.name})").mkString("\n").shift(4)}
       |}
     """.stripMargin
  }

  protected def renderDto(i: DTO): RenderableCogenProduct = {
    val imports = GoLangImports(i, i.id.path.toPackage)

    val fields = typespace.structure.structure(i).all
    val distinctFields = fields.groupBy(_.field.name).map(_._2.head.field)

    val struct = GoLangStruct(
      i.id.name,
      i.id,
      i.struct.superclasses.interfaces,
      distinctFields.map(df => GoLangField(df.name, GoLangType(df.typeId, imports, ts), i.id.name, imports, ts)).toList,
      imports,
      ts
    )

    val dto =
      s"""${struct.render()}
         |${struct.renderSerialized()}
         |${struct.renderSlices()}
         |${renderRegistrations(i.struct.superclasses.interfaces, i.id.name, imports)}
       """.stripMargin

    // TODO here above Register methods don't use module, if a package is different - it will fail, needs a fix using the corrent import access

    val tests = ""

    CompositeProduct(dto, imports.renderImports(List("encoding/json", "fmt")), tests)

  }

  protected def renderAlias(i: Alias): RenderableCogenProduct = {
      val imports = GoLangImports(i, i.id.path.toPackage)
      val goType = GoLangType(i.target, imports, ts)

      AliasProduct(
        s"""// ${i.id.name} alias
           |type ${i.id.name} = ${goType.renderType(forAlias = true)}
         """.stripMargin,
        imports.renderImports()
      )
  }

  protected def renderAdtMember(structName: String, member: AdtMember, im: GoLangImports): String = {
    val serializationName =  member.name
    val typeName = GoLangType(member.typeId, im, ts).renderType()

    s"""func (a *$structName) Is$serializationName() bool {
       |    return a.valueType == "$serializationName"
       |}
       |
       |func (a *$structName) Get$serializationName() $typeName {
       |    if !a.Is$serializationName() {
       |        return nil
       |    }
       |
       |    v, ok := a.value.($typeName)
       |    if !ok {
       |        return nil
       |    }
       |
       |    return v
       |}
       |
       |func (a *$structName) Set$serializationName(v $typeName) {
       |    a.value = v
       |    a.valueType = "$serializationName"
       |}
       |
       |func New${structName}From${member.typeId.name}(v $typeName) *$structName {
       |    res := &$structName{}
       |    res.Set$serializationName(v)
       |    return res
       |}
     """.stripMargin
  }

  protected def renderAdtImpl(name: String, alternatives: List[AdtMember], imports: GoLangImports): String = {
      s"""type $name struct {
         |    value interface{}
         |    valueType string
         |}
         |
         |${alternatives.map(al => renderAdtMember(name, al, imports)).mkString("\n")}
         |
         |func (v *$name) MarshalJSON() ([]byte, error) {
         |    if v.value == nil {
         |        return nil, fmt.Errorf("trying to serialize a non-initialized Adt $name")
         |    }
         |
         |    serialized, err := json.Marshal(v.value)
         |    if err != nil {
         |        return nil, err
         |    }
         |
         |    return json.Marshal(&map[string]json.RawMessage {
         |      v.valueType: serialized,
         |    })
         |}
         |
         |func (v *$name) UnmarshalJSON(data []byte) error {
         |    raw := map[string]json.RawMessage{}
         |    if err := json.Unmarshal(data, &raw); err != nil {
         |        return err
         |    }
         |
         |    for className, content := range raw {
         |        v.valueType = className
         |        switch className {
         |${alternatives.map(al => "case \"" + al.name + "\": {\n" + GoLangType(al.typeId, imports, ts).renderUnmarshal("content", "v.value = ").shift(4) + "\n    return nil\n}").mkString("\n").shift(12)}
         |            default:
         |                return fmt.Errorf("$name encountered an unknown type %s during deserialization", className)
         |        }
         |    }
         |
         |    return fmt.Errorf("$name expects a root key to be present, empty object found")
         |}
       """.stripMargin
  }

  protected def renderAdt(i: Adt): RenderableCogenProduct = {
    val imports = GoLangImports(i, i.id.path.toPackage)
    val name = i.id.name

    AdtProduct(renderAdtImpl(name, i.alternatives, imports), imports.renderImports(Seq("fmt", "encoding/json")))
  }

  protected def renderEnumeration(i: Enumeration): RenderableCogenProduct = {
    val name = i.id.name
    val decl =
    s"""// $name Enumeration
       |type $name ${if (i.members.length <= 255) "uint8" else "uint16"}
       |
       |const (
       |${i.members.map(m => s"// $m enum value\n" + (if (m == i.members.head) s"$m $name = iota" else m)).mkString("\n").shift(4)}
       |)
       |
       |var map${name}ToString = map[$name]string{
       |${i.members.map(m => s"$m: " + "\"" + m + "\",").mkString("\n").shift(4)}
       |}
       |
       |var mapStringTo$name = map[string]$name{
       |${i.members.map(m => "\"" + m + "\": " + s"$m,").mkString("\n").shift(4)}
       |}
       |
       |// String converts an enum to a string
       |func (e $name) String() string {
       |    return map${name}ToString[e]
       |}
       |
       |// New$name creates a new enum from string
       |func New$name(e string) $name {
       |    return mapStringTo$name[e]
       |}
       |
       |// IsValid$name checks if the string value can be converted to an enum
       |func IsValid$name(e string) bool {
       |    _, ok := mapStringTo$name[e]
       |    return ok
       |}
       |
       |// MarshalJSON deserialization for the enumeration
       |func (e $name) MarshalJSON() ([]byte, error) {
       |    // Enums are encoded into a string
       |    buffer := bytes.NewBufferString(`"`)
       |    buffer.WriteString(e.String())
       |    buffer.WriteString(`"`)
       |    return buffer.Bytes(), nil
       |}
       |
       |// UnmarshalJSON deserialization for the enumeration
       |func (e *$name) UnmarshalJSON(b []byte) error {
       |    // Restore enum from a string
       |    var s string
       |    err := json.Unmarshal(b, &s)
       |    if err != nil {
       |        return err
       |    }
       |
       |    *e = New(s)
       |    return nil
       |}
     """.stripMargin

    val tests =
      s"""import (
         |    "testing"
         |    "encoding/json"
         |)
         |
         |func Test${name}Creation(t *testing.T) {
         |    if IsValid("${i.members.head}Invalid") {
         |        t.Errorf("type '%s' IsValid function should correctly identify invalid string enums", "$name")
         |    }
         |
         |    if !IsValid("${i.members.head}") {
         |        t.Errorf("type '%s' IsValid function should correctly identify valid string enums", "$name")
         |    }
         |
         |    v1 := New("${i.members.head}")
         |    if !IsValid(v.String()) {
         |        t.Errorf("type '%s' should be possible to create via New method with '%s' value", "$name", "${i.members.head}")
         |    }
         |
         |    v2 = ${i.members.head}
         |    if v1 != v2 {
         |        t.Errorf("type '%s' created from enum const and a corresponding string must return the same value. Got '%+v' and '%+v'", "$name", v1, v2)
         |    }
         |}
         |
         |func Test${name}StringSerialization(t *testing.T) {
         |    v1 := New("${i.members.head}")
         |    v2 := New(v1.String())
         |    if v1 != v2 {
         |        t.Errorf("type '%s' to string and new from that string must return the same enum value. Got '%+v' and '%+v'", "$name", v1, v2)
         |    }
         |}
         |
         |func Test${name}JSONSerialization(t *testing.T) {
         |    v1 := New("${i.members.head}")
         |    serialized, err := json.Marshal(v1)
         |    if err != nil {
         |        t.Fatalf("type '%s' should serialize into JSON using Marshal. %s", "$name", err.Error())
         |    }
         |    var v2 $name
         |    err = json.Unmarshal(serialized, &v2)
         |    if err != nil {
         |        t.Fatalf("Type '%s' should deserialize from JSON using Unmarshal. %s", "$name", err.Error())
         |    }
         |
         |    if v1 != v2 {
         |        t.Errorf("type '%s' serialization to JSON and from it afterwards must return the same enum value. Got '%+v' and '%+v'", "$name", v1, v2)
         |    }
         |}
       """.stripMargin

    EnumProduct(
      decl,
      GoLangImports(List.empty).renderImports(Seq("encoding/json", "bytes")),
      tests
    )
  }

  protected def renderIdentifier(i: Identifier): RenderableCogenProduct = {
    val imports = GoLangImports(i, i.id.path.toPackage)

    val fields = typespace.structure.structure(i)
    val sortedFields = fields.all.sortBy(_.field.name)

    val struct = GoLangStruct(
      i.id.name,
      i.id,
      List.empty,
      sortedFields.map(sf => GoLangField(sf.field.name, GoLangType(sf.field.typeId, imports, ts), i.id.name, imports, ts)),
      imports,
      ts
    )

    val needsStrconv = struct.fields.exists(f => f.tp.id match {
      case Primitive.TInt8 => true
      case Primitive.TInt16 => true
      case Primitive.TInt32 => true
      case Primitive.TInt64 => true
      case _ => false
    })

    val decl =
      s"""${struct.render()}
         |
         |// String converts an identifier to a string
         |func (i *${i.id.name}) String() string {
         |    suffix := ${sortedFields.map(f => "url.QueryEscape(" + GoLangType(f.field.typeId).renderToString(s"i.${f.field.name}") + ")").mkString(" + \":\" + ")}
         |    return "${i.id.name}#" + suffix
         |}
         |
         |// MarshalJSON serialization for the identifier
         |func (i ${i.id.name}) MarshalJSON() ([]byte, error) {
         |    buffer := bytes.NewBufferString(`"`)
         |    buffer.WriteString(i.String())
         |    buffer.WriteString(`"`)
         |    return buffer.Bytes(), nil
         |}
         |
         |// UnmarshalJSON deserialization for the identifier
         |func (i *${i.id.name}) UnmarshalJSON(b []byte) error {
         |    var s string
         |    err := json.Unmarshal(b, &s)
         |    if err != nil {
         |        return err
         |    }
         |
         |    if !strings.HasPrefix(s, "${i.id.name}#") {
         |        return fmt.Errorf("expected identifier for type ${i.id.name}, got %s", s)
         |    }
         |
         |    parts := strings.Split(s[${i.id.name.length + 1}:], ":")
         |    if len(parts) != ${struct.fields.length} {
         |        return fmt.Errorf("expected identifier for type ${i.id.name} with ${struct.fields.length} parts, got %d in string %s", len(parts), s)
         |    }
         |
         |${struct.fields.zipWithIndex.map{ case (f, index) => f.tp.renderFromString(f.renderMemberName(false), s"parts[$index]", unescape = true)}.mkString("\n").shift(4)}
         |
         |    *i = *New${i.id.name}(${struct.fields.map(f => f.renderMemberName(false)).mkString(", ")})
         |    return nil
         |}
       """.stripMargin

    val tests =
      s"""import (
         |    "testing"
         |    "encoding/json"
         |)
         |
         |func Test${i.id.name}Creation(t *testing.T) {
         |    v := New${i.id.name}(${struct.fields.map(f => f.tp.testValue()).mkString(", ")})
         |    if v == nil {
         |        t.Errorf("identifier of type ${i.id.name} should be possible to create with New method")
         |    }
         |}
         |
         |func Test${i.id.name}JSONSerialization(t *testing.T) {
         |    v1 := New${i.id.name}(${struct.fields.map(f => f.tp.testValue()).mkString(", ")})
         |    serialized, err := json.Marshal(v1)
         |    if err != nil {
         |        t.Fatalf("Type '%s' should serialize into JSON using Marshal. %s", "${i.id.name}", err.Error())
         |    }
         |    var v2 ${i.id.name}
         |    err = json.Unmarshal(serialized, &v2)
         |    if err != nil {
         |        t.Fatalf("Type '%s' should deserialize from JSON using Unmarshal. %s", "${i.id.name}", err.Error())
         |    }
         |
         |    if v1.String() != v2.String() {
         |        t.Errorf("type '%s' serialization to JSON and from it afterwards must return the same identifier value. Got '%s' and '%s'", "${i.id.name}", v1.String(), v2.String())
         |    }
         |}
       """.stripMargin

    IdentifierProduct(decl, imports.renderImports(
        if (needsStrconv)
          List("encoding/json", "bytes", "net/url", "fmt", "strings", "strconv")
        else
          List("encoding/json", "bytes", "net/url", "strings", "fmt")
      ),
      tests
    )
  }

  protected def renderInterface(i: Interface): RenderableCogenProduct = {
    val imports = GoLangImports(i, i.id.path.toPackage)

    val fields = typespace.structure.structure(i)
    val distinctFields = fields.all.groupBy(_.field.name).map(_._2.head.field)
    val eid = typespace.implId(i.id)

    val struct = GoLangStruct(
      eid.name,
      eid,
      i.struct.superclasses.interfaces ++ List(i.id),
      distinctFields.map(df => GoLangField(df.name, GoLangType(df.typeId, imports, ts), eid.name, imports, ts)).toList,
      imports,
      ts,
      List(i.id)
    )

    val iface =
      s"""type ${i.id.name} interface {
         |${i.struct.superclasses.interfaces.map(ifc => GoLangType(ifc, imports, ts).renderType()).mkString("\n").shift(4)}
         |${struct.fields.map(f => f.renderInterfaceMethods()).mkString("\n").shift(4)}
         |    GetPackageName() string
         |    GetClassName() string
         |    GetFullClassName() string
         |}
       """.stripMargin

    val companion =
      s"""${struct.render()}
         |${struct.renderSerialized()}
         |${struct.renderSlices()}
         |
         |// Polymorphic section below. If a new type to be registered, use Register${i.id.name} method
         |// which will add it to the known list. You can also overwrite the existing registrations
         |// in order to provide extended functionality on existing models, preserving the original class name.
         |
         |type ${i.id.name}Constructor func() ${i.id.name}
         |
         |func ctor${eid.name}() ${i.id.name} {
         |    return &${eid.name}{}
         |}
         |
         |var known${i.id.name}Polymorphic = map[string]${i.id.name}Constructor {
         |    rtti${eid.name}FullClassName: ctor${eid.name},
         |}
         |
         |// Register${i.id.name} registers a new constructor for a polymorphic type ${i.id.name}
         |func Register${i.id.name}(className string, ctor ${i.id.name}Constructor) {
         |    known${i.id.name}Polymorphic[className] = ctor
         |}
         |
         |// Create${i.id.name} creates an instance of type ${i.id.name} in a polymorphic way
         |func Create${i.id.name}(data map[string]json.RawMessage) (${i.id.name}, error) {
         |    for className, content := range data {
         |        ctor, ok := known${i.id.name}Polymorphic[className]
         |        if !ok {
         |            return nil, fmt.Errorf("unknown polymorphic type %s for Create${i.id.name}", className)
         |        }
         |
         |        instance := ctor()
         |        err := json.Unmarshal(content, instance)
         |        if err != nil {
         |            return nil, err
         |        }
         |
         |        return instance, nil
         |    }
         |
         |    return nil, fmt.Errorf("empty content for polymorphic type in Create${i.id.name}")
         |}
         |${renderRegistrations(i.struct.superclasses.interfaces, eid.name, imports)}
       """.stripMargin

    // TODO here above Register methods don't use module, if a package is different - it will fail, needs a fix using the corrent import access

    val tests =
      s"""import (
         |    "testing"
         |    "encoding/json"
         |)
         |
         |func Test${i.id.name}Creation(t *testing.T) {
         |    // v := New${i.id.name}(${struct.fields.map(f => f.tp.testValue()).mkString(", ")})
         |    // if v == nil {
         |    //     t.Errorf("identifier of type ${i.id.name} should be possible to create with New method.")
         |    // }
         |}
         |
         |func Test${i.id.name}JSONSerialization(t *testing.T) {
         |    // v1 := New${i.id.name}(${struct.fields.map(f => f.tp.testValue()).mkString(", ")})
         |    // serialized, err := json.Marshal(v1)
         |    // if err != nil {
         |    //    t.Fatalf("Type '%s' should serialize into JSON using Marshal. %s", "${i.id.name}", err.Error())
         |    // }
         |    // var v2 ${i.id.name}
         |    // err = json.Unmarshal(serialized, &v2)
         |    // if err != nil {
         |    //     t.Fatalf("Type '%s' should deserialize from JSON using Unmarshal. %s", "${i.id.name}", err.Error())
         |    // }
         |
         |    // if v1.String() != v2.String() {
         |    //     t.Errorf("type '%s' serialization to JSON and from it afterwards must return the same identifier value. Got '%s' and '%s'", "${i.id.name}", v1.String(), v2.String())
         |    // }
         |}
       """.stripMargin

    InterfaceProduct(iface, companion, imports.renderImports(List("encoding/json", "fmt")), tests)
  }

  protected def inName(i: Service, name: String, public: Boolean = false): String = {
    if (public)
      s"In${i.id.name.capitalize}${name.capitalize}"
    else
      s"in${i.id.name.capitalize}${name.capitalize}"
  }

  protected def outName(i: Service, name: String, public: Boolean = true): String = {
    if (public)
      s"Out${i.id.name.capitalize}${name.capitalize}"
    else
      s"out${i.id.name.capitalize}${name.capitalize}"
  }

  protected def renderServiceMethodSignature(i: Service, method: Service.DefMethod, imports: GoLangImports, spread: Boolean = false, withContext: Boolean = false): String = {
    method match {
      case m: DefMethod.RPCMethod => {
        val context = if (withContext) s"context interface{}${if (m.signature.input.fields.isEmpty) "" else ", "}" else ""
        if (spread) {
          val fields = m.signature.input.fields.map(f => f.name + " " + GoLangType(f.typeId, imports, ts).renderType()).mkString(", ")
          s"${m.name.capitalize}($context$fields) ${renderServiceMethodOutputSignature(i, m, imports)}"
        } else {
          s"${m.name.capitalize}(${context}input: ${inName(i, m.name)}) ${renderServiceMethodOutputSignature(i, m, imports)}"
        }
      }
    }
  }

  protected def renderServiceMethodOutputModel(i: Service, method: DefMethod.RPCMethod, imports: GoLangImports): String = method.signature.output match {
    case _: Struct => s"*${outName(i, method.name)}"
    case _: Algebraic => s"*${outName(i, method.name)}"
    case si: Singular => s"${GoLangType(si.typeId, imports, ts).renderType()}"
  }

  protected def renderServiceMethodOutputSignature(i: Service, method: DefMethod.RPCMethod, imports: GoLangImports): String = {
    s"(${renderServiceMethodOutputModel(i, method, imports)}, error)"
  }

  protected def renderServiceClientMethod(i: Service, method: Service.DefMethod, imports: GoLangImports): String = method match {
    case m: DefMethod.RPCMethod => m.signature.output match {
      case _: Struct | _: Algebraic =>
        s"""func (c *${i.id.name}Client) ${renderServiceMethodSignature(i, method, imports, spread = true)} {
           |    ${if (m.signature.input.fields.isEmpty) "// No input params for this method" else s"inData := new${inName(i, m.name)}(${m.signature.input.fields.map(ff => ff.name).mkString(", ")})" }
           |    outData := &${outName(i, m.name)}{}
           |    err := c.transport.Send("${i.id.name}", "${m.name}", ${if (m.signature.input.fields.isEmpty) "nil" else "inData"}, outData)
           |    if err != nil {
           |        return nil, err
           |    }
           |    return outData, nil
           |}
       """.stripMargin

      case so: Singular =>
        s"""func (c *${i.id.name}Client) ${renderServiceMethodSignature(i, method, imports, spread = true)} {
           |    ${if (m.signature.input.fields.isEmpty) "// No input params for this method" else s"inData := new${inName(i, m.name)}(${m.signature.input.fields.map(ff => ff.name).mkString(", ")})" }
           |    outData := &${GoLangType(so.typeId, imports, ts).renderType(forAlias = true)}
           |    err := c.transport.Send("${i.id.name}", "${m.name}", ${if (m.signature.input.fields.isEmpty) "nil" else "inData"}, outData)
           |    if err != nil {
           |        return nil, err
           |    }
           |    return outData, nil
           |}
       """.stripMargin
    }
  }

  protected def renderServiceClient(i: Service, imports: GoLangImports): String = {
    val name = s"${i.id.name}Client"

    s"""type ${i.id.name} interface {
       |${i.methods.map(m => renderServiceMethodSignature(i, m, imports, spread = true)).mkString("\n").shift(4)}
       |}
       |
       |type $name struct {
       |    ${i.id.name}
       |    transport ${name}Transport
       |}
       |
       |func (v *$name) SetTransport(t ${name}Transport) error {
       |    if t == nil {
       |        return fmt.Errorf("method SetTransport requires a valid transport, got nil")
       |    }
       |
       |    v.transport = t
       |    return nil
       |}
       |
       |func (v *$name) SetHTTPTransport(endpoint string, timeout int, skipSSLVerify bool) {
       |    v.transport = new${name}HTTPTransport(endpoint, timeout, skipSSLVerify)
       |}
       |
       |func New${name}OverHTTP(endpoint string) *$name{
       |    res := &$name{}
       |    res.SetHTTPTransport(endpoint, 15000, false)
       |    return res
       |}
       |
       |${i.methods.map(me => renderServiceClientMethod(i, me, imports)).mkString("\n")}
     """.stripMargin
  }

  protected def renderServiceDispatcherHandler(i: Service, method: Service.DefMethod, imports: GoLangImports): String = method match {
    case m: DefMethod.RPCMethod =>
      s"""case "${m.name}": {
         |    ${if (m.signature.input.fields.isEmpty) "// No input params for this method" else s"dataIn, ok := data.(*${inName(i, m.name)})\n    if !ok {\n        return nil, fmt.Errorf(" + "\"invalid input data object for method " + m.name + "\")\n    }"}
         |    return v.service.${m.name.capitalize}(context${if(m.signature.input.fields.isEmpty) "" else ", "}${m.signature.input.fields.map(f => s"dataIn.${f.name.capitalize}()").mkString(", ")})
         |}
         |
       """.stripMargin
  }

  protected def renderServiceDispatcherPreHandler(i: Service, method: Service.DefMethod, imports: GoLangImports): String = method match {
    case m: DefMethod.RPCMethod =>
      s"""case "${m.name}": ${if (m.signature.input.fields.isEmpty) "return nil, nil" else s"return &${inName(i, m.name)}{}, nil"}""".stripMargin
  }

  protected def renderServiceDispatcher(i: Service, imports: GoLangImports): String = {
    val name = s"${i.id.name}Dispatcher"

    s"""type ${i.id.name}Server interface {
       |${i.methods.map(m => renderServiceMethodSignature(i, m, imports, spread = true, withContext = true)).mkString("\n").shift(4)}
       |}
       |
       |type $name struct {
       |    service ${i.id.name}Server
       |}
       |
       |func (v *$name) SetServer(s ${i.id.name}Server) error {
       |    if s == nil {
       |        return fmt.Errorf("method SetServer requires a valid server implementation, got nil")
       |    }
       |
       |    v.service = s
       |    return nil
       |}
       |
       |func (v *$name) GetSupportedService() string {
       |    return "${i.id.name}"
       |}
       |
       |func (v *$name) GetSupportedMethods() []string {
       |    return []string{
       |${i.methods.map(m => if (m.isInstanceOf[DefMethod.RPCMethod]) "\"" + m.asInstanceOf[DefMethod.RPCMethod].name + "\"," else "").mkString("\n").shift(8)}
       |    }
       |}
       |
       |func (v *$name) PreDispatchModel(context interface{}, method string) (interface{}, error) {
       |    switch method {
       |${i.methods.map(m => renderServiceDispatcherPreHandler(i, m, imports)).mkString("\n").shift(8)}
       |        default:
       |            return nil, fmt.Errorf("$name dispatch doesn't support method %s", method)
       |    }
       |}
       |
       |func (v *$name) Dispatch(context interface{}, method string, data interface{}) (interface{}, error) {
       |    switch method {
       |${i.methods.map(m => renderServiceDispatcherHandler(i, m, imports)).mkString("\n").shift(8)}
       |        default:
       |            return nil, fmt.Errorf("$name dispatch doesn't support method %s", method)
       |    }
       |}
       |
       |func New${name}(service ${i.id.name}Server) *$name{
       |    res := &$name{}
       |    res.SetServer(service)
       |    return res
       |}
     """.stripMargin
  }

  protected def renderServiceMethodOutModel(i: Service, name: String, out: Service.DefMethod.Output, imports: GoLangImports): String = out match {
    case st: Struct => renderServiceMethodInModel(i, name, st.struct, imports)
    case al: Algebraic => renderAdtImpl(name, al.alternatives, imports)
    case _ => s""
  }

  protected def renderServiceMethodInModel(i: Service, name: String, structure: SimpleStructure, imports: GoLangImports): String = {
    val struct = GoLangStruct(name, DTOId(i.id, name), List.empty,
      structure.fields.map(ef => GoLangField(ef.name, GoLangType(ef.typeId, imports, ts), name, imports, ts)),
      imports, ts
    )
    s"""${struct.render(makePrivate = true)}
       |${struct.renderSerialized(makePrivate = true)}
     """.stripMargin
  }

  protected def renderServiceMethodModels(i: Service, method: Service.DefMethod, imports: GoLangImports): String = method match {
    case m: DefMethod.RPCMethod =>
      s"""${if(m.signature.input.fields.isEmpty) "" else renderServiceMethodInModel(i, inName(i, m.name), m.signature.input, imports)}
         |${renderServiceMethodOutModel(i, outName(i, m.name), m.signature.output, imports)}
       """.stripMargin

  }

  protected def renderServiceModels(i: Service, imports: GoLangImports): String = {
    i.methods.map(me => renderServiceMethodModels(i, me, imports)).mkString("\n")
  }
    //newAdminServiceClientHTTPTransport
  protected def renderHttpClientTransport(name: String): String = {
    s"""type ${name}ClientTransport interface {
       |    Send(service string, method string, dataIn interface{}, dataOut interface{}) error
       |}
       |
       |type client${name}HTTPTransport struct {
       |    Endpoint string
       |    Client *http.Client
       |    Transport *http.Transport
       |}
       |
       |func new${name}ClientHTTPTransport(endpoint string, timeout int, skipSSLVerify bool) *client${name}HTTPTransport {
       |    transport := &http.Transport {
       |        TLSClientConfig: &tls.Config{InsecureSkipVerify: skipSSLVerify},
       |        ExpectContinueTimeout: time.Millisecond * time.Duration(timeout),
       |        ResponseHeaderTimeout: time.Millisecond * time.Duration(timeout),
       |    }
       |    client := &http.Client{Transport: transport}
       |    return &client${name}HTTPTransport {
       |        Endpoint: endpoint,
       |        Transport: transport,
       |        Client: client,
       |    }
       |}
       |
       |func (c *client${name}HTTPTransport) Send(service string, method string, dataIn interface{}, dataOut interface{}) error {
       |    url := c.Endpoint + service + "/" + method
       |
       |    var req *http.Request
       |    var err error
       |    if dataIn == nil {
       |        req, err = http.NewRequest("GET", url, nil)
       |    } else {
       |        body, err := json.Marshal(dataIn)
       |        if err != nil {
       |            return err
       |        }
       |        req, err = http.NewRequest("POST", url, bytes.NewBuffer(body))
       |        if err != nil {
       |            return err
       |        }
       |        req.Header.Set("Content-Type", "application/json")
       |    }
       |
       |    resp, err := c.Client.Do(req)
       |    if err != nil {
       |        return err
       |    }
       |
       |    defer resp.Body.Close()
       |    respBody, err := ioutil.ReadAll(resp.Body)
       |    if err != nil {
       |        return err
       |    }
       |
       |    if err := json.Unmarshal(respBody, dataOut); err != nil {
       |        return fmt.Errorf("error while unmarshalling data %+v Body: %s", err, string(respBody))
       |    }
       |
       |    return nil
       |}
     """.stripMargin
  }

  protected def renderService(i: Service): RenderableCogenProduct = {
      val imports = GoLangImports(i, i.id.domain.toPackage, List.empty)

      val svc =
        s"""// ============== Service models ==============
           |${renderServiceModels(i, imports)}
           |
           |// ============== Service Transport ==============
           |${renderHttpClientTransport(i.id.name)}
           |
           |// ============== Service Client ==============
           |${renderServiceClient(i, imports)}
           |
           |// ============== Service Dispatcher ==============
           |${renderServiceDispatcher(i, imports)}
         """.stripMargin

      ServiceProduct(svc, imports.renderImports(Seq("net/http", "crypto/tls", "time", "io/ioutil", "encoding/json", "fmt", "bytes")))
  }
}
