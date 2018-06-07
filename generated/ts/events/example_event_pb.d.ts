// package: events
// file: events/example_event.proto

import * as jspb from "google-protobuf";
import * as events_core_pb from "../events/core_pb";

export class ExampleEvent extends jspb.Message {
  hasCore(): boolean;
  clearCore(): void;
  getCore(): events_core_pb.Core | undefined;
  setCore(value?: events_core_pb.Core): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleEvent): ExampleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleEvent;
  static deserializeBinaryFromReader(message: ExampleEvent, reader: jspb.BinaryReader): ExampleEvent;
}

export namespace ExampleEvent {
  export type AsObject = {
    core?: events_core_pb.Core.AsObject,
    firstName: string,
    lastName: string,
  }
}

