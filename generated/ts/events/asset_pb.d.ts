// package: events
// file: events/asset.proto

import * as jspb from "google-protobuf";

export class AssetUploaded extends jspb.Message {
  getAssetId(): string;
  setAssetId(value: string): void;

  getRecordingId(): string;
  setRecordingId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetUploaded.AsObject;
  static toObject(includeInstance: boolean, msg: AssetUploaded): AssetUploaded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetUploaded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetUploaded;
  static deserializeBinaryFromReader(message: AssetUploaded, reader: jspb.BinaryReader): AssetUploaded;
}

export namespace AssetUploaded {
  export type AsObject = {
    assetId: string,
    recordingId: string,
  }
}

