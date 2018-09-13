/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.events = (function() {

    /**
     * Namespace events.
     * @exports events
     * @namespace
     */
    var events = {};

    events.LoginSucceeded = (function() {

        /**
         * Properties of a LoginSucceeded.
         * @memberof events
         * @interface ILoginSucceeded
         * @property {string|null} [userName] LoginSucceeded userName
         * @property {string|null} [userAgent] LoginSucceeded userAgent
         * @property {string|null} [ip] LoginSucceeded ip
         * @property {string|null} [requestUrl] LoginSucceeded requestUrl
         * @property {string|null} [userId] LoginSucceeded userId
         * @property {number|Long|null} [organizationId] LoginSucceeded organizationId
         */

        /**
         * Constructs a new LoginSucceeded.
         * @memberof events
         * @classdesc Represents a LoginSucceeded.
         * @implements ILoginSucceeded
         * @constructor
         * @param {events.ILoginSucceeded=} [properties] Properties to set
         */
        function LoginSucceeded(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginSucceeded userName.
         * @member {string} userName
         * @memberof events.LoginSucceeded
         * @instance
         */
        LoginSucceeded.prototype.userName = "";

        /**
         * LoginSucceeded userAgent.
         * @member {string} userAgent
         * @memberof events.LoginSucceeded
         * @instance
         */
        LoginSucceeded.prototype.userAgent = "";

        /**
         * LoginSucceeded ip.
         * @member {string} ip
         * @memberof events.LoginSucceeded
         * @instance
         */
        LoginSucceeded.prototype.ip = "";

        /**
         * LoginSucceeded requestUrl.
         * @member {string} requestUrl
         * @memberof events.LoginSucceeded
         * @instance
         */
        LoginSucceeded.prototype.requestUrl = "";

        /**
         * LoginSucceeded userId.
         * @member {string} userId
         * @memberof events.LoginSucceeded
         * @instance
         */
        LoginSucceeded.prototype.userId = "";

        /**
         * LoginSucceeded organizationId.
         * @member {number|Long} organizationId
         * @memberof events.LoginSucceeded
         * @instance
         */
        LoginSucceeded.prototype.organizationId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginSucceeded instance using the specified properties.
         * @function create
         * @memberof events.LoginSucceeded
         * @static
         * @param {events.ILoginSucceeded=} [properties] Properties to set
         * @returns {events.LoginSucceeded} LoginSucceeded instance
         */
        LoginSucceeded.create = function create(properties) {
            return new LoginSucceeded(properties);
        };

        /**
         * Encodes the specified LoginSucceeded message. Does not implicitly {@link events.LoginSucceeded.verify|verify} messages.
         * @function encode
         * @memberof events.LoginSucceeded
         * @static
         * @param {events.ILoginSucceeded} message LoginSucceeded message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSucceeded.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userName);
            if (message.userAgent != null && message.hasOwnProperty("userAgent"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.userAgent);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.ip);
            if (message.requestUrl != null && message.hasOwnProperty("requestUrl"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.requestUrl);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.userId);
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.organizationId);
            return writer;
        };

        /**
         * Encodes the specified LoginSucceeded message, length delimited. Does not implicitly {@link events.LoginSucceeded.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.LoginSucceeded
         * @static
         * @param {events.ILoginSucceeded} message LoginSucceeded message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSucceeded.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginSucceeded message from the specified reader or buffer.
         * @function decode
         * @memberof events.LoginSucceeded
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.LoginSucceeded} LoginSucceeded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSucceeded.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.LoginSucceeded();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userName = reader.string();
                    break;
                case 11:
                    message.userAgent = reader.string();
                    break;
                case 12:
                    message.ip = reader.string();
                    break;
                case 13:
                    message.requestUrl = reader.string();
                    break;
                case 14:
                    message.userId = reader.string();
                    break;
                case 15:
                    message.organizationId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginSucceeded message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.LoginSucceeded
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.LoginSucceeded} LoginSucceeded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSucceeded.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginSucceeded message.
         * @function verify
         * @memberof events.LoginSucceeded
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginSucceeded.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userAgent != null && message.hasOwnProperty("userAgent"))
                if (!$util.isString(message.userAgent))
                    return "userAgent: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.requestUrl != null && message.hasOwnProperty("requestUrl"))
                if (!$util.isString(message.requestUrl))
                    return "requestUrl: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (!$util.isInteger(message.organizationId) && !(message.organizationId && $util.isInteger(message.organizationId.low) && $util.isInteger(message.organizationId.high)))
                    return "organizationId: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginSucceeded message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.LoginSucceeded
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.LoginSucceeded} LoginSucceeded
         */
        LoginSucceeded.fromObject = function fromObject(object) {
            if (object instanceof $root.events.LoginSucceeded)
                return object;
            var message = new $root.events.LoginSucceeded();
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userAgent != null)
                message.userAgent = String(object.userAgent);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.requestUrl != null)
                message.requestUrl = String(object.requestUrl);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.organizationId != null)
                if ($util.Long)
                    (message.organizationId = $util.Long.fromValue(object.organizationId)).unsigned = false;
                else if (typeof object.organizationId === "string")
                    message.organizationId = parseInt(object.organizationId, 10);
                else if (typeof object.organizationId === "number")
                    message.organizationId = object.organizationId;
                else if (typeof object.organizationId === "object")
                    message.organizationId = new $util.LongBits(object.organizationId.low >>> 0, object.organizationId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LoginSucceeded message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.LoginSucceeded
         * @static
         * @param {events.LoginSucceeded} message LoginSucceeded
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginSucceeded.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userName = "";
                object.userAgent = "";
                object.ip = "";
                object.requestUrl = "";
                object.userId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.organizationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.organizationId = options.longs === String ? "0" : 0;
            }
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userAgent != null && message.hasOwnProperty("userAgent"))
                object.userAgent = message.userAgent;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.requestUrl != null && message.hasOwnProperty("requestUrl"))
                object.requestUrl = message.requestUrl;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (typeof message.organizationId === "number")
                    object.organizationId = options.longs === String ? String(message.organizationId) : message.organizationId;
                else
                    object.organizationId = options.longs === String ? $util.Long.prototype.toString.call(message.organizationId) : options.longs === Number ? new $util.LongBits(message.organizationId.low >>> 0, message.organizationId.high >>> 0).toNumber() : message.organizationId;
            return object;
        };

        /**
         * Converts this LoginSucceeded to JSON.
         * @function toJSON
         * @memberof events.LoginSucceeded
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginSucceeded.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginSucceeded;
    })();

    events.LoginFailed = (function() {

        /**
         * Properties of a LoginFailed.
         * @memberof events
         * @interface ILoginFailed
         * @property {string|null} [userName] LoginFailed userName
         * @property {string|null} [userAgent] LoginFailed userAgent
         * @property {string|null} [ip] LoginFailed ip
         * @property {string|null} [requestUrl] LoginFailed requestUrl
         * @property {string|null} [userId] LoginFailed userId
         * @property {number|Long|null} [organizationId] LoginFailed organizationId
         */

        /**
         * Constructs a new LoginFailed.
         * @memberof events
         * @classdesc Represents a LoginFailed.
         * @implements ILoginFailed
         * @constructor
         * @param {events.ILoginFailed=} [properties] Properties to set
         */
        function LoginFailed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginFailed userName.
         * @member {string} userName
         * @memberof events.LoginFailed
         * @instance
         */
        LoginFailed.prototype.userName = "";

        /**
         * LoginFailed userAgent.
         * @member {string} userAgent
         * @memberof events.LoginFailed
         * @instance
         */
        LoginFailed.prototype.userAgent = "";

        /**
         * LoginFailed ip.
         * @member {string} ip
         * @memberof events.LoginFailed
         * @instance
         */
        LoginFailed.prototype.ip = "";

        /**
         * LoginFailed requestUrl.
         * @member {string} requestUrl
         * @memberof events.LoginFailed
         * @instance
         */
        LoginFailed.prototype.requestUrl = "";

        /**
         * LoginFailed userId.
         * @member {string} userId
         * @memberof events.LoginFailed
         * @instance
         */
        LoginFailed.prototype.userId = "";

        /**
         * LoginFailed organizationId.
         * @member {number|Long} organizationId
         * @memberof events.LoginFailed
         * @instance
         */
        LoginFailed.prototype.organizationId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginFailed instance using the specified properties.
         * @function create
         * @memberof events.LoginFailed
         * @static
         * @param {events.ILoginFailed=} [properties] Properties to set
         * @returns {events.LoginFailed} LoginFailed instance
         */
        LoginFailed.create = function create(properties) {
            return new LoginFailed(properties);
        };

        /**
         * Encodes the specified LoginFailed message. Does not implicitly {@link events.LoginFailed.verify|verify} messages.
         * @function encode
         * @memberof events.LoginFailed
         * @static
         * @param {events.ILoginFailed} message LoginFailed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginFailed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userName);
            if (message.userAgent != null && message.hasOwnProperty("userAgent"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.userAgent);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.ip);
            if (message.requestUrl != null && message.hasOwnProperty("requestUrl"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.requestUrl);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.userId);
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.organizationId);
            return writer;
        };

        /**
         * Encodes the specified LoginFailed message, length delimited. Does not implicitly {@link events.LoginFailed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.LoginFailed
         * @static
         * @param {events.ILoginFailed} message LoginFailed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginFailed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginFailed message from the specified reader or buffer.
         * @function decode
         * @memberof events.LoginFailed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.LoginFailed} LoginFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginFailed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.LoginFailed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userName = reader.string();
                    break;
                case 11:
                    message.userAgent = reader.string();
                    break;
                case 12:
                    message.ip = reader.string();
                    break;
                case 13:
                    message.requestUrl = reader.string();
                    break;
                case 14:
                    message.userId = reader.string();
                    break;
                case 15:
                    message.organizationId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginFailed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.LoginFailed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.LoginFailed} LoginFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginFailed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginFailed message.
         * @function verify
         * @memberof events.LoginFailed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginFailed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userAgent != null && message.hasOwnProperty("userAgent"))
                if (!$util.isString(message.userAgent))
                    return "userAgent: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.requestUrl != null && message.hasOwnProperty("requestUrl"))
                if (!$util.isString(message.requestUrl))
                    return "requestUrl: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (!$util.isInteger(message.organizationId) && !(message.organizationId && $util.isInteger(message.organizationId.low) && $util.isInteger(message.organizationId.high)))
                    return "organizationId: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginFailed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.LoginFailed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.LoginFailed} LoginFailed
         */
        LoginFailed.fromObject = function fromObject(object) {
            if (object instanceof $root.events.LoginFailed)
                return object;
            var message = new $root.events.LoginFailed();
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userAgent != null)
                message.userAgent = String(object.userAgent);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.requestUrl != null)
                message.requestUrl = String(object.requestUrl);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.organizationId != null)
                if ($util.Long)
                    (message.organizationId = $util.Long.fromValue(object.organizationId)).unsigned = false;
                else if (typeof object.organizationId === "string")
                    message.organizationId = parseInt(object.organizationId, 10);
                else if (typeof object.organizationId === "number")
                    message.organizationId = object.organizationId;
                else if (typeof object.organizationId === "object")
                    message.organizationId = new $util.LongBits(object.organizationId.low >>> 0, object.organizationId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LoginFailed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.LoginFailed
         * @static
         * @param {events.LoginFailed} message LoginFailed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginFailed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userName = "";
                object.userAgent = "";
                object.ip = "";
                object.requestUrl = "";
                object.userId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.organizationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.organizationId = options.longs === String ? "0" : 0;
            }
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userAgent != null && message.hasOwnProperty("userAgent"))
                object.userAgent = message.userAgent;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.requestUrl != null && message.hasOwnProperty("requestUrl"))
                object.requestUrl = message.requestUrl;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (typeof message.organizationId === "number")
                    object.organizationId = options.longs === String ? String(message.organizationId) : message.organizationId;
                else
                    object.organizationId = options.longs === String ? $util.Long.prototype.toString.call(message.organizationId) : options.longs === Number ? new $util.LongBits(message.organizationId.low >>> 0, message.organizationId.high >>> 0).toNumber() : message.organizationId;
            return object;
        };

        /**
         * Converts this LoginFailed to JSON.
         * @function toJSON
         * @memberof events.LoginFailed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginFailed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginFailed;
    })();

    events.Core = (function() {

        /**
         * Properties of a Core.
         * @memberof events
         * @interface ICore
         * @property {string|null} [id] Read-only and auto-generated. ID of the message, ID is a uuid v4 auto-generated by messaging library.
         * It will be propagate through the system. Similar to correlationId
         * @property {string|null} [name] The name of the event is
         * @property {string|null} [timestamp] Core timestamp
         * @property {string|null} [type] Core type
         * @property {string|null} [serviceName] Core serviceName
         * @property {string|null} [applicationId] Core applicationId
         * @property {string|null} [eventId] Core eventId
         * @property {string|null} [organizationId] Core organizationId
         * @property {string|null} [userId] Core userId
         * @property {string|null} [tokenId] Core tokenId
         */

        /**
         * Constructs a new Core.
         * @memberof events
         * @classdesc Represents a Core.
         * @implements ICore
         * @constructor
         * @param {events.ICore=} [properties] Properties to set
         */
        function Core(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Read-only and auto-generated. ID of the message, ID is a uuid v4 auto-generated by messaging library.
         * It will be propagate through the system. Similar to correlationId
         * @member {string} id
         * @memberof events.Core
         * @instance
         */
        Core.prototype.id = "";

        /**
         * The name of the event is
         * @member {string} name
         * @memberof events.Core
         * @instance
         */
        Core.prototype.name = "";

        /**
         * Core timestamp.
         * @member {string} timestamp
         * @memberof events.Core
         * @instance
         */
        Core.prototype.timestamp = "";

        /**
         * Core type.
         * @member {string} type
         * @memberof events.Core
         * @instance
         */
        Core.prototype.type = "";

        /**
         * Core serviceName.
         * @member {string} serviceName
         * @memberof events.Core
         * @instance
         */
        Core.prototype.serviceName = "";

        /**
         * Core applicationId.
         * @member {string} applicationId
         * @memberof events.Core
         * @instance
         */
        Core.prototype.applicationId = "";

        /**
         * Core eventId.
         * @member {string} eventId
         * @memberof events.Core
         * @instance
         */
        Core.prototype.eventId = "";

        /**
         * Core organizationId.
         * @member {string} organizationId
         * @memberof events.Core
         * @instance
         */
        Core.prototype.organizationId = "";

        /**
         * Core userId.
         * @member {string} userId
         * @memberof events.Core
         * @instance
         */
        Core.prototype.userId = "";

        /**
         * Core tokenId.
         * @member {string} tokenId
         * @memberof events.Core
         * @instance
         */
        Core.prototype.tokenId = "";

        /**
         * Creates a new Core instance using the specified properties.
         * @function create
         * @memberof events.Core
         * @static
         * @param {events.ICore=} [properties] Properties to set
         * @returns {events.Core} Core instance
         */
        Core.create = function create(properties) {
            return new Core(properties);
        };

        /**
         * Encodes the specified Core message. Does not implicitly {@link events.Core.verify|verify} messages.
         * @function encode
         * @memberof events.Core
         * @static
         * @param {events.ICore} message Core message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Core.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.timestamp);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.serviceName);
            if (message.applicationId != null && message.hasOwnProperty("applicationId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.applicationId);
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.eventId);
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.organizationId);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.userId);
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.tokenId);
            return writer;
        };

        /**
         * Encodes the specified Core message, length delimited. Does not implicitly {@link events.Core.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.Core
         * @static
         * @param {events.ICore} message Core message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Core.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Core message from the specified reader or buffer.
         * @function decode
         * @memberof events.Core
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.Core} Core
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Core.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.Core();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.string();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.serviceName = reader.string();
                    break;
                case 6:
                    message.applicationId = reader.string();
                    break;
                case 7:
                    message.eventId = reader.string();
                    break;
                case 8:
                    message.organizationId = reader.string();
                    break;
                case 9:
                    message.userId = reader.string();
                    break;
                case 10:
                    message.tokenId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Core message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.Core
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.Core} Core
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Core.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Core message.
         * @function verify
         * @memberof events.Core
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Core.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isString(message.timestamp))
                    return "timestamp: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                if (!$util.isString(message.serviceName))
                    return "serviceName: string expected";
            if (message.applicationId != null && message.hasOwnProperty("applicationId"))
                if (!$util.isString(message.applicationId))
                    return "applicationId: string expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (!$util.isString(message.organizationId))
                    return "organizationId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                if (!$util.isString(message.tokenId))
                    return "tokenId: string expected";
            return null;
        };

        /**
         * Creates a Core message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.Core
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.Core} Core
         */
        Core.fromObject = function fromObject(object) {
            if (object instanceof $root.events.Core)
                return object;
            var message = new $root.events.Core();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.timestamp != null)
                message.timestamp = String(object.timestamp);
            if (object.type != null)
                message.type = String(object.type);
            if (object.serviceName != null)
                message.serviceName = String(object.serviceName);
            if (object.applicationId != null)
                message.applicationId = String(object.applicationId);
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.organizationId != null)
                message.organizationId = String(object.organizationId);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.tokenId != null)
                message.tokenId = String(object.tokenId);
            return message;
        };

        /**
         * Creates a plain object from a Core message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.Core
         * @static
         * @param {events.Core} message Core
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Core.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.timestamp = "";
                object.type = "";
                object.serviceName = "";
                object.applicationId = "";
                object.eventId = "";
                object.organizationId = "";
                object.userId = "";
                object.tokenId = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                object.serviceName = message.serviceName;
            if (message.applicationId != null && message.hasOwnProperty("applicationId"))
                object.applicationId = message.applicationId;
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                object.organizationId = message.organizationId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = message.tokenId;
            return object;
        };

        /**
         * Converts this Core to JSON.
         * @function toJSON
         * @memberof events.Core
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Core.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Core;
    })();

    events.Trace = (function() {

        /**
         * Properties of a Trace.
         * @memberof events
         * @interface ITrace
         * @property {Object.<string,string>|null} [traceContext] Open Tracing trace context.
         * @property {Object.<string,string>|null} [traceTags] Open Tracing trace context.
         * @property {string|null} [serviceName] Trace serviceName
         */

        /**
         * Constructs a new Trace.
         * @memberof events
         * @classdesc Represents a Trace.
         * @implements ITrace
         * @constructor
         * @param {events.ITrace=} [properties] Properties to set
         */
        function Trace(properties) {
            this.traceContext = {};
            this.traceTags = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Open Tracing trace context.
         * @member {Object.<string,string>} traceContext
         * @memberof events.Trace
         * @instance
         */
        Trace.prototype.traceContext = $util.emptyObject;

        /**
         * Open Tracing trace context.
         * @member {Object.<string,string>} traceTags
         * @memberof events.Trace
         * @instance
         */
        Trace.prototype.traceTags = $util.emptyObject;

        /**
         * Trace serviceName.
         * @member {string} serviceName
         * @memberof events.Trace
         * @instance
         */
        Trace.prototype.serviceName = "";

        /**
         * Creates a new Trace instance using the specified properties.
         * @function create
         * @memberof events.Trace
         * @static
         * @param {events.ITrace=} [properties] Properties to set
         * @returns {events.Trace} Trace instance
         */
        Trace.create = function create(properties) {
            return new Trace(properties);
        };

        /**
         * Encodes the specified Trace message. Does not implicitly {@link events.Trace.verify|verify} messages.
         * @function encode
         * @memberof events.Trace
         * @static
         * @param {events.ITrace} message Trace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trace.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.traceContext != null && message.hasOwnProperty("traceContext"))
                for (var keys = Object.keys(message.traceContext), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.traceContext[keys[i]]).ldelim();
            if (message.traceTags != null && message.hasOwnProperty("traceTags"))
                for (var keys = Object.keys(message.traceTags), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.traceTags[keys[i]]).ldelim();
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.serviceName);
            return writer;
        };

        /**
         * Encodes the specified Trace message, length delimited. Does not implicitly {@link events.Trace.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.Trace
         * @static
         * @param {events.ITrace} message Trace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trace.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Trace message from the specified reader or buffer.
         * @function decode
         * @memberof events.Trace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.Trace} Trace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trace.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.Trace(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.traceContext === $util.emptyObject)
                        message.traceContext = {};
                    key = reader.string();
                    reader.pos++;
                    message.traceContext[key] = reader.string();
                    break;
                case 2:
                    reader.skip().pos++;
                    if (message.traceTags === $util.emptyObject)
                        message.traceTags = {};
                    key = reader.string();
                    reader.pos++;
                    message.traceTags[key] = reader.string();
                    break;
                case 3:
                    message.serviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Trace message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.Trace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.Trace} Trace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trace.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Trace message.
         * @function verify
         * @memberof events.Trace
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Trace.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.traceContext != null && message.hasOwnProperty("traceContext")) {
                if (!$util.isObject(message.traceContext))
                    return "traceContext: object expected";
                var key = Object.keys(message.traceContext);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.traceContext[key[i]]))
                        return "traceContext: string{k:string} expected";
            }
            if (message.traceTags != null && message.hasOwnProperty("traceTags")) {
                if (!$util.isObject(message.traceTags))
                    return "traceTags: object expected";
                var key = Object.keys(message.traceTags);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.traceTags[key[i]]))
                        return "traceTags: string{k:string} expected";
            }
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                if (!$util.isString(message.serviceName))
                    return "serviceName: string expected";
            return null;
        };

        /**
         * Creates a Trace message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.Trace
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.Trace} Trace
         */
        Trace.fromObject = function fromObject(object) {
            if (object instanceof $root.events.Trace)
                return object;
            var message = new $root.events.Trace();
            if (object.traceContext) {
                if (typeof object.traceContext !== "object")
                    throw TypeError(".events.Trace.traceContext: object expected");
                message.traceContext = {};
                for (var keys = Object.keys(object.traceContext), i = 0; i < keys.length; ++i)
                    message.traceContext[keys[i]] = String(object.traceContext[keys[i]]);
            }
            if (object.traceTags) {
                if (typeof object.traceTags !== "object")
                    throw TypeError(".events.Trace.traceTags: object expected");
                message.traceTags = {};
                for (var keys = Object.keys(object.traceTags), i = 0; i < keys.length; ++i)
                    message.traceTags[keys[i]] = String(object.traceTags[keys[i]]);
            }
            if (object.serviceName != null)
                message.serviceName = String(object.serviceName);
            return message;
        };

        /**
         * Creates a plain object from a Trace message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.Trace
         * @static
         * @param {events.Trace} message Trace
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Trace.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.traceContext = {};
                object.traceTags = {};
            }
            if (options.defaults)
                object.serviceName = "";
            var keys2;
            if (message.traceContext && (keys2 = Object.keys(message.traceContext)).length) {
                object.traceContext = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.traceContext[keys2[j]] = message.traceContext[keys2[j]];
            }
            if (message.traceTags && (keys2 = Object.keys(message.traceTags)).length) {
                object.traceTags = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.traceTags[keys2[j]] = message.traceTags[keys2[j]];
            }
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                object.serviceName = message.serviceName;
            return object;
        };

        /**
         * Converts this Trace to JSON.
         * @function toJSON
         * @memberof events.Trace
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Trace.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Trace;
    })();

    events.VtEvent = (function() {

        /**
         * Properties of a VtEvent.
         * @memberof events
         * @interface IVtEvent
         * @property {events.ICore|null} [core] VtEvent core
         * @property {events.ITrace|null} [trace] VtEvent trace
         * @property {Object.<string,string>|null} [baggage] VtEvent baggage
         * @property {google.protobuf.IAny|null} [data] VtEvent data
         */

        /**
         * Constructs a new VtEvent.
         * @memberof events
         * @classdesc Represents a VtEvent.
         * @implements IVtEvent
         * @constructor
         * @param {events.IVtEvent=} [properties] Properties to set
         */
        function VtEvent(properties) {
            this.baggage = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VtEvent core.
         * @member {events.ICore|null|undefined} core
         * @memberof events.VtEvent
         * @instance
         */
        VtEvent.prototype.core = null;

        /**
         * VtEvent trace.
         * @member {events.ITrace|null|undefined} trace
         * @memberof events.VtEvent
         * @instance
         */
        VtEvent.prototype.trace = null;

        /**
         * VtEvent baggage.
         * @member {Object.<string,string>} baggage
         * @memberof events.VtEvent
         * @instance
         */
        VtEvent.prototype.baggage = $util.emptyObject;

        /**
         * VtEvent data.
         * @member {google.protobuf.IAny|null|undefined} data
         * @memberof events.VtEvent
         * @instance
         */
        VtEvent.prototype.data = null;

        /**
         * Creates a new VtEvent instance using the specified properties.
         * @function create
         * @memberof events.VtEvent
         * @static
         * @param {events.IVtEvent=} [properties] Properties to set
         * @returns {events.VtEvent} VtEvent instance
         */
        VtEvent.create = function create(properties) {
            return new VtEvent(properties);
        };

        /**
         * Encodes the specified VtEvent message. Does not implicitly {@link events.VtEvent.verify|verify} messages.
         * @function encode
         * @memberof events.VtEvent
         * @static
         * @param {events.IVtEvent} message VtEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VtEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.core != null && message.hasOwnProperty("core"))
                $root.events.Core.encode(message.core, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.trace != null && message.hasOwnProperty("trace"))
                $root.events.Trace.encode(message.trace, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.baggage != null && message.hasOwnProperty("baggage"))
                for (var keys = Object.keys(message.baggage), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.baggage[keys[i]]).ldelim();
            if (message.data != null && message.hasOwnProperty("data"))
                $root.google.protobuf.Any.encode(message.data, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VtEvent message, length delimited. Does not implicitly {@link events.VtEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.VtEvent
         * @static
         * @param {events.IVtEvent} message VtEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VtEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VtEvent message from the specified reader or buffer.
         * @function decode
         * @memberof events.VtEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.VtEvent} VtEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VtEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.VtEvent(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.core = $root.events.Core.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.trace = $root.events.Trace.decode(reader, reader.uint32());
                    break;
                case 3:
                    reader.skip().pos++;
                    if (message.baggage === $util.emptyObject)
                        message.baggage = {};
                    key = reader.string();
                    reader.pos++;
                    message.baggage[key] = reader.string();
                    break;
                case 15:
                    message.data = $root.google.protobuf.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VtEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.VtEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.VtEvent} VtEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VtEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VtEvent message.
         * @function verify
         * @memberof events.VtEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VtEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.core != null && message.hasOwnProperty("core")) {
                var error = $root.events.Core.verify(message.core);
                if (error)
                    return "core." + error;
            }
            if (message.trace != null && message.hasOwnProperty("trace")) {
                var error = $root.events.Trace.verify(message.trace);
                if (error)
                    return "trace." + error;
            }
            if (message.baggage != null && message.hasOwnProperty("baggage")) {
                if (!$util.isObject(message.baggage))
                    return "baggage: object expected";
                var key = Object.keys(message.baggage);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.baggage[key[i]]))
                        return "baggage: string{k:string} expected";
            }
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.google.protobuf.Any.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a VtEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.VtEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.VtEvent} VtEvent
         */
        VtEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.events.VtEvent)
                return object;
            var message = new $root.events.VtEvent();
            if (object.core != null) {
                if (typeof object.core !== "object")
                    throw TypeError(".events.VtEvent.core: object expected");
                message.core = $root.events.Core.fromObject(object.core);
            }
            if (object.trace != null) {
                if (typeof object.trace !== "object")
                    throw TypeError(".events.VtEvent.trace: object expected");
                message.trace = $root.events.Trace.fromObject(object.trace);
            }
            if (object.baggage) {
                if (typeof object.baggage !== "object")
                    throw TypeError(".events.VtEvent.baggage: object expected");
                message.baggage = {};
                for (var keys = Object.keys(object.baggage), i = 0; i < keys.length; ++i)
                    message.baggage[keys[i]] = String(object.baggage[keys[i]]);
            }
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".events.VtEvent.data: object expected");
                message.data = $root.google.protobuf.Any.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a VtEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.VtEvent
         * @static
         * @param {events.VtEvent} message VtEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VtEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.baggage = {};
            if (options.defaults) {
                object.core = null;
                object.trace = null;
                object.data = null;
            }
            if (message.core != null && message.hasOwnProperty("core"))
                object.core = $root.events.Core.toObject(message.core, options);
            if (message.trace != null && message.hasOwnProperty("trace"))
                object.trace = $root.events.Trace.toObject(message.trace, options);
            var keys2;
            if (message.baggage && (keys2 = Object.keys(message.baggage)).length) {
                object.baggage = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.baggage[keys2[j]] = message.baggage[keys2[j]];
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.google.protobuf.Any.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this VtEvent to JSON.
         * @function toJSON
         * @memberof events.VtEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VtEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VtEvent;
    })();

    events.EngineBuildUploadCompleted = (function() {

        /**
         * Properties of an EngineBuildUploadCompleted.
         * @memberof events
         * @interface IEngineBuildUploadCompleted
         * @property {string|null} [userId] EngineBuildUploadCompleted userId
         * @property {string|null} [jobId] EngineBuildUploadCompleted jobId
         * @property {string|null} [assetId] EngineBuildUploadCompleted assetId
         * @property {boolean|null} [success] EngineBuildUploadCompleted success
         */

        /**
         * Constructs a new EngineBuildUploadCompleted.
         * @memberof events
         * @classdesc Represents an EngineBuildUploadCompleted.
         * @implements IEngineBuildUploadCompleted
         * @constructor
         * @param {events.IEngineBuildUploadCompleted=} [properties] Properties to set
         */
        function EngineBuildUploadCompleted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EngineBuildUploadCompleted userId.
         * @member {string} userId
         * @memberof events.EngineBuildUploadCompleted
         * @instance
         */
        EngineBuildUploadCompleted.prototype.userId = "";

        /**
         * EngineBuildUploadCompleted jobId.
         * @member {string} jobId
         * @memberof events.EngineBuildUploadCompleted
         * @instance
         */
        EngineBuildUploadCompleted.prototype.jobId = "";

        /**
         * EngineBuildUploadCompleted assetId.
         * @member {string} assetId
         * @memberof events.EngineBuildUploadCompleted
         * @instance
         */
        EngineBuildUploadCompleted.prototype.assetId = "";

        /**
         * EngineBuildUploadCompleted success.
         * @member {boolean} success
         * @memberof events.EngineBuildUploadCompleted
         * @instance
         */
        EngineBuildUploadCompleted.prototype.success = false;

        /**
         * Creates a new EngineBuildUploadCompleted instance using the specified properties.
         * @function create
         * @memberof events.EngineBuildUploadCompleted
         * @static
         * @param {events.IEngineBuildUploadCompleted=} [properties] Properties to set
         * @returns {events.EngineBuildUploadCompleted} EngineBuildUploadCompleted instance
         */
        EngineBuildUploadCompleted.create = function create(properties) {
            return new EngineBuildUploadCompleted(properties);
        };

        /**
         * Encodes the specified EngineBuildUploadCompleted message. Does not implicitly {@link events.EngineBuildUploadCompleted.verify|verify} messages.
         * @function encode
         * @memberof events.EngineBuildUploadCompleted
         * @static
         * @param {events.IEngineBuildUploadCompleted} message EngineBuildUploadCompleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildUploadCompleted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.jobId);
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.assetId);
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified EngineBuildUploadCompleted message, length delimited. Does not implicitly {@link events.EngineBuildUploadCompleted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EngineBuildUploadCompleted
         * @static
         * @param {events.IEngineBuildUploadCompleted} message EngineBuildUploadCompleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildUploadCompleted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EngineBuildUploadCompleted message from the specified reader or buffer.
         * @function decode
         * @memberof events.EngineBuildUploadCompleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EngineBuildUploadCompleted} EngineBuildUploadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildUploadCompleted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EngineBuildUploadCompleted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userId = reader.string();
                    break;
                case 11:
                    message.jobId = reader.string();
                    break;
                case 12:
                    message.assetId = reader.string();
                    break;
                case 13:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EngineBuildUploadCompleted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EngineBuildUploadCompleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EngineBuildUploadCompleted} EngineBuildUploadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildUploadCompleted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EngineBuildUploadCompleted message.
         * @function verify
         * @memberof events.EngineBuildUploadCompleted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EngineBuildUploadCompleted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                if (!$util.isString(message.jobId))
                    return "jobId: string expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!$util.isString(message.assetId))
                    return "assetId: string expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates an EngineBuildUploadCompleted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EngineBuildUploadCompleted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EngineBuildUploadCompleted} EngineBuildUploadCompleted
         */
        EngineBuildUploadCompleted.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EngineBuildUploadCompleted)
                return object;
            var message = new $root.events.EngineBuildUploadCompleted();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.jobId != null)
                message.jobId = String(object.jobId);
            if (object.assetId != null)
                message.assetId = String(object.assetId);
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from an EngineBuildUploadCompleted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EngineBuildUploadCompleted
         * @static
         * @param {events.EngineBuildUploadCompleted} message EngineBuildUploadCompleted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EngineBuildUploadCompleted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.jobId = "";
                object.assetId = "";
                object.success = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                object.jobId = message.jobId;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = message.assetId;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this EngineBuildUploadCompleted to JSON.
         * @function toJSON
         * @memberof events.EngineBuildUploadCompleted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EngineBuildUploadCompleted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EngineBuildUploadCompleted;
    })();

    events.EngineBuildManifestProcessed = (function() {

        /**
         * Properties of an EngineBuildManifestProcessed.
         * @memberof events
         * @interface IEngineBuildManifestProcessed
         * @property {string|null} [userId] EngineBuildManifestProcessed userId
         * @property {string|null} [jobId] EngineBuildManifestProcessed jobId
         * @property {boolean|null} [success] EngineBuildManifestProcessed success
         * @property {string|null} [engineId] EngineBuildManifestProcessed engineId
         * @property {string|null} [buildId] EngineBuildManifestProcessed buildId
         */

        /**
         * Constructs a new EngineBuildManifestProcessed.
         * @memberof events
         * @classdesc Represents an EngineBuildManifestProcessed.
         * @implements IEngineBuildManifestProcessed
         * @constructor
         * @param {events.IEngineBuildManifestProcessed=} [properties] Properties to set
         */
        function EngineBuildManifestProcessed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EngineBuildManifestProcessed userId.
         * @member {string} userId
         * @memberof events.EngineBuildManifestProcessed
         * @instance
         */
        EngineBuildManifestProcessed.prototype.userId = "";

        /**
         * EngineBuildManifestProcessed jobId.
         * @member {string} jobId
         * @memberof events.EngineBuildManifestProcessed
         * @instance
         */
        EngineBuildManifestProcessed.prototype.jobId = "";

        /**
         * EngineBuildManifestProcessed success.
         * @member {boolean} success
         * @memberof events.EngineBuildManifestProcessed
         * @instance
         */
        EngineBuildManifestProcessed.prototype.success = false;

        /**
         * EngineBuildManifestProcessed engineId.
         * @member {string} engineId
         * @memberof events.EngineBuildManifestProcessed
         * @instance
         */
        EngineBuildManifestProcessed.prototype.engineId = "";

        /**
         * EngineBuildManifestProcessed buildId.
         * @member {string} buildId
         * @memberof events.EngineBuildManifestProcessed
         * @instance
         */
        EngineBuildManifestProcessed.prototype.buildId = "";

        /**
         * Creates a new EngineBuildManifestProcessed instance using the specified properties.
         * @function create
         * @memberof events.EngineBuildManifestProcessed
         * @static
         * @param {events.IEngineBuildManifestProcessed=} [properties] Properties to set
         * @returns {events.EngineBuildManifestProcessed} EngineBuildManifestProcessed instance
         */
        EngineBuildManifestProcessed.create = function create(properties) {
            return new EngineBuildManifestProcessed(properties);
        };

        /**
         * Encodes the specified EngineBuildManifestProcessed message. Does not implicitly {@link events.EngineBuildManifestProcessed.verify|verify} messages.
         * @function encode
         * @memberof events.EngineBuildManifestProcessed
         * @static
         * @param {events.IEngineBuildManifestProcessed} message EngineBuildManifestProcessed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildManifestProcessed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.jobId);
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.success);
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.buildId);
            return writer;
        };

        /**
         * Encodes the specified EngineBuildManifestProcessed message, length delimited. Does not implicitly {@link events.EngineBuildManifestProcessed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EngineBuildManifestProcessed
         * @static
         * @param {events.IEngineBuildManifestProcessed} message EngineBuildManifestProcessed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildManifestProcessed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EngineBuildManifestProcessed message from the specified reader or buffer.
         * @function decode
         * @memberof events.EngineBuildManifestProcessed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EngineBuildManifestProcessed} EngineBuildManifestProcessed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildManifestProcessed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EngineBuildManifestProcessed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userId = reader.string();
                    break;
                case 11:
                    message.jobId = reader.string();
                    break;
                case 12:
                    message.success = reader.bool();
                    break;
                case 13:
                    message.engineId = reader.string();
                    break;
                case 14:
                    message.buildId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EngineBuildManifestProcessed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EngineBuildManifestProcessed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EngineBuildManifestProcessed} EngineBuildManifestProcessed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildManifestProcessed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EngineBuildManifestProcessed message.
         * @function verify
         * @memberof events.EngineBuildManifestProcessed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EngineBuildManifestProcessed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                if (!$util.isString(message.jobId))
                    return "jobId: string expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            return null;
        };

        /**
         * Creates an EngineBuildManifestProcessed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EngineBuildManifestProcessed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EngineBuildManifestProcessed} EngineBuildManifestProcessed
         */
        EngineBuildManifestProcessed.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EngineBuildManifestProcessed)
                return object;
            var message = new $root.events.EngineBuildManifestProcessed();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.jobId != null)
                message.jobId = String(object.jobId);
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            return message;
        };

        /**
         * Creates a plain object from an EngineBuildManifestProcessed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EngineBuildManifestProcessed
         * @static
         * @param {events.EngineBuildManifestProcessed} message EngineBuildManifestProcessed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EngineBuildManifestProcessed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.jobId = "";
                object.success = false;
                object.engineId = "";
                object.buildId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                object.jobId = message.jobId;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            return object;
        };

        /**
         * Converts this EngineBuildManifestProcessed to JSON.
         * @function toJSON
         * @memberof events.EngineBuildManifestProcessed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EngineBuildManifestProcessed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EngineBuildManifestProcessed;
    })();

    events.EngineBuildVulnerabilityChecked = (function() {

        /**
         * Properties of an EngineBuildVulnerabilityChecked.
         * @memberof events
         * @interface IEngineBuildVulnerabilityChecked
         * @property {string|null} [userId] EngineBuildVulnerabilityChecked userId
         * @property {string|null} [jobId] EngineBuildVulnerabilityChecked jobId
         * @property {string|null} [assetId] EngineBuildVulnerabilityChecked assetId
         * @property {boolean|null} [success] EngineBuildVulnerabilityChecked success
         * @property {string|null} [engineId] EngineBuildVulnerabilityChecked engineId
         * @property {string|null} [buildId] EngineBuildVulnerabilityChecked buildId
         */

        /**
         * Constructs a new EngineBuildVulnerabilityChecked.
         * @memberof events
         * @classdesc Represents an EngineBuildVulnerabilityChecked.
         * @implements IEngineBuildVulnerabilityChecked
         * @constructor
         * @param {events.IEngineBuildVulnerabilityChecked=} [properties] Properties to set
         */
        function EngineBuildVulnerabilityChecked(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EngineBuildVulnerabilityChecked userId.
         * @member {string} userId
         * @memberof events.EngineBuildVulnerabilityChecked
         * @instance
         */
        EngineBuildVulnerabilityChecked.prototype.userId = "";

        /**
         * EngineBuildVulnerabilityChecked jobId.
         * @member {string} jobId
         * @memberof events.EngineBuildVulnerabilityChecked
         * @instance
         */
        EngineBuildVulnerabilityChecked.prototype.jobId = "";

        /**
         * EngineBuildVulnerabilityChecked assetId.
         * @member {string} assetId
         * @memberof events.EngineBuildVulnerabilityChecked
         * @instance
         */
        EngineBuildVulnerabilityChecked.prototype.assetId = "";

        /**
         * EngineBuildVulnerabilityChecked success.
         * @member {boolean} success
         * @memberof events.EngineBuildVulnerabilityChecked
         * @instance
         */
        EngineBuildVulnerabilityChecked.prototype.success = false;

        /**
         * EngineBuildVulnerabilityChecked engineId.
         * @member {string} engineId
         * @memberof events.EngineBuildVulnerabilityChecked
         * @instance
         */
        EngineBuildVulnerabilityChecked.prototype.engineId = "";

        /**
         * EngineBuildVulnerabilityChecked buildId.
         * @member {string} buildId
         * @memberof events.EngineBuildVulnerabilityChecked
         * @instance
         */
        EngineBuildVulnerabilityChecked.prototype.buildId = "";

        /**
         * Creates a new EngineBuildVulnerabilityChecked instance using the specified properties.
         * @function create
         * @memberof events.EngineBuildVulnerabilityChecked
         * @static
         * @param {events.IEngineBuildVulnerabilityChecked=} [properties] Properties to set
         * @returns {events.EngineBuildVulnerabilityChecked} EngineBuildVulnerabilityChecked instance
         */
        EngineBuildVulnerabilityChecked.create = function create(properties) {
            return new EngineBuildVulnerabilityChecked(properties);
        };

        /**
         * Encodes the specified EngineBuildVulnerabilityChecked message. Does not implicitly {@link events.EngineBuildVulnerabilityChecked.verify|verify} messages.
         * @function encode
         * @memberof events.EngineBuildVulnerabilityChecked
         * @static
         * @param {events.IEngineBuildVulnerabilityChecked} message EngineBuildVulnerabilityChecked message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildVulnerabilityChecked.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.jobId);
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.assetId);
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.success);
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.buildId);
            return writer;
        };

        /**
         * Encodes the specified EngineBuildVulnerabilityChecked message, length delimited. Does not implicitly {@link events.EngineBuildVulnerabilityChecked.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EngineBuildVulnerabilityChecked
         * @static
         * @param {events.IEngineBuildVulnerabilityChecked} message EngineBuildVulnerabilityChecked message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildVulnerabilityChecked.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EngineBuildVulnerabilityChecked message from the specified reader or buffer.
         * @function decode
         * @memberof events.EngineBuildVulnerabilityChecked
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EngineBuildVulnerabilityChecked} EngineBuildVulnerabilityChecked
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildVulnerabilityChecked.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EngineBuildVulnerabilityChecked();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userId = reader.string();
                    break;
                case 11:
                    message.jobId = reader.string();
                    break;
                case 12:
                    message.assetId = reader.string();
                    break;
                case 13:
                    message.success = reader.bool();
                    break;
                case 14:
                    message.engineId = reader.string();
                    break;
                case 15:
                    message.buildId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EngineBuildVulnerabilityChecked message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EngineBuildVulnerabilityChecked
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EngineBuildVulnerabilityChecked} EngineBuildVulnerabilityChecked
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildVulnerabilityChecked.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EngineBuildVulnerabilityChecked message.
         * @function verify
         * @memberof events.EngineBuildVulnerabilityChecked
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EngineBuildVulnerabilityChecked.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                if (!$util.isString(message.jobId))
                    return "jobId: string expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!$util.isString(message.assetId))
                    return "assetId: string expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            return null;
        };

        /**
         * Creates an EngineBuildVulnerabilityChecked message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EngineBuildVulnerabilityChecked
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EngineBuildVulnerabilityChecked} EngineBuildVulnerabilityChecked
         */
        EngineBuildVulnerabilityChecked.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EngineBuildVulnerabilityChecked)
                return object;
            var message = new $root.events.EngineBuildVulnerabilityChecked();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.jobId != null)
                message.jobId = String(object.jobId);
            if (object.assetId != null)
                message.assetId = String(object.assetId);
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            return message;
        };

        /**
         * Creates a plain object from an EngineBuildVulnerabilityChecked message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EngineBuildVulnerabilityChecked
         * @static
         * @param {events.EngineBuildVulnerabilityChecked} message EngineBuildVulnerabilityChecked
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EngineBuildVulnerabilityChecked.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.jobId = "";
                object.assetId = "";
                object.success = false;
                object.engineId = "";
                object.buildId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                object.jobId = message.jobId;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = message.assetId;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            return object;
        };

        /**
         * Converts this EngineBuildVulnerabilityChecked to JSON.
         * @function toJSON
         * @memberof events.EngineBuildVulnerabilityChecked
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EngineBuildVulnerabilityChecked.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EngineBuildVulnerabilityChecked;
    })();

    events.EngineBuildTestReportDone = (function() {

        /**
         * Properties of an EngineBuildTestReportDone.
         * @memberof events
         * @interface IEngineBuildTestReportDone
         * @property {string|null} [userId] EngineBuildTestReportDone userId
         * @property {string|null} [jobId] EngineBuildTestReportDone jobId
         * @property {boolean|null} [success] EngineBuildTestReportDone success
         * @property {string|null} [engineId] EngineBuildTestReportDone engineId
         * @property {string|null} [buildId] EngineBuildTestReportDone buildId
         */

        /**
         * Constructs a new EngineBuildTestReportDone.
         * @memberof events
         * @classdesc Represents an EngineBuildTestReportDone.
         * @implements IEngineBuildTestReportDone
         * @constructor
         * @param {events.IEngineBuildTestReportDone=} [properties] Properties to set
         */
        function EngineBuildTestReportDone(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EngineBuildTestReportDone userId.
         * @member {string} userId
         * @memberof events.EngineBuildTestReportDone
         * @instance
         */
        EngineBuildTestReportDone.prototype.userId = "";

        /**
         * EngineBuildTestReportDone jobId.
         * @member {string} jobId
         * @memberof events.EngineBuildTestReportDone
         * @instance
         */
        EngineBuildTestReportDone.prototype.jobId = "";

        /**
         * EngineBuildTestReportDone success.
         * @member {boolean} success
         * @memberof events.EngineBuildTestReportDone
         * @instance
         */
        EngineBuildTestReportDone.prototype.success = false;

        /**
         * EngineBuildTestReportDone engineId.
         * @member {string} engineId
         * @memberof events.EngineBuildTestReportDone
         * @instance
         */
        EngineBuildTestReportDone.prototype.engineId = "";

        /**
         * EngineBuildTestReportDone buildId.
         * @member {string} buildId
         * @memberof events.EngineBuildTestReportDone
         * @instance
         */
        EngineBuildTestReportDone.prototype.buildId = "";

        /**
         * Creates a new EngineBuildTestReportDone instance using the specified properties.
         * @function create
         * @memberof events.EngineBuildTestReportDone
         * @static
         * @param {events.IEngineBuildTestReportDone=} [properties] Properties to set
         * @returns {events.EngineBuildTestReportDone} EngineBuildTestReportDone instance
         */
        EngineBuildTestReportDone.create = function create(properties) {
            return new EngineBuildTestReportDone(properties);
        };

        /**
         * Encodes the specified EngineBuildTestReportDone message. Does not implicitly {@link events.EngineBuildTestReportDone.verify|verify} messages.
         * @function encode
         * @memberof events.EngineBuildTestReportDone
         * @static
         * @param {events.IEngineBuildTestReportDone} message EngineBuildTestReportDone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildTestReportDone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.jobId);
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.success);
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.buildId);
            return writer;
        };

        /**
         * Encodes the specified EngineBuildTestReportDone message, length delimited. Does not implicitly {@link events.EngineBuildTestReportDone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EngineBuildTestReportDone
         * @static
         * @param {events.IEngineBuildTestReportDone} message EngineBuildTestReportDone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildTestReportDone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EngineBuildTestReportDone message from the specified reader or buffer.
         * @function decode
         * @memberof events.EngineBuildTestReportDone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EngineBuildTestReportDone} EngineBuildTestReportDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildTestReportDone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EngineBuildTestReportDone();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userId = reader.string();
                    break;
                case 11:
                    message.jobId = reader.string();
                    break;
                case 12:
                    message.success = reader.bool();
                    break;
                case 13:
                    message.engineId = reader.string();
                    break;
                case 14:
                    message.buildId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EngineBuildTestReportDone message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EngineBuildTestReportDone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EngineBuildTestReportDone} EngineBuildTestReportDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildTestReportDone.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EngineBuildTestReportDone message.
         * @function verify
         * @memberof events.EngineBuildTestReportDone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EngineBuildTestReportDone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                if (!$util.isString(message.jobId))
                    return "jobId: string expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            return null;
        };

        /**
         * Creates an EngineBuildTestReportDone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EngineBuildTestReportDone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EngineBuildTestReportDone} EngineBuildTestReportDone
         */
        EngineBuildTestReportDone.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EngineBuildTestReportDone)
                return object;
            var message = new $root.events.EngineBuildTestReportDone();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.jobId != null)
                message.jobId = String(object.jobId);
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            return message;
        };

        /**
         * Creates a plain object from an EngineBuildTestReportDone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EngineBuildTestReportDone
         * @static
         * @param {events.EngineBuildTestReportDone} message EngineBuildTestReportDone
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EngineBuildTestReportDone.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.jobId = "";
                object.success = false;
                object.engineId = "";
                object.buildId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                object.jobId = message.jobId;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            return object;
        };

        /**
         * Converts this EngineBuildTestReportDone to JSON.
         * @function toJSON
         * @memberof events.EngineBuildTestReportDone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EngineBuildTestReportDone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EngineBuildTestReportDone;
    })();

    events.engineBuildDeploySuccess = (function() {

        /**
         * Properties of an engineBuildDeploySuccess.
         * @memberof events
         * @interface IengineBuildDeploySuccess
         * @property {string|null} [userId] engineBuildDeploySuccess userId
         * @property {string|null} [engineId] engineBuildDeploySuccess engineId
         * @property {string|null} [buildId] engineBuildDeploySuccess buildId
         */

        /**
         * Constructs a new engineBuildDeploySuccess.
         * @memberof events
         * @classdesc Represents an engineBuildDeploySuccess.
         * @implements IengineBuildDeploySuccess
         * @constructor
         * @param {events.IengineBuildDeploySuccess=} [properties] Properties to set
         */
        function engineBuildDeploySuccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * engineBuildDeploySuccess userId.
         * @member {string} userId
         * @memberof events.engineBuildDeploySuccess
         * @instance
         */
        engineBuildDeploySuccess.prototype.userId = "";

        /**
         * engineBuildDeploySuccess engineId.
         * @member {string} engineId
         * @memberof events.engineBuildDeploySuccess
         * @instance
         */
        engineBuildDeploySuccess.prototype.engineId = "";

        /**
         * engineBuildDeploySuccess buildId.
         * @member {string} buildId
         * @memberof events.engineBuildDeploySuccess
         * @instance
         */
        engineBuildDeploySuccess.prototype.buildId = "";

        /**
         * Creates a new engineBuildDeploySuccess instance using the specified properties.
         * @function create
         * @memberof events.engineBuildDeploySuccess
         * @static
         * @param {events.IengineBuildDeploySuccess=} [properties] Properties to set
         * @returns {events.engineBuildDeploySuccess} engineBuildDeploySuccess instance
         */
        engineBuildDeploySuccess.create = function create(properties) {
            return new engineBuildDeploySuccess(properties);
        };

        /**
         * Encodes the specified engineBuildDeploySuccess message. Does not implicitly {@link events.engineBuildDeploySuccess.verify|verify} messages.
         * @function encode
         * @memberof events.engineBuildDeploySuccess
         * @static
         * @param {events.IengineBuildDeploySuccess} message engineBuildDeploySuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        engineBuildDeploySuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.buildId);
            return writer;
        };

        /**
         * Encodes the specified engineBuildDeploySuccess message, length delimited. Does not implicitly {@link events.engineBuildDeploySuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.engineBuildDeploySuccess
         * @static
         * @param {events.IengineBuildDeploySuccess} message engineBuildDeploySuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        engineBuildDeploySuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an engineBuildDeploySuccess message from the specified reader or buffer.
         * @function decode
         * @memberof events.engineBuildDeploySuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.engineBuildDeploySuccess} engineBuildDeploySuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        engineBuildDeploySuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.engineBuildDeploySuccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userId = reader.string();
                    break;
                case 11:
                    message.engineId = reader.string();
                    break;
                case 12:
                    message.buildId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an engineBuildDeploySuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.engineBuildDeploySuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.engineBuildDeploySuccess} engineBuildDeploySuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        engineBuildDeploySuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an engineBuildDeploySuccess message.
         * @function verify
         * @memberof events.engineBuildDeploySuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        engineBuildDeploySuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            return null;
        };

        /**
         * Creates an engineBuildDeploySuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.engineBuildDeploySuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.engineBuildDeploySuccess} engineBuildDeploySuccess
         */
        engineBuildDeploySuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.events.engineBuildDeploySuccess)
                return object;
            var message = new $root.events.engineBuildDeploySuccess();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            return message;
        };

        /**
         * Creates a plain object from an engineBuildDeploySuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.engineBuildDeploySuccess
         * @static
         * @param {events.engineBuildDeploySuccess} message engineBuildDeploySuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        engineBuildDeploySuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.engineId = "";
                object.buildId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            return object;
        };

        /**
         * Converts this engineBuildDeploySuccess to JSON.
         * @function toJSON
         * @memberof events.engineBuildDeploySuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        engineBuildDeploySuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return engineBuildDeploySuccess;
    })();

    events.engineBuildDeployFail = (function() {

        /**
         * Properties of an engineBuildDeployFail.
         * @memberof events
         * @interface IengineBuildDeployFail
         * @property {string|null} [userId] engineBuildDeployFail userId
         * @property {string|null} [engineId] engineBuildDeployFail engineId
         * @property {string|null} [buildId] engineBuildDeployFail buildId
         */

        /**
         * Constructs a new engineBuildDeployFail.
         * @memberof events
         * @classdesc Represents an engineBuildDeployFail.
         * @implements IengineBuildDeployFail
         * @constructor
         * @param {events.IengineBuildDeployFail=} [properties] Properties to set
         */
        function engineBuildDeployFail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * engineBuildDeployFail userId.
         * @member {string} userId
         * @memberof events.engineBuildDeployFail
         * @instance
         */
        engineBuildDeployFail.prototype.userId = "";

        /**
         * engineBuildDeployFail engineId.
         * @member {string} engineId
         * @memberof events.engineBuildDeployFail
         * @instance
         */
        engineBuildDeployFail.prototype.engineId = "";

        /**
         * engineBuildDeployFail buildId.
         * @member {string} buildId
         * @memberof events.engineBuildDeployFail
         * @instance
         */
        engineBuildDeployFail.prototype.buildId = "";

        /**
         * Creates a new engineBuildDeployFail instance using the specified properties.
         * @function create
         * @memberof events.engineBuildDeployFail
         * @static
         * @param {events.IengineBuildDeployFail=} [properties] Properties to set
         * @returns {events.engineBuildDeployFail} engineBuildDeployFail instance
         */
        engineBuildDeployFail.create = function create(properties) {
            return new engineBuildDeployFail(properties);
        };

        /**
         * Encodes the specified engineBuildDeployFail message. Does not implicitly {@link events.engineBuildDeployFail.verify|verify} messages.
         * @function encode
         * @memberof events.engineBuildDeployFail
         * @static
         * @param {events.IengineBuildDeployFail} message engineBuildDeployFail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        engineBuildDeployFail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.buildId);
            return writer;
        };

        /**
         * Encodes the specified engineBuildDeployFail message, length delimited. Does not implicitly {@link events.engineBuildDeployFail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.engineBuildDeployFail
         * @static
         * @param {events.IengineBuildDeployFail} message engineBuildDeployFail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        engineBuildDeployFail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an engineBuildDeployFail message from the specified reader or buffer.
         * @function decode
         * @memberof events.engineBuildDeployFail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.engineBuildDeployFail} engineBuildDeployFail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        engineBuildDeployFail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.engineBuildDeployFail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userId = reader.string();
                    break;
                case 11:
                    message.engineId = reader.string();
                    break;
                case 12:
                    message.buildId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an engineBuildDeployFail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.engineBuildDeployFail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.engineBuildDeployFail} engineBuildDeployFail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        engineBuildDeployFail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an engineBuildDeployFail message.
         * @function verify
         * @memberof events.engineBuildDeployFail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        engineBuildDeployFail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            return null;
        };

        /**
         * Creates an engineBuildDeployFail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.engineBuildDeployFail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.engineBuildDeployFail} engineBuildDeployFail
         */
        engineBuildDeployFail.fromObject = function fromObject(object) {
            if (object instanceof $root.events.engineBuildDeployFail)
                return object;
            var message = new $root.events.engineBuildDeployFail();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            return message;
        };

        /**
         * Creates a plain object from an engineBuildDeployFail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.engineBuildDeployFail
         * @static
         * @param {events.engineBuildDeployFail} message engineBuildDeployFail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        engineBuildDeployFail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.engineId = "";
                object.buildId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            return object;
        };

        /**
         * Converts this engineBuildDeployFail to JSON.
         * @function toJSON
         * @memberof events.engineBuildDeployFail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        engineBuildDeployFail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return engineBuildDeployFail;
    })();

    events.EngineBuildApproved = (function() {

        /**
         * Properties of an EngineBuildApproved.
         * @memberof events
         * @interface IEngineBuildApproved
         * @property {string|null} [userId] EngineBuildApproved userId
         * @property {string|null} [engineId] EngineBuildApproved engineId
         * @property {string|null} [buildId] EngineBuildApproved buildId
         * @property {number|Long|null} [organizationId] EngineBuildApproved organizationId
         * @property {number|null} [statusCode] EngineBuildApproved statusCode
         * @property {string|null} [action] EngineBuildApproved action
         */

        /**
         * Constructs a new EngineBuildApproved.
         * @memberof events
         * @classdesc Represents an EngineBuildApproved.
         * @implements IEngineBuildApproved
         * @constructor
         * @param {events.IEngineBuildApproved=} [properties] Properties to set
         */
        function EngineBuildApproved(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EngineBuildApproved userId.
         * @member {string} userId
         * @memberof events.EngineBuildApproved
         * @instance
         */
        EngineBuildApproved.prototype.userId = "";

        /**
         * EngineBuildApproved engineId.
         * @member {string} engineId
         * @memberof events.EngineBuildApproved
         * @instance
         */
        EngineBuildApproved.prototype.engineId = "";

        /**
         * EngineBuildApproved buildId.
         * @member {string} buildId
         * @memberof events.EngineBuildApproved
         * @instance
         */
        EngineBuildApproved.prototype.buildId = "";

        /**
         * EngineBuildApproved organizationId.
         * @member {number|Long} organizationId
         * @memberof events.EngineBuildApproved
         * @instance
         */
        EngineBuildApproved.prototype.organizationId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EngineBuildApproved statusCode.
         * @member {number} statusCode
         * @memberof events.EngineBuildApproved
         * @instance
         */
        EngineBuildApproved.prototype.statusCode = 0;

        /**
         * EngineBuildApproved action.
         * @member {string} action
         * @memberof events.EngineBuildApproved
         * @instance
         */
        EngineBuildApproved.prototype.action = "";

        /**
         * Creates a new EngineBuildApproved instance using the specified properties.
         * @function create
         * @memberof events.EngineBuildApproved
         * @static
         * @param {events.IEngineBuildApproved=} [properties] Properties to set
         * @returns {events.EngineBuildApproved} EngineBuildApproved instance
         */
        EngineBuildApproved.create = function create(properties) {
            return new EngineBuildApproved(properties);
        };

        /**
         * Encodes the specified EngineBuildApproved message. Does not implicitly {@link events.EngineBuildApproved.verify|verify} messages.
         * @function encode
         * @memberof events.EngineBuildApproved
         * @static
         * @param {events.IEngineBuildApproved} message EngineBuildApproved message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildApproved.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.buildId);
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.organizationId);
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.statusCode);
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified EngineBuildApproved message, length delimited. Does not implicitly {@link events.EngineBuildApproved.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EngineBuildApproved
         * @static
         * @param {events.IEngineBuildApproved} message EngineBuildApproved message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildApproved.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EngineBuildApproved message from the specified reader or buffer.
         * @function decode
         * @memberof events.EngineBuildApproved
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EngineBuildApproved} EngineBuildApproved
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildApproved.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EngineBuildApproved();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userId = reader.string();
                    break;
                case 11:
                    message.engineId = reader.string();
                    break;
                case 12:
                    message.buildId = reader.string();
                    break;
                case 13:
                    message.organizationId = reader.int64();
                    break;
                case 14:
                    message.statusCode = reader.int32();
                    break;
                case 15:
                    message.action = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EngineBuildApproved message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EngineBuildApproved
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EngineBuildApproved} EngineBuildApproved
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildApproved.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EngineBuildApproved message.
         * @function verify
         * @memberof events.EngineBuildApproved
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EngineBuildApproved.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (!$util.isInteger(message.organizationId) && !(message.organizationId && $util.isInteger(message.organizationId.low) && $util.isInteger(message.organizationId.high)))
                    return "organizationId: integer|Long expected";
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isInteger(message.statusCode))
                    return "statusCode: integer expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates an EngineBuildApproved message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EngineBuildApproved
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EngineBuildApproved} EngineBuildApproved
         */
        EngineBuildApproved.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EngineBuildApproved)
                return object;
            var message = new $root.events.EngineBuildApproved();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            if (object.organizationId != null)
                if ($util.Long)
                    (message.organizationId = $util.Long.fromValue(object.organizationId)).unsigned = false;
                else if (typeof object.organizationId === "string")
                    message.organizationId = parseInt(object.organizationId, 10);
                else if (typeof object.organizationId === "number")
                    message.organizationId = object.organizationId;
                else if (typeof object.organizationId === "object")
                    message.organizationId = new $util.LongBits(object.organizationId.low >>> 0, object.organizationId.high >>> 0).toNumber();
            if (object.statusCode != null)
                message.statusCode = object.statusCode | 0;
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from an EngineBuildApproved message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EngineBuildApproved
         * @static
         * @param {events.EngineBuildApproved} message EngineBuildApproved
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EngineBuildApproved.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.engineId = "";
                object.buildId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.organizationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.organizationId = options.longs === String ? "0" : 0;
                object.statusCode = 0;
                object.action = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (typeof message.organizationId === "number")
                    object.organizationId = options.longs === String ? String(message.organizationId) : message.organizationId;
                else
                    object.organizationId = options.longs === String ? $util.Long.prototype.toString.call(message.organizationId) : options.longs === Number ? new $util.LongBits(message.organizationId.low >>> 0, message.organizationId.high >>> 0).toNumber() : message.organizationId;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this EngineBuildApproved to JSON.
         * @function toJSON
         * @memberof events.EngineBuildApproved
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EngineBuildApproved.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EngineBuildApproved;
    })();

    events.EngineBuildDisapprove = (function() {

        /**
         * Properties of an EngineBuildDisapprove.
         * @memberof events
         * @interface IEngineBuildDisapprove
         * @property {string|null} [userId] EngineBuildDisapprove userId
         * @property {string|null} [engineId] EngineBuildDisapprove engineId
         * @property {string|null} [buildId] EngineBuildDisapprove buildId
         * @property {number|Long|null} [organizationId] EngineBuildDisapprove organizationId
         * @property {number|null} [statusCode] EngineBuildDisapprove statusCode
         * @property {string|null} [action] EngineBuildDisapprove action
         */

        /**
         * Constructs a new EngineBuildDisapprove.
         * @memberof events
         * @classdesc Represents an EngineBuildDisapprove.
         * @implements IEngineBuildDisapprove
         * @constructor
         * @param {events.IEngineBuildDisapprove=} [properties] Properties to set
         */
        function EngineBuildDisapprove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EngineBuildDisapprove userId.
         * @member {string} userId
         * @memberof events.EngineBuildDisapprove
         * @instance
         */
        EngineBuildDisapprove.prototype.userId = "";

        /**
         * EngineBuildDisapprove engineId.
         * @member {string} engineId
         * @memberof events.EngineBuildDisapprove
         * @instance
         */
        EngineBuildDisapprove.prototype.engineId = "";

        /**
         * EngineBuildDisapprove buildId.
         * @member {string} buildId
         * @memberof events.EngineBuildDisapprove
         * @instance
         */
        EngineBuildDisapprove.prototype.buildId = "";

        /**
         * EngineBuildDisapprove organizationId.
         * @member {number|Long} organizationId
         * @memberof events.EngineBuildDisapprove
         * @instance
         */
        EngineBuildDisapprove.prototype.organizationId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EngineBuildDisapprove statusCode.
         * @member {number} statusCode
         * @memberof events.EngineBuildDisapprove
         * @instance
         */
        EngineBuildDisapprove.prototype.statusCode = 0;

        /**
         * EngineBuildDisapprove action.
         * @member {string} action
         * @memberof events.EngineBuildDisapprove
         * @instance
         */
        EngineBuildDisapprove.prototype.action = "";

        /**
         * Creates a new EngineBuildDisapprove instance using the specified properties.
         * @function create
         * @memberof events.EngineBuildDisapprove
         * @static
         * @param {events.IEngineBuildDisapprove=} [properties] Properties to set
         * @returns {events.EngineBuildDisapprove} EngineBuildDisapprove instance
         */
        EngineBuildDisapprove.create = function create(properties) {
            return new EngineBuildDisapprove(properties);
        };

        /**
         * Encodes the specified EngineBuildDisapprove message. Does not implicitly {@link events.EngineBuildDisapprove.verify|verify} messages.
         * @function encode
         * @memberof events.EngineBuildDisapprove
         * @static
         * @param {events.IEngineBuildDisapprove} message EngineBuildDisapprove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildDisapprove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.buildId);
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.organizationId);
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.statusCode);
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified EngineBuildDisapprove message, length delimited. Does not implicitly {@link events.EngineBuildDisapprove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EngineBuildDisapprove
         * @static
         * @param {events.IEngineBuildDisapprove} message EngineBuildDisapprove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildDisapprove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EngineBuildDisapprove message from the specified reader or buffer.
         * @function decode
         * @memberof events.EngineBuildDisapprove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EngineBuildDisapprove} EngineBuildDisapprove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildDisapprove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EngineBuildDisapprove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.userId = reader.string();
                    break;
                case 11:
                    message.engineId = reader.string();
                    break;
                case 12:
                    message.buildId = reader.string();
                    break;
                case 13:
                    message.organizationId = reader.int64();
                    break;
                case 14:
                    message.statusCode = reader.int32();
                    break;
                case 15:
                    message.action = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EngineBuildDisapprove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EngineBuildDisapprove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EngineBuildDisapprove} EngineBuildDisapprove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildDisapprove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EngineBuildDisapprove message.
         * @function verify
         * @memberof events.EngineBuildDisapprove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EngineBuildDisapprove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (!$util.isInteger(message.organizationId) && !(message.organizationId && $util.isInteger(message.organizationId.low) && $util.isInteger(message.organizationId.high)))
                    return "organizationId: integer|Long expected";
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isInteger(message.statusCode))
                    return "statusCode: integer expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates an EngineBuildDisapprove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EngineBuildDisapprove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EngineBuildDisapprove} EngineBuildDisapprove
         */
        EngineBuildDisapprove.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EngineBuildDisapprove)
                return object;
            var message = new $root.events.EngineBuildDisapprove();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            if (object.organizationId != null)
                if ($util.Long)
                    (message.organizationId = $util.Long.fromValue(object.organizationId)).unsigned = false;
                else if (typeof object.organizationId === "string")
                    message.organizationId = parseInt(object.organizationId, 10);
                else if (typeof object.organizationId === "number")
                    message.organizationId = object.organizationId;
                else if (typeof object.organizationId === "object")
                    message.organizationId = new $util.LongBits(object.organizationId.low >>> 0, object.organizationId.high >>> 0).toNumber();
            if (object.statusCode != null)
                message.statusCode = object.statusCode | 0;
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from an EngineBuildDisapprove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EngineBuildDisapprove
         * @static
         * @param {events.EngineBuildDisapprove} message EngineBuildDisapprove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EngineBuildDisapprove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.engineId = "";
                object.buildId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.organizationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.organizationId = options.longs === String ? "0" : 0;
                object.statusCode = 0;
                object.action = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (typeof message.organizationId === "number")
                    object.organizationId = options.longs === String ? String(message.organizationId) : message.organizationId;
                else
                    object.organizationId = options.longs === String ? $util.Long.prototype.toString.call(message.organizationId) : options.longs === Number ? new $util.LongBits(message.organizationId.low >>> 0, message.organizationId.high >>> 0).toNumber() : message.organizationId;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this EngineBuildDisapprove to JSON.
         * @function toJSON
         * @memberof events.EngineBuildDisapprove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EngineBuildDisapprove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EngineBuildDisapprove;
    })();

    events.EngineBuildCreate = (function() {

        /**
         * Properties of an EngineBuildCreate.
         * @memberof events
         * @interface IEngineBuildCreate
         * @property {string|null} [engineId] EngineBuildCreate engineId
         * @property {string|null} [buildId] EngineBuildCreate buildId
         * @property {number|null} [statusCode] EngineBuildCreate statusCode
         * @property {string|null} [action] EngineBuildCreate action
         */

        /**
         * Constructs a new EngineBuildCreate.
         * @memberof events
         * @classdesc Represents an EngineBuildCreate.
         * @implements IEngineBuildCreate
         * @constructor
         * @param {events.IEngineBuildCreate=} [properties] Properties to set
         */
        function EngineBuildCreate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EngineBuildCreate engineId.
         * @member {string} engineId
         * @memberof events.EngineBuildCreate
         * @instance
         */
        EngineBuildCreate.prototype.engineId = "";

        /**
         * EngineBuildCreate buildId.
         * @member {string} buildId
         * @memberof events.EngineBuildCreate
         * @instance
         */
        EngineBuildCreate.prototype.buildId = "";

        /**
         * EngineBuildCreate statusCode.
         * @member {number} statusCode
         * @memberof events.EngineBuildCreate
         * @instance
         */
        EngineBuildCreate.prototype.statusCode = 0;

        /**
         * EngineBuildCreate action.
         * @member {string} action
         * @memberof events.EngineBuildCreate
         * @instance
         */
        EngineBuildCreate.prototype.action = "";

        /**
         * Creates a new EngineBuildCreate instance using the specified properties.
         * @function create
         * @memberof events.EngineBuildCreate
         * @static
         * @param {events.IEngineBuildCreate=} [properties] Properties to set
         * @returns {events.EngineBuildCreate} EngineBuildCreate instance
         */
        EngineBuildCreate.create = function create(properties) {
            return new EngineBuildCreate(properties);
        };

        /**
         * Encodes the specified EngineBuildCreate message. Does not implicitly {@link events.EngineBuildCreate.verify|verify} messages.
         * @function encode
         * @memberof events.EngineBuildCreate
         * @static
         * @param {events.IEngineBuildCreate} message EngineBuildCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.buildId);
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.statusCode);
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified EngineBuildCreate message, length delimited. Does not implicitly {@link events.EngineBuildCreate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EngineBuildCreate
         * @static
         * @param {events.IEngineBuildCreate} message EngineBuildCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildCreate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EngineBuildCreate message from the specified reader or buffer.
         * @function decode
         * @memberof events.EngineBuildCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EngineBuildCreate} EngineBuildCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EngineBuildCreate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 11:
                    message.engineId = reader.string();
                    break;
                case 12:
                    message.buildId = reader.string();
                    break;
                case 13:
                    message.statusCode = reader.int32();
                    break;
                case 14:
                    message.action = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EngineBuildCreate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EngineBuildCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EngineBuildCreate} EngineBuildCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildCreate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EngineBuildCreate message.
         * @function verify
         * @memberof events.EngineBuildCreate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EngineBuildCreate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isInteger(message.statusCode))
                    return "statusCode: integer expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates an EngineBuildCreate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EngineBuildCreate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EngineBuildCreate} EngineBuildCreate
         */
        EngineBuildCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EngineBuildCreate)
                return object;
            var message = new $root.events.EngineBuildCreate();
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            if (object.statusCode != null)
                message.statusCode = object.statusCode | 0;
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from an EngineBuildCreate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EngineBuildCreate
         * @static
         * @param {events.EngineBuildCreate} message EngineBuildCreate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EngineBuildCreate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.engineId = "";
                object.buildId = "";
                object.statusCode = 0;
                object.action = "";
            }
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this EngineBuildCreate to JSON.
         * @function toJSON
         * @memberof events.EngineBuildCreate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EngineBuildCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EngineBuildCreate;
    })();

    events.EngineBuildUpload = (function() {

        /**
         * Properties of an EngineBuildUpload.
         * @memberof events
         * @interface IEngineBuildUpload
         * @property {string|null} [engineId] EngineBuildUpload engineId
         * @property {string|null} [buildId] EngineBuildUpload buildId
         * @property {number|null} [statusCode] EngineBuildUpload statusCode
         * @property {string|null} [action] EngineBuildUpload action
         */

        /**
         * Constructs a new EngineBuildUpload.
         * @memberof events
         * @classdesc Represents an EngineBuildUpload.
         * @implements IEngineBuildUpload
         * @constructor
         * @param {events.IEngineBuildUpload=} [properties] Properties to set
         */
        function EngineBuildUpload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EngineBuildUpload engineId.
         * @member {string} engineId
         * @memberof events.EngineBuildUpload
         * @instance
         */
        EngineBuildUpload.prototype.engineId = "";

        /**
         * EngineBuildUpload buildId.
         * @member {string} buildId
         * @memberof events.EngineBuildUpload
         * @instance
         */
        EngineBuildUpload.prototype.buildId = "";

        /**
         * EngineBuildUpload statusCode.
         * @member {number} statusCode
         * @memberof events.EngineBuildUpload
         * @instance
         */
        EngineBuildUpload.prototype.statusCode = 0;

        /**
         * EngineBuildUpload action.
         * @member {string} action
         * @memberof events.EngineBuildUpload
         * @instance
         */
        EngineBuildUpload.prototype.action = "";

        /**
         * Creates a new EngineBuildUpload instance using the specified properties.
         * @function create
         * @memberof events.EngineBuildUpload
         * @static
         * @param {events.IEngineBuildUpload=} [properties] Properties to set
         * @returns {events.EngineBuildUpload} EngineBuildUpload instance
         */
        EngineBuildUpload.create = function create(properties) {
            return new EngineBuildUpload(properties);
        };

        /**
         * Encodes the specified EngineBuildUpload message. Does not implicitly {@link events.EngineBuildUpload.verify|verify} messages.
         * @function encode
         * @memberof events.EngineBuildUpload
         * @static
         * @param {events.IEngineBuildUpload} message EngineBuildUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildUpload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.buildId);
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.statusCode);
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified EngineBuildUpload message, length delimited. Does not implicitly {@link events.EngineBuildUpload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EngineBuildUpload
         * @static
         * @param {events.IEngineBuildUpload} message EngineBuildUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildUpload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EngineBuildUpload message from the specified reader or buffer.
         * @function decode
         * @memberof events.EngineBuildUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EngineBuildUpload} EngineBuildUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildUpload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EngineBuildUpload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 11:
                    message.engineId = reader.string();
                    break;
                case 12:
                    message.buildId = reader.string();
                    break;
                case 13:
                    message.statusCode = reader.int32();
                    break;
                case 14:
                    message.action = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EngineBuildUpload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EngineBuildUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EngineBuildUpload} EngineBuildUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildUpload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EngineBuildUpload message.
         * @function verify
         * @memberof events.EngineBuildUpload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EngineBuildUpload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isInteger(message.statusCode))
                    return "statusCode: integer expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates an EngineBuildUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EngineBuildUpload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EngineBuildUpload} EngineBuildUpload
         */
        EngineBuildUpload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EngineBuildUpload)
                return object;
            var message = new $root.events.EngineBuildUpload();
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            if (object.statusCode != null)
                message.statusCode = object.statusCode | 0;
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from an EngineBuildUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EngineBuildUpload
         * @static
         * @param {events.EngineBuildUpload} message EngineBuildUpload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EngineBuildUpload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.engineId = "";
                object.buildId = "";
                object.statusCode = 0;
                object.action = "";
            }
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this EngineBuildUpload to JSON.
         * @function toJSON
         * @memberof events.EngineBuildUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EngineBuildUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EngineBuildUpload;
    })();

    events.EngineBuildInvalidate = (function() {

        /**
         * Properties of an EngineBuildInvalidate.
         * @memberof events
         * @interface IEngineBuildInvalidate
         * @property {string|null} [engineId] EngineBuildInvalidate engineId
         * @property {string|null} [buildId] EngineBuildInvalidate buildId
         * @property {number|null} [statusCode] EngineBuildInvalidate statusCode
         * @property {string|null} [action] EngineBuildInvalidate action
         */

        /**
         * Constructs a new EngineBuildInvalidate.
         * @memberof events
         * @classdesc Represents an EngineBuildInvalidate.
         * @implements IEngineBuildInvalidate
         * @constructor
         * @param {events.IEngineBuildInvalidate=} [properties] Properties to set
         */
        function EngineBuildInvalidate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EngineBuildInvalidate engineId.
         * @member {string} engineId
         * @memberof events.EngineBuildInvalidate
         * @instance
         */
        EngineBuildInvalidate.prototype.engineId = "";

        /**
         * EngineBuildInvalidate buildId.
         * @member {string} buildId
         * @memberof events.EngineBuildInvalidate
         * @instance
         */
        EngineBuildInvalidate.prototype.buildId = "";

        /**
         * EngineBuildInvalidate statusCode.
         * @member {number} statusCode
         * @memberof events.EngineBuildInvalidate
         * @instance
         */
        EngineBuildInvalidate.prototype.statusCode = 0;

        /**
         * EngineBuildInvalidate action.
         * @member {string} action
         * @memberof events.EngineBuildInvalidate
         * @instance
         */
        EngineBuildInvalidate.prototype.action = "";

        /**
         * Creates a new EngineBuildInvalidate instance using the specified properties.
         * @function create
         * @memberof events.EngineBuildInvalidate
         * @static
         * @param {events.IEngineBuildInvalidate=} [properties] Properties to set
         * @returns {events.EngineBuildInvalidate} EngineBuildInvalidate instance
         */
        EngineBuildInvalidate.create = function create(properties) {
            return new EngineBuildInvalidate(properties);
        };

        /**
         * Encodes the specified EngineBuildInvalidate message. Does not implicitly {@link events.EngineBuildInvalidate.verify|verify} messages.
         * @function encode
         * @memberof events.EngineBuildInvalidate
         * @static
         * @param {events.IEngineBuildInvalidate} message EngineBuildInvalidate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildInvalidate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.engineId);
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.buildId);
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.statusCode);
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified EngineBuildInvalidate message, length delimited. Does not implicitly {@link events.EngineBuildInvalidate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EngineBuildInvalidate
         * @static
         * @param {events.IEngineBuildInvalidate} message EngineBuildInvalidate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EngineBuildInvalidate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EngineBuildInvalidate message from the specified reader or buffer.
         * @function decode
         * @memberof events.EngineBuildInvalidate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EngineBuildInvalidate} EngineBuildInvalidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildInvalidate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EngineBuildInvalidate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 11:
                    message.engineId = reader.string();
                    break;
                case 12:
                    message.buildId = reader.string();
                    break;
                case 13:
                    message.statusCode = reader.int32();
                    break;
                case 14:
                    message.action = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EngineBuildInvalidate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EngineBuildInvalidate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EngineBuildInvalidate} EngineBuildInvalidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EngineBuildInvalidate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EngineBuildInvalidate message.
         * @function verify
         * @memberof events.EngineBuildInvalidate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EngineBuildInvalidate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                if (!$util.isString(message.engineId))
                    return "engineId: string expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isInteger(message.statusCode))
                    return "statusCode: integer expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates an EngineBuildInvalidate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EngineBuildInvalidate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EngineBuildInvalidate} EngineBuildInvalidate
         */
        EngineBuildInvalidate.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EngineBuildInvalidate)
                return object;
            var message = new $root.events.EngineBuildInvalidate();
            if (object.engineId != null)
                message.engineId = String(object.engineId);
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            if (object.statusCode != null)
                message.statusCode = object.statusCode | 0;
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from an EngineBuildInvalidate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EngineBuildInvalidate
         * @static
         * @param {events.EngineBuildInvalidate} message EngineBuildInvalidate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EngineBuildInvalidate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.engineId = "";
                object.buildId = "";
                object.statusCode = 0;
                object.action = "";
            }
            if (message.engineId != null && message.hasOwnProperty("engineId"))
                object.engineId = message.engineId;
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this EngineBuildInvalidate to JSON.
         * @function toJSON
         * @memberof events.EngineBuildInvalidate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EngineBuildInvalidate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EngineBuildInvalidate;
    })();

    events.ExampleEvent = (function() {

        /**
         * Properties of an ExampleEvent.
         * @memberof events
         * @interface IExampleEvent
         * @property {events.ICore|null} [core] ExampleEvent core
         * @property {string|null} [firstName] ExampleEvent firstName
         * @property {string|null} [lastName] ExampleEvent lastName
         */

        /**
         * Constructs a new ExampleEvent.
         * @memberof events
         * @classdesc Represents an ExampleEvent.
         * @implements IExampleEvent
         * @constructor
         * @param {events.IExampleEvent=} [properties] Properties to set
         */
        function ExampleEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExampleEvent core.
         * @member {events.ICore|null|undefined} core
         * @memberof events.ExampleEvent
         * @instance
         */
        ExampleEvent.prototype.core = null;

        /**
         * ExampleEvent firstName.
         * @member {string} firstName
         * @memberof events.ExampleEvent
         * @instance
         */
        ExampleEvent.prototype.firstName = "";

        /**
         * ExampleEvent lastName.
         * @member {string} lastName
         * @memberof events.ExampleEvent
         * @instance
         */
        ExampleEvent.prototype.lastName = "";

        /**
         * Creates a new ExampleEvent instance using the specified properties.
         * @function create
         * @memberof events.ExampleEvent
         * @static
         * @param {events.IExampleEvent=} [properties] Properties to set
         * @returns {events.ExampleEvent} ExampleEvent instance
         */
        ExampleEvent.create = function create(properties) {
            return new ExampleEvent(properties);
        };

        /**
         * Encodes the specified ExampleEvent message. Does not implicitly {@link events.ExampleEvent.verify|verify} messages.
         * @function encode
         * @memberof events.ExampleEvent
         * @static
         * @param {events.IExampleEvent} message ExampleEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.core != null && message.hasOwnProperty("core"))
                $root.events.Core.encode(message.core, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            return writer;
        };

        /**
         * Encodes the specified ExampleEvent message, length delimited. Does not implicitly {@link events.ExampleEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.ExampleEvent
         * @static
         * @param {events.IExampleEvent} message ExampleEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExampleEvent message from the specified reader or buffer.
         * @function decode
         * @memberof events.ExampleEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.ExampleEvent} ExampleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.ExampleEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.core = $root.events.Core.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.firstName = reader.string();
                    break;
                case 3:
                    message.lastName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExampleEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.ExampleEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.ExampleEvent} ExampleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExampleEvent message.
         * @function verify
         * @memberof events.ExampleEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExampleEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.core != null && message.hasOwnProperty("core")) {
                var error = $root.events.Core.verify(message.core);
                if (error)
                    return "core." + error;
            }
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            return null;
        };

        /**
         * Creates an ExampleEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.ExampleEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.ExampleEvent} ExampleEvent
         */
        ExampleEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.events.ExampleEvent)
                return object;
            var message = new $root.events.ExampleEvent();
            if (object.core != null) {
                if (typeof object.core !== "object")
                    throw TypeError(".events.ExampleEvent.core: object expected");
                message.core = $root.events.Core.fromObject(object.core);
            }
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            return message;
        };

        /**
         * Creates a plain object from an ExampleEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.ExampleEvent
         * @static
         * @param {events.ExampleEvent} message ExampleEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExampleEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.core = null;
                object.firstName = "";
                object.lastName = "";
            }
            if (message.core != null && message.hasOwnProperty("core"))
                object.core = $root.events.Core.toObject(message.core, options);
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            return object;
        };

        /**
         * Converts this ExampleEvent to JSON.
         * @function toJSON
         * @memberof events.ExampleEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExampleEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExampleEvent;
    })();

    events.ExampleOne = (function() {

        /**
         * Properties of an ExampleOne.
         * @memberof events
         * @interface IExampleOne
         * @property {string|null} [data] ExampleOne data
         */

        /**
         * Constructs a new ExampleOne.
         * @memberof events
         * @classdesc Represents an ExampleOne.
         * @implements IExampleOne
         * @constructor
         * @param {events.IExampleOne=} [properties] Properties to set
         */
        function ExampleOne(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExampleOne data.
         * @member {string} data
         * @memberof events.ExampleOne
         * @instance
         */
        ExampleOne.prototype.data = "";

        /**
         * Creates a new ExampleOne instance using the specified properties.
         * @function create
         * @memberof events.ExampleOne
         * @static
         * @param {events.IExampleOne=} [properties] Properties to set
         * @returns {events.ExampleOne} ExampleOne instance
         */
        ExampleOne.create = function create(properties) {
            return new ExampleOne(properties);
        };

        /**
         * Encodes the specified ExampleOne message. Does not implicitly {@link events.ExampleOne.verify|verify} messages.
         * @function encode
         * @memberof events.ExampleOne
         * @static
         * @param {events.IExampleOne} message ExampleOne message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleOne.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified ExampleOne message, length delimited. Does not implicitly {@link events.ExampleOne.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.ExampleOne
         * @static
         * @param {events.IExampleOne} message ExampleOne message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleOne.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExampleOne message from the specified reader or buffer.
         * @function decode
         * @memberof events.ExampleOne
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.ExampleOne} ExampleOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleOne.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.ExampleOne();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExampleOne message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.ExampleOne
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.ExampleOne} ExampleOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleOne.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExampleOne message.
         * @function verify
         * @memberof events.ExampleOne
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExampleOne.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };

        /**
         * Creates an ExampleOne message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.ExampleOne
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.ExampleOne} ExampleOne
         */
        ExampleOne.fromObject = function fromObject(object) {
            if (object instanceof $root.events.ExampleOne)
                return object;
            var message = new $root.events.ExampleOne();
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from an ExampleOne message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.ExampleOne
         * @static
         * @param {events.ExampleOne} message ExampleOne
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExampleOne.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.data = "";
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this ExampleOne to JSON.
         * @function toJSON
         * @memberof events.ExampleOne
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExampleOne.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExampleOne;
    })();

    events.ExampleTwo = (function() {

        /**
         * Properties of an ExampleTwo.
         * @memberof events
         * @interface IExampleTwo
         * @property {number|Long|null} [number] ExampleTwo number
         */

        /**
         * Constructs a new ExampleTwo.
         * @memberof events
         * @classdesc Represents an ExampleTwo.
         * @implements IExampleTwo
         * @constructor
         * @param {events.IExampleTwo=} [properties] Properties to set
         */
        function ExampleTwo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExampleTwo number.
         * @member {number|Long} number
         * @memberof events.ExampleTwo
         * @instance
         */
        ExampleTwo.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ExampleTwo instance using the specified properties.
         * @function create
         * @memberof events.ExampleTwo
         * @static
         * @param {events.IExampleTwo=} [properties] Properties to set
         * @returns {events.ExampleTwo} ExampleTwo instance
         */
        ExampleTwo.create = function create(properties) {
            return new ExampleTwo(properties);
        };

        /**
         * Encodes the specified ExampleTwo message. Does not implicitly {@link events.ExampleTwo.verify|verify} messages.
         * @function encode
         * @memberof events.ExampleTwo
         * @static
         * @param {events.IExampleTwo} message ExampleTwo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleTwo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.number != null && message.hasOwnProperty("number"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.number);
            return writer;
        };

        /**
         * Encodes the specified ExampleTwo message, length delimited. Does not implicitly {@link events.ExampleTwo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.ExampleTwo
         * @static
         * @param {events.IExampleTwo} message ExampleTwo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleTwo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExampleTwo message from the specified reader or buffer.
         * @function decode
         * @memberof events.ExampleTwo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.ExampleTwo} ExampleTwo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleTwo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.ExampleTwo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.number = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExampleTwo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.ExampleTwo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.ExampleTwo} ExampleTwo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleTwo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExampleTwo message.
         * @function verify
         * @memberof events.ExampleTwo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExampleTwo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number) && !(message.number && $util.isInteger(message.number.low) && $util.isInteger(message.number.high)))
                    return "number: integer|Long expected";
            return null;
        };

        /**
         * Creates an ExampleTwo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.ExampleTwo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.ExampleTwo} ExampleTwo
         */
        ExampleTwo.fromObject = function fromObject(object) {
            if (object instanceof $root.events.ExampleTwo)
                return object;
            var message = new $root.events.ExampleTwo();
            if (object.number != null)
                if ($util.Long)
                    (message.number = $util.Long.fromValue(object.number)).unsigned = false;
                else if (typeof object.number === "string")
                    message.number = parseInt(object.number, 10);
                else if (typeof object.number === "number")
                    message.number = object.number;
                else if (typeof object.number === "object")
                    message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an ExampleTwo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.ExampleTwo
         * @static
         * @param {events.ExampleTwo} message ExampleTwo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExampleTwo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.number = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.number = options.longs === String ? "0" : 0;
            if (message.number != null && message.hasOwnProperty("number"))
                if (typeof message.number === "number")
                    object.number = options.longs === String ? String(message.number) : message.number;
                else
                    object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
            return object;
        };

        /**
         * Converts this ExampleTwo to JSON.
         * @function toJSON
         * @memberof events.ExampleTwo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExampleTwo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExampleTwo;
    })();

    events.ExampleThree = (function() {

        /**
         * Properties of an ExampleThree.
         * @memberof events
         * @interface IExampleThree
         * @property {boolean|null} [boolean] ExampleThree boolean
         */

        /**
         * Constructs a new ExampleThree.
         * @memberof events
         * @classdesc Represents an ExampleThree.
         * @implements IExampleThree
         * @constructor
         * @param {events.IExampleThree=} [properties] Properties to set
         */
        function ExampleThree(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExampleThree boolean.
         * @member {boolean} boolean
         * @memberof events.ExampleThree
         * @instance
         */
        ExampleThree.prototype.boolean = false;

        /**
         * Creates a new ExampleThree instance using the specified properties.
         * @function create
         * @memberof events.ExampleThree
         * @static
         * @param {events.IExampleThree=} [properties] Properties to set
         * @returns {events.ExampleThree} ExampleThree instance
         */
        ExampleThree.create = function create(properties) {
            return new ExampleThree(properties);
        };

        /**
         * Encodes the specified ExampleThree message. Does not implicitly {@link events.ExampleThree.verify|verify} messages.
         * @function encode
         * @memberof events.ExampleThree
         * @static
         * @param {events.IExampleThree} message ExampleThree message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleThree.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.boolean != null && message.hasOwnProperty("boolean"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.boolean);
            return writer;
        };

        /**
         * Encodes the specified ExampleThree message, length delimited. Does not implicitly {@link events.ExampleThree.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.ExampleThree
         * @static
         * @param {events.IExampleThree} message ExampleThree message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleThree.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExampleThree message from the specified reader or buffer.
         * @function decode
         * @memberof events.ExampleThree
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.ExampleThree} ExampleThree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleThree.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.ExampleThree();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.boolean = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExampleThree message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.ExampleThree
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.ExampleThree} ExampleThree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleThree.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExampleThree message.
         * @function verify
         * @memberof events.ExampleThree
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExampleThree.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.boolean != null && message.hasOwnProperty("boolean"))
                if (typeof message.boolean !== "boolean")
                    return "boolean: boolean expected";
            return null;
        };

        /**
         * Creates an ExampleThree message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.ExampleThree
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.ExampleThree} ExampleThree
         */
        ExampleThree.fromObject = function fromObject(object) {
            if (object instanceof $root.events.ExampleThree)
                return object;
            var message = new $root.events.ExampleThree();
            if (object.boolean != null)
                message.boolean = Boolean(object.boolean);
            return message;
        };

        /**
         * Creates a plain object from an ExampleThree message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.ExampleThree
         * @static
         * @param {events.ExampleThree} message ExampleThree
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExampleThree.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.boolean = false;
            if (message.boolean != null && message.hasOwnProperty("boolean"))
                object.boolean = message.boolean;
            return object;
        };

        /**
         * Converts this ExampleThree to JSON.
         * @function toJSON
         * @memberof events.ExampleThree
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExampleThree.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExampleThree;
    })();

    events.ExampleFour = (function() {

        /**
         * Properties of an ExampleFour.
         * @memberof events
         * @interface IExampleFour
         * @property {string|null} [data] ExampleFour data
         * @property {number|Long|null} [number] ExampleFour number
         * @property {boolean|null} [boolean] ExampleFour boolean
         */

        /**
         * Constructs a new ExampleFour.
         * @memberof events
         * @classdesc Represents an ExampleFour.
         * @implements IExampleFour
         * @constructor
         * @param {events.IExampleFour=} [properties] Properties to set
         */
        function ExampleFour(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExampleFour data.
         * @member {string} data
         * @memberof events.ExampleFour
         * @instance
         */
        ExampleFour.prototype.data = "";

        /**
         * ExampleFour number.
         * @member {number|Long} number
         * @memberof events.ExampleFour
         * @instance
         */
        ExampleFour.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ExampleFour boolean.
         * @member {boolean} boolean
         * @memberof events.ExampleFour
         * @instance
         */
        ExampleFour.prototype.boolean = false;

        /**
         * Creates a new ExampleFour instance using the specified properties.
         * @function create
         * @memberof events.ExampleFour
         * @static
         * @param {events.IExampleFour=} [properties] Properties to set
         * @returns {events.ExampleFour} ExampleFour instance
         */
        ExampleFour.create = function create(properties) {
            return new ExampleFour(properties);
        };

        /**
         * Encodes the specified ExampleFour message. Does not implicitly {@link events.ExampleFour.verify|verify} messages.
         * @function encode
         * @memberof events.ExampleFour
         * @static
         * @param {events.IExampleFour} message ExampleFour message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleFour.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            if (message.number != null && message.hasOwnProperty("number"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.number);
            if (message.boolean != null && message.hasOwnProperty("boolean"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolean);
            return writer;
        };

        /**
         * Encodes the specified ExampleFour message, length delimited. Does not implicitly {@link events.ExampleFour.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.ExampleFour
         * @static
         * @param {events.IExampleFour} message ExampleFour message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleFour.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExampleFour message from the specified reader or buffer.
         * @function decode
         * @memberof events.ExampleFour
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.ExampleFour} ExampleFour
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleFour.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.ExampleFour();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.data = reader.string();
                    break;
                case 3:
                    message.number = reader.int64();
                    break;
                case 4:
                    message.boolean = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExampleFour message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.ExampleFour
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.ExampleFour} ExampleFour
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleFour.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExampleFour message.
         * @function verify
         * @memberof events.ExampleFour
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExampleFour.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number) && !(message.number && $util.isInteger(message.number.low) && $util.isInteger(message.number.high)))
                    return "number: integer|Long expected";
            if (message.boolean != null && message.hasOwnProperty("boolean"))
                if (typeof message.boolean !== "boolean")
                    return "boolean: boolean expected";
            return null;
        };

        /**
         * Creates an ExampleFour message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.ExampleFour
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.ExampleFour} ExampleFour
         */
        ExampleFour.fromObject = function fromObject(object) {
            if (object instanceof $root.events.ExampleFour)
                return object;
            var message = new $root.events.ExampleFour();
            if (object.data != null)
                message.data = String(object.data);
            if (object.number != null)
                if ($util.Long)
                    (message.number = $util.Long.fromValue(object.number)).unsigned = false;
                else if (typeof object.number === "string")
                    message.number = parseInt(object.number, 10);
                else if (typeof object.number === "number")
                    message.number = object.number;
                else if (typeof object.number === "object")
                    message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
            if (object.boolean != null)
                message.boolean = Boolean(object.boolean);
            return message;
        };

        /**
         * Creates a plain object from an ExampleFour message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.ExampleFour
         * @static
         * @param {events.ExampleFour} message ExampleFour
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExampleFour.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.data = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.number = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.number = options.longs === String ? "0" : 0;
                object.boolean = false;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            if (message.number != null && message.hasOwnProperty("number"))
                if (typeof message.number === "number")
                    object.number = options.longs === String ? String(message.number) : message.number;
                else
                    object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
            if (message.boolean != null && message.hasOwnProperty("boolean"))
                object.boolean = message.boolean;
            return object;
        };

        /**
         * Converts this ExampleFour to JSON.
         * @function toJSON
         * @memberof events.ExampleFour
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExampleFour.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExampleFour;
    })();

    events.MentionModifiedData = (function() {

        /**
         * Properties of a MentionModifiedData.
         * @memberof events
         * @interface IMentionModifiedData
         * @property {number|Long|null} [mentionId] MentionModifiedData mentionId
         * @property {number|Long|null} [organizationId] MentionModifiedData organizationId
         * @property {string|null} [mentionDate] MentionModifiedData mentionDate
         * @property {string|null} [transactionTimestamp] MentionModifiedData transactionTimestamp
         */

        /**
         * Constructs a new MentionModifiedData.
         * @memberof events
         * @classdesc Represents a MentionModifiedData.
         * @implements IMentionModifiedData
         * @constructor
         * @param {events.IMentionModifiedData=} [properties] Properties to set
         */
        function MentionModifiedData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MentionModifiedData mentionId.
         * @member {number|Long} mentionId
         * @memberof events.MentionModifiedData
         * @instance
         */
        MentionModifiedData.prototype.mentionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MentionModifiedData organizationId.
         * @member {number|Long} organizationId
         * @memberof events.MentionModifiedData
         * @instance
         */
        MentionModifiedData.prototype.organizationId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MentionModifiedData mentionDate.
         * @member {string} mentionDate
         * @memberof events.MentionModifiedData
         * @instance
         */
        MentionModifiedData.prototype.mentionDate = "";

        /**
         * MentionModifiedData transactionTimestamp.
         * @member {string} transactionTimestamp
         * @memberof events.MentionModifiedData
         * @instance
         */
        MentionModifiedData.prototype.transactionTimestamp = "";

        /**
         * Creates a new MentionModifiedData instance using the specified properties.
         * @function create
         * @memberof events.MentionModifiedData
         * @static
         * @param {events.IMentionModifiedData=} [properties] Properties to set
         * @returns {events.MentionModifiedData} MentionModifiedData instance
         */
        MentionModifiedData.create = function create(properties) {
            return new MentionModifiedData(properties);
        };

        /**
         * Encodes the specified MentionModifiedData message. Does not implicitly {@link events.MentionModifiedData.verify|verify} messages.
         * @function encode
         * @memberof events.MentionModifiedData
         * @static
         * @param {events.IMentionModifiedData} message MentionModifiedData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionModifiedData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mentionId != null && message.hasOwnProperty("mentionId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.mentionId);
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.organizationId);
            if (message.mentionDate != null && message.hasOwnProperty("mentionDate"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.mentionDate);
            if (message.transactionTimestamp != null && message.hasOwnProperty("transactionTimestamp"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.transactionTimestamp);
            return writer;
        };

        /**
         * Encodes the specified MentionModifiedData message, length delimited. Does not implicitly {@link events.MentionModifiedData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.MentionModifiedData
         * @static
         * @param {events.IMentionModifiedData} message MentionModifiedData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionModifiedData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MentionModifiedData message from the specified reader or buffer.
         * @function decode
         * @memberof events.MentionModifiedData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.MentionModifiedData} MentionModifiedData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionModifiedData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.MentionModifiedData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mentionId = reader.int64();
                    break;
                case 12:
                    message.organizationId = reader.int64();
                    break;
                case 13:
                    message.mentionDate = reader.string();
                    break;
                case 14:
                    message.transactionTimestamp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MentionModifiedData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.MentionModifiedData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.MentionModifiedData} MentionModifiedData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionModifiedData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MentionModifiedData message.
         * @function verify
         * @memberof events.MentionModifiedData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MentionModifiedData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mentionId != null && message.hasOwnProperty("mentionId"))
                if (!$util.isInteger(message.mentionId) && !(message.mentionId && $util.isInteger(message.mentionId.low) && $util.isInteger(message.mentionId.high)))
                    return "mentionId: integer|Long expected";
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (!$util.isInteger(message.organizationId) && !(message.organizationId && $util.isInteger(message.organizationId.low) && $util.isInteger(message.organizationId.high)))
                    return "organizationId: integer|Long expected";
            if (message.mentionDate != null && message.hasOwnProperty("mentionDate"))
                if (!$util.isString(message.mentionDate))
                    return "mentionDate: string expected";
            if (message.transactionTimestamp != null && message.hasOwnProperty("transactionTimestamp"))
                if (!$util.isString(message.transactionTimestamp))
                    return "transactionTimestamp: string expected";
            return null;
        };

        /**
         * Creates a MentionModifiedData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.MentionModifiedData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.MentionModifiedData} MentionModifiedData
         */
        MentionModifiedData.fromObject = function fromObject(object) {
            if (object instanceof $root.events.MentionModifiedData)
                return object;
            var message = new $root.events.MentionModifiedData();
            if (object.mentionId != null)
                if ($util.Long)
                    (message.mentionId = $util.Long.fromValue(object.mentionId)).unsigned = false;
                else if (typeof object.mentionId === "string")
                    message.mentionId = parseInt(object.mentionId, 10);
                else if (typeof object.mentionId === "number")
                    message.mentionId = object.mentionId;
                else if (typeof object.mentionId === "object")
                    message.mentionId = new $util.LongBits(object.mentionId.low >>> 0, object.mentionId.high >>> 0).toNumber();
            if (object.organizationId != null)
                if ($util.Long)
                    (message.organizationId = $util.Long.fromValue(object.organizationId)).unsigned = false;
                else if (typeof object.organizationId === "string")
                    message.organizationId = parseInt(object.organizationId, 10);
                else if (typeof object.organizationId === "number")
                    message.organizationId = object.organizationId;
                else if (typeof object.organizationId === "object")
                    message.organizationId = new $util.LongBits(object.organizationId.low >>> 0, object.organizationId.high >>> 0).toNumber();
            if (object.mentionDate != null)
                message.mentionDate = String(object.mentionDate);
            if (object.transactionTimestamp != null)
                message.transactionTimestamp = String(object.transactionTimestamp);
            return message;
        };

        /**
         * Creates a plain object from a MentionModifiedData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.MentionModifiedData
         * @static
         * @param {events.MentionModifiedData} message MentionModifiedData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MentionModifiedData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.mentionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mentionId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.organizationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.organizationId = options.longs === String ? "0" : 0;
                object.mentionDate = "";
                object.transactionTimestamp = "";
            }
            if (message.mentionId != null && message.hasOwnProperty("mentionId"))
                if (typeof message.mentionId === "number")
                    object.mentionId = options.longs === String ? String(message.mentionId) : message.mentionId;
                else
                    object.mentionId = options.longs === String ? $util.Long.prototype.toString.call(message.mentionId) : options.longs === Number ? new $util.LongBits(message.mentionId.low >>> 0, message.mentionId.high >>> 0).toNumber() : message.mentionId;
            if (message.organizationId != null && message.hasOwnProperty("organizationId"))
                if (typeof message.organizationId === "number")
                    object.organizationId = options.longs === String ? String(message.organizationId) : message.organizationId;
                else
                    object.organizationId = options.longs === String ? $util.Long.prototype.toString.call(message.organizationId) : options.longs === Number ? new $util.LongBits(message.organizationId.low >>> 0, message.organizationId.high >>> 0).toNumber() : message.organizationId;
            if (message.mentionDate != null && message.hasOwnProperty("mentionDate"))
                object.mentionDate = message.mentionDate;
            if (message.transactionTimestamp != null && message.hasOwnProperty("transactionTimestamp"))
                object.transactionTimestamp = message.transactionTimestamp;
            return object;
        };

        /**
         * Converts this MentionModifiedData to JSON.
         * @function toJSON
         * @memberof events.MentionModifiedData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MentionModifiedData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MentionModifiedData;
    })();

    events.MentionUpdated = (function() {

        /**
         * Properties of a MentionUpdated.
         * @memberof events
         * @interface IMentionUpdated
         * @property {string|null} [event] MentionUpdated event
         * @property {string|null} [type] MentionUpdated type
         * @property {events.IMentionModifiedData|null} [payload] MentionUpdated payload
         */

        /**
         * Constructs a new MentionUpdated.
         * @memberof events
         * @classdesc Represents a MentionUpdated.
         * @implements IMentionUpdated
         * @constructor
         * @param {events.IMentionUpdated=} [properties] Properties to set
         */
        function MentionUpdated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MentionUpdated event.
         * @member {string} event
         * @memberof events.MentionUpdated
         * @instance
         */
        MentionUpdated.prototype.event = "";

        /**
         * MentionUpdated type.
         * @member {string} type
         * @memberof events.MentionUpdated
         * @instance
         */
        MentionUpdated.prototype.type = "";

        /**
         * MentionUpdated payload.
         * @member {events.IMentionModifiedData|null|undefined} payload
         * @memberof events.MentionUpdated
         * @instance
         */
        MentionUpdated.prototype.payload = null;

        /**
         * Creates a new MentionUpdated instance using the specified properties.
         * @function create
         * @memberof events.MentionUpdated
         * @static
         * @param {events.IMentionUpdated=} [properties] Properties to set
         * @returns {events.MentionUpdated} MentionUpdated instance
         */
        MentionUpdated.create = function create(properties) {
            return new MentionUpdated(properties);
        };

        /**
         * Encodes the specified MentionUpdated message. Does not implicitly {@link events.MentionUpdated.verify|verify} messages.
         * @function encode
         * @memberof events.MentionUpdated
         * @static
         * @param {events.IMentionUpdated} message MentionUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && message.hasOwnProperty("event"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.event);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.type);
            if (message.payload != null && message.hasOwnProperty("payload"))
                $root.events.MentionModifiedData.encode(message.payload, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MentionUpdated message, length delimited. Does not implicitly {@link events.MentionUpdated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.MentionUpdated
         * @static
         * @param {events.IMentionUpdated} message MentionUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MentionUpdated message from the specified reader or buffer.
         * @function decode
         * @memberof events.MentionUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.MentionUpdated} MentionUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.MentionUpdated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.event = reader.string();
                    break;
                case 11:
                    message.type = reader.string();
                    break;
                case 12:
                    message.payload = $root.events.MentionModifiedData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MentionUpdated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.MentionUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.MentionUpdated} MentionUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MentionUpdated message.
         * @function verify
         * @memberof events.MentionUpdated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MentionUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event"))
                if (!$util.isString(message.event))
                    return "event: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                var error = $root.events.MentionModifiedData.verify(message.payload);
                if (error)
                    return "payload." + error;
            }
            return null;
        };

        /**
         * Creates a MentionUpdated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.MentionUpdated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.MentionUpdated} MentionUpdated
         */
        MentionUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.events.MentionUpdated)
                return object;
            var message = new $root.events.MentionUpdated();
            if (object.event != null)
                message.event = String(object.event);
            if (object.type != null)
                message.type = String(object.type);
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".events.MentionUpdated.payload: object expected");
                message.payload = $root.events.MentionModifiedData.fromObject(object.payload);
            }
            return message;
        };

        /**
         * Creates a plain object from a MentionUpdated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.MentionUpdated
         * @static
         * @param {events.MentionUpdated} message MentionUpdated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MentionUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = "";
                object.type = "";
                object.payload = null;
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = message.event;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.events.MentionModifiedData.toObject(message.payload, options);
            return object;
        };

        /**
         * Converts this MentionUpdated to JSON.
         * @function toJSON
         * @memberof events.MentionUpdated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MentionUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MentionUpdated;
    })();

    events.MentionDeleted = (function() {

        /**
         * Properties of a MentionDeleted.
         * @memberof events
         * @interface IMentionDeleted
         * @property {string|null} [event] MentionDeleted event
         * @property {string|null} [type] MentionDeleted type
         * @property {events.IMentionModifiedData|null} [payload] MentionDeleted payload
         */

        /**
         * Constructs a new MentionDeleted.
         * @memberof events
         * @classdesc Represents a MentionDeleted.
         * @implements IMentionDeleted
         * @constructor
         * @param {events.IMentionDeleted=} [properties] Properties to set
         */
        function MentionDeleted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MentionDeleted event.
         * @member {string} event
         * @memberof events.MentionDeleted
         * @instance
         */
        MentionDeleted.prototype.event = "";

        /**
         * MentionDeleted type.
         * @member {string} type
         * @memberof events.MentionDeleted
         * @instance
         */
        MentionDeleted.prototype.type = "";

        /**
         * MentionDeleted payload.
         * @member {events.IMentionModifiedData|null|undefined} payload
         * @memberof events.MentionDeleted
         * @instance
         */
        MentionDeleted.prototype.payload = null;

        /**
         * Creates a new MentionDeleted instance using the specified properties.
         * @function create
         * @memberof events.MentionDeleted
         * @static
         * @param {events.IMentionDeleted=} [properties] Properties to set
         * @returns {events.MentionDeleted} MentionDeleted instance
         */
        MentionDeleted.create = function create(properties) {
            return new MentionDeleted(properties);
        };

        /**
         * Encodes the specified MentionDeleted message. Does not implicitly {@link events.MentionDeleted.verify|verify} messages.
         * @function encode
         * @memberof events.MentionDeleted
         * @static
         * @param {events.IMentionDeleted} message MentionDeleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionDeleted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && message.hasOwnProperty("event"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.event);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.type);
            if (message.payload != null && message.hasOwnProperty("payload"))
                $root.events.MentionModifiedData.encode(message.payload, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MentionDeleted message, length delimited. Does not implicitly {@link events.MentionDeleted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.MentionDeleted
         * @static
         * @param {events.IMentionDeleted} message MentionDeleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionDeleted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MentionDeleted message from the specified reader or buffer.
         * @function decode
         * @memberof events.MentionDeleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.MentionDeleted} MentionDeleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionDeleted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.MentionDeleted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.event = reader.string();
                    break;
                case 11:
                    message.type = reader.string();
                    break;
                case 12:
                    message.payload = $root.events.MentionModifiedData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MentionDeleted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.MentionDeleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.MentionDeleted} MentionDeleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionDeleted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MentionDeleted message.
         * @function verify
         * @memberof events.MentionDeleted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MentionDeleted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event"))
                if (!$util.isString(message.event))
                    return "event: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                var error = $root.events.MentionModifiedData.verify(message.payload);
                if (error)
                    return "payload." + error;
            }
            return null;
        };

        /**
         * Creates a MentionDeleted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.MentionDeleted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.MentionDeleted} MentionDeleted
         */
        MentionDeleted.fromObject = function fromObject(object) {
            if (object instanceof $root.events.MentionDeleted)
                return object;
            var message = new $root.events.MentionDeleted();
            if (object.event != null)
                message.event = String(object.event);
            if (object.type != null)
                message.type = String(object.type);
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".events.MentionDeleted.payload: object expected");
                message.payload = $root.events.MentionModifiedData.fromObject(object.payload);
            }
            return message;
        };

        /**
         * Creates a plain object from a MentionDeleted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.MentionDeleted
         * @static
         * @param {events.MentionDeleted} message MentionDeleted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MentionDeleted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = "";
                object.type = "";
                object.payload = null;
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = message.event;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.events.MentionModifiedData.toObject(message.payload, options);
            return object;
        };

        /**
         * Converts this MentionDeleted to JSON.
         * @function toJSON
         * @memberof events.MentionDeleted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MentionDeleted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MentionDeleted;
    })();

    events.MentionInserted = (function() {

        /**
         * Properties of a MentionInserted.
         * @memberof events
         * @interface IMentionInserted
         * @property {string|null} [event] MentionInserted event
         * @property {string|null} [type] MentionInserted type
         * @property {events.IMentionModifiedData|null} [payload] MentionInserted payload
         */

        /**
         * Constructs a new MentionInserted.
         * @memberof events
         * @classdesc Represents a MentionInserted.
         * @implements IMentionInserted
         * @constructor
         * @param {events.IMentionInserted=} [properties] Properties to set
         */
        function MentionInserted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MentionInserted event.
         * @member {string} event
         * @memberof events.MentionInserted
         * @instance
         */
        MentionInserted.prototype.event = "";

        /**
         * MentionInserted type.
         * @member {string} type
         * @memberof events.MentionInserted
         * @instance
         */
        MentionInserted.prototype.type = "";

        /**
         * MentionInserted payload.
         * @member {events.IMentionModifiedData|null|undefined} payload
         * @memberof events.MentionInserted
         * @instance
         */
        MentionInserted.prototype.payload = null;

        /**
         * Creates a new MentionInserted instance using the specified properties.
         * @function create
         * @memberof events.MentionInserted
         * @static
         * @param {events.IMentionInserted=} [properties] Properties to set
         * @returns {events.MentionInserted} MentionInserted instance
         */
        MentionInserted.create = function create(properties) {
            return new MentionInserted(properties);
        };

        /**
         * Encodes the specified MentionInserted message. Does not implicitly {@link events.MentionInserted.verify|verify} messages.
         * @function encode
         * @memberof events.MentionInserted
         * @static
         * @param {events.IMentionInserted} message MentionInserted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionInserted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && message.hasOwnProperty("event"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.event);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.type);
            if (message.payload != null && message.hasOwnProperty("payload"))
                $root.events.MentionModifiedData.encode(message.payload, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MentionInserted message, length delimited. Does not implicitly {@link events.MentionInserted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.MentionInserted
         * @static
         * @param {events.IMentionInserted} message MentionInserted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionInserted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MentionInserted message from the specified reader or buffer.
         * @function decode
         * @memberof events.MentionInserted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.MentionInserted} MentionInserted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionInserted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.MentionInserted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.event = reader.string();
                    break;
                case 11:
                    message.type = reader.string();
                    break;
                case 12:
                    message.payload = $root.events.MentionModifiedData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MentionInserted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.MentionInserted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.MentionInserted} MentionInserted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionInserted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MentionInserted message.
         * @function verify
         * @memberof events.MentionInserted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MentionInserted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event"))
                if (!$util.isString(message.event))
                    return "event: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                var error = $root.events.MentionModifiedData.verify(message.payload);
                if (error)
                    return "payload." + error;
            }
            return null;
        };

        /**
         * Creates a MentionInserted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.MentionInserted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.MentionInserted} MentionInserted
         */
        MentionInserted.fromObject = function fromObject(object) {
            if (object instanceof $root.events.MentionInserted)
                return object;
            var message = new $root.events.MentionInserted();
            if (object.event != null)
                message.event = String(object.event);
            if (object.type != null)
                message.type = String(object.type);
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".events.MentionInserted.payload: object expected");
                message.payload = $root.events.MentionModifiedData.fromObject(object.payload);
            }
            return message;
        };

        /**
         * Creates a plain object from a MentionInserted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.MentionInserted
         * @static
         * @param {events.MentionInserted} message MentionInserted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MentionInserted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = "";
                object.type = "";
                object.payload = null;
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = message.event;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.events.MentionModifiedData.toObject(message.payload, options);
            return object;
        };

        /**
         * Converts this MentionInserted to JSON.
         * @function toJSON
         * @memberof events.MentionInserted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MentionInserted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MentionInserted;
    })();

    events.MentionEmailGenerated = (function() {

        /**
         * Properties of a MentionEmailGenerated.
         * @memberof events
         * @interface IMentionEmailGenerated
         * @property {string|null} [event] MentionEmailGenerated event
         * @property {string|null} [type] MentionEmailGenerated type
         * @property {string|null} [serviceName] MentionEmailGenerated serviceName
         * @property {string|null} [toEmail] MentionEmailGenerated toEmail
         * @property {string|null} [fromEmail] MentionEmailGenerated fromEmail
         * @property {string|null} [fromName] MentionEmailGenerated fromName
         * @property {string|null} [template] MentionEmailGenerated template
         * @property {events.MentionEmailGenerated.IPlaceHolders|null} [placeHolders] MentionEmailGenerated placeHolders
         * @property {string|null} [mergeLanguage] MentionEmailGenerated mergeLanguage
         */

        /**
         * Constructs a new MentionEmailGenerated.
         * @memberof events
         * @classdesc Represents a MentionEmailGenerated.
         * @implements IMentionEmailGenerated
         * @constructor
         * @param {events.IMentionEmailGenerated=} [properties] Properties to set
         */
        function MentionEmailGenerated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MentionEmailGenerated event.
         * @member {string} event
         * @memberof events.MentionEmailGenerated
         * @instance
         */
        MentionEmailGenerated.prototype.event = "";

        /**
         * MentionEmailGenerated type.
         * @member {string} type
         * @memberof events.MentionEmailGenerated
         * @instance
         */
        MentionEmailGenerated.prototype.type = "";

        /**
         * MentionEmailGenerated serviceName.
         * @member {string} serviceName
         * @memberof events.MentionEmailGenerated
         * @instance
         */
        MentionEmailGenerated.prototype.serviceName = "";

        /**
         * MentionEmailGenerated toEmail.
         * @member {string} toEmail
         * @memberof events.MentionEmailGenerated
         * @instance
         */
        MentionEmailGenerated.prototype.toEmail = "";

        /**
         * MentionEmailGenerated fromEmail.
         * @member {string} fromEmail
         * @memberof events.MentionEmailGenerated
         * @instance
         */
        MentionEmailGenerated.prototype.fromEmail = "";

        /**
         * MentionEmailGenerated fromName.
         * @member {string} fromName
         * @memberof events.MentionEmailGenerated
         * @instance
         */
        MentionEmailGenerated.prototype.fromName = "";

        /**
         * MentionEmailGenerated template.
         * @member {string} template
         * @memberof events.MentionEmailGenerated
         * @instance
         */
        MentionEmailGenerated.prototype.template = "";

        /**
         * MentionEmailGenerated placeHolders.
         * @member {events.MentionEmailGenerated.IPlaceHolders|null|undefined} placeHolders
         * @memberof events.MentionEmailGenerated
         * @instance
         */
        MentionEmailGenerated.prototype.placeHolders = null;

        /**
         * MentionEmailGenerated mergeLanguage.
         * @member {string} mergeLanguage
         * @memberof events.MentionEmailGenerated
         * @instance
         */
        MentionEmailGenerated.prototype.mergeLanguage = "";

        /**
         * Creates a new MentionEmailGenerated instance using the specified properties.
         * @function create
         * @memberof events.MentionEmailGenerated
         * @static
         * @param {events.IMentionEmailGenerated=} [properties] Properties to set
         * @returns {events.MentionEmailGenerated} MentionEmailGenerated instance
         */
        MentionEmailGenerated.create = function create(properties) {
            return new MentionEmailGenerated(properties);
        };

        /**
         * Encodes the specified MentionEmailGenerated message. Does not implicitly {@link events.MentionEmailGenerated.verify|verify} messages.
         * @function encode
         * @memberof events.MentionEmailGenerated
         * @static
         * @param {events.IMentionEmailGenerated} message MentionEmailGenerated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionEmailGenerated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && message.hasOwnProperty("event"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.event);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.serviceName);
            if (message.toEmail != null && message.hasOwnProperty("toEmail"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.toEmail);
            if (message.fromEmail != null && message.hasOwnProperty("fromEmail"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.fromEmail);
            if (message.fromName != null && message.hasOwnProperty("fromName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.fromName);
            if (message.template != null && message.hasOwnProperty("template"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.template);
            if (message.placeHolders != null && message.hasOwnProperty("placeHolders"))
                $root.events.MentionEmailGenerated.PlaceHolders.encode(message.placeHolders, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.mergeLanguage != null && message.hasOwnProperty("mergeLanguage"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.mergeLanguage);
            return writer;
        };

        /**
         * Encodes the specified MentionEmailGenerated message, length delimited. Does not implicitly {@link events.MentionEmailGenerated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.MentionEmailGenerated
         * @static
         * @param {events.IMentionEmailGenerated} message MentionEmailGenerated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MentionEmailGenerated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MentionEmailGenerated message from the specified reader or buffer.
         * @function decode
         * @memberof events.MentionEmailGenerated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.MentionEmailGenerated} MentionEmailGenerated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionEmailGenerated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.MentionEmailGenerated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    message.event = reader.string();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.serviceName = reader.string();
                    break;
                case 6:
                    message.toEmail = reader.string();
                    break;
                case 7:
                    message.fromEmail = reader.string();
                    break;
                case 8:
                    message.fromName = reader.string();
                    break;
                case 9:
                    message.template = reader.string();
                    break;
                case 10:
                    message.placeHolders = $root.events.MentionEmailGenerated.PlaceHolders.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.mergeLanguage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MentionEmailGenerated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.MentionEmailGenerated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.MentionEmailGenerated} MentionEmailGenerated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MentionEmailGenerated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MentionEmailGenerated message.
         * @function verify
         * @memberof events.MentionEmailGenerated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MentionEmailGenerated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event"))
                if (!$util.isString(message.event))
                    return "event: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                if (!$util.isString(message.serviceName))
                    return "serviceName: string expected";
            if (message.toEmail != null && message.hasOwnProperty("toEmail"))
                if (!$util.isString(message.toEmail))
                    return "toEmail: string expected";
            if (message.fromEmail != null && message.hasOwnProperty("fromEmail"))
                if (!$util.isString(message.fromEmail))
                    return "fromEmail: string expected";
            if (message.fromName != null && message.hasOwnProperty("fromName"))
                if (!$util.isString(message.fromName))
                    return "fromName: string expected";
            if (message.template != null && message.hasOwnProperty("template"))
                if (!$util.isString(message.template))
                    return "template: string expected";
            if (message.placeHolders != null && message.hasOwnProperty("placeHolders")) {
                var error = $root.events.MentionEmailGenerated.PlaceHolders.verify(message.placeHolders);
                if (error)
                    return "placeHolders." + error;
            }
            if (message.mergeLanguage != null && message.hasOwnProperty("mergeLanguage"))
                if (!$util.isString(message.mergeLanguage))
                    return "mergeLanguage: string expected";
            return null;
        };

        /**
         * Creates a MentionEmailGenerated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.MentionEmailGenerated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.MentionEmailGenerated} MentionEmailGenerated
         */
        MentionEmailGenerated.fromObject = function fromObject(object) {
            if (object instanceof $root.events.MentionEmailGenerated)
                return object;
            var message = new $root.events.MentionEmailGenerated();
            if (object.event != null)
                message.event = String(object.event);
            if (object.type != null)
                message.type = String(object.type);
            if (object.serviceName != null)
                message.serviceName = String(object.serviceName);
            if (object.toEmail != null)
                message.toEmail = String(object.toEmail);
            if (object.fromEmail != null)
                message.fromEmail = String(object.fromEmail);
            if (object.fromName != null)
                message.fromName = String(object.fromName);
            if (object.template != null)
                message.template = String(object.template);
            if (object.placeHolders != null) {
                if (typeof object.placeHolders !== "object")
                    throw TypeError(".events.MentionEmailGenerated.placeHolders: object expected");
                message.placeHolders = $root.events.MentionEmailGenerated.PlaceHolders.fromObject(object.placeHolders);
            }
            if (object.mergeLanguage != null)
                message.mergeLanguage = String(object.mergeLanguage);
            return message;
        };

        /**
         * Creates a plain object from a MentionEmailGenerated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.MentionEmailGenerated
         * @static
         * @param {events.MentionEmailGenerated} message MentionEmailGenerated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MentionEmailGenerated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = "";
                object.type = "";
                object.serviceName = "";
                object.toEmail = "";
                object.fromEmail = "";
                object.fromName = "";
                object.template = "";
                object.placeHolders = null;
                object.mergeLanguage = "";
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = message.event;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                object.serviceName = message.serviceName;
            if (message.toEmail != null && message.hasOwnProperty("toEmail"))
                object.toEmail = message.toEmail;
            if (message.fromEmail != null && message.hasOwnProperty("fromEmail"))
                object.fromEmail = message.fromEmail;
            if (message.fromName != null && message.hasOwnProperty("fromName"))
                object.fromName = message.fromName;
            if (message.template != null && message.hasOwnProperty("template"))
                object.template = message.template;
            if (message.placeHolders != null && message.hasOwnProperty("placeHolders"))
                object.placeHolders = $root.events.MentionEmailGenerated.PlaceHolders.toObject(message.placeHolders, options);
            if (message.mergeLanguage != null && message.hasOwnProperty("mergeLanguage"))
                object.mergeLanguage = message.mergeLanguage;
            return object;
        };

        /**
         * Converts this MentionEmailGenerated to JSON.
         * @function toJSON
         * @memberof events.MentionEmailGenerated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MentionEmailGenerated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MentionEmailGenerated.Mention = (function() {

            /**
             * Properties of a Mention.
             * @memberof events.MentionEmailGenerated
             * @interface IMention
             * @property {string|null} [trackingUnitName] Mention trackingUnitName
             * @property {string|null} [programName] Mention programName
             * @property {string|null} [programImage] Mention programImage
             * @property {number|Long|null} [mentionDate] Mention mentionDate
             * @property {string|null} [snippets] Mention snippets
             * @property {string|null} [inviteLink] Mention inviteLink
             * @property {string|null} [via] Mention via
             * @property {string|null} [logouri] Mention logouri
             * @property {string|null} [creatorEmail] Mention creatorEmail
             * @property {string|null} [unsubscribeHash] Mention unsubscribeHash
             * @property {string|null} [unsubscribeLink] Mention unsubscribeLink
             */

            /**
             * Constructs a new Mention.
             * @memberof events.MentionEmailGenerated
             * @classdesc Represents a Mention.
             * @implements IMention
             * @constructor
             * @param {events.MentionEmailGenerated.IMention=} [properties] Properties to set
             */
            function Mention(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Mention trackingUnitName.
             * @member {string} trackingUnitName
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.trackingUnitName = "";

            /**
             * Mention programName.
             * @member {string} programName
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.programName = "";

            /**
             * Mention programImage.
             * @member {string} programImage
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.programImage = "";

            /**
             * Mention mentionDate.
             * @member {number|Long} mentionDate
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.mentionDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Mention snippets.
             * @member {string} snippets
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.snippets = "";

            /**
             * Mention inviteLink.
             * @member {string} inviteLink
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.inviteLink = "";

            /**
             * Mention via.
             * @member {string} via
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.via = "";

            /**
             * Mention logouri.
             * @member {string} logouri
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.logouri = "";

            /**
             * Mention creatorEmail.
             * @member {string} creatorEmail
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.creatorEmail = "";

            /**
             * Mention unsubscribeHash.
             * @member {string} unsubscribeHash
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.unsubscribeHash = "";

            /**
             * Mention unsubscribeLink.
             * @member {string} unsubscribeLink
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             */
            Mention.prototype.unsubscribeLink = "";

            /**
             * Creates a new Mention instance using the specified properties.
             * @function create
             * @memberof events.MentionEmailGenerated.Mention
             * @static
             * @param {events.MentionEmailGenerated.IMention=} [properties] Properties to set
             * @returns {events.MentionEmailGenerated.Mention} Mention instance
             */
            Mention.create = function create(properties) {
                return new Mention(properties);
            };

            /**
             * Encodes the specified Mention message. Does not implicitly {@link events.MentionEmailGenerated.Mention.verify|verify} messages.
             * @function encode
             * @memberof events.MentionEmailGenerated.Mention
             * @static
             * @param {events.MentionEmailGenerated.IMention} message Mention message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Mention.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.trackingUnitName != null && message.hasOwnProperty("trackingUnitName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.trackingUnitName);
                if (message.programName != null && message.hasOwnProperty("programName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.programName);
                if (message.programImage != null && message.hasOwnProperty("programImage"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.programImage);
                if (message.mentionDate != null && message.hasOwnProperty("mentionDate"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.mentionDate);
                if (message.snippets != null && message.hasOwnProperty("snippets"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.snippets);
                if (message.inviteLink != null && message.hasOwnProperty("inviteLink"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.inviteLink);
                if (message.via != null && message.hasOwnProperty("via"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.via);
                if (message.logouri != null && message.hasOwnProperty("logouri"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.logouri);
                if (message.creatorEmail != null && message.hasOwnProperty("creatorEmail"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.creatorEmail);
                if (message.unsubscribeHash != null && message.hasOwnProperty("unsubscribeHash"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.unsubscribeHash);
                if (message.unsubscribeLink != null && message.hasOwnProperty("unsubscribeLink"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.unsubscribeLink);
                return writer;
            };

            /**
             * Encodes the specified Mention message, length delimited. Does not implicitly {@link events.MentionEmailGenerated.Mention.verify|verify} messages.
             * @function encodeDelimited
             * @memberof events.MentionEmailGenerated.Mention
             * @static
             * @param {events.MentionEmailGenerated.IMention} message Mention message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Mention.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Mention message from the specified reader or buffer.
             * @function decode
             * @memberof events.MentionEmailGenerated.Mention
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {events.MentionEmailGenerated.Mention} Mention
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Mention.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.MentionEmailGenerated.Mention();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.trackingUnitName = reader.string();
                        break;
                    case 2:
                        message.programName = reader.string();
                        break;
                    case 3:
                        message.programImage = reader.string();
                        break;
                    case 4:
                        message.mentionDate = reader.int64();
                        break;
                    case 5:
                        message.snippets = reader.string();
                        break;
                    case 6:
                        message.inviteLink = reader.string();
                        break;
                    case 7:
                        message.via = reader.string();
                        break;
                    case 8:
                        message.logouri = reader.string();
                        break;
                    case 9:
                        message.creatorEmail = reader.string();
                        break;
                    case 10:
                        message.unsubscribeHash = reader.string();
                        break;
                    case 11:
                        message.unsubscribeLink = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Mention message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof events.MentionEmailGenerated.Mention
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {events.MentionEmailGenerated.Mention} Mention
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Mention.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Mention message.
             * @function verify
             * @memberof events.MentionEmailGenerated.Mention
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Mention.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.trackingUnitName != null && message.hasOwnProperty("trackingUnitName"))
                    if (!$util.isString(message.trackingUnitName))
                        return "trackingUnitName: string expected";
                if (message.programName != null && message.hasOwnProperty("programName"))
                    if (!$util.isString(message.programName))
                        return "programName: string expected";
                if (message.programImage != null && message.hasOwnProperty("programImage"))
                    if (!$util.isString(message.programImage))
                        return "programImage: string expected";
                if (message.mentionDate != null && message.hasOwnProperty("mentionDate"))
                    if (!$util.isInteger(message.mentionDate) && !(message.mentionDate && $util.isInteger(message.mentionDate.low) && $util.isInteger(message.mentionDate.high)))
                        return "mentionDate: integer|Long expected";
                if (message.snippets != null && message.hasOwnProperty("snippets"))
                    if (!$util.isString(message.snippets))
                        return "snippets: string expected";
                if (message.inviteLink != null && message.hasOwnProperty("inviteLink"))
                    if (!$util.isString(message.inviteLink))
                        return "inviteLink: string expected";
                if (message.via != null && message.hasOwnProperty("via"))
                    if (!$util.isString(message.via))
                        return "via: string expected";
                if (message.logouri != null && message.hasOwnProperty("logouri"))
                    if (!$util.isString(message.logouri))
                        return "logouri: string expected";
                if (message.creatorEmail != null && message.hasOwnProperty("creatorEmail"))
                    if (!$util.isString(message.creatorEmail))
                        return "creatorEmail: string expected";
                if (message.unsubscribeHash != null && message.hasOwnProperty("unsubscribeHash"))
                    if (!$util.isString(message.unsubscribeHash))
                        return "unsubscribeHash: string expected";
                if (message.unsubscribeLink != null && message.hasOwnProperty("unsubscribeLink"))
                    if (!$util.isString(message.unsubscribeLink))
                        return "unsubscribeLink: string expected";
                return null;
            };

            /**
             * Creates a Mention message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof events.MentionEmailGenerated.Mention
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {events.MentionEmailGenerated.Mention} Mention
             */
            Mention.fromObject = function fromObject(object) {
                if (object instanceof $root.events.MentionEmailGenerated.Mention)
                    return object;
                var message = new $root.events.MentionEmailGenerated.Mention();
                if (object.trackingUnitName != null)
                    message.trackingUnitName = String(object.trackingUnitName);
                if (object.programName != null)
                    message.programName = String(object.programName);
                if (object.programImage != null)
                    message.programImage = String(object.programImage);
                if (object.mentionDate != null)
                    if ($util.Long)
                        (message.mentionDate = $util.Long.fromValue(object.mentionDate)).unsigned = false;
                    else if (typeof object.mentionDate === "string")
                        message.mentionDate = parseInt(object.mentionDate, 10);
                    else if (typeof object.mentionDate === "number")
                        message.mentionDate = object.mentionDate;
                    else if (typeof object.mentionDate === "object")
                        message.mentionDate = new $util.LongBits(object.mentionDate.low >>> 0, object.mentionDate.high >>> 0).toNumber();
                if (object.snippets != null)
                    message.snippets = String(object.snippets);
                if (object.inviteLink != null)
                    message.inviteLink = String(object.inviteLink);
                if (object.via != null)
                    message.via = String(object.via);
                if (object.logouri != null)
                    message.logouri = String(object.logouri);
                if (object.creatorEmail != null)
                    message.creatorEmail = String(object.creatorEmail);
                if (object.unsubscribeHash != null)
                    message.unsubscribeHash = String(object.unsubscribeHash);
                if (object.unsubscribeLink != null)
                    message.unsubscribeLink = String(object.unsubscribeLink);
                return message;
            };

            /**
             * Creates a plain object from a Mention message. Also converts values to other types if specified.
             * @function toObject
             * @memberof events.MentionEmailGenerated.Mention
             * @static
             * @param {events.MentionEmailGenerated.Mention} message Mention
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Mention.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.trackingUnitName = "";
                    object.programName = "";
                    object.programImage = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.mentionDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.mentionDate = options.longs === String ? "0" : 0;
                    object.snippets = "";
                    object.inviteLink = "";
                    object.via = "";
                    object.logouri = "";
                    object.creatorEmail = "";
                    object.unsubscribeHash = "";
                    object.unsubscribeLink = "";
                }
                if (message.trackingUnitName != null && message.hasOwnProperty("trackingUnitName"))
                    object.trackingUnitName = message.trackingUnitName;
                if (message.programName != null && message.hasOwnProperty("programName"))
                    object.programName = message.programName;
                if (message.programImage != null && message.hasOwnProperty("programImage"))
                    object.programImage = message.programImage;
                if (message.mentionDate != null && message.hasOwnProperty("mentionDate"))
                    if (typeof message.mentionDate === "number")
                        object.mentionDate = options.longs === String ? String(message.mentionDate) : message.mentionDate;
                    else
                        object.mentionDate = options.longs === String ? $util.Long.prototype.toString.call(message.mentionDate) : options.longs === Number ? new $util.LongBits(message.mentionDate.low >>> 0, message.mentionDate.high >>> 0).toNumber() : message.mentionDate;
                if (message.snippets != null && message.hasOwnProperty("snippets"))
                    object.snippets = message.snippets;
                if (message.inviteLink != null && message.hasOwnProperty("inviteLink"))
                    object.inviteLink = message.inviteLink;
                if (message.via != null && message.hasOwnProperty("via"))
                    object.via = message.via;
                if (message.logouri != null && message.hasOwnProperty("logouri"))
                    object.logouri = message.logouri;
                if (message.creatorEmail != null && message.hasOwnProperty("creatorEmail"))
                    object.creatorEmail = message.creatorEmail;
                if (message.unsubscribeHash != null && message.hasOwnProperty("unsubscribeHash"))
                    object.unsubscribeHash = message.unsubscribeHash;
                if (message.unsubscribeLink != null && message.hasOwnProperty("unsubscribeLink"))
                    object.unsubscribeLink = message.unsubscribeLink;
                return object;
            };

            /**
             * Converts this Mention to JSON.
             * @function toJSON
             * @memberof events.MentionEmailGenerated.Mention
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Mention.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Mention;
        })();

        MentionEmailGenerated.PlaceHolders = (function() {

            /**
             * Properties of a PlaceHolders.
             * @memberof events.MentionEmailGenerated
             * @interface IPlaceHolders
             * @property {string|null} [trackingUnitName] PlaceHolders trackingUnitName
             * @property {string|null} [via] PlaceHolders via
             * @property {string|null} [logouri] PlaceHolders logouri
             * @property {Array.<events.MentionEmailGenerated.IMention>|null} [mentions] PlaceHolders mentions
             */

            /**
             * Constructs a new PlaceHolders.
             * @memberof events.MentionEmailGenerated
             * @classdesc Represents a PlaceHolders.
             * @implements IPlaceHolders
             * @constructor
             * @param {events.MentionEmailGenerated.IPlaceHolders=} [properties] Properties to set
             */
            function PlaceHolders(properties) {
                this.mentions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlaceHolders trackingUnitName.
             * @member {string} trackingUnitName
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @instance
             */
            PlaceHolders.prototype.trackingUnitName = "";

            /**
             * PlaceHolders via.
             * @member {string} via
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @instance
             */
            PlaceHolders.prototype.via = "";

            /**
             * PlaceHolders logouri.
             * @member {string} logouri
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @instance
             */
            PlaceHolders.prototype.logouri = "";

            /**
             * PlaceHolders mentions.
             * @member {Array.<events.MentionEmailGenerated.IMention>} mentions
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @instance
             */
            PlaceHolders.prototype.mentions = $util.emptyArray;

            /**
             * Creates a new PlaceHolders instance using the specified properties.
             * @function create
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @static
             * @param {events.MentionEmailGenerated.IPlaceHolders=} [properties] Properties to set
             * @returns {events.MentionEmailGenerated.PlaceHolders} PlaceHolders instance
             */
            PlaceHolders.create = function create(properties) {
                return new PlaceHolders(properties);
            };

            /**
             * Encodes the specified PlaceHolders message. Does not implicitly {@link events.MentionEmailGenerated.PlaceHolders.verify|verify} messages.
             * @function encode
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @static
             * @param {events.MentionEmailGenerated.IPlaceHolders} message PlaceHolders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlaceHolders.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.trackingUnitName != null && message.hasOwnProperty("trackingUnitName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.trackingUnitName);
                if (message.via != null && message.hasOwnProperty("via"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.via);
                if (message.logouri != null && message.hasOwnProperty("logouri"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.logouri);
                if (message.mentions != null && message.mentions.length)
                    for (var i = 0; i < message.mentions.length; ++i)
                        $root.events.MentionEmailGenerated.Mention.encode(message.mentions[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified PlaceHolders message, length delimited. Does not implicitly {@link events.MentionEmailGenerated.PlaceHolders.verify|verify} messages.
             * @function encodeDelimited
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @static
             * @param {events.MentionEmailGenerated.IPlaceHolders} message PlaceHolders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlaceHolders.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlaceHolders message from the specified reader or buffer.
             * @function decode
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {events.MentionEmailGenerated.PlaceHolders} PlaceHolders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlaceHolders.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.MentionEmailGenerated.PlaceHolders();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.trackingUnitName = reader.string();
                        break;
                    case 2:
                        message.via = reader.string();
                        break;
                    case 3:
                        message.logouri = reader.string();
                        break;
                    case 4:
                        if (!(message.mentions && message.mentions.length))
                            message.mentions = [];
                        message.mentions.push($root.events.MentionEmailGenerated.Mention.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PlaceHolders message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {events.MentionEmailGenerated.PlaceHolders} PlaceHolders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlaceHolders.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlaceHolders message.
             * @function verify
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlaceHolders.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.trackingUnitName != null && message.hasOwnProperty("trackingUnitName"))
                    if (!$util.isString(message.trackingUnitName))
                        return "trackingUnitName: string expected";
                if (message.via != null && message.hasOwnProperty("via"))
                    if (!$util.isString(message.via))
                        return "via: string expected";
                if (message.logouri != null && message.hasOwnProperty("logouri"))
                    if (!$util.isString(message.logouri))
                        return "logouri: string expected";
                if (message.mentions != null && message.hasOwnProperty("mentions")) {
                    if (!Array.isArray(message.mentions))
                        return "mentions: array expected";
                    for (var i = 0; i < message.mentions.length; ++i) {
                        var error = $root.events.MentionEmailGenerated.Mention.verify(message.mentions[i]);
                        if (error)
                            return "mentions." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a PlaceHolders message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {events.MentionEmailGenerated.PlaceHolders} PlaceHolders
             */
            PlaceHolders.fromObject = function fromObject(object) {
                if (object instanceof $root.events.MentionEmailGenerated.PlaceHolders)
                    return object;
                var message = new $root.events.MentionEmailGenerated.PlaceHolders();
                if (object.trackingUnitName != null)
                    message.trackingUnitName = String(object.trackingUnitName);
                if (object.via != null)
                    message.via = String(object.via);
                if (object.logouri != null)
                    message.logouri = String(object.logouri);
                if (object.mentions) {
                    if (!Array.isArray(object.mentions))
                        throw TypeError(".events.MentionEmailGenerated.PlaceHolders.mentions: array expected");
                    message.mentions = [];
                    for (var i = 0; i < object.mentions.length; ++i) {
                        if (typeof object.mentions[i] !== "object")
                            throw TypeError(".events.MentionEmailGenerated.PlaceHolders.mentions: object expected");
                        message.mentions[i] = $root.events.MentionEmailGenerated.Mention.fromObject(object.mentions[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a PlaceHolders message. Also converts values to other types if specified.
             * @function toObject
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @static
             * @param {events.MentionEmailGenerated.PlaceHolders} message PlaceHolders
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlaceHolders.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.mentions = [];
                if (options.defaults) {
                    object.trackingUnitName = "";
                    object.via = "";
                    object.logouri = "";
                }
                if (message.trackingUnitName != null && message.hasOwnProperty("trackingUnitName"))
                    object.trackingUnitName = message.trackingUnitName;
                if (message.via != null && message.hasOwnProperty("via"))
                    object.via = message.via;
                if (message.logouri != null && message.hasOwnProperty("logouri"))
                    object.logouri = message.logouri;
                if (message.mentions && message.mentions.length) {
                    object.mentions = [];
                    for (var j = 0; j < message.mentions.length; ++j)
                        object.mentions[j] = $root.events.MentionEmailGenerated.Mention.toObject(message.mentions[j], options);
                }
                return object;
            };

            /**
             * Converts this PlaceHolders to JSON.
             * @function toJSON
             * @memberof events.MentionEmailGenerated.PlaceHolders
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlaceHolders.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PlaceHolders;
        })();

        return MentionEmailGenerated;
    })();

    events.BasicEmail = (function() {

        /**
         * Properties of a BasicEmail.
         * @memberof events
         * @interface IBasicEmail
         * @property {string|null} [fromAddress] BasicEmail fromAddress
         * @property {string|null} [toAddress] BasicEmail toAddress
         * @property {string|null} [subject] BasicEmail subject
         * @property {string|null} [body] BasicEmail body
         * @property {string|null} [replyTo] BasicEmail replyTo
         * @property {string|null} [bodyHtml] BasicEmail bodyHtml
         */

        /**
         * Constructs a new BasicEmail.
         * @memberof events
         * @classdesc Represents a BasicEmail.
         * @implements IBasicEmail
         * @constructor
         * @param {events.IBasicEmail=} [properties] Properties to set
         */
        function BasicEmail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BasicEmail fromAddress.
         * @member {string} fromAddress
         * @memberof events.BasicEmail
         * @instance
         */
        BasicEmail.prototype.fromAddress = "";

        /**
         * BasicEmail toAddress.
         * @member {string} toAddress
         * @memberof events.BasicEmail
         * @instance
         */
        BasicEmail.prototype.toAddress = "";

        /**
         * BasicEmail subject.
         * @member {string} subject
         * @memberof events.BasicEmail
         * @instance
         */
        BasicEmail.prototype.subject = "";

        /**
         * BasicEmail body.
         * @member {string} body
         * @memberof events.BasicEmail
         * @instance
         */
        BasicEmail.prototype.body = "";

        /**
         * BasicEmail replyTo.
         * @member {string} replyTo
         * @memberof events.BasicEmail
         * @instance
         */
        BasicEmail.prototype.replyTo = "";

        /**
         * BasicEmail bodyHtml.
         * @member {string} bodyHtml
         * @memberof events.BasicEmail
         * @instance
         */
        BasicEmail.prototype.bodyHtml = "";

        /**
         * Creates a new BasicEmail instance using the specified properties.
         * @function create
         * @memberof events.BasicEmail
         * @static
         * @param {events.IBasicEmail=} [properties] Properties to set
         * @returns {events.BasicEmail} BasicEmail instance
         */
        BasicEmail.create = function create(properties) {
            return new BasicEmail(properties);
        };

        /**
         * Encodes the specified BasicEmail message. Does not implicitly {@link events.BasicEmail.verify|verify} messages.
         * @function encode
         * @memberof events.BasicEmail
         * @static
         * @param {events.IBasicEmail} message BasicEmail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BasicEmail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.fromAddress);
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.toAddress);
            if (message.subject != null && message.hasOwnProperty("subject"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.subject);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.body);
            if (message.replyTo != null && message.hasOwnProperty("replyTo"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.replyTo);
            if (message.bodyHtml != null && message.hasOwnProperty("bodyHtml"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.bodyHtml);
            return writer;
        };

        /**
         * Encodes the specified BasicEmail message, length delimited. Does not implicitly {@link events.BasicEmail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.BasicEmail
         * @static
         * @param {events.IBasicEmail} message BasicEmail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BasicEmail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BasicEmail message from the specified reader or buffer.
         * @function decode
         * @memberof events.BasicEmail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.BasicEmail} BasicEmail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BasicEmail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.BasicEmail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.fromAddress = reader.string();
                    break;
                case 11:
                    message.toAddress = reader.string();
                    break;
                case 12:
                    message.subject = reader.string();
                    break;
                case 13:
                    message.body = reader.string();
                    break;
                case 14:
                    message.replyTo = reader.string();
                    break;
                case 15:
                    message.bodyHtml = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BasicEmail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.BasicEmail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.BasicEmail} BasicEmail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BasicEmail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BasicEmail message.
         * @function verify
         * @memberof events.BasicEmail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BasicEmail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                if (!$util.isString(message.fromAddress))
                    return "fromAddress: string expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!$util.isString(message.toAddress))
                    return "toAddress: string expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            if (message.replyTo != null && message.hasOwnProperty("replyTo"))
                if (!$util.isString(message.replyTo))
                    return "replyTo: string expected";
            if (message.bodyHtml != null && message.hasOwnProperty("bodyHtml"))
                if (!$util.isString(message.bodyHtml))
                    return "bodyHtml: string expected";
            return null;
        };

        /**
         * Creates a BasicEmail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.BasicEmail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.BasicEmail} BasicEmail
         */
        BasicEmail.fromObject = function fromObject(object) {
            if (object instanceof $root.events.BasicEmail)
                return object;
            var message = new $root.events.BasicEmail();
            if (object.fromAddress != null)
                message.fromAddress = String(object.fromAddress);
            if (object.toAddress != null)
                message.toAddress = String(object.toAddress);
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.body != null)
                message.body = String(object.body);
            if (object.replyTo != null)
                message.replyTo = String(object.replyTo);
            if (object.bodyHtml != null)
                message.bodyHtml = String(object.bodyHtml);
            return message;
        };

        /**
         * Creates a plain object from a BasicEmail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.BasicEmail
         * @static
         * @param {events.BasicEmail} message BasicEmail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BasicEmail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fromAddress = "";
                object.toAddress = "";
                object.subject = "";
                object.body = "";
                object.replyTo = "";
                object.bodyHtml = "";
            }
            if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                object.fromAddress = message.fromAddress;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = message.toAddress;
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            if (message.replyTo != null && message.hasOwnProperty("replyTo"))
                object.replyTo = message.replyTo;
            if (message.bodyHtml != null && message.hasOwnProperty("bodyHtml"))
                object.bodyHtml = message.bodyHtml;
            return object;
        };

        /**
         * Converts this BasicEmail to JSON.
         * @function toJSON
         * @memberof events.BasicEmail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BasicEmail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BasicEmail;
    })();

    events.SMSNotification = (function() {

        /**
         * Properties of a SMSNotification.
         * @memberof events
         * @interface ISMSNotification
         * @property {string|null} [fromNumber] SMSNotification fromNumber
         * @property {string|null} [toNumber] SMSNotification toNumber
         * @property {string|null} [message] SMSNotification message
         */

        /**
         * Constructs a new SMSNotification.
         * @memberof events
         * @classdesc Represents a SMSNotification.
         * @implements ISMSNotification
         * @constructor
         * @param {events.ISMSNotification=} [properties] Properties to set
         */
        function SMSNotification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SMSNotification fromNumber.
         * @member {string} fromNumber
         * @memberof events.SMSNotification
         * @instance
         */
        SMSNotification.prototype.fromNumber = "";

        /**
         * SMSNotification toNumber.
         * @member {string} toNumber
         * @memberof events.SMSNotification
         * @instance
         */
        SMSNotification.prototype.toNumber = "";

        /**
         * SMSNotification message.
         * @member {string} message
         * @memberof events.SMSNotification
         * @instance
         */
        SMSNotification.prototype.message = "";

        /**
         * Creates a new SMSNotification instance using the specified properties.
         * @function create
         * @memberof events.SMSNotification
         * @static
         * @param {events.ISMSNotification=} [properties] Properties to set
         * @returns {events.SMSNotification} SMSNotification instance
         */
        SMSNotification.create = function create(properties) {
            return new SMSNotification(properties);
        };

        /**
         * Encodes the specified SMSNotification message. Does not implicitly {@link events.SMSNotification.verify|verify} messages.
         * @function encode
         * @memberof events.SMSNotification
         * @static
         * @param {events.ISMSNotification} message SMSNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SMSNotification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromNumber != null && message.hasOwnProperty("fromNumber"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.fromNumber);
            if (message.toNumber != null && message.hasOwnProperty("toNumber"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.toNumber);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified SMSNotification message, length delimited. Does not implicitly {@link events.SMSNotification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.SMSNotification
         * @static
         * @param {events.ISMSNotification} message SMSNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SMSNotification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SMSNotification message from the specified reader or buffer.
         * @function decode
         * @memberof events.SMSNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.SMSNotification} SMSNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SMSNotification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.SMSNotification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.fromNumber = reader.string();
                    break;
                case 11:
                    message.toNumber = reader.string();
                    break;
                case 12:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SMSNotification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.SMSNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.SMSNotification} SMSNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SMSNotification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SMSNotification message.
         * @function verify
         * @memberof events.SMSNotification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SMSNotification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromNumber != null && message.hasOwnProperty("fromNumber"))
                if (!$util.isString(message.fromNumber))
                    return "fromNumber: string expected";
            if (message.toNumber != null && message.hasOwnProperty("toNumber"))
                if (!$util.isString(message.toNumber))
                    return "toNumber: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a SMSNotification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.SMSNotification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.SMSNotification} SMSNotification
         */
        SMSNotification.fromObject = function fromObject(object) {
            if (object instanceof $root.events.SMSNotification)
                return object;
            var message = new $root.events.SMSNotification();
            if (object.fromNumber != null)
                message.fromNumber = String(object.fromNumber);
            if (object.toNumber != null)
                message.toNumber = String(object.toNumber);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a SMSNotification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.SMSNotification
         * @static
         * @param {events.SMSNotification} message SMSNotification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SMSNotification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fromNumber = "";
                object.toNumber = "";
                object.message = "";
            }
            if (message.fromNumber != null && message.hasOwnProperty("fromNumber"))
                object.fromNumber = message.fromNumber;
            if (message.toNumber != null && message.hasOwnProperty("toNumber"))
                object.toNumber = message.toNumber;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this SMSNotification to JSON.
         * @function toJSON
         * @memberof events.SMSNotification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SMSNotification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SMSNotification;
    })();

    events.TriggerCacheRefresh = (function() {

        /**
         * Properties of a TriggerCacheRefresh.
         * @memberof events
         * @interface ITriggerCacheRefresh
         */

        /**
         * Constructs a new TriggerCacheRefresh.
         * @memberof events
         * @classdesc Represents a TriggerCacheRefresh.
         * @implements ITriggerCacheRefresh
         * @constructor
         * @param {events.ITriggerCacheRefresh=} [properties] Properties to set
         */
        function TriggerCacheRefresh(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new TriggerCacheRefresh instance using the specified properties.
         * @function create
         * @memberof events.TriggerCacheRefresh
         * @static
         * @param {events.ITriggerCacheRefresh=} [properties] Properties to set
         * @returns {events.TriggerCacheRefresh} TriggerCacheRefresh instance
         */
        TriggerCacheRefresh.create = function create(properties) {
            return new TriggerCacheRefresh(properties);
        };

        /**
         * Encodes the specified TriggerCacheRefresh message. Does not implicitly {@link events.TriggerCacheRefresh.verify|verify} messages.
         * @function encode
         * @memberof events.TriggerCacheRefresh
         * @static
         * @param {events.ITriggerCacheRefresh} message TriggerCacheRefresh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TriggerCacheRefresh.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TriggerCacheRefresh message, length delimited. Does not implicitly {@link events.TriggerCacheRefresh.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.TriggerCacheRefresh
         * @static
         * @param {events.ITriggerCacheRefresh} message TriggerCacheRefresh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TriggerCacheRefresh.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TriggerCacheRefresh message from the specified reader or buffer.
         * @function decode
         * @memberof events.TriggerCacheRefresh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.TriggerCacheRefresh} TriggerCacheRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TriggerCacheRefresh.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.TriggerCacheRefresh();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TriggerCacheRefresh message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.TriggerCacheRefresh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.TriggerCacheRefresh} TriggerCacheRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TriggerCacheRefresh.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TriggerCacheRefresh message.
         * @function verify
         * @memberof events.TriggerCacheRefresh
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TriggerCacheRefresh.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TriggerCacheRefresh message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.TriggerCacheRefresh
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.TriggerCacheRefresh} TriggerCacheRefresh
         */
        TriggerCacheRefresh.fromObject = function fromObject(object) {
            if (object instanceof $root.events.TriggerCacheRefresh)
                return object;
            return new $root.events.TriggerCacheRefresh();
        };

        /**
         * Creates a plain object from a TriggerCacheRefresh message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.TriggerCacheRefresh
         * @static
         * @param {events.TriggerCacheRefresh} message TriggerCacheRefresh
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TriggerCacheRefresh.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TriggerCacheRefresh to JSON.
         * @function toJSON
         * @memberof events.TriggerCacheRefresh
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TriggerCacheRefresh.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TriggerCacheRefresh;
    })();

    return events;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    object.value = options.bytes === String ? "" : [];
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
