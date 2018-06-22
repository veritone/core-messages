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

export class ExampleOne extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleOne.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleOne): ExampleOne.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleOne, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleOne;
  static deserializeBinaryFromReader(message: ExampleOne, reader: jspb.BinaryReader): ExampleOne;
}

export namespace ExampleOne {
  export type AsObject = {
    data: string,
  }
}

export class ExampleTwo extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleTwo.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleTwo): ExampleTwo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleTwo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleTwo;
  static deserializeBinaryFromReader(message: ExampleTwo, reader: jspb.BinaryReader): ExampleTwo;
}

export namespace ExampleTwo {
  export type AsObject = {
    number: number,
  }
}

export class ExampleThree extends jspb.Message {
  getBoolean(): boolean;
  setBoolean(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleThree.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleThree): ExampleThree.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleThree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleThree;
  static deserializeBinaryFromReader(message: ExampleThree, reader: jspb.BinaryReader): ExampleThree;
}

export namespace ExampleThree {
  export type AsObject = {
    pb_boolean: boolean,
  }
}

export class ExampleFour extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  getNumber(): number;
  setNumber(value: number): void;

  getBoolean(): boolean;
  setBoolean(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleFour.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleFour): ExampleFour.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleFour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleFour;
  static deserializeBinaryFromReader(message: ExampleFour, reader: jspb.BinaryReader): ExampleFour;
}

export namespace ExampleFour {
  export type AsObject = {
    data: string,
    number: number,
    pb_boolean: boolean,
  }
}

