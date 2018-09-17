import * as $protobuf from "protobufjs";

/** Namespace events. */
export namespace events {

    /** Properties of a LoginSucceeded. */
    interface ILoginSucceeded {

        /** LoginSucceeded userName */
        userName?: (string|null);

        /** LoginSucceeded userAgent */
        userAgent?: (string|null);

        /** LoginSucceeded ip */
        ip?: (string|null);

        /** LoginSucceeded requestUrl */
        requestUrl?: (string|null);

        /** LoginSucceeded userId */
        userId?: (string|null);

        /** LoginSucceeded organizationId */
        organizationId?: (number|Long|null);
    }

    /** Represents a LoginSucceeded. */
    class LoginSucceeded implements ILoginSucceeded {

        /**
         * Constructs a new LoginSucceeded.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ILoginSucceeded);

        /** LoginSucceeded userName. */
        public userName: string;

        /** LoginSucceeded userAgent. */
        public userAgent: string;

        /** LoginSucceeded ip. */
        public ip: string;

        /** LoginSucceeded requestUrl. */
        public requestUrl: string;

        /** LoginSucceeded userId. */
        public userId: string;

        /** LoginSucceeded organizationId. */
        public organizationId: (number|Long);

        /**
         * Creates a new LoginSucceeded instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginSucceeded instance
         */
        public static create(properties?: events.ILoginSucceeded): events.LoginSucceeded;

        /**
         * Encodes the specified LoginSucceeded message. Does not implicitly {@link events.LoginSucceeded.verify|verify} messages.
         * @param message LoginSucceeded message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ILoginSucceeded, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginSucceeded message, length delimited. Does not implicitly {@link events.LoginSucceeded.verify|verify} messages.
         * @param message LoginSucceeded message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ILoginSucceeded, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginSucceeded message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginSucceeded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.LoginSucceeded;

        /**
         * Decodes a LoginSucceeded message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginSucceeded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.LoginSucceeded;

        /**
         * Verifies a LoginSucceeded message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginSucceeded message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginSucceeded
         */
        public static fromObject(object: { [k: string]: any }): events.LoginSucceeded;

        /**
         * Creates a plain object from a LoginSucceeded message. Also converts values to other types if specified.
         * @param message LoginSucceeded
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.LoginSucceeded, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginSucceeded to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginFailed. */
    interface ILoginFailed {

        /** LoginFailed userName */
        userName?: (string|null);

        /** LoginFailed userAgent */
        userAgent?: (string|null);

        /** LoginFailed ip */
        ip?: (string|null);

        /** LoginFailed requestUrl */
        requestUrl?: (string|null);

        /** LoginFailed userId */
        userId?: (string|null);

        /** LoginFailed organizationId */
        organizationId?: (number|Long|null);
    }

    /** Represents a LoginFailed. */
    class LoginFailed implements ILoginFailed {

        /**
         * Constructs a new LoginFailed.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ILoginFailed);

        /** LoginFailed userName. */
        public userName: string;

        /** LoginFailed userAgent. */
        public userAgent: string;

        /** LoginFailed ip. */
        public ip: string;

        /** LoginFailed requestUrl. */
        public requestUrl: string;

        /** LoginFailed userId. */
        public userId: string;

        /** LoginFailed organizationId. */
        public organizationId: (number|Long);

        /**
         * Creates a new LoginFailed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginFailed instance
         */
        public static create(properties?: events.ILoginFailed): events.LoginFailed;

        /**
         * Encodes the specified LoginFailed message. Does not implicitly {@link events.LoginFailed.verify|verify} messages.
         * @param message LoginFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ILoginFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginFailed message, length delimited. Does not implicitly {@link events.LoginFailed.verify|verify} messages.
         * @param message LoginFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ILoginFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginFailed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.LoginFailed;

        /**
         * Decodes a LoginFailed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.LoginFailed;

        /**
         * Verifies a LoginFailed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginFailed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginFailed
         */
        public static fromObject(object: { [k: string]: any }): events.LoginFailed;

        /**
         * Creates a plain object from a LoginFailed message. Also converts values to other types if specified.
         * @param message LoginFailed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.LoginFailed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginFailed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginAttemptsExceeded. */
    interface ILoginAttemptsExceeded {

        /** LoginAttemptsExceeded userName */
        userName?: (string|null);

        /** LoginAttemptsExceeded userAgent */
        userAgent?: (string|null);

        /** LoginAttemptsExceeded ip */
        ip?: (string|null);

        /** LoginAttemptsExceeded requestUrl */
        requestUrl?: (string|null);

        /** LoginAttemptsExceeded userId */
        userId?: (string|null);
    }

    /** Represents a LoginAttemptsExceeded. */
    class LoginAttemptsExceeded implements ILoginAttemptsExceeded {

        /**
         * Constructs a new LoginAttemptsExceeded.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ILoginAttemptsExceeded);

        /** LoginAttemptsExceeded userName. */
        public userName: string;

        /** LoginAttemptsExceeded userAgent. */
        public userAgent: string;

        /** LoginAttemptsExceeded ip. */
        public ip: string;

        /** LoginAttemptsExceeded requestUrl. */
        public requestUrl: string;

        /** LoginAttemptsExceeded userId. */
        public userId: string;

        /**
         * Creates a new LoginAttemptsExceeded instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginAttemptsExceeded instance
         */
        public static create(properties?: events.ILoginAttemptsExceeded): events.LoginAttemptsExceeded;

        /**
         * Encodes the specified LoginAttemptsExceeded message. Does not implicitly {@link events.LoginAttemptsExceeded.verify|verify} messages.
         * @param message LoginAttemptsExceeded message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ILoginAttemptsExceeded, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginAttemptsExceeded message, length delimited. Does not implicitly {@link events.LoginAttemptsExceeded.verify|verify} messages.
         * @param message LoginAttemptsExceeded message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ILoginAttemptsExceeded, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginAttemptsExceeded message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginAttemptsExceeded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.LoginAttemptsExceeded;

        /**
         * Decodes a LoginAttemptsExceeded message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginAttemptsExceeded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.LoginAttemptsExceeded;

        /**
         * Verifies a LoginAttemptsExceeded message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginAttemptsExceeded message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginAttemptsExceeded
         */
        public static fromObject(object: { [k: string]: any }): events.LoginAttemptsExceeded;

        /**
         * Creates a plain object from a LoginAttemptsExceeded message. Also converts values to other types if specified.
         * @param message LoginAttemptsExceeded
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.LoginAttemptsExceeded, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginAttemptsExceeded to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Impersonated. */
    interface IImpersonated {

        /** Impersonated userName */
        userName?: (string|null);

        /** Impersonated userAgent */
        userAgent?: (string|null);

        /** Impersonated ip */
        ip?: (string|null);

        /** Impersonated requestUrl */
        requestUrl?: (string|null);

        /** Impersonated userId */
        userId?: (string|null);

        /** Impersonated organizationId */
        organizationId?: (number|Long|null);

        /** Impersonated impersontatedUserId */
        impersontatedUserId?: (string|null);
    }

    /** Represents an Impersonated. */
    class Impersonated implements IImpersonated {

        /**
         * Constructs a new Impersonated.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IImpersonated);

        /** Impersonated userName. */
        public userName: string;

        /** Impersonated userAgent. */
        public userAgent: string;

        /** Impersonated ip. */
        public ip: string;

        /** Impersonated requestUrl. */
        public requestUrl: string;

        /** Impersonated userId. */
        public userId: string;

        /** Impersonated organizationId. */
        public organizationId: (number|Long);

        /** Impersonated impersontatedUserId. */
        public impersontatedUserId: string;

        /**
         * Creates a new Impersonated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Impersonated instance
         */
        public static create(properties?: events.IImpersonated): events.Impersonated;

        /**
         * Encodes the specified Impersonated message. Does not implicitly {@link events.Impersonated.verify|verify} messages.
         * @param message Impersonated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IImpersonated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Impersonated message, length delimited. Does not implicitly {@link events.Impersonated.verify|verify} messages.
         * @param message Impersonated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IImpersonated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Impersonated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Impersonated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.Impersonated;

        /**
         * Decodes an Impersonated message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Impersonated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.Impersonated;

        /**
         * Verifies an Impersonated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Impersonated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Impersonated
         */
        public static fromObject(object: { [k: string]: any }): events.Impersonated;

