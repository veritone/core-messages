// package: events
// file: events/mention_generation.proto

import * as jspb from "google-protobuf";

export class MentionGenerateMediaCompleted extends jspb.Message {
  getTdoId(): number;
  setTdoId(value: number): void;

  getElapsedS(): number;
  setElapsedS(value: number): void;

  getWatchlistCount(): number;
  setWatchlistCount(value: number): void;

  getMentionCount(): number;
  setMentionCount(value: number): void;

  getDetails(): string;
  setDetails(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentionGenerateMediaCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: MentionGenerateMediaCompleted): MentionGenerateMediaCompleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MentionGenerateMediaCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentionGenerateMediaCompleted;
  static deserializeBinaryFromReader(message: MentionGenerateMediaCompleted, reader: jspb.BinaryReader): MentionGenerateMediaCompleted;
}

export namespace MentionGenerateMediaCompleted {
  export type AsObject = {
    tdoId: number,
    elapsedS: number,
    watchlistCount: number,
    mentionCount: number,
    details: string,
  }
}

export class MentionGenerateWatchlistCompleted extends jspb.Message {
  getWatchlistId(): number;
  setWatchlistId(value: number): void;

  getElapsedS(): number;
  setElapsedS(value: number): void;

  getMentionCount(): number;
  setMentionCount(value: number): void;

  getMentionLimitExceeded(): boolean;
  setMentionLimitExceeded(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentionGenerateWatchlistCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: MentionGenerateWatchlistCompleted): MentionGenerateWatchlistCompleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MentionGenerateWatchlistCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentionGenerateWatchlistCompleted;
  static deserializeBinaryFromReader(message: MentionGenerateWatchlistCompleted, reader: jspb.BinaryReader): MentionGenerateWatchlistCompleted;
}

export namespace MentionGenerateWatchlistCompleted {
  export type AsObject = {
    watchlistId: number,
    elapsedS: number,
    mentionCount: number,
    mentionLimitExceeded: boolean,
  }
}

