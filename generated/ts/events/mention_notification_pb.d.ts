// package: events
// file: events/mention_notification.proto

import * as jspb from "google-protobuf";
import * as events_core_pb from "../events/core_pb";

export class MentionEmailGenerated extends jspb.Message {
  hasCore(): boolean;
  clearCore(): void;
  getCore(): events_core_pb.Core | undefined;
  setCore(value?: events_core_pb.Core): void;

  hasTrace(): boolean;
  clearTrace(): void;
  getTrace(): events_core_pb.Trace | undefined;
  setTrace(value?: events_core_pb.Trace): void;

  getEvent(): string;
  setEvent(value: string): void;

  getType(): string;
  setType(value: string): void;

  getServicename(): string;
  setServicename(value: string): void;

  getToemail(): string;
  setToemail(value: string): void;

  getFromemail(): string;
  setFromemail(value: string): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  hasPlaceholders(): boolean;
  clearPlaceholders(): void;
  getPlaceholders(): MentionEmailGenerated.PlaceHolders | undefined;
  setPlaceholders(value?: MentionEmailGenerated.PlaceHolders): void;

  getMergelanguage(): string;
  setMergelanguage(value: string): void;

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
    core?: events_core_pb.Core.AsObject,
    trace?: events_core_pb.Trace.AsObject,
    event: string,
    type: string,
    servicename: string,
    toemail: string,
    fromemail: string,
    template: string,
    placeholders?: MentionEmailGenerated.PlaceHolders.AsObject,
    mergelanguage: string,
  }

  export class PlaceHolders extends jspb.Message {
    getTrackingunitname(): string;
    setTrackingunitname(value: string): void;

    getVia(): string;
    setVia(value: string): void;

    getLogouri(): string;
    setLogouri(value: string): void;

    clearMentionsList(): void;
    getMentionsList(): Array<MentionEmailGenerated.PlaceHolders.Mention>;
    setMentionsList(value: Array<MentionEmailGenerated.PlaceHolders.Mention>): void;
    addMentions(value?: MentionEmailGenerated.PlaceHolders.Mention, index?: number): MentionEmailGenerated.PlaceHolders.Mention;

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
      trackingunitname: string,
      via: string,
      logouri: string,
      mentionsList: Array<MentionEmailGenerated.PlaceHolders.Mention.AsObject>,
    }

    export class Mention extends jspb.Message {
      getTrackingunitname(): string;
      setTrackingunitname(value: string): void;

      getProgramname(): string;
      setProgramname(value: string): void;

      getProgramimage(): string;
      setProgramimage(value: string): void;

      getMentiondate(): number;
      setMentiondate(value: number): void;

      getSnippets(): string;
      setSnippets(value: string): void;

      getInvitelink(): string;
      setInvitelink(value: string): void;

      getVia(): string;
      setVia(value: string): void;

      getLogouri(): string;
      setLogouri(value: string): void;

      getCreatoremail(): string;
      setCreatoremail(value: string): void;

      getUnsubscribehash(): string;
      setUnsubscribehash(value: string): void;

      getUnsubscribelink(): string;
      setUnsubscribelink(value: string): void;

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
        trackingunitname: string,
        programname: string,
        programimage: string,
        mentiondate: number,
        snippets: string,
        invitelink: string,
        via: string,
        logouri: string,
        creatoremail: string,
        unsubscribehash: string,
        unsubscribelink: string,
      }
    }
  }
}