        /**
         * Creates a plain object from an Impersonated message. Also converts values to other types if specified.
         * @param message Impersonated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.Impersonated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Impersonated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionUserForbidden. */
    interface IActionUserForbidden {

        /** ActionUserForbidden userName */
        userName?: (string|null);

        /** ActionUserForbidden userAgent */
        userAgent?: (string|null);

        /** ActionUserForbidden ip */
        ip?: (string|null);

        /** ActionUserForbidden requestUrl */
        requestUrl?: (string|null);

        /** ActionUserForbidden userId */
        userId?: (string|null);

        /** ActionUserForbidden organizationId */
        organizationId?: (number|Long|null);

        /** ActionUserForbidden impersontatedUserId */
        impersontatedUserId?: (string|null);
    }

    /** Represents an ActionUserForbidden. */
    class ActionUserForbidden implements IActionUserForbidden {

        /**
         * Constructs a new ActionUserForbidden.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IActionUserForbidden);

        /** ActionUserForbidden userName. */
        public userName: string;

        /** ActionUserForbidden userAgent. */
        public userAgent: string;

        /** ActionUserForbidden ip. */
        public ip: string;

        /** ActionUserForbidden requestUrl. */
        public requestUrl: string;

        /** ActionUserForbidden userId. */
        public userId: string;

        /** ActionUserForbidden organizationId. */
        public organizationId: (number|Long);

        /** ActionUserForbidden impersontatedUserId. */
        public impersontatedUserId: string;

        /**
         * Creates a new ActionUserForbidden instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionUserForbidden instance
         */
        public static create(properties?: events.IActionUserForbidden): events.ActionUserForbidden;

        /**
         * Encodes the specified ActionUserForbidden message. Does not implicitly {@link events.ActionUserForbidden.verify|verify} messages.
         * @param message ActionUserForbidden message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IActionUserForbidden, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionUserForbidden message, length delimited. Does not implicitly {@link events.ActionUserForbidden.verify|verify} messages.
         * @param message ActionUserForbidden message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IActionUserForbidden, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionUserForbidden message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionUserForbidden
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.ActionUserForbidden;

        /**
         * Decodes an ActionUserForbidden message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionUserForbidden
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.ActionUserForbidden;

        /**
         * Verifies an ActionUserForbidden message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionUserForbidden message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionUserForbidden
         */
        public static fromObject(object: { [k: string]: any }): events.ActionUserForbidden;

        /**
         * Creates a plain object from an ActionUserForbidden message. Also converts values to other types if specified.
         * @param message ActionUserForbidden
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.ActionUserForbidden, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionUserForbidden to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Core. */
    interface ICore {

        /**
         * Read-only and auto-generated. ID of the message, ID is a uuid v4 auto-generated by messaging library.
         * It will be propagate through the system. Similar to correlationId
         */
        id?: (string|null);

        /** The name of the event is */
        name?: (string|null);

        /** Core timestamp */
        timestamp?: (string|null);

        /** Core type */
        type?: (string|null);

        /** Core serviceName */
        serviceName?: (string|null);

        /** Core applicationId */
        applicationId?: (string|null);

        /** Core eventId */
        eventId?: (string|null);

        /** Core organizationId */
        organizationId?: (string|null);

        /** Core userId */
        userId?: (string|null);

        /** Core tokenId */
        tokenId?: (string|null);
    }

    /** Represents a Core. */
    class Core implements ICore {

        /**
         * Constructs a new Core.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ICore);

        /**
         * Read-only and auto-generated. ID of the message, ID is a uuid v4 auto-generated by messaging library.
         * It will be propagate through the system. Similar to correlationId
         */
        public id: string;

        /** The name of the event is */
        public name: string;

        /** Core timestamp. */
        public timestamp: string;

        /** Core type. */
        public type: string;

        /** Core serviceName. */
        public serviceName: string;

        /** Core applicationId. */
        public applicationId: string;

        /** Core eventId. */
        public eventId: string;

        /** Core organizationId. */
        public organizationId: string;

        /** Core userId. */
        public userId: string;

        /** Core tokenId. */
        public tokenId: string;

        /**
         * Creates a new Core instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Core instance
         */
        public static create(properties?: events.ICore): events.Core;

        /**
         * Encodes the specified Core message. Does not implicitly {@link events.Core.verify|verify} messages.
         * @param message Core message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ICore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Core message, length delimited. Does not implicitly {@link events.Core.verify|verify} messages.
         * @param message Core message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ICore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Core message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Core
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.Core;

        /**
         * Decodes a Core message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Core
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.Core;

        /**
         * Verifies a Core message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Core message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Core
         */
        public static fromObject(object: { [k: string]: any }): events.Core;

        /**
         * Creates a plain object from a Core message. Also converts values to other types if specified.
         * @param message Core
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.Core, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Core to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Trace. */
    interface ITrace {

        /** Open Tracing trace context. */
        traceContext?: ({ [k: string]: string }|null);

        /** Open Tracing trace context. */
        traceTags?: ({ [k: string]: string }|null);

        /** Trace serviceName */
        serviceName?: (string|null);
    }

    /** Represents a Trace. */
    class Trace implements ITrace {

        /**
         * Constructs a new Trace.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ITrace);

        /** Open Tracing trace context. */
        public traceContext: { [k: string]: string };

        /** Open Tracing trace context. */
        public traceTags: { [k: string]: string };

        /** Trace serviceName. */
        public serviceName: string;

        /**
         * Creates a new Trace instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Trace instance
         */
        public static create(properties?: events.ITrace): events.Trace;

        /**
         * Encodes the specified Trace message. Does not implicitly {@link events.Trace.verify|verify} messages.
         * @param message Trace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ITrace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Trace message, length delimited. Does not implicitly {@link events.Trace.verify|verify} messages.
         * @param message Trace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ITrace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Trace message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Trace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.Trace;

        /**
         * Decodes a Trace message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Trace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.Trace;

        /**
         * Verifies a Trace message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Trace message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Trace
         */
        public static fromObject(object: { [k: string]: any }): events.Trace;

        /**
         * Creates a plain object from a Trace message. Also converts values to other types if specified.
         * @param message Trace
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.Trace, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Trace to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VtEvent. */
    interface IVtEvent {

        /** VtEvent core */
        core?: (events.ICore|null);

        /** VtEvent trace */
        trace?: (events.ITrace|null);

        /** VtEvent baggage */
        baggage?: ({ [k: string]: string }|null);

        /** VtEvent data */
        data?: (google.protobuf.IAny|null);
    }

    /** Represents a VtEvent. */
    class VtEvent implements IVtEvent {

        /**
         * Constructs a new VtEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IVtEvent);

        /** VtEvent core. */
        public core?: (events.ICore|null);

        /** VtEvent trace. */
        public trace?: (events.ITrace|null);

        /** VtEvent baggage. */
        public baggage: { [k: string]: string };

        /** VtEvent data. */
        public data?: (google.protobuf.IAny|null);

        /**
         * Creates a new VtEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VtEvent instance
         */
        public static create(properties?: events.IVtEvent): events.VtEvent;

        /**
         * Encodes the specified VtEvent message. Does not implicitly {@link events.VtEvent.verify|verify} messages.
         * @param message VtEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IVtEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VtEvent message, length delimited. Does not implicitly {@link events.VtEvent.verify|verify} messages.
         * @param message VtEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IVtEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VtEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VtEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.VtEvent;

        /**
         * Decodes a VtEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VtEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.VtEvent;

        /**
         * Verifies a VtEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VtEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VtEvent
         */
        public static fromObject(object: { [k: string]: any }): events.VtEvent;

        /**
         * Creates a plain object from a VtEvent message. Also converts values to other types if specified.
         * @param message VtEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.VtEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VtEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EngineBuildUploadCompleted. */
    interface IEngineBuildUploadCompleted {

        /** EngineBuildUploadCompleted userId */
        userId?: (string|null);

        /** EngineBuildUploadCompleted jobId */
        jobId?: (string|null);

        /** EngineBuildUploadCompleted assetId */
        assetId?: (string|null);

        /** EngineBuildUploadCompleted success */
        success?: (boolean|null);
    }

    /** Represents an EngineBuildUploadCompleted. */
    class EngineBuildUploadCompleted implements IEngineBuildUploadCompleted {

        /**
         * Constructs a new EngineBuildUploadCompleted.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEngineBuildUploadCompleted);

        /** EngineBuildUploadCompleted userId. */
        public userId: string;

