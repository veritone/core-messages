// package: events
// file: events/mention_notification.proto

import * as jspb from "google-protobuf";
import * as events_core_pb from "../events/core_pb";

export class MentionModifiedData extends jspb.Message {
  getMentionId(): number;
  setMentionId(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getMentionDate(): string;
  setMentionDate(value: string): void;

  getTransactionTimestamp(): string;
  setTransactionTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentionModifiedData.AsObject;
  static toObject(includeInstance: boolean, msg: MentionModifiedData): MentionModifiedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MentionModifiedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentionModifiedData;
  static deserializeBinaryFromReader(message: MentionModifiedData, reader: jspb.BinaryReader): MentionModifiedData;
}

export namespace MentionModifiedData {
  export type AsObject = {
    mentionId: number,
    organizationId: number,
    mentionDate: string,
    transactionTimestamp: string,
  }
}

export class MentionUpdated extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): MentionModifiedData | undefined;
  setPayload(value?: MentionModifiedData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentionUpdated.AsObject;
  static toObject(includeInstance: boolean, msg: MentionUpdated): MentionUpdated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MentionUpdated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentionUpdated;
  static deserializeBinaryFromReader(message: MentionUpdated, reader: jspb.BinaryReader): MentionUpdated;
}

export namespace MentionUpdated {
  export type AsObject = {
    event: string,
    type: string,
    payload?: MentionModifiedData.AsObject,
  }
}

export class MentionDeleted extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): MentionModifiedData | undefined;
  setPayload(value?: MentionModifiedData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentionDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: MentionDeleted): MentionDeleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MentionDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentionDeleted;
  static deserializeBinaryFromReader(message: MentionDeleted, reader: jspb.BinaryReader): MentionDeleted;
}

export namespace MentionDeleted {
  export type AsObject = {
    event: string,
    type: string,
    payload?: MentionModifiedData.AsObject,
  }
}

export class MentionInserted extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): MentionModifiedData | undefined;
  setPayload(value?: MentionModifiedData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentionInserted.AsObject;
  static toObject(includeInstance: boolean, msg: MentionInserted): MentionInserted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MentionInserted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentionInserted;
  static deserializeBinaryFromReader(message: MentionInserted, reader: jspb.BinaryReader): MentionInserted;
}

export namespace MentionInserted {
  export type AsObject = {
    event: string,
    type: string,
    payload?: MentionModifiedData.AsObject,
  }
}

export class MentionEmailGenerated extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): void;

  getType(): string;
  setType(value: string): void;

  getServiceName(): string;
  setServiceName(value: string): void;

  getToEmail(): string;
  setToEmail(value: string): void;

  getFromEmail(): string;
  setFromEmail(value: string): void;

  getFromName(): string;
  setFromName(value: string): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  hasPlaceHolders(): boolean;
  clearPlaceHolders(): void;
  getPlaceHolders(): MentionEmailGenerated.PlaceHolders | undefined;
  setPlaceHolders(value?: MentionEmailGenerated.PlaceHolders): void;

  getMergeLanguage(): string;
  setMergeLanguage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentionEmailGenerated.AsObject;
  static toObject(includeInstance: boolean, msg: MentionEmailGenerated): MentionEmailGenerated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MentionEmailGenerated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentionEmailGenerated;
  static deserializeBinaryFromReader(message: MentionEmailGenerated, reader: jspb.BinaryReader): MentionEmailGenerated;
}

export namespace MentionEmailGenerated {
  export type AsObject = {
    event: string,
    type: string,
    serviceName: string,
    toEmail: string,
    fromEmail: string,
    fromName: string,
    template: string,
    placeHolders?: MentionEmailGenerated.PlaceHolders.AsObject,
    mergeLanguage: string,
  }

  export class Mention extends jspb.Message {
    getTrackingUnitName(): string;
    setTrackingUnitName(value: string): void;

    getProgramName(): string;
    setProgramName(value: string): void;

    getProgramImage(): string;
    setProgramImage(value: string): void;

    getMentionDate(): number;
    setMentionDate(value: number): void;

    getSnippets(): string;
    setSnippets(value: string): void;

    getInviteLink(): string;
    setInviteLink(value: string): void;

    getVia(): string;
    setVia(value: string): void;

    getLogouri(): string;
    setLogouri(value: string): void;

    getCreatorEmail(): string;
    setCreatorEmail(value: string): void;

    getUnsubscribeHash(): string;
    setUnsubscribeHash(value: string): void;

    getUnsubscribeLink(): string;
    setUnsubscribeLink(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mention.AsObject;
    static toObject(includeInstance: boolean, msg: Mention): Mention.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mention, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mention;
    static deserializeBinaryFromReader(message: Mention, reader: jspb.BinaryReader): Mention;
  }

  export namespace Mention {
    export type AsObject = {
      trackingUnitName: string,
      programName: string,
      programImage: string,
      mentionDate: number,
      snippets: string,
      inviteLink: string,
      via: string,
      logouri: string,
      creatorEmail: string,
      unsubscribeHash: string,
      unsubscribeLink: string,
    }
  }

  export class PlaceHolders extends jspb.Message {
    getTrackingUnitName(): string;
    setTrackingUnitName(value: string): void;

    getVia(): string;
    setVia(value: string): void;

    getLogouri(): string;
    setLogouri(value: string): void;

    clearMentionsList(): void;
    getMentionsList(): Array<MentionEmailGenerated.Mention>;
    setMentionsList(value: Array<MentionEmailGenerated.Mention>): void;
    addMentions(value?: MentionEmailGenerated.Mention, index?: number): MentionEmailGenerated.Mention;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlaceHolders.AsObject;
    static toObject(includeInstance: boolean, msg: PlaceHolders): PlaceHolders.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlaceHolders, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlaceHolders;
    static deserializeBinaryFromReader(message: PlaceHolders, reader: jspb.BinaryReader): PlaceHolders;
  }

  export namespace PlaceHolders {
    export type AsObject = {
      trackingUnitName: string,
      via: string,
      logouri: string,
      mentionsList: Array<MentionEmailGenerated.Mention.AsObject>,
    }
  }
}

export class MentionsDeleted extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): void;

  getType(): string;
  setType(value: string): void;

  clearMentionIdsList(): void;
  getMentionIdsList(): Array<number>;
  setMentionIdsList(value: Array<number>): void;
  addMentionIds(value: number, index?: number): number;

  getTdoId(): number;
  setTdoId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MentionsDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: MentionsDeleted): MentionsDeleted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MentionsDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MentionsDeleted;
  static deserializeBinaryFromReader(message: MentionsDeleted, reader: jspb.BinaryReader): MentionsDeleted;
}

export namespace MentionsDeleted {
  export type AsObject = {
    event: string,
    type: string,
    mentionIdsList: Array<number>,
    tdoId: number,
  }
}

