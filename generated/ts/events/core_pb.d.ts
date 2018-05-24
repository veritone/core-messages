// package: events
// file: events/core.proto

import * as jspb from "google-protobuf";

export class Core extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEventname(): string;
  setEventname(value: string): void;

  getTopicname(): string;
  setTopicname(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

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
    eventname: string,
    topicname: string,
    timestamp: string,
  }
}