        /** EngineBuildUploadCompleted jobId. */
        public jobId: string;

        /** EngineBuildUploadCompleted assetId. */
        public assetId: string;

        /** EngineBuildUploadCompleted success. */
        public success: boolean;

        /**
         * Creates a new EngineBuildUploadCompleted instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EngineBuildUploadCompleted instance
         */
        public static create(properties?: events.IEngineBuildUploadCompleted): events.EngineBuildUploadCompleted;

        /**
         * Encodes the specified EngineBuildUploadCompleted message. Does not implicitly {@link events.EngineBuildUploadCompleted.verify|verify} messages.
         * @param message EngineBuildUploadCompleted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEngineBuildUploadCompleted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EngineBuildUploadCompleted message, length delimited. Does not implicitly {@link events.EngineBuildUploadCompleted.verify|verify} messages.
         * @param message EngineBuildUploadCompleted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEngineBuildUploadCompleted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EngineBuildUploadCompleted message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EngineBuildUploadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EngineBuildUploadCompleted;

        /**
         * Decodes an EngineBuildUploadCompleted message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EngineBuildUploadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EngineBuildUploadCompleted;

        /**
         * Verifies an EngineBuildUploadCompleted message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EngineBuildUploadCompleted message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EngineBuildUploadCompleted
         */
        public static fromObject(object: { [k: string]: any }): events.EngineBuildUploadCompleted;

        /**
         * Creates a plain object from an EngineBuildUploadCompleted message. Also converts values to other types if specified.
         * @param message EngineBuildUploadCompleted
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EngineBuildUploadCompleted, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EngineBuildUploadCompleted to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EngineBuildManifestProcessed. */
    interface IEngineBuildManifestProcessed {

        /** EngineBuildManifestProcessed userId */
        userId?: (string|null);

        /** EngineBuildManifestProcessed jobId */
        jobId?: (string|null);

        /** EngineBuildManifestProcessed success */
        success?: (boolean|null);

        /** EngineBuildManifestProcessed engineId */
        engineId?: (string|null);

        /** EngineBuildManifestProcessed buildId */
        buildId?: (string|null);
    }

    /** Represents an EngineBuildManifestProcessed. */
    class EngineBuildManifestProcessed implements IEngineBuildManifestProcessed {

        /**
         * Constructs a new EngineBuildManifestProcessed.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEngineBuildManifestProcessed);

        /** EngineBuildManifestProcessed userId. */
        public userId: string;

        /** EngineBuildManifestProcessed jobId. */
        public jobId: string;

        /** EngineBuildManifestProcessed success. */
        public success: boolean;

        /** EngineBuildManifestProcessed engineId. */
        public engineId: string;

        /** EngineBuildManifestProcessed buildId. */
        public buildId: string;

        /**
         * Creates a new EngineBuildManifestProcessed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EngineBuildManifestProcessed instance
         */
        public static create(properties?: events.IEngineBuildManifestProcessed): events.EngineBuildManifestProcessed;

        /**
         * Encodes the specified EngineBuildManifestProcessed message. Does not implicitly {@link events.EngineBuildManifestProcessed.verify|verify} messages.
         * @param message EngineBuildManifestProcessed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEngineBuildManifestProcessed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EngineBuildManifestProcessed message, length delimited. Does not implicitly {@link events.EngineBuildManifestProcessed.verify|verify} messages.
         * @param message EngineBuildManifestProcessed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEngineBuildManifestProcessed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EngineBuildManifestProcessed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EngineBuildManifestProcessed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EngineBuildManifestProcessed;

        /**
         * Decodes an EngineBuildManifestProcessed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EngineBuildManifestProcessed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EngineBuildManifestProcessed;

        /**
         * Verifies an EngineBuildManifestProcessed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EngineBuildManifestProcessed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EngineBuildManifestProcessed
         */
        public static fromObject(object: { [k: string]: any }): events.EngineBuildManifestProcessed;

        /**
         * Creates a plain object from an EngineBuildManifestProcessed message. Also converts values to other types if specified.
         * @param message EngineBuildManifestProcessed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EngineBuildManifestProcessed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EngineBuildManifestProcessed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EngineBuildVulnerabilityChecked. */
    interface IEngineBuildVulnerabilityChecked {

        /** EngineBuildVulnerabilityChecked userId */
        userId?: (string|null);

        /** EngineBuildVulnerabilityChecked jobId */
        jobId?: (string|null);

        /** EngineBuildVulnerabilityChecked assetId */
        assetId?: (string|null);

        /** EngineBuildVulnerabilityChecked success */
        success?: (boolean|null);

        /** EngineBuildVulnerabilityChecked engineId */
        engineId?: (string|null);

        /** EngineBuildVulnerabilityChecked buildId */
        buildId?: (string|null);
    }

    /** Represents an EngineBuildVulnerabilityChecked. */
    class EngineBuildVulnerabilityChecked implements IEngineBuildVulnerabilityChecked {

        /**
         * Constructs a new EngineBuildVulnerabilityChecked.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEngineBuildVulnerabilityChecked);

        /** EngineBuildVulnerabilityChecked userId. */
        public userId: string;

        /** EngineBuildVulnerabilityChecked jobId. */
        public jobId: string;

        /** EngineBuildVulnerabilityChecked assetId. */
        public assetId: string;

        /** EngineBuildVulnerabilityChecked success. */
        public success: boolean;

        /** EngineBuildVulnerabilityChecked engineId. */
        public engineId: string;

        /** EngineBuildVulnerabilityChecked buildId. */
        public buildId: string;

        /**
         * Creates a new EngineBuildVulnerabilityChecked instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EngineBuildVulnerabilityChecked instance
         */
        public static create(properties?: events.IEngineBuildVulnerabilityChecked): events.EngineBuildVulnerabilityChecked;

        /**
         * Encodes the specified EngineBuildVulnerabilityChecked message. Does not implicitly {@link events.EngineBuildVulnerabilityChecked.verify|verify} messages.
         * @param message EngineBuildVulnerabilityChecked message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEngineBuildVulnerabilityChecked, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EngineBuildVulnerabilityChecked message, length delimited. Does not implicitly {@link events.EngineBuildVulnerabilityChecked.verify|verify} messages.
         * @param message EngineBuildVulnerabilityChecked message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEngineBuildVulnerabilityChecked, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EngineBuildVulnerabilityChecked message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EngineBuildVulnerabilityChecked
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EngineBuildVulnerabilityChecked;

        /**
         * Decodes an EngineBuildVulnerabilityChecked message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EngineBuildVulnerabilityChecked
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EngineBuildVulnerabilityChecked;

        /**
         * Verifies an EngineBuildVulnerabilityChecked message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EngineBuildVulnerabilityChecked message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EngineBuildVulnerabilityChecked
         */
        public static fromObject(object: { [k: string]: any }): events.EngineBuildVulnerabilityChecked;

        /**
         * Creates a plain object from an EngineBuildVulnerabilityChecked message. Also converts values to other types if specified.
         * @param message EngineBuildVulnerabilityChecked
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EngineBuildVulnerabilityChecked, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EngineBuildVulnerabilityChecked to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EngineBuildTestReportDone. */
    interface IEngineBuildTestReportDone {

        /** EngineBuildTestReportDone userId */
        userId?: (string|null);

        /** EngineBuildTestReportDone jobId */
        jobId?: (string|null);

        /** EngineBuildTestReportDone success */
        success?: (boolean|null);

        /** EngineBuildTestReportDone engineId */
        engineId?: (string|null);

        /** EngineBuildTestReportDone buildId */
        buildId?: (string|null);
    }

    /** Represents an EngineBuildTestReportDone. */
    class EngineBuildTestReportDone implements IEngineBuildTestReportDone {

        /**
         * Constructs a new EngineBuildTestReportDone.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEngineBuildTestReportDone);

        /** EngineBuildTestReportDone userId. */
        public userId: string;

        /** EngineBuildTestReportDone jobId. */
        public jobId: string;

        /** EngineBuildTestReportDone success. */
        public success: boolean;

        /** EngineBuildTestReportDone engineId. */
        public engineId: string;

        /** EngineBuildTestReportDone buildId. */
        public buildId: string;

        /**
         * Creates a new EngineBuildTestReportDone instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EngineBuildTestReportDone instance
         */
        public static create(properties?: events.IEngineBuildTestReportDone): events.EngineBuildTestReportDone;

