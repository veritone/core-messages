// package: events
// file: events/authentication.proto

import * as jspb from "google-protobuf";

export class LoginSucceeded extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getUserAgent(): string;
  setUserAgent(value: string): void;

  getIp(): string;
  setIp(value: string): void;

  getRequestUrl(): string;
  setRequestUrl(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginSucceeded.AsObject;
  static toObject(includeInstance: boolean, msg: LoginSucceeded): LoginSucceeded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginSucceeded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginSucceeded;
  static deserializeBinaryFromReader(message: LoginSucceeded, reader: jspb.BinaryReader): LoginSucceeded;
}

export namespace LoginSucceeded {
  export type AsObject = {
    userName: string,
    userAgent: string,
    ip: string,
    requestUrl: string,
    userId: string,
    organizationId: number,
  }
}

export class LoginFailed extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getUserAgent(): string;
  setUserAgent(value: string): void;

  getIp(): string;
  setIp(value: string): void;

  getRequestUrl(): string;
  setRequestUrl(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginFailed.AsObject;
  static toObject(includeInstance: boolean, msg: LoginFailed): LoginFailed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginFailed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginFailed;
  static deserializeBinaryFromReader(message: LoginFailed, reader: jspb.BinaryReader): LoginFailed;
}

export namespace LoginFailed {
  export type AsObject = {
    userName: string,
    userAgent: string,
    ip: string,
    requestUrl: string,
    userId: string,
    organizationId: number,
  }
}

