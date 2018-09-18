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
  }
}

export class LoginAttemptsExceeded extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getUserAgent(): string;
  setUserAgent(value: string): void;

  getIp(): string;
  setIp(value: string): void;

  getRequestUrl(): string;
  setRequestUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginAttemptsExceeded.AsObject;
  static toObject(includeInstance: boolean, msg: LoginAttemptsExceeded): LoginAttemptsExceeded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginAttemptsExceeded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginAttemptsExceeded;
  static deserializeBinaryFromReader(message: LoginAttemptsExceeded, reader: jspb.BinaryReader): LoginAttemptsExceeded;
}

export namespace LoginAttemptsExceeded {
  export type AsObject = {
    userName: string,
    userAgent: string,
    ip: string,
    requestUrl: string,
  }
}

export class Impersonated extends jspb.Message {
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

  getImpersontatedUserId(): string;
  setImpersontatedUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Impersonated.AsObject;
  static toObject(includeInstance: boolean, msg: Impersonated): Impersonated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Impersonated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Impersonated;
  static deserializeBinaryFromReader(message: Impersonated, reader: jspb.BinaryReader): Impersonated;
}

export namespace Impersonated {
  export type AsObject = {
    userName: string,
    userAgent: string,
    ip: string,
    requestUrl: string,
    userId: string,
    organizationId: number,
    impersontatedUserId: string,
  }
}

export class ActionUserForbidden extends jspb.Message {
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
  toObject(includeInstance?: boolean): ActionUserForbidden.AsObject;
  static toObject(includeInstance: boolean, msg: ActionUserForbidden): ActionUserForbidden.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionUserForbidden, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionUserForbidden;
  static deserializeBinaryFromReader(message: ActionUserForbidden, reader: jspb.BinaryReader): ActionUserForbidden;
}

export namespace ActionUserForbidden {
  export type AsObject = {
    userName: string,
    userAgent: string,
    ip: string,
    requestUrl: string,
    userId: string,
    organizationId: number,
  }
}

export class ActionTokenForbidden extends jspb.Message {
  getUserAgent(): string;
  setUserAgent(value: string): void;

  getIp(): string;
  setIp(value: string): void;

  getRequestUrl(): string;
  setRequestUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionTokenForbidden.AsObject;
  static toObject(includeInstance: boolean, msg: ActionTokenForbidden): ActionTokenForbidden.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionTokenForbidden, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionTokenForbidden;
  static deserializeBinaryFromReader(message: ActionTokenForbidden, reader: jspb.BinaryReader): ActionTokenForbidden;
}

export namespace ActionTokenForbidden {
  export type AsObject = {
    userAgent: string,
    ip: string,
    requestUrl: string,
  }
}