        /**
         * Encodes the specified EngineBuildTestReportDone message. Does not implicitly {@link events.EngineBuildTestReportDone.verify|verify} messages.
         * @param message EngineBuildTestReportDone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEngineBuildTestReportDone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EngineBuildTestReportDone message, length delimited. Does not implicitly {@link events.EngineBuildTestReportDone.verify|verify} messages.
         * @param message EngineBuildTestReportDone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEngineBuildTestReportDone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EngineBuildTestReportDone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EngineBuildTestReportDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EngineBuildTestReportDone;

        /**
         * Decodes an EngineBuildTestReportDone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EngineBuildTestReportDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EngineBuildTestReportDone;

        /**
         * Verifies an EngineBuildTestReportDone message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EngineBuildTestReportDone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EngineBuildTestReportDone
         */
        public static fromObject(object: { [k: string]: any }): events.EngineBuildTestReportDone;

        /**
         * Creates a plain object from an EngineBuildTestReportDone message. Also converts values to other types if specified.
         * @param message EngineBuildTestReportDone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EngineBuildTestReportDone, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EngineBuildTestReportDone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an engineBuildDeploySuccess. */
    interface IengineBuildDeploySuccess {

        /** engineBuildDeploySuccess userId */
        userId?: (string|null);

        /** engineBuildDeploySuccess engineId */
        engineId?: (string|null);

        /** engineBuildDeploySuccess buildId */
        buildId?: (string|null);
    }

    /** Represents an engineBuildDeploySuccess. */
    class engineBuildDeploySuccess implements IengineBuildDeploySuccess {

        /**
         * Constructs a new engineBuildDeploySuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IengineBuildDeploySuccess);

        /** engineBuildDeploySuccess userId. */
        public userId: string;

        /** engineBuildDeploySuccess engineId. */
        public engineId: string;

        /** engineBuildDeploySuccess buildId. */
        public buildId: string;

        /**
         * Creates a new engineBuildDeploySuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns engineBuildDeploySuccess instance
         */
        public static create(properties?: events.IengineBuildDeploySuccess): events.engineBuildDeploySuccess;

        /**
         * Encodes the specified engineBuildDeploySuccess message. Does not implicitly {@link events.engineBuildDeploySuccess.verify|verify} messages.
         * @param message engineBuildDeploySuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IengineBuildDeploySuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified engineBuildDeploySuccess message, length delimited. Does not implicitly {@link events.engineBuildDeploySuccess.verify|verify} messages.
         * @param message engineBuildDeploySuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IengineBuildDeploySuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an engineBuildDeploySuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns engineBuildDeploySuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.engineBuildDeploySuccess;

        /**
         * Decodes an engineBuildDeploySuccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns engineBuildDeploySuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.engineBuildDeploySuccess;

        /**
         * Verifies an engineBuildDeploySuccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an engineBuildDeploySuccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns engineBuildDeploySuccess
         */
        public static fromObject(object: { [k: string]: any }): events.engineBuildDeploySuccess;

        /**
         * Creates a plain object from an engineBuildDeploySuccess message. Also converts values to other types if specified.
         * @param message engineBuildDeploySuccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.engineBuildDeploySuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this engineBuildDeploySuccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an engineBuildDeployFail. */
    interface IengineBuildDeployFail {

        /** engineBuildDeployFail userId */
        userId?: (string|null);

        /** engineBuildDeployFail engineId */
        engineId?: (string|null);

        /** engineBuildDeployFail buildId */
        buildId?: (string|null);
    }

    /** Represents an engineBuildDeployFail. */
    class engineBuildDeployFail implements IengineBuildDeployFail {

        /**
         * Constructs a new engineBuildDeployFail.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IengineBuildDeployFail);

        /** engineBuildDeployFail userId. */
        public userId: string;

        /** engineBuildDeployFail engineId. */
        public engineId: string;

        /** engineBuildDeployFail buildId. */
        public buildId: string;

        /**
         * Creates a new engineBuildDeployFail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns engineBuildDeployFail instance
         */
        public static create(properties?: events.IengineBuildDeployFail): events.engineBuildDeployFail;

        /**
         * Encodes the specified engineBuildDeployFail message. Does not implicitly {@link events.engineBuildDeployFail.verify|verify} messages.
         * @param message engineBuildDeployFail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IengineBuildDeployFail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified engineBuildDeployFail message, length delimited. Does not implicitly {@link events.engineBuildDeployFail.verify|verify} messages.
         * @param message engineBuildDeployFail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IengineBuildDeployFail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an engineBuildDeployFail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns engineBuildDeployFail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.engineBuildDeployFail;

        /**
         * Decodes an engineBuildDeployFail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns engineBuildDeployFail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.engineBuildDeployFail;

        /**
         * Verifies an engineBuildDeployFail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an engineBuildDeployFail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns engineBuildDeployFail
         */
        public static fromObject(object: { [k: string]: any }): events.engineBuildDeployFail;

        /**
         * Creates a plain object from an engineBuildDeployFail message. Also converts values to other types if specified.
         * @param message engineBuildDeployFail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.engineBuildDeployFail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this engineBuildDeployFail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EngineBuildApproved. */
    interface IEngineBuildApproved {

        /** EngineBuildApproved userId */
        userId?: (string|null);

        /** EngineBuildApproved engineId */
        engineId?: (string|null);

        /** EngineBuildApproved buildId */
        buildId?: (string|null);

        /** EngineBuildApproved organizationId */
        organizationId?: (number|Long|null);

        /** EngineBuildApproved statusCode */
        statusCode?: (number|null);

        /** EngineBuildApproved action */
        action?: (string|null);
    }

    /** Represents an EngineBuildApproved. */
    class EngineBuildApproved implements IEngineBuildApproved {

        /**
         * Constructs a new EngineBuildApproved.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEngineBuildApproved);

        /** EngineBuildApproved userId. */
        public userId: string;

        /** EngineBuildApproved engineId. */
        public engineId: string;

        /** EngineBuildApproved buildId. */
        public buildId: string;

        /** EngineBuildApproved organizationId. */
        public organizationId: (number|Long);

        /** EngineBuildApproved statusCode. */
        public statusCode: number;

        /** EngineBuildApproved action. */
        public action: string;

        /**
         * Creates a new EngineBuildApproved instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EngineBuildApproved instance
         */
        public static create(properties?: events.IEngineBuildApproved): events.EngineBuildApproved;

        /**
         * Encodes the specified EngineBuildApproved message. Does not implicitly {@link events.EngineBuildApproved.verify|verify} messages.
         * @param message EngineBuildApproved message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEngineBuildApproved, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EngineBuildApproved message, length delimited. Does not implicitly {@link events.EngineBuildApproved.verify|verify} messages.
         * @param message EngineBuildApproved message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEngineBuildApproved, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EngineBuildApproved message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EngineBuildApproved
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EngineBuildApproved;

        /**
         * Decodes an EngineBuildApproved message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EngineBuildApproved
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EngineBuildApproved;

        /**
         * Verifies an EngineBuildApproved message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EngineBuildApproved message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EngineBuildApproved
         */
        public static fromObject(object: { [k: string]: any }): events.EngineBuildApproved;

        /**
         * Creates a plain object from an EngineBuildApproved message. Also converts values to other types if specified.
         * @param message EngineBuildApproved
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EngineBuildApproved, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EngineBuildApproved to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EngineBuildDisapprove. */
    interface IEngineBuildDisapprove {

        /** EngineBuildDisapprove userId */
        userId?: (string|null);

        /** EngineBuildDisapprove engineId */
        engineId?: (string|null);

        /** EngineBuildDisapprove buildId */
        buildId?: (string|null);

        /** EngineBuildDisapprove organizationId */
        organizationId?: (number|Long|null);

        /** EngineBuildDisapprove statusCode */
        statusCode?: (number|null);

        /** EngineBuildDisapprove action */
        action?: (string|null);
    }

    /** Represents an EngineBuildDisapprove. */
    class EngineBuildDisapprove implements IEngineBuildDisapprove {

        /**
         * Constructs a new EngineBuildDisapprove.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEngineBuildDisapprove);

        /** EngineBuildDisapprove userId. */
        public userId: string;

        /** EngineBuildDisapprove engineId. */
        public engineId: string;

        /** EngineBuildDisapprove buildId. */
        public buildId: string;

        /** EngineBuildDisapprove organizationId. */
        public organizationId: (number|Long);

        /** EngineBuildDisapprove statusCode. */
        public statusCode: number;

        /** EngineBuildDisapprove action. */
        public action: string;

