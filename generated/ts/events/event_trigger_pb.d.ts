// package: events
// file: events/event_trigger.proto

import * as jspb from "google-protobuf";
import * as events_core_pb from "../events/core_pb";

export class EventTriggerCacheRefresh extends jspb.Message {
  hasCore(): boolean;
  clearCore(): void;
  getCore(): events_core_pb.Core | undefined;
  setCore(value?: events_core_pb.Core): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTriggerCacheRefresh.AsObject;
  static toObject(includeInstance: boolean, msg: EventTriggerCacheRefresh): EventTriggerCacheRefresh.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventTriggerCacheRefresh, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTriggerCacheRefresh;
  static deserializeBinaryFromReader(message: EventTriggerCacheRefresh, reader: jspb.BinaryReader): EventTriggerCacheRefresh;
}

export namespace EventTriggerCacheRefresh {
  export type AsObject = {
    core?: events_core_pb.Core.AsObject,
  }
}

