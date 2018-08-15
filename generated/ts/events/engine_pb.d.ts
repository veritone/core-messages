// package: events
// file: events/engine.proto

import * as jspb from "google-protobuf";

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