        /**
         * Creates a new EngineBuildDisapprove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EngineBuildDisapprove instance
         */
        public static create(properties?: events.IEngineBuildDisapprove): events.EngineBuildDisapprove;

        /**
         * Encodes the specified EngineBuildDisapprove message. Does not implicitly {@link events.EngineBuildDisapprove.verify|verify} messages.
         * @param message EngineBuildDisapprove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEngineBuildDisapprove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EngineBuildDisapprove message, length delimited. Does not implicitly {@link events.EngineBuildDisapprove.verify|verify} messages.
         * @param message EngineBuildDisapprove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEngineBuildDisapprove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EngineBuildDisapprove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EngineBuildDisapprove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EngineBuildDisapprove;

        /**
         * Decodes an EngineBuildDisapprove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EngineBuildDisapprove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EngineBuildDisapprove;

        /**
         * Verifies an EngineBuildDisapprove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EngineBuildDisapprove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EngineBuildDisapprove
         */
        public static fromObject(object: { [k: string]: any }): events.EngineBuildDisapprove;

        /**
         * Creates a plain object from an EngineBuildDisapprove message. Also converts values to other types if specified.
         * @param message EngineBuildDisapprove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EngineBuildDisapprove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EngineBuildDisapprove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EngineBuildCreate. */
    interface IEngineBuildCreate {

        /** EngineBuildCreate engineId */
        engineId?: (string|null);

        /** EngineBuildCreate buildId */
        buildId?: (string|null);

        /** EngineBuildCreate statusCode */
        statusCode?: (number|null);

        /** EngineBuildCreate action */
        action?: (string|null);
    }

    /** Represents an EngineBuildCreate. */
    class EngineBuildCreate implements IEngineBuildCreate {

        /**
         * Constructs a new EngineBuildCreate.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEngineBuildCreate);

        /** EngineBuildCreate engineId. */
        public engineId: string;

        /** EngineBuildCreate buildId. */
        public buildId: string;

        /** EngineBuildCreate statusCode. */
        public statusCode: number;

        /** EngineBuildCreate action. */
        public action: string;

        /**
         * Creates a new EngineBuildCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EngineBuildCreate instance
         */
        public static create(properties?: events.IEngineBuildCreate): events.EngineBuildCreate;

        /**
         * Encodes the specified EngineBuildCreate message. Does not implicitly {@link events.EngineBuildCreate.verify|verify} messages.
         * @param message EngineBuildCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEngineBuildCreate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EngineBuildCreate message, length delimited. Does not implicitly {@link events.EngineBuildCreate.verify|verify} messages.
         * @param message EngineBuildCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEngineBuildCreate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EngineBuildCreate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EngineBuildCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EngineBuildCreate;

        /**
         * Decodes an EngineBuildCreate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EngineBuildCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EngineBuildCreate;

        /**
         * Verifies an EngineBuildCreate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EngineBuildCreate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EngineBuildCreate
         */
        public static fromObject(object: { [k: string]: any }): events.EngineBuildCreate;

        /**
         * Creates a plain object from an EngineBuildCreate message. Also converts values to other types if specified.
         * @param message EngineBuildCreate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EngineBuildCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EngineBuildCreate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EngineBuildUpload. */
    interface IEngineBuildUpload {

        /** EngineBuildUpload engineId */
        engineId?: (string|null);

        /** EngineBuildUpload buildId */
        buildId?: (string|null);

        /** EngineBuildUpload statusCode */
        statusCode?: (number|null);

        /** EngineBuildUpload action */
        action?: (string|null);
    }

    /** Represents an EngineBuildUpload. */
    class EngineBuildUpload implements IEngineBuildUpload {

        /**
         * Constructs a new EngineBuildUpload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEngineBuildUpload);

        /** EngineBuildUpload engineId. */
        public engineId: string;

        /** EngineBuildUpload buildId. */
        public buildId: string;

        /** EngineBuildUpload statusCode. */
        public statusCode: number;

        /** EngineBuildUpload action. */
        public action: string;

        /**
         * Creates a new EngineBuildUpload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EngineBuildUpload instance
         */
        public static create(properties?: events.IEngineBuildUpload): events.EngineBuildUpload;

        /**
         * Encodes the specified EngineBuildUpload message. Does not implicitly {@link events.EngineBuildUpload.verify|verify} messages.
         * @param message EngineBuildUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEngineBuildUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EngineBuildUpload message, length delimited. Does not implicitly {@link events.EngineBuildUpload.verify|verify} messages.
         * @param message EngineBuildUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEngineBuildUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EngineBuildUpload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EngineBuildUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EngineBuildUpload;

        /**
         * Decodes an EngineBuildUpload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EngineBuildUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EngineBuildUpload;

        /**
         * Verifies an EngineBuildUpload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EngineBuildUpload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EngineBuildUpload
         */
        public static fromObject(object: { [k: string]: any }): events.EngineBuildUpload;

        /**
         * Creates a plain object from an EngineBuildUpload message. Also converts values to other types if specified.
         * @param message EngineBuildUpload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EngineBuildUpload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EngineBuildUpload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EngineBuildInvalidate. */
    interface IEngineBuildInvalidate {

        /** EngineBuildInvalidate engineId */
        engineId?: (string|null);

        /** EngineBuildInvalidate buildId */
        buildId?: (string|null);

        /** EngineBuildInvalidate statusCode */
        statusCode?: (number|null);

        /** EngineBuildInvalidate action */
        action?: (string|null);
    }

    /** Represents an EngineBuildInvalidate. */
    class EngineBuildInvalidate implements IEngineBuildInvalidate {

        /**
         * Constructs a new EngineBuildInvalidate.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEngineBuildInvalidate);

        /** EngineBuildInvalidate engineId. */
        public engineId: string;

        /** EngineBuildInvalidate buildId. */
        public buildId: string;

        /** EngineBuildInvalidate statusCode. */
        public statusCode: number;

        /** EngineBuildInvalidate action. */
        public action: string;

        /**
         * Creates a new EngineBuildInvalidate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EngineBuildInvalidate instance
         */
        public static create(properties?: events.IEngineBuildInvalidate): events.EngineBuildInvalidate;

        /**
         * Encodes the specified EngineBuildInvalidate message. Does not implicitly {@link events.EngineBuildInvalidate.verify|verify} messages.
         * @param message EngineBuildInvalidate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEngineBuildInvalidate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EngineBuildInvalidate message, length delimited. Does not implicitly {@link events.EngineBuildInvalidate.verify|verify} messages.
         * @param message EngineBuildInvalidate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEngineBuildInvalidate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EngineBuildInvalidate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EngineBuildInvalidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EngineBuildInvalidate;

        /**
         * Decodes an EngineBuildInvalidate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EngineBuildInvalidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EngineBuildInvalidate;

        /**
         * Verifies an EngineBuildInvalidate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EngineBuildInvalidate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EngineBuildInvalidate
         */
        public static fromObject(object: { [k: string]: any }): events.EngineBuildInvalidate;

        /**
         * Creates a plain object from an EngineBuildInvalidate message. Also converts values to other types if specified.
         * @param message EngineBuildInvalidate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EngineBuildInvalidate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EngineBuildInvalidate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExampleEvent. */
    interface IExampleEvent {

        /** ExampleEvent core */
        core?: (events.ICore|null);

        /** ExampleEvent firstName */
        firstName?: (string|null);

        /** ExampleEvent lastName */
        lastName?: (string|null);
    }

    /** Represents an ExampleEvent. */
    class ExampleEvent implements IExampleEvent {

        /**
         * Constructs a new ExampleEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IExampleEvent);

        /** ExampleEvent core. */
        public core?: (events.ICore|null);

        /** ExampleEvent firstName. */
        public firstName: string;

        /** ExampleEvent lastName. */
        public lastName: string;

        /**
         * Creates a new ExampleEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExampleEvent instance
         */
        public static create(properties?: events.IExampleEvent): events.ExampleEvent;

        /**
         * Encodes the specified ExampleEvent message. Does not implicitly {@link events.ExampleEvent.verify|verify} messages.
         * @param message ExampleEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IExampleEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExampleEvent message, length delimited. Does not implicitly {@link events.ExampleEvent.verify|verify} messages.
         * @param message ExampleEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IExampleEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExampleEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExampleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.ExampleEvent;

        /**
         * Decodes an ExampleEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExampleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.ExampleEvent;

        /**
         * Verifies an ExampleEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExampleEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExampleEvent
         */
        public static fromObject(object: { [k: string]: any }): events.ExampleEvent;

