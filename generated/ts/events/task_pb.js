/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.events.TaskCompleted', null, global);
goog.exportSymbol('proto.events.TaskQueued', null, global);
goog.exportSymbol('proto.events.TaskUpdated', null, global);

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
proto.events.TaskQueued = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.TaskQueued, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.TaskQueued.displayName = 'proto.events.TaskQueued';
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
proto.events.TaskQueued.prototype.toObject = function(opt_includeInstance) {
  return proto.events.TaskQueued.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.TaskQueued} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.TaskQueued.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    timestampMs: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.events.TaskQueued}
 */
proto.events.TaskQueued.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.TaskQueued;
  return proto.events.TaskQueued.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.TaskQueued} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.TaskQueued}
 */
proto.events.TaskQueued.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestampMs(value);
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
proto.events.TaskQueued.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.TaskQueued.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.TaskQueued} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.TaskQueued.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTimestampMs();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string task_id = 10;
 * @return {string}
 */
proto.events.TaskQueued.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.events.TaskQueued.prototype.setTaskId = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string timestamp_ms = 11;
 * @return {string}
 */
proto.events.TaskQueued.prototype.getTimestampMs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.events.TaskQueued.prototype.setTimestampMs = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
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
proto.events.TaskUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.TaskUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.TaskUpdated.displayName = 'proto.events.TaskUpdated';
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
proto.events.TaskUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.events.TaskUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.TaskUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.TaskUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    timestampMs: jspb.Message.getFieldWithDefault(msg, 11, ""),
    taskStatus: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.events.TaskUpdated}
 */
proto.events.TaskUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.TaskUpdated;
  return proto.events.TaskUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.TaskUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.TaskUpdated}
 */
proto.events.TaskUpdated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestampMs(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskStatus(value);
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
proto.events.TaskUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.TaskUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.TaskUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.TaskUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTimestampMs();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTaskStatus();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string task_id = 10;
 * @return {string}
 */
proto.events.TaskUpdated.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.events.TaskUpdated.prototype.setTaskId = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string timestamp_ms = 11;
 * @return {string}
 */
proto.events.TaskUpdated.prototype.getTimestampMs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.events.TaskUpdated.prototype.setTimestampMs = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string task_status = 12;
 * @return {string}
 */
proto.events.TaskUpdated.prototype.getTaskStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.events.TaskUpdated.prototype.setTaskStatus = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
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
proto.events.TaskCompleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.TaskCompleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.TaskCompleted.displayName = 'proto.events.TaskCompleted';
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
proto.events.TaskCompleted.prototype.toObject = function(opt_includeInstance) {
  return proto.events.TaskCompleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.TaskCompleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.TaskCompleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    timestampMs: jspb.Message.getFieldWithDefault(msg, 11, ""),
    taskStatus: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.events.TaskCompleted}
 */
proto.events.TaskCompleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.TaskCompleted;
  return proto.events.TaskCompleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.TaskCompleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.TaskCompleted}
 */
proto.events.TaskCompleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestampMs(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskStatus(value);
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
proto.events.TaskCompleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.TaskCompleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.TaskCompleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.TaskCompleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTimestampMs();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTaskStatus();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string task_id = 10;
 * @return {string}
 */
proto.events.TaskCompleted.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.events.TaskCompleted.prototype.setTaskId = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string timestamp_ms = 11;
 * @return {string}
 */
proto.events.TaskCompleted.prototype.getTimestampMs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.events.TaskCompleted.prototype.setTimestampMs = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string task_status = 12;
 * @return {string}
 */
proto.events.TaskCompleted.prototype.getTaskStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.events.TaskCompleted.prototype.setTaskStatus = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


goog.object.extend(exports, proto.events);
