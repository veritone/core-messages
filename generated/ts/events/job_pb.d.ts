// package: events
// file: events/job.proto

import * as jspb from "google-protobuf";

export class JobCreated extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getTimestampMs(): string;
  setTimestampMs(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobCreated.AsObject;
  static toObject(includeInstance: boolean, msg: JobCreated): JobCreated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobCreated;
  static deserializeBinaryFromReader(message: JobCreated, reader: jspb.BinaryReader): JobCreated;
}

export namespace JobCreated {
  export type AsObject = {
    jobId: string,
    timestampMs: string,
  }
}

export class JobCompleted extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getTimestampMs(): string;
  setTimestampMs(value: string): void;

  getJobStatus(): string;
  setJobStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: JobCompleted): JobCompleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobCompleted;
  static deserializeBinaryFromReader(message: JobCompleted, reader: jspb.BinaryReader): JobCompleted;
}

export namespace JobCompleted {
  export type AsObject = {
    jobId: string,
    timestampMs: string,
    jobStatus: string,
  }
}

export class JobFailed extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getTimestampMs(): string;
  setTimestampMs(value: string): void;

  getJobStatus(): string;
  setJobStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobFailed.AsObject;
  static toObject(includeInstance: boolean, msg: JobFailed): JobFailed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobFailed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobFailed;
  static deserializeBinaryFromReader(message: JobFailed, reader: jspb.BinaryReader): JobFailed;
}

export namespace JobFailed {
  export type AsObject = {
    jobId: string,
    timestampMs: string,
    jobStatus: string,
  }
}

