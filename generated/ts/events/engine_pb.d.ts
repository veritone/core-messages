// package: events
// file: events/engine.proto

import * as jspb from "google-protobuf";

export class EngineBuildUploadCompleted extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  getAssetId(): string;
  setAssetId(value: string): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineBuildUploadCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: EngineBuildUploadCompleted): EngineBuildUploadCompleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineBuildUploadCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineBuildUploadCompleted;
  static deserializeBinaryFromReader(message: EngineBuildUploadCompleted, reader: jspb.BinaryReader): EngineBuildUploadCompleted;
}

export namespace EngineBuildUploadCompleted {
  export type AsObject = {
    userId: string,
    jobId: string,
    assetId: string,
    success: boolean,
  }
}

export class EngineBuildManifestProcessed extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineBuildManifestProcessed.AsObject;
  static toObject(includeInstance: boolean, msg: EngineBuildManifestProcessed): EngineBuildManifestProcessed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineBuildManifestProcessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineBuildManifestProcessed;
  static deserializeBinaryFromReader(message: EngineBuildManifestProcessed, reader: jspb.BinaryReader): EngineBuildManifestProcessed;
}

export namespace EngineBuildManifestProcessed {
  export type AsObject = {
    userId: string,
    jobId: string,
    success: boolean,
    engineId: string,
    buildId: string,
  }
}

export class EngineBuildVulnerabilityChecked extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  getAssetId(): string;
  setAssetId(value: string): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineBuildVulnerabilityChecked.AsObject;
  static toObject(includeInstance: boolean, msg: EngineBuildVulnerabilityChecked): EngineBuildVulnerabilityChecked.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineBuildVulnerabilityChecked, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineBuildVulnerabilityChecked;
  static deserializeBinaryFromReader(message: EngineBuildVulnerabilityChecked, reader: jspb.BinaryReader): EngineBuildVulnerabilityChecked;
}

export namespace EngineBuildVulnerabilityChecked {
  export type AsObject = {
    userId: string,
    jobId: string,
    assetId: string,
    success: boolean,
    engineId: string,
    buildId: string,
  }
}

export class EngineBuildTestReportDone extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getJobId(): string;
  setJobId(value: string): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineBuildTestReportDone.AsObject;
  static toObject(includeInstance: boolean, msg: EngineBuildTestReportDone): EngineBuildTestReportDone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineBuildTestReportDone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineBuildTestReportDone;
  static deserializeBinaryFromReader(message: EngineBuildTestReportDone, reader: jspb.BinaryReader): EngineBuildTestReportDone;
}

export namespace EngineBuildTestReportDone {
  export type AsObject = {
    userId: string,
    jobId: string,
    success: boolean,
    engineId: string,
    buildId: string,
  }
}

export class engineBuildDeploySuccess extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): engineBuildDeploySuccess.AsObject;
  static toObject(includeInstance: boolean, msg: engineBuildDeploySuccess): engineBuildDeploySuccess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: engineBuildDeploySuccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): engineBuildDeploySuccess;
  static deserializeBinaryFromReader(message: engineBuildDeploySuccess, reader: jspb.BinaryReader): engineBuildDeploySuccess;
}

export namespace engineBuildDeploySuccess {
  export type AsObject = {
    userId: string,
    engineId: string,
    buildId: string,
  }
}

export class engineBuildDeployFail extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): engineBuildDeployFail.AsObject;
  static toObject(includeInstance: boolean, msg: engineBuildDeployFail): engineBuildDeployFail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: engineBuildDeployFail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): engineBuildDeployFail;
  static deserializeBinaryFromReader(message: engineBuildDeployFail, reader: jspb.BinaryReader): engineBuildDeployFail;
}

export namespace engineBuildDeployFail {
  export type AsObject = {
    userId: string,
    engineId: string,
    buildId: string,
  }
}

export class EngineBuildApproved extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getStatusCode(): number;
  setStatusCode(value: number): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineBuildApproved.AsObject;
  static toObject(includeInstance: boolean, msg: EngineBuildApproved): EngineBuildApproved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineBuildApproved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineBuildApproved;
  static deserializeBinaryFromReader(message: EngineBuildApproved, reader: jspb.BinaryReader): EngineBuildApproved;
}

export namespace EngineBuildApproved {
  export type AsObject = {
    userId: string,
    engineId: string,
    buildId: string,
    organizationId: number,
    statusCode: number,
    action: string,
  }
}

export class EngineBuildDisapprove extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getStatusCode(): number;
  setStatusCode(value: number): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineBuildDisapprove.AsObject;
  static toObject(includeInstance: boolean, msg: EngineBuildDisapprove): EngineBuildDisapprove.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineBuildDisapprove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineBuildDisapprove;
  static deserializeBinaryFromReader(message: EngineBuildDisapprove, reader: jspb.BinaryReader): EngineBuildDisapprove;
}

export namespace EngineBuildDisapprove {
  export type AsObject = {
    userId: string,
    engineId: string,
    buildId: string,
    organizationId: number,
    statusCode: number,
    action: string,
  }
}

export class EngineBuildCreate extends jspb.Message {
  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  getStatusCode(): number;
  setStatusCode(value: number): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineBuildCreate.AsObject;
  static toObject(includeInstance: boolean, msg: EngineBuildCreate): EngineBuildCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineBuildCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineBuildCreate;
  static deserializeBinaryFromReader(message: EngineBuildCreate, reader: jspb.BinaryReader): EngineBuildCreate;
}

export namespace EngineBuildCreate {
  export type AsObject = {
    engineId: string,
    buildId: string,
    statusCode: number,
    action: string,
  }
}

export class EngineBuildUpload extends jspb.Message {
  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  getStatusCode(): number;
  setStatusCode(value: number): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineBuildUpload.AsObject;
  static toObject(includeInstance: boolean, msg: EngineBuildUpload): EngineBuildUpload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineBuildUpload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineBuildUpload;
  static deserializeBinaryFromReader(message: EngineBuildUpload, reader: jspb.BinaryReader): EngineBuildUpload;
}

export namespace EngineBuildUpload {
  export type AsObject = {
    engineId: string,
    buildId: string,
    statusCode: number,
    action: string,
  }
}

export class EngineBuildInvalidate extends jspb.Message {
  getEngineId(): string;
  setEngineId(value: string): void;

  getBuildId(): string;
  setBuildId(value: string): void;

  getStatusCode(): number;
  setStatusCode(value: number): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineBuildInvalidate.AsObject;
  static toObject(includeInstance: boolean, msg: EngineBuildInvalidate): EngineBuildInvalidate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineBuildInvalidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineBuildInvalidate;
  static deserializeBinaryFromReader(message: EngineBuildInvalidate, reader: jspb.BinaryReader): EngineBuildInvalidate;
}

export namespace EngineBuildInvalidate {
  export type AsObject = {
    engineId: string,
    buildId: string,
    statusCode: number,
    action: string,
  }
}

