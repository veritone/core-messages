// package: events
// file: events/shared_collection.proto

import * as jspb from "google-protobuf";

export class NewSharedCollection extends jspb.Message {
  getFolderId(): string;
  setFolderId(value: string): void;

  getShareId(): string;
  setShareId(value: string): void;

  getHistoryId(): string;
  setHistoryId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewSharedCollection.AsObject;
  static toObject(includeInstance: boolean, msg: NewSharedCollection): NewSharedCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewSharedCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewSharedCollection;
  static deserializeBinaryFromReader(message: NewSharedCollection, reader: jspb.BinaryReader): NewSharedCollection;
}

export namespace NewSharedCollection {
  export type AsObject = {
    folderId: string,
    shareId: string,
    historyId: string,
  }
}

export class UpdateSharedCollection extends jspb.Message {
  getFolderId(): string;
  setFolderId(value: string): void;

  getShareId(): string;
  setShareId(value: string): void;

  getMentionId(): string;
  setMentionId(value: string): void;

  getUpdateType(): string;
  setUpdateType(value: string): void;

  getHistoryId(): string;
  setHistoryId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSharedCollection.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSharedCollection): UpdateSharedCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSharedCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSharedCollection;
  static deserializeBinaryFromReader(message: UpdateSharedCollection, reader: jspb.BinaryReader): UpdateSharedCollection;
}

export namespace UpdateSharedCollection {
  export type AsObject = {
    folderId: string,
    shareId: string,
    mentionId: string,
    updateType: string,
    historyId: string,
  }
}

