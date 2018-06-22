// package: events
// file: events/trigger.proto

import * as jspb from "google-protobuf";

export class TriggerCacheRefresh extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerCacheRefresh.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerCacheRefresh): TriggerCacheRefresh.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerCacheRefresh, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerCacheRefresh;
  static deserializeBinaryFromReader(message: TriggerCacheRefresh, reader: jspb.BinaryReader): TriggerCacheRefresh;
}

export namespace TriggerCacheRefresh {
  export type AsObject = {
  }
}

