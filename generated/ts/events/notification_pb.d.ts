// package: events
// file: events/notification.proto

import * as jspb from "google-protobuf";
import * as events_core_pb from "../events/core_pb";

export class BasicEmail extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicEmail.AsObject;
  static toObject(includeInstance: boolean, msg: BasicEmail): BasicEmail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicEmail;
  static deserializeBinaryFromReader(message: BasicEmail, reader: jspb.BinaryReader): BasicEmail;
}

export namespace BasicEmail {
  export type AsObject = {
    fromAddress: string,
    toAddress: string,
    subject: string,
    body: string,
  }
}

export class SMSNotification extends jspb.Message {
  getFromNumber(): string;
  setFromNumber(value: string): void;

  getToNumber(): string;
  setToNumber(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMSNotification.AsObject;
  static toObject(includeInstance: boolean, msg: SMSNotification): SMSNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SMSNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMSNotification;
  static deserializeBinaryFromReader(message: SMSNotification, reader: jspb.BinaryReader): SMSNotification;
}

export namespace SMSNotification {
  export type AsObject = {
    fromNumber: string,
    toNumber: string,
    message: string,
  }
}