        /**
         * Creates a plain object from an ExampleEvent message. Also converts values to other types if specified.
         * @param message ExampleEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.ExampleEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExampleEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExampleOne. */
    interface IExampleOne {

        /** ExampleOne data */
        data?: (string|null);
    }

    /** Represents an ExampleOne. */
    class ExampleOne implements IExampleOne {

        /**
         * Constructs a new ExampleOne.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IExampleOne);

        /** ExampleOne data. */
        public data: string;

        /**
         * Creates a new ExampleOne instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExampleOne instance
         */
        public static create(properties?: events.IExampleOne): events.ExampleOne;

        /**
         * Encodes the specified ExampleOne message. Does not implicitly {@link events.ExampleOne.verify|verify} messages.
         * @param message ExampleOne message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IExampleOne, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExampleOne message, length delimited. Does not implicitly {@link events.ExampleOne.verify|verify} messages.
         * @param message ExampleOne message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IExampleOne, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExampleOne message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExampleOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.ExampleOne;

        /**
         * Decodes an ExampleOne message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExampleOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.ExampleOne;

        /**
         * Verifies an ExampleOne message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExampleOne message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExampleOne
         */
        public static fromObject(object: { [k: string]: any }): events.ExampleOne;

        /**
         * Creates a plain object from an ExampleOne message. Also converts values to other types if specified.
         * @param message ExampleOne
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.ExampleOne, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExampleOne to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExampleTwo. */
    interface IExampleTwo {

        /** ExampleTwo number */
        number?: (number|Long|null);
    }

    /** Represents an ExampleTwo. */
    class ExampleTwo implements IExampleTwo {

        /**
         * Constructs a new ExampleTwo.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IExampleTwo);

        /** ExampleTwo number. */
        public number: (number|Long);

        /**
         * Creates a new ExampleTwo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExampleTwo instance
         */
        public static create(properties?: events.IExampleTwo): events.ExampleTwo;

        /**
         * Encodes the specified ExampleTwo message. Does not implicitly {@link events.ExampleTwo.verify|verify} messages.
         * @param message ExampleTwo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IExampleTwo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExampleTwo message, length delimited. Does not implicitly {@link events.ExampleTwo.verify|verify} messages.
         * @param message ExampleTwo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IExampleTwo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExampleTwo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExampleTwo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.ExampleTwo;

        /**
         * Decodes an ExampleTwo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExampleTwo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.ExampleTwo;

        /**
         * Verifies an ExampleTwo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExampleTwo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExampleTwo
         */
        public static fromObject(object: { [k: string]: any }): events.ExampleTwo;

        /**
         * Creates a plain object from an ExampleTwo message. Also converts values to other types if specified.
         * @param message ExampleTwo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.ExampleTwo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExampleTwo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExampleThree. */
    interface IExampleThree {

        /** ExampleThree boolean */
        boolean?: (boolean|null);
    }

    /** Represents an ExampleThree. */
    class ExampleThree implements IExampleThree {

        /**
         * Constructs a new ExampleThree.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IExampleThree);

        /** ExampleThree boolean. */
        public boolean: boolean;

        /**
         * Creates a new ExampleThree instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExampleThree instance
         */
        public static create(properties?: events.IExampleThree): events.ExampleThree;

        /**
         * Encodes the specified ExampleThree message. Does not implicitly {@link events.ExampleThree.verify|verify} messages.
         * @param message ExampleThree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IExampleThree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExampleThree message, length delimited. Does not implicitly {@link events.ExampleThree.verify|verify} messages.
         * @param message ExampleThree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IExampleThree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExampleThree message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExampleThree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.ExampleThree;

        /**
         * Decodes an ExampleThree message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExampleThree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.ExampleThree;

        /**
         * Verifies an ExampleThree message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExampleThree message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExampleThree
         */
        public static fromObject(object: { [k: string]: any }): events.ExampleThree;

        /**
         * Creates a plain object from an ExampleThree message. Also converts values to other types if specified.
         * @param message ExampleThree
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.ExampleThree, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExampleThree to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExampleFour. */
    interface IExampleFour {

        /** ExampleFour data */
        data?: (string|null);

        /** ExampleFour number */
        number?: (number|Long|null);

        /** ExampleFour boolean */
        boolean?: (boolean|null);
    }

    /** Represents an ExampleFour. */
    class ExampleFour implements IExampleFour {

        /**
         * Constructs a new ExampleFour.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IExampleFour);

        /** ExampleFour data. */
        public data: string;

        /** ExampleFour number. */
        public number: (number|Long);

        /** ExampleFour boolean. */
        public boolean: boolean;

        /**
         * Creates a new ExampleFour instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExampleFour instance
         */
        public static create(properties?: events.IExampleFour): events.ExampleFour;

        /**
         * Encodes the specified ExampleFour message. Does not implicitly {@link events.ExampleFour.verify|verify} messages.
         * @param message ExampleFour message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IExampleFour, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExampleFour message, length delimited. Does not implicitly {@link events.ExampleFour.verify|verify} messages.
         * @param message ExampleFour message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IExampleFour, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExampleFour message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExampleFour
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.ExampleFour;

        /**
         * Decodes an ExampleFour message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExampleFour
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.ExampleFour;

        /**
         * Verifies an ExampleFour message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExampleFour message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExampleFour
         */
        public static fromObject(object: { [k: string]: any }): events.ExampleFour;

        /**
         * Creates a plain object from an ExampleFour message. Also converts values to other types if specified.
         * @param message ExampleFour
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.ExampleFour, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExampleFour to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MentionModifiedData. */
    interface IMentionModifiedData {

        /** MentionModifiedData mentionId */
        mentionId?: (number|Long|null);

        /** MentionModifiedData organizationId */
        organizationId?: (number|Long|null);

        /** MentionModifiedData mentionDate */
        mentionDate?: (string|null);

        /** MentionModifiedData transactionTimestamp */
        transactionTimestamp?: (string|null);
    }

    /** Represents a MentionModifiedData. */
    class MentionModifiedData implements IMentionModifiedData {

        /**
         * Constructs a new MentionModifiedData.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IMentionModifiedData);

        /** MentionModifiedData mentionId. */
        public mentionId: (number|Long);

        /** MentionModifiedData organizationId. */
        public organizationId: (number|Long);

        /** MentionModifiedData mentionDate. */
        public mentionDate: string;

        /** MentionModifiedData transactionTimestamp. */
        public transactionTimestamp: string;

        /**
         * Creates a new MentionModifiedData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MentionModifiedData instance
         */
        public static create(properties?: events.IMentionModifiedData): events.MentionModifiedData;

        /**
         * Encodes the specified MentionModifiedData message. Does not implicitly {@link events.MentionModifiedData.verify|verify} messages.
         * @param message MentionModifiedData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IMentionModifiedData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MentionModifiedData message, length delimited. Does not implicitly {@link events.MentionModifiedData.verify|verify} messages.
         * @param message MentionModifiedData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IMentionModifiedData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MentionModifiedData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MentionModifiedData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.MentionModifiedData;

        /**
         * Decodes a MentionModifiedData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MentionModifiedData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.MentionModifiedData;

        /**
         * Verifies a MentionModifiedData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MentionModifiedData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MentionModifiedData
         */
        public static fromObject(object: { [k: string]: any }): events.MentionModifiedData;

        /**
         * Creates a plain object from a MentionModifiedData message. Also converts values to other types if specified.
         * @param message MentionModifiedData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.MentionModifiedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MentionModifiedData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MentionUpdated. */
    interface IMentionUpdated {

        /** MentionUpdated event */
        event?: (string|null);

        /** MentionUpdated type */
        type?: (string|null);

        /** MentionUpdated payload */
        payload?: (events.IMentionModifiedData|null);
    }

    /** Represents a MentionUpdated. */
    class MentionUpdated implements IMentionUpdated {

        /**
         * Constructs a new MentionUpdated.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IMentionUpdated);

        /** MentionUpdated event. */
        public event: string;

        /** MentionUpdated type. */
        public type: string;

        /** MentionUpdated payload. */
        public payload?: (events.IMentionModifiedData|null);

        /**
         * Creates a new MentionUpdated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MentionUpdated instance
         */
        public static create(properties?: events.IMentionUpdated): events.MentionUpdated;

