// package: events
// file: events/task.proto

import * as jspb from "google-protobuf";

export class TaskQueued extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  getTimestampMs(): string;
  setTimestampMs(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskQueued.AsObject;
  static toObject(includeInstance: boolean, msg: TaskQueued): TaskQueued.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskQueued, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskQueued;
  static deserializeBinaryFromReader(message: TaskQueued, reader: jspb.BinaryReader): TaskQueued;
}

export namespace TaskQueued {
  export type AsObject = {
    taskId: string,
    timestampMs: string,
  }
}

export class TaskUpdated extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  getTimestampMs(): string;
  setTimestampMs(value: string): void;

  getTaskStatus(): string;
  setTaskStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskUpdated.AsObject;
  static toObject(includeInstance: boolean, msg: TaskUpdated): TaskUpdated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskUpdated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskUpdated;
  static deserializeBinaryFromReader(message: TaskUpdated, reader: jspb.BinaryReader): TaskUpdated;
}

export namespace TaskUpdated {
  export type AsObject = {
    taskId: string,
    timestampMs: string,
    taskStatus: string,
  }
}

export class TaskCompleted extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  getTimestampMs(): string;
  setTimestampMs(value: string): void;

  getTaskStatus(): string;
  setTaskStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCompleted): TaskCompleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCompleted;
  static deserializeBinaryFromReader(message: TaskCompleted, reader: jspb.BinaryReader): TaskCompleted;
}

export namespace TaskCompleted {
  export type AsObject = {
    taskId: string,
    timestampMs: string,
    taskStatus: string,
  }
}

