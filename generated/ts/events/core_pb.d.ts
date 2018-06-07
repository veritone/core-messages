// package: events
// file: events/core.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Core extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEvent(): string;
  setEvent(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

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
    event: string,
    topic: string,
    timestamp: number,
  }
}

export class Trace extends jspb.Message {
  getTrace(): string;
  setTrace(value: string): void;

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
    trace: string,
  }
}

export class Event extends jspb.Message {
  hasCore(): boolean;
  clearCore(): void;
  getCore(): Core | undefined;
  setCore(value?: Core): void;

  hasTrace(): boolean;
  clearTrace(): void;
  getTrace(): Trace | undefined;
  setTrace(value?: Trace): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    core?: Core.AsObject,
    trace?: Trace.AsObject,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

