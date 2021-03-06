package com.github.pshirshov.izumi.idealingua.model.il.ast.typed

import com.github.pshirshov.izumi.idealingua.model.common.TypeId.{EmitterId, StreamsId}

final case class Emitter(id: EmitterId, events: List[DefMethod], doc: Option[String])

final case class Streams(id: StreamsId, streams: List[TypedStream], doc: Option[String])
