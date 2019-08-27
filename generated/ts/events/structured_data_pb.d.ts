// package: events
// file: events/structured_data.proto

import * as jspb from "google-protobuf";

export class StructuredDataDelete extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDataRegistryId(): string;
  setDataRegistryId(value: string): void;

  getSchemaId(): string;
  setSchemaId(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructuredDataDelete.AsObject;
  static toObject(includeInstance: boolean, msg: StructuredDataDelete): StructuredDataDelete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructuredDataDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructuredDataDelete;
  static deserializeBinaryFromReader(message: StructuredDataDelete, reader: jspb.BinaryReader): StructuredDataDelete;
}

export namespace StructuredDataDelete {
  export type AsObject = {
    id: string,
    dataRegistryId: string,
    schemaId: string,
    organizationId: number,
  }
}

