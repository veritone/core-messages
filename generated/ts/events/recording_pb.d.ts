// package: events
// file: events/recording.proto

import * as jspb from "google-protobuf";

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

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): RecordingCognitionCompleted.Payload | undefined;
  setPayload(value?: RecordingCognitionCompleted.Payload): void;

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
    payload?: RecordingCognitionCompleted.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    getJobId(): string;
    setJobId(value: string): void;

    getTaskId(): string;
    setTaskId(value: string): void;

    getApplicationId(): string;
    setApplicationId(value: string): void;

    getOrganizationId(): number;
    setOrganizationId(value: number): void;

    getLibraryId(): string;
    setLibraryId(value: string): void;

    getIndexOverride(): string;
    setIndexOverride(value: string): void;

    getToken(): string;
    setToken(value: string): void;

    getAssetId(): string;
    setAssetId(value: string): void;

    getSkipMentionGeneration(): boolean;
    setSkipMentionGeneration(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      jobId: string,
      taskId: string,
      applicationId: string,
      organizationId: number,
      libraryId: string,
      indexOverride: string,
      token: string,
      assetId: string,
      skipMentionGeneration: boolean,
    }
  }
}

export class RecordingInsertFailed extends jspb.Message {
  getRecordingId(): string;
  setRecordingId(value: string): void;

  getError(): string;
  setError(value: string): void;

  getFauiluretype(): string;
  setFauiluretype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingInsertFailed.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingInsertFailed): RecordingInsertFailed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingInsertFailed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingInsertFailed;
  static deserializeBinaryFromReader(message: RecordingInsertFailed, reader: jspb.BinaryReader): RecordingInsertFailed;
}

export namespace RecordingInsertFailed {
  export type AsObject = {
    recordingId: string,
    error: string,
    fauiluretype: string,
  }
}

