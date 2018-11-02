// package: events
// file: events/mention.proto

import * as jspb from "google-protobuf";

export class MentionGenerated extends jspb.Message {
  getMentionId(): number;
  setMentionId(value: number): void;

  getWatchlistId(): number;
  setWatchlistId(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getScheduleId(): number;
  setScheduleId(value: number): void;

  getTdoId(): number;
  setTdoId(value: number): void;

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
    mentionId: number,
    watchlistId: number,
    organizationId: number,
    scheduleId: number,
    tdoId: number,
  }
}

