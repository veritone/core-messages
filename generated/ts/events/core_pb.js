/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.exportSymbol('proto.events.Core', null, global);
goog.exportSymbol('proto.events.Event', null, global);
goog.exportSymbol('proto.events.Trace', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.Core = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.Core, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.Core.displayName = 'proto.events.Core';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.Core.prototype.toObject = function(opt_includeInstance) {
  return proto.events.Core.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.Core} msg The msg instance to transform.
 * @return {!Object}
 */
proto.events.Core.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    event: jspb.Message.getFieldWithDefault(msg, 2, ""),
    topic: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.Core}
 */
proto.events.Core.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.Core;
  return proto.events.Core.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.Core} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.Core}
 */
proto.events.Core.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.Core.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.Core.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.Core} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.Core.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEvent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.events.Core.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.events.Core.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string event = 2;
 * @return {string}
 */
proto.events.Core.prototype.getEvent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.events.Core.prototype.setEvent = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string topic = 4;
 * @return {string}
 */
proto.events.Core.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.events.Core.prototype.setTopic = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.events.Core.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.events.Core.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.Trace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.Trace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.Trace.displayName = 'proto.events.Trace';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.Trace.prototype.toObject = function(opt_includeInstance) {
  return proto.events.Trace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.Trace} msg The msg instance to transform.
 * @return {!Object}
 */
proto.events.Trace.toObject = function(includeInstance, msg) {
  var f, obj = {
    trace: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.Trace}
 */
proto.events.Trace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.Trace;
  return proto.events.Trace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.Trace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.Trace}
 */
proto.events.Trace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.Trace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.Trace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.Trace} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.Trace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trace = 1;
 * @return {string}
 */
proto.events.Trace.prototype.getTrace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.events.Trace.prototype.setTrace = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.Event.displayName = 'proto.events.Event';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.events.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.Event} msg The msg instance to transform.
 * @return {!Object}
 */
proto.events.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    core: (f = msg.getCore()) && proto.events.Core.toObject(includeInstance, f),
    trace: (f = msg.getTrace()) && proto.events.Trace.toObject(includeInstance, f),
    data: (f = msg.getData()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.Event}
 */
proto.events.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.Event;
  return proto.events.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.Event}
 */
proto.events.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.events.Core;
      reader.readMessage(value,proto.events.Core.deserializeBinaryFromReader);
      msg.setCore(value);
      break;
    case 2:
      var value = new proto.events.Trace;
      reader.readMessage(value,proto.events.Trace.deserializeBinaryFromReader);
      msg.setTrace(value);
      break;
    case 3:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.Event} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCore();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.events.Core.serializeBinaryToWriter
    );
  }
  f = message.getTrace();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.events.Trace.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional Core core = 1;
 * @return {?proto.events.Core}
 */
proto.events.Event.prototype.getCore = function() {
  return /** @type{?proto.events.Core} */ (
    jspb.Message.getWrapperField(this, proto.events.Core, 1));
};


/** @param {?proto.events.Core|undefined} value */
proto.events.Event.prototype.setCore = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.events.Event.prototype.clearCore = function() {
  this.setCore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.Event.prototype.hasCore = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Trace trace = 2;
 * @return {?proto.events.Trace}
 */
proto.events.Event.prototype.getTrace = function() {
  return /** @type{?proto.events.Trace} */ (
    jspb.Message.getWrapperField(this, proto.events.Trace, 2));
};


/** @param {?proto.events.Trace|undefined} value */
proto.events.Event.prototype.setTrace = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.events.Event.prototype.clearTrace = function() {
  this.setTrace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.Event.prototype.hasTrace = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Any data = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.events.Event.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/** @param {?proto.google.protobuf.Any|undefined} value */
proto.events.Event.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.events.Event.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.Event.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.events);
