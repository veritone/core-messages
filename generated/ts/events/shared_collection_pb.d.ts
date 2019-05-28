// package: events
// file: events/shared_collection.proto

import * as jspb from "google-protobuf";

export class NewCollectionShare extends jspb.Message {
  getFolderId(): string;
  setFolderId(value: string): void;

  getShareId(): string;
  setShareId(value: string): void;

  getHistoryId(): string;
  setHistoryId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewCollectionShare.AsObject;
  static toObject(includeInstance: boolean, msg: NewCollectionShare): NewCollectionShare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewCollectionShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewCollectionShare;
  static deserializeBinaryFromReader(message: NewCollectionShare, reader: jspb.BinaryReader): NewCollectionShare;
}

export namespace NewCollectionShare {
  export type AsObject = {
    folderId: string,
    shareId: string,
    historyId: string,
  }
}

export class UpdateCollectionMentions extends jspb.Message {
  getFolderId(): string;
  setFolderId(value: string): void;

  clearMentionIdsList(): void;
  getMentionIdsList(): Array<string>;
  setMentionIdsList(value: Array<string>): void;
  addMentionIds(value: string, index?: number): string;

  getUpdateType(): UpdateCollectionMentions.UpdateType;
  setUpdateType(value: UpdateCollectionMentions.UpdateType): void;

  getHistoryId(): string;
  setHistoryId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCollectionMentions.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCollectionMentions): UpdateCollectionMentions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCollectionMentions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCollectionMentions;
  static deserializeBinaryFromReader(message: UpdateCollectionMentions, reader: jspb.BinaryReader): UpdateCollectionMentions;
}

export namespace UpdateCollectionMentions {
  export type AsObject = {
    folderId: string,
    mentionIdsList: Array<string>,
    updateType: UpdateCollectionMentions.UpdateType,
    historyId: string,
  }

  export enum UpdateType {
    ADDMENTION = 0,
    REMOVEMENTION = 1,
    UPDATEMENTION = 2,
  }
}

