// package: events
// file: events/notification.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class BasicEmail extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getReplyTo(): string;
  setReplyTo(value: string): void;

  getBodyHtml(): string;
  setBodyHtml(value: string): void;

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
    replyTo: string,
    bodyHtml: string,
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

export class Webhook extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getEncoding(): Webhook.Encoding;
  setEncoding(value: Webhook.Encoding): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_any_pb.Any | undefined;
  setPayload(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Webhook.AsObject;
  static toObject(includeInstance: boolean, msg: Webhook): Webhook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Webhook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Webhook;
  static deserializeBinaryFromReader(message: Webhook, reader: jspb.BinaryReader): Webhook;
}

export namespace Webhook {
  export type AsObject = {
    url: string,
    encoding: Webhook.Encoding,
    payload?: google_protobuf_any_pb.Any.AsObject,
  }

  export enum Encoding {
    JSON = 0,
    PROTO_BIN = 1,
    PROTO_64 = 2,
  }
}

