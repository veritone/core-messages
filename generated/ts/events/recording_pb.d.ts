// package: events
// file: events/recording.proto

import * as jspb from "google-protobuf";

export class RecordingImageExtracted extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getSampleIndex(): number;
  setSampleIndex(value: number): void;

  getSampleRatePerSec(): number;
  setSampleRatePerSec(value: number): void;

  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingImageExtracted.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingImageExtracted): RecordingImageExtracted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingImageExtracted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingImageExtracted;
  static deserializeBinaryFromReader(message: RecordingImageExtracted, reader: jspb.BinaryReader): RecordingImageExtracted;
}

export namespace RecordingImageExtracted {
  export type AsObject = {
    jobId: string,
    taskId: string,
    sampleIndex: number,
    sampleRatePerSec: number,
    uri: string,
  }
}

export class RecordingVideoFragmentCaptured extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getSampleIndex(): number;
  setSampleIndex(value: number): void;

  getRelativeStartTimeMs(): number;
  setRelativeStartTimeMs(value: number): void;

  getRelativeEndTimeMs(): number;
  setRelativeEndTimeMs(value: number): void;

  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingVideoFragmentCaptured.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingVideoFragmentCaptured): RecordingVideoFragmentCaptured.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingVideoFragmentCaptured, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingVideoFragmentCaptured;
  static deserializeBinaryFromReader(message: RecordingVideoFragmentCaptured, reader: jspb.BinaryReader): RecordingVideoFragmentCaptured;
}

export namespace RecordingVideoFragmentCaptured {
  export type AsObject = {
    jobId: string,
    taskId: string,
    sampleIndex: number,
    relativeStartTimeMs: number,
    relativeEndTimeMs: number,
    uri: string,
  }
}

export class RecordingAudioFragmentCaptured extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getSampleIndex(): number;
  setSampleIndex(value: number): void;

  getRelativeStartTimeMs(): number;
  setRelativeStartTimeMs(value: number): void;

  getRelativeEndTimeMs(): number;
  setRelativeEndTimeMs(value: number): void;

  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingAudioFragmentCaptured.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingAudioFragmentCaptured): RecordingAudioFragmentCaptured.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingAudioFragmentCaptured, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingAudioFragmentCaptured;
  static deserializeBinaryFromReader(message: RecordingAudioFragmentCaptured, reader: jspb.BinaryReader): RecordingAudioFragmentCaptured;
}

export namespace RecordingAudioFragmentCaptured {
  export type AsObject = {
    jobId: string,
    taskId: string,
    sampleIndex: number,
    relativeStartTimeMs: number,
    relativeEndTimeMs: number,
    uri: string,
  }
}

export class RecordingCompleted extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getRecordingId(): string;
  setRecordingId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingCompleted): RecordingCompleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingCompleted;
  static deserializeBinaryFromReader(message: RecordingCompleted, reader: jspb.BinaryReader): RecordingCompleted;
}

export namespace RecordingCompleted {
  export type AsObject = {
    jobId: string,
    taskId: string,
    recordingId: string,
  }
}

export class RecordingAssetCreated extends jspb.Message {
  getAssetId(): string;
  setAssetId(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getRecordingId(): string;
  setRecordingId(value: string): void;

  getAssetType(): string;
  setAssetType(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingAssetCreated.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingAssetCreated): RecordingAssetCreated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingAssetCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingAssetCreated;
  static deserializeBinaryFromReader(message: RecordingAssetCreated, reader: jspb.BinaryReader): RecordingAssetCreated;
}

export namespace RecordingAssetCreated {
  export type AsObject = {
    assetId: string,
    taskId: string,
    recordingId: string,
    assetType: string,
    uri: string,
  }
}

export class RecordingCreated extends jspb.Message {
  getRecordingId(): string;
  setRecordingId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingCreated.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingCreated): RecordingCreated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingCreated;
  static deserializeBinaryFromReader(message: RecordingCreated, reader: jspb.BinaryReader): RecordingCreated;
}

export namespace RecordingCreated {
  export type AsObject = {
    recordingId: string,
  }
}

export class RecordingInserted extends jspb.Message {
  getRecordingId(): string;
  setRecordingId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingInserted.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingInserted): RecordingInserted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingInserted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingInserted;
  static deserializeBinaryFromReader(message: RecordingInserted, reader: jspb.BinaryReader): RecordingInserted;
}

export namespace RecordingInserted {
  export type AsObject = {
    recordingId: string,
  }
}

export class RecordingDeleted extends jspb.Message {
  getRecordingId(): string;
  setRecordingId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingDeleted): RecordingDeleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingDeleted;
  static deserializeBinaryFromReader(message: RecordingDeleted, reader: jspb.BinaryReader): RecordingDeleted;
}

export namespace RecordingDeleted {
  export type AsObject = {
    recordingId: string,
  }
}

export class RecordingCognitionCompleted extends jspb.Message {
  getRecordingId(): string;
  setRecordingId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingCognitionCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingCognitionCompleted): RecordingCognitionCompleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingCognitionCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingCognitionCompleted;
  static deserializeBinaryFromReader(message: RecordingCognitionCompleted, reader: jspb.BinaryReader): RecordingCognitionCompleted;
}

export namespace RecordingCognitionCompleted {
  export type AsObject = {
    recordingId: string,
  }
}