        /**
         * Encodes the specified MentionUpdated message. Does not implicitly {@link events.MentionUpdated.verify|verify} messages.
         * @param message MentionUpdated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IMentionUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MentionUpdated message, length delimited. Does not implicitly {@link events.MentionUpdated.verify|verify} messages.
         * @param message MentionUpdated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IMentionUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MentionUpdated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MentionUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.MentionUpdated;

        /**
         * Decodes a MentionUpdated message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MentionUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.MentionUpdated;

        /**
         * Verifies a MentionUpdated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MentionUpdated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MentionUpdated
         */
        public static fromObject(object: { [k: string]: any }): events.MentionUpdated;

        /**
         * Creates a plain object from a MentionUpdated message. Also converts values to other types if specified.
         * @param message MentionUpdated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.MentionUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MentionUpdated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MentionDeleted. */
    interface IMentionDeleted {

        /** MentionDeleted event */
        event?: (string|null);

        /** MentionDeleted type */
        type?: (string|null);

        /** MentionDeleted payload */
        payload?: (events.IMentionModifiedData|null);
    }

    /** Represents a MentionDeleted. */
    class MentionDeleted implements IMentionDeleted {

        /**
         * Constructs a new MentionDeleted.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IMentionDeleted);

        /** MentionDeleted event. */
        public event: string;

        /** MentionDeleted type. */
        public type: string;

        /** MentionDeleted payload. */
        public payload?: (events.IMentionModifiedData|null);

        /**
         * Creates a new MentionDeleted instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MentionDeleted instance
         */
        public static create(properties?: events.IMentionDeleted): events.MentionDeleted;

        /**
         * Encodes the specified MentionDeleted message. Does not implicitly {@link events.MentionDeleted.verify|verify} messages.
         * @param message MentionDeleted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IMentionDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MentionDeleted message, length delimited. Does not implicitly {@link events.MentionDeleted.verify|verify} messages.
         * @param message MentionDeleted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IMentionDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MentionDeleted message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MentionDeleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.MentionDeleted;

        /**
         * Decodes a MentionDeleted message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MentionDeleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.MentionDeleted;

        /**
         * Verifies a MentionDeleted message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MentionDeleted message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MentionDeleted
         */
        public static fromObject(object: { [k: string]: any }): events.MentionDeleted;

        /**
         * Creates a plain object from a MentionDeleted message. Also converts values to other types if specified.
         * @param message MentionDeleted
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.MentionDeleted, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MentionDeleted to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MentionInserted. */
    interface IMentionInserted {

        /** MentionInserted event */
        event?: (string|null);

        /** MentionInserted type */
        type?: (string|null);

        /** MentionInserted payload */
        payload?: (events.IMentionModifiedData|null);
    }

    /** Represents a MentionInserted. */
    class MentionInserted implements IMentionInserted {

        /**
         * Constructs a new MentionInserted.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IMentionInserted);

        /** MentionInserted event. */
        public event: string;

        /** MentionInserted type. */
        public type: string;

        /** MentionInserted payload. */
        public payload?: (events.IMentionModifiedData|null);

        /**
         * Creates a new MentionInserted instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MentionInserted instance
         */
        public static create(properties?: events.IMentionInserted): events.MentionInserted;

        /**
         * Encodes the specified MentionInserted message. Does not implicitly {@link events.MentionInserted.verify|verify} messages.
         * @param message MentionInserted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IMentionInserted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MentionInserted message, length delimited. Does not implicitly {@link events.MentionInserted.verify|verify} messages.
         * @param message MentionInserted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IMentionInserted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MentionInserted message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MentionInserted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.MentionInserted;

        /**
         * Decodes a MentionInserted message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MentionInserted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.MentionInserted;

        /**
         * Verifies a MentionInserted message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MentionInserted message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MentionInserted
         */
        public static fromObject(object: { [k: string]: any }): events.MentionInserted;

        /**
         * Creates a plain object from a MentionInserted message. Also converts values to other types if specified.
         * @param message MentionInserted
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.MentionInserted, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MentionInserted to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MentionEmailGenerated. */
    interface IMentionEmailGenerated {

        /** MentionEmailGenerated event */
        event?: (string|null);

        /** MentionEmailGenerated type */
        type?: (string|null);

        /** MentionEmailGenerated serviceName */
        serviceName?: (string|null);

        /** MentionEmailGenerated toEmail */
        toEmail?: (string|null);

        /** MentionEmailGenerated fromEmail */
        fromEmail?: (string|null);

        /** MentionEmailGenerated fromName */
        fromName?: (string|null);

        /** MentionEmailGenerated template */
        template?: (string|null);

        /** MentionEmailGenerated placeHolders */
        placeHolders?: (events.MentionEmailGenerated.IPlaceHolders|null);

        /** MentionEmailGenerated mergeLanguage */
        mergeLanguage?: (string|null);
    }

    /** Represents a MentionEmailGenerated. */
    class MentionEmailGenerated implements IMentionEmailGenerated {

        /**
         * Constructs a new MentionEmailGenerated.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IMentionEmailGenerated);

        /** MentionEmailGenerated event. */
        public event: string;

        /** MentionEmailGenerated type. */
        public type: string;

        /** MentionEmailGenerated serviceName. */
        public serviceName: string;

        /** MentionEmailGenerated toEmail. */
        public toEmail: string;

        /** MentionEmailGenerated fromEmail. */
        public fromEmail: string;

        /** MentionEmailGenerated fromName. */
        public fromName: string;

        /** MentionEmailGenerated template. */
        public template: string;

        /** MentionEmailGenerated placeHolders. */
        public placeHolders?: (events.MentionEmailGenerated.IPlaceHolders|null);

        /** MentionEmailGenerated mergeLanguage. */
        public mergeLanguage: string;

        /**
         * Creates a new MentionEmailGenerated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MentionEmailGenerated instance
         */
        public static create(properties?: events.IMentionEmailGenerated): events.MentionEmailGenerated;

        /**
         * Encodes the specified MentionEmailGenerated message. Does not implicitly {@link events.MentionEmailGenerated.verify|verify} messages.
         * @param message MentionEmailGenerated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IMentionEmailGenerated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MentionEmailGenerated message, length delimited. Does not implicitly {@link events.MentionEmailGenerated.verify|verify} messages.
         * @param message MentionEmailGenerated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IMentionEmailGenerated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MentionEmailGenerated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MentionEmailGenerated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.MentionEmailGenerated;

        /**
         * Decodes a MentionEmailGenerated message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MentionEmailGenerated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.MentionEmailGenerated;

        /**
         * Verifies a MentionEmailGenerated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MentionEmailGenerated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MentionEmailGenerated
         */
        public static fromObject(object: { [k: string]: any }): events.MentionEmailGenerated;

        /**
         * Creates a plain object from a MentionEmailGenerated message. Also converts values to other types if specified.
         * @param message MentionEmailGenerated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.MentionEmailGenerated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MentionEmailGenerated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MentionEmailGenerated {

        /** Properties of a Mention. */
        interface IMention {

            /** Mention trackingUnitName */
            trackingUnitName?: (string|null);

            /** Mention programName */
            programName?: (string|null);

            /** Mention programImage */
            programImage?: (string|null);

            /** Mention mentionDate */
            mentionDate?: (number|Long|null);

            /** Mention snippets */
            snippets?: (string|null);

            /** Mention inviteLink */
            inviteLink?: (string|null);

            /** Mention via */
            via?: (string|null);

            /** Mention logouri */
            logouri?: (string|null);

            /** Mention creatorEmail */
            creatorEmail?: (string|null);

            /** Mention unsubscribeHash */
            unsubscribeHash?: (string|null);

            /** Mention unsubscribeLink */
            unsubscribeLink?: (string|null);
        }

        /** Represents a Mention. */
        class Mention implements IMention {

            /**
             * Constructs a new Mention.
             * @param [properties] Properties to set
             */
            constructor(properties?: events.MentionEmailGenerated.IMention);

            /** Mention trackingUnitName. */
            public trackingUnitName: string;

            /** Mention programName. */
            public programName: string;

            /** Mention programImage. */
            public programImage: string;

            /** Mention mentionDate. */
            public mentionDate: (number|Long);

            /** Mention snippets. */
            public snippets: string;

            /** Mention inviteLink. */
            public inviteLink: string;

            /** Mention via. */
            public via: string;

            /** Mention logouri. */
            public logouri: string;

            /** Mention creatorEmail. */
            public creatorEmail: string;

