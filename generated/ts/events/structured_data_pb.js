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

goog.exportSymbol('proto.events.StructuredDataDelete', null, global);

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
proto.events.StructuredDataDelete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.StructuredDataDelete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.StructuredDataDelete.displayName = 'proto.events.StructuredDataDelete';
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
proto.events.StructuredDataDelete.prototype.toObject = function(opt_includeInstance) {
  return proto.events.StructuredDataDelete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.StructuredDataDelete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.StructuredDataDelete.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 10, ""),
    dataRegistryId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    schemaId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.events.StructuredDataDelete}
 */
proto.events.StructuredDataDelete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.StructuredDataDelete;
  return proto.events.StructuredDataDelete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.StructuredDataDelete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.StructuredDataDelete}
 */
proto.events.StructuredDataDelete.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataRegistryId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaId(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrganizationId(value);
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
proto.events.StructuredDataDelete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.StructuredDataDelete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.StructuredDataDelete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.StructuredDataDelete.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDataRegistryId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSchemaId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
};


/**
 * optional string id = 10;
 * @return {string}
 */
proto.events.StructuredDataDelete.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.events.StructuredDataDelete.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string data_registry_id = 11;
 * @return {string}
 */
proto.events.StructuredDataDelete.prototype.getDataRegistryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.events.StructuredDataDelete.prototype.setDataRegistryId = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string schema_id = 12;
 * @return {string}
 */
proto.events.StructuredDataDelete.prototype.getSchemaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.events.StructuredDataDelete.prototype.setSchemaId = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 organization_id = 13;
 * @return {number}
 */
proto.events.StructuredDataDelete.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.events.StructuredDataDelete.prototype.setOrganizationId = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


goog.object.extend(exports, proto.events);
