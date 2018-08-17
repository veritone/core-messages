// package: events
// file: events/core.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Core extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  getType(): string;
  setType(value: string): void;

  getServiceName(): string;
  setServiceName(value: string): void;

  getApplicationId(): string;
  setApplicationId(value: string): void;

  getEventId(): string;
  setEventId(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getTokenId(): string;
  setTokenId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Core.AsObject;
  static toObject(includeInstance: boolean, msg: Core): Core.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Core, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Core;
  static deserializeBinaryFromReader(message: Core, reader: jspb.BinaryReader): Core;
}

export namespace Core {
  export type AsObject = {
    id: string,
    name: string,
    timestamp: string,
    type: string,
    serviceName: string,
    applicationId: string,
    eventId: string,
    organizationId: string,
    userId: string,
    tokenId: string,
  }
}

export class Trace extends jspb.Message {
  getTraceContextMap(): jspb.Map<string, string>;
  clearTraceContextMap(): void;
  getTraceTagsMap(): jspb.Map<string, string>;
  clearTraceTagsMap(): void;
  getServiceName(): string;
  setServiceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trace.AsObject;
  static toObject(includeInstance: boolean, msg: Trace): Trace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trace;
  static deserializeBinaryFromReader(message: Trace, reader: jspb.BinaryReader): Trace;
}

export namespace Trace {
  export type AsObject = {
    traceContextMap: Array<[string, string]>,
    traceTagsMap: Array<[string, string]>,
    serviceName: string,
  }
}

export class VtEvent extends jspb.Message {
  hasCore(): boolean;
  clearCore(): void;
  getCore(): Core | undefined;
  setCore(value?: Core): void;

  hasTrace(): boolean;
  clearTrace(): void;
  getTrace(): Trace | undefined;
  setTrace(value?: Trace): void;

  getBaggageMap(): jspb.Map<string, string>;
  clearBaggageMap(): void;
  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VtEvent.AsObject;
  static toObject(includeInstance: boolean, msg: VtEvent): VtEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VtEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VtEvent;
  static deserializeBinaryFromReader(message: VtEvent, reader: jspb.BinaryReader): VtEvent;
}

export namespace VtEvent {
  export type AsObject = {
    core?: Core.AsObject,
    trace?: Trace.AsObject,
    baggageMap: Array<[string, string]>,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