            /** Mention unsubscribeHash. */
            public unsubscribeHash: string;

            /** Mention unsubscribeLink. */
            public unsubscribeLink: string;

            /**
             * Creates a new Mention instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Mention instance
             */
            public static create(properties?: events.MentionEmailGenerated.IMention): events.MentionEmailGenerated.Mention;

            /**
             * Encodes the specified Mention message. Does not implicitly {@link events.MentionEmailGenerated.Mention.verify|verify} messages.
             * @param message Mention message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: events.MentionEmailGenerated.IMention, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Mention message, length delimited. Does not implicitly {@link events.MentionEmailGenerated.Mention.verify|verify} messages.
             * @param message Mention message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: events.MentionEmailGenerated.IMention, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Mention message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Mention
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.MentionEmailGenerated.Mention;

            /**
             * Decodes a Mention message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Mention
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.MentionEmailGenerated.Mention;

            /**
             * Verifies a Mention message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Mention message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Mention
             */
            public static fromObject(object: { [k: string]: any }): events.MentionEmailGenerated.Mention;

            /**
             * Creates a plain object from a Mention message. Also converts values to other types if specified.
             * @param message Mention
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: events.MentionEmailGenerated.Mention, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Mention to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PlaceHolders. */
        interface IPlaceHolders {

            /** PlaceHolders trackingUnitName */
            trackingUnitName?: (string|null);

            /** PlaceHolders via */
            via?: (string|null);

            /** PlaceHolders logouri */
            logouri?: (string|null);

            /** PlaceHolders mentions */
            mentions?: (events.MentionEmailGenerated.IMention[]|null);
        }

        /** Represents a PlaceHolders. */
        class PlaceHolders implements IPlaceHolders {

            /**
             * Constructs a new PlaceHolders.
             * @param [properties] Properties to set
             */
            constructor(properties?: events.MentionEmailGenerated.IPlaceHolders);

            /** PlaceHolders trackingUnitName. */
            public trackingUnitName: string;

            /** PlaceHolders via. */
            public via: string;

            /** PlaceHolders logouri. */
            public logouri: string;

            /** PlaceHolders mentions. */
            public mentions: events.MentionEmailGenerated.IMention[];

            /**
             * Creates a new PlaceHolders instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlaceHolders instance
             */
            public static create(properties?: events.MentionEmailGenerated.IPlaceHolders): events.MentionEmailGenerated.PlaceHolders;

            /**
             * Encodes the specified PlaceHolders message. Does not implicitly {@link events.MentionEmailGenerated.PlaceHolders.verify|verify} messages.
             * @param message PlaceHolders message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: events.MentionEmailGenerated.IPlaceHolders, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlaceHolders message, length delimited. Does not implicitly {@link events.MentionEmailGenerated.PlaceHolders.verify|verify} messages.
             * @param message PlaceHolders message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: events.MentionEmailGenerated.IPlaceHolders, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlaceHolders message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlaceHolders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.MentionEmailGenerated.PlaceHolders;

            /**
             * Decodes a PlaceHolders message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlaceHolders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.MentionEmailGenerated.PlaceHolders;

            /**
             * Verifies a PlaceHolders message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlaceHolders message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlaceHolders
             */
            public static fromObject(object: { [k: string]: any }): events.MentionEmailGenerated.PlaceHolders;

            /**
             * Creates a plain object from a PlaceHolders message. Also converts values to other types if specified.
             * @param message PlaceHolders
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: events.MentionEmailGenerated.PlaceHolders, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlaceHolders to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a BasicEmail. */
    interface IBasicEmail {

        /** BasicEmail fromAddress */
        fromAddress?: (string|null);

        /** BasicEmail toAddress */
        toAddress?: (string|null);

        /** BasicEmail subject */
        subject?: (string|null);

        /** BasicEmail body */
        body?: (string|null);

        /** BasicEmail replyTo */
        replyTo?: (string|null);

        /** BasicEmail bodyHtml */
        bodyHtml?: (string|null);
    }

    /** Represents a BasicEmail. */
    class BasicEmail implements IBasicEmail {

        /**
         * Constructs a new BasicEmail.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IBasicEmail);

        /** BasicEmail fromAddress. */
        public fromAddress: string;

        /** BasicEmail toAddress. */
        public toAddress: string;

        /** BasicEmail subject. */
        public subject: string;

        /** BasicEmail body. */
        public body: string;

        /** BasicEmail replyTo. */
        public replyTo: string;

        /** BasicEmail bodyHtml. */
        public bodyHtml: string;

        /**
         * Creates a new BasicEmail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BasicEmail instance
         */
        public static create(properties?: events.IBasicEmail): events.BasicEmail;

        /**
         * Encodes the specified BasicEmail message. Does not implicitly {@link events.BasicEmail.verify|verify} messages.
         * @param message BasicEmail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IBasicEmail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BasicEmail message, length delimited. Does not implicitly {@link events.BasicEmail.verify|verify} messages.
         * @param message BasicEmail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IBasicEmail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BasicEmail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BasicEmail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.BasicEmail;

        /**
         * Decodes a BasicEmail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BasicEmail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.BasicEmail;

        /**
         * Verifies a BasicEmail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BasicEmail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BasicEmail
         */
        public static fromObject(object: { [k: string]: any }): events.BasicEmail;

        /**
         * Creates a plain object from a BasicEmail message. Also converts values to other types if specified.
         * @param message BasicEmail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.BasicEmail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BasicEmail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SMSNotification. */
    interface ISMSNotification {

        /** SMSNotification fromNumber */
        fromNumber?: (string|null);

        /** SMSNotification toNumber */
        toNumber?: (string|null);

        /** SMSNotification message */
        message?: (string|null);
    }

    /** Represents a SMSNotification. */
    class SMSNotification implements ISMSNotification {

        /**
         * Constructs a new SMSNotification.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ISMSNotification);

        /** SMSNotification fromNumber. */
        public fromNumber: string;

        /** SMSNotification toNumber. */
        public toNumber: string;

        /** SMSNotification message. */
        public message: string;

        /**
         * Creates a new SMSNotification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SMSNotification instance
         */
        public static create(properties?: events.ISMSNotification): events.SMSNotification;

        /**
         * Encodes the specified SMSNotification message. Does not implicitly {@link events.SMSNotification.verify|verify} messages.
         * @param message SMSNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ISMSNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SMSNotification message, length delimited. Does not implicitly {@link events.SMSNotification.verify|verify} messages.
         * @param message SMSNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ISMSNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SMSNotification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SMSNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.SMSNotification;

        /**
         * Decodes a SMSNotification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SMSNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.SMSNotification;

        /**
         * Verifies a SMSNotification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SMSNotification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SMSNotification
         */
        public static fromObject(object: { [k: string]: any }): events.SMSNotification;

        /**
         * Creates a plain object from a SMSNotification message. Also converts values to other types if specified.
         * @param message SMSNotification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.SMSNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SMSNotification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TriggerCacheRefresh. */
    interface ITriggerCacheRefresh {
    }

    /** Represents a TriggerCacheRefresh. */
    class TriggerCacheRefresh implements ITriggerCacheRefresh {

        /**
         * Constructs a new TriggerCacheRefresh.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ITriggerCacheRefresh);

        /**
         * Creates a new TriggerCacheRefresh instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TriggerCacheRefresh instance
         */
        public static create(properties?: events.ITriggerCacheRefresh): events.TriggerCacheRefresh;

        /**
         * Encodes the specified TriggerCacheRefresh message. Does not implicitly {@link events.TriggerCacheRefresh.verify|verify} messages.
         * @param message TriggerCacheRefresh message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ITriggerCacheRefresh, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TriggerCacheRefresh message, length delimited. Does not implicitly {@link events.TriggerCacheRefresh.verify|verify} messages.
         * @param message TriggerCacheRefresh message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ITriggerCacheRefresh, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TriggerCacheRefresh message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TriggerCacheRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.TriggerCacheRefresh;

        /**
         * Decodes a TriggerCacheRefresh message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TriggerCacheRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.TriggerCacheRefresh;

        /**
         * Verifies a TriggerCacheRefresh message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TriggerCacheRefresh message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TriggerCacheRefresh
         */
        public static fromObject(object: { [k: string]: any }): events.TriggerCacheRefresh;

        /**
         * Creates a plain object from a TriggerCacheRefresh message. Also converts values to other types if specified.
         * @param message TriggerCacheRefresh
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.TriggerCacheRefresh, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TriggerCacheRefresh to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
