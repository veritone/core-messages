// package: events
// file: events/shared_collection.proto

import * as jspb from "google-protobuf";

export class NewCollectionShare extends jspb.Message {
  getFolderId(): string;
  setFolderId(value: string): void;

  getShareId(): string;
  setShareId(value: string): void;

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
  }
}

export class UpdateCollectionMention extends jspb.Message {
  getFolderId(): string;
  setFolderId(value: string): void;

  getShareId(): string;
  setShareId(value: string): void;

  getMentionId(): string;
  setMentionId(value: string): void;

  getUpdateType(): string;
  setUpdateType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCollectionMention.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCollectionMention): UpdateCollectionMention.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCollectionMention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCollectionMention;
  static deserializeBinaryFromReader(message: UpdateCollectionMention, reader: jspb.BinaryReader): UpdateCollectionMention;
}

export namespace UpdateCollectionMention {
  export type AsObject = {
    folderId: string,
    shareId: string,
    mentionId: string,
    updateType: string,
  }
}

