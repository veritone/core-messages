// package: events
// file: events/mention.proto

import * as jspb from "google-protobuf";
import * as events_core_pb from "../events/core_pb";

export class MentionGenerated extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentionGenerated.AsObject;
  static toObject(includeInstance: boolean, msg: MentionGenerated): MentionGenerated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MentionGenerated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentionGenerated;
  static deserializeBinaryFromReader(message: MentionGenerated, reader: jspb.BinaryReader): MentionGenerated;
}

export namespace MentionGenerated {
  export type AsObject = {
    event: string,
    type: string,
  }
}

