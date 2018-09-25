// Code generated by protoc-gen-go. DO NOT EDIT.
// source: events/recording.proto

package events

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type RecordingCreated struct {
	RecordingId          string   `protobuf:"bytes,10,opt,name=recording_id,json=recordingId,proto3" json:"recording_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RecordingCreated) Reset()         { *m = RecordingCreated{} }
func (m *RecordingCreated) String() string { return proto.CompactTextString(m) }
func (*RecordingCreated) ProtoMessage()    {}
func (*RecordingCreated) Descriptor() ([]byte, []int) {
	return fileDescriptor_recording_7228aeb03cb6a2e4, []int{0}
}
func (m *RecordingCreated) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RecordingCreated.Unmarshal(m, b)
}
func (m *RecordingCreated) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RecordingCreated.Marshal(b, m, deterministic)
}
func (dst *RecordingCreated) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RecordingCreated.Merge(dst, src)
}
func (m *RecordingCreated) XXX_Size() int {
	return xxx_messageInfo_RecordingCreated.Size(m)
}
func (m *RecordingCreated) XXX_DiscardUnknown() {
	xxx_messageInfo_RecordingCreated.DiscardUnknown(m)
}

var xxx_messageInfo_RecordingCreated proto.InternalMessageInfo

func (m *RecordingCreated) GetRecordingId() string {
	if m != nil {
		return m.RecordingId
	}
	return ""
}

type RecordingInserted struct {
	RecordingId          string   `protobuf:"bytes,10,opt,name=recording_id,json=recordingId,proto3" json:"recording_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RecordingInserted) Reset()         { *m = RecordingInserted{} }
func (m *RecordingInserted) String() string { return proto.CompactTextString(m) }
func (*RecordingInserted) ProtoMessage()    {}
func (*RecordingInserted) Descriptor() ([]byte, []int) {
	return fileDescriptor_recording_7228aeb03cb6a2e4, []int{1}
}
func (m *RecordingInserted) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RecordingInserted.Unmarshal(m, b)
}
func (m *RecordingInserted) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RecordingInserted.Marshal(b, m, deterministic)
}
func (dst *RecordingInserted) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RecordingInserted.Merge(dst, src)
}
func (m *RecordingInserted) XXX_Size() int {
	return xxx_messageInfo_RecordingInserted.Size(m)
}
func (m *RecordingInserted) XXX_DiscardUnknown() {
	xxx_messageInfo_RecordingInserted.DiscardUnknown(m)
}

var xxx_messageInfo_RecordingInserted proto.InternalMessageInfo

func (m *RecordingInserted) GetRecordingId() string {
	if m != nil {
		return m.RecordingId
	}
	return ""
}

type RecordingDeleted struct {
	RecordingId          string   `protobuf:"bytes,10,opt,name=recording_id,json=recordingId,proto3" json:"recording_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RecordingDeleted) Reset()         { *m = RecordingDeleted{} }
func (m *RecordingDeleted) String() string { return proto.CompactTextString(m) }
func (*RecordingDeleted) ProtoMessage()    {}
func (*RecordingDeleted) Descriptor() ([]byte, []int) {
	return fileDescriptor_recording_7228aeb03cb6a2e4, []int{2}
}
func (m *RecordingDeleted) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RecordingDeleted.Unmarshal(m, b)
}
func (m *RecordingDeleted) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RecordingDeleted.Marshal(b, m, deterministic)
}
func (dst *RecordingDeleted) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RecordingDeleted.Merge(dst, src)
}
func (m *RecordingDeleted) XXX_Size() int {
	return xxx_messageInfo_RecordingDeleted.Size(m)
}
func (m *RecordingDeleted) XXX_DiscardUnknown() {
	xxx_messageInfo_RecordingDeleted.DiscardUnknown(m)
}

var xxx_messageInfo_RecordingDeleted proto.InternalMessageInfo

func (m *RecordingDeleted) GetRecordingId() string {
	if m != nil {
		return m.RecordingId
	}
	return ""
}

type RecordingCognitionCompleted struct {
	RecordingId          string                               `protobuf:"bytes,10,opt,name=recording_id,json=recordingId,proto3" json:"recording_id,omitempty"`
	Payload              *RecordingCognitionCompleted_Payload `protobuf:"bytes,11,opt,name=payload,proto3" json:"payload,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                             `json:"-"`
	XXX_unrecognized     []byte                               `json:"-"`
	XXX_sizecache        int32                                `json:"-"`
}

func (m *RecordingCognitionCompleted) Reset()         { *m = RecordingCognitionCompleted{} }
func (m *RecordingCognitionCompleted) String() string { return proto.CompactTextString(m) }
func (*RecordingCognitionCompleted) ProtoMessage()    {}
func (*RecordingCognitionCompleted) Descriptor() ([]byte, []int) {
	return fileDescriptor_recording_7228aeb03cb6a2e4, []int{3}
}
func (m *RecordingCognitionCompleted) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RecordingCognitionCompleted.Unmarshal(m, b)
}
func (m *RecordingCognitionCompleted) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RecordingCognitionCompleted.Marshal(b, m, deterministic)
}
func (dst *RecordingCognitionCompleted) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RecordingCognitionCompleted.Merge(dst, src)
}
func (m *RecordingCognitionCompleted) XXX_Size() int {
	return xxx_messageInfo_RecordingCognitionCompleted.Size(m)
}
func (m *RecordingCognitionCompleted) XXX_DiscardUnknown() {
	xxx_messageInfo_RecordingCognitionCompleted.DiscardUnknown(m)
}

var xxx_messageInfo_RecordingCognitionCompleted proto.InternalMessageInfo

func (m *RecordingCognitionCompleted) GetRecordingId() string {
	if m != nil {
		return m.RecordingId
	}
	return ""
}

func (m *RecordingCognitionCompleted) GetPayload() *RecordingCognitionCompleted_Payload {
	if m != nil {
		return m.Payload
	}
	return nil
}

type RecordingCognitionCompleted_Payload struct {
	JobId                 string   `protobuf:"bytes,10,opt,name=job_id,json=jobId,proto3" json:"job_id,omitempty"`
	TaskId                string   `protobuf:"bytes,11,opt,name=task_id,json=taskId,proto3" json:"task_id,omitempty"`
	ApplicationId         string   `protobuf:"bytes,12,opt,name=application_id,json=applicationId,proto3" json:"application_id,omitempty"`
	OrganizationId        int64    `protobuf:"varint,13,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	LibraryId             string   `protobuf:"bytes,14,opt,name=library_id,json=libraryId,proto3" json:"library_id,omitempty"`
	IndexOverride         string   `protobuf:"bytes,15,opt,name=index_override,json=indexOverride,proto3" json:"index_override,omitempty"`
	Token                 string   `protobuf:"bytes,16,opt,name=token,proto3" json:"token,omitempty"`
	AssetId               string   `protobuf:"bytes,17,opt,name=asset_id,json=assetId,proto3" json:"asset_id,omitempty"`
	SkipMentionGeneration bool     `protobuf:"varint,18,opt,name=skip_mention_generation,json=skipMentionGeneration,proto3" json:"skip_mention_generation,omitempty"`
	XXX_NoUnkeyedLiteral  struct{} `json:"-"`
	XXX_unrecognized      []byte   `json:"-"`
	XXX_sizecache         int32    `json:"-"`
}

func (m *RecordingCognitionCompleted_Payload) Reset()         { *m = RecordingCognitionCompleted_Payload{} }
func (m *RecordingCognitionCompleted_Payload) String() string { return proto.CompactTextString(m) }
func (*RecordingCognitionCompleted_Payload) ProtoMessage()    {}
func (*RecordingCognitionCompleted_Payload) Descriptor() ([]byte, []int) {
	return fileDescriptor_recording_7228aeb03cb6a2e4, []int{3, 0}
}
func (m *RecordingCognitionCompleted_Payload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RecordingCognitionCompleted_Payload.Unmarshal(m, b)
}
func (m *RecordingCognitionCompleted_Payload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RecordingCognitionCompleted_Payload.Marshal(b, m, deterministic)
}
func (dst *RecordingCognitionCompleted_Payload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RecordingCognitionCompleted_Payload.Merge(dst, src)
}
func (m *RecordingCognitionCompleted_Payload) XXX_Size() int {
	return xxx_messageInfo_RecordingCognitionCompleted_Payload.Size(m)
}
func (m *RecordingCognitionCompleted_Payload) XXX_DiscardUnknown() {
	xxx_messageInfo_RecordingCognitionCompleted_Payload.DiscardUnknown(m)
}

var xxx_messageInfo_RecordingCognitionCompleted_Payload proto.InternalMessageInfo

func (m *RecordingCognitionCompleted_Payload) GetJobId() string {
	if m != nil {
		return m.JobId
	}
	return ""
}

func (m *RecordingCognitionCompleted_Payload) GetTaskId() string {
	if m != nil {
		return m.TaskId
	}
	return ""
}

func (m *RecordingCognitionCompleted_Payload) GetApplicationId() string {
	if m != nil {
		return m.ApplicationId
	}
	return ""
}

func (m *RecordingCognitionCompleted_Payload) GetOrganizationId() int64 {
	if m != nil {
		return m.OrganizationId
	}
	return 0
}

func (m *RecordingCognitionCompleted_Payload) GetLibraryId() string {
	if m != nil {
		return m.LibraryId
	}
	return ""
}

func (m *RecordingCognitionCompleted_Payload) GetIndexOverride() string {
	if m != nil {
		return m.IndexOverride
	}
	return ""
}

func (m *RecordingCognitionCompleted_Payload) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *RecordingCognitionCompleted_Payload) GetAssetId() string {
	if m != nil {
		return m.AssetId
	}
	return ""
}

func (m *RecordingCognitionCompleted_Payload) GetSkipMentionGeneration() bool {
	if m != nil {
		return m.SkipMentionGeneration
	}
	return false
}

func init() {
	proto.RegisterType((*RecordingCreated)(nil), "events.RecordingCreated")
	proto.RegisterType((*RecordingInserted)(nil), "events.RecordingInserted")
	proto.RegisterType((*RecordingDeleted)(nil), "events.RecordingDeleted")
	proto.RegisterType((*RecordingCognitionCompleted)(nil), "events.RecordingCognitionCompleted")
	proto.RegisterType((*RecordingCognitionCompleted_Payload)(nil), "events.RecordingCognitionCompleted.Payload")
}

func init() { proto.RegisterFile("events/recording.proto", fileDescriptor_recording_7228aeb03cb6a2e4) }

var fileDescriptor_recording_7228aeb03cb6a2e4 = []byte{
	// 351 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0xcf, 0x4a, 0xf3, 0x40,
	0x14, 0xc5, 0xc9, 0x57, 0x9a, 0xb4, 0x37, 0xfd, 0x3b, 0x7c, 0xb5, 0x51, 0x11, 0x62, 0x41, 0x0c,
	0x08, 0x11, 0x14, 0xfb, 0x00, 0x56, 0x91, 0x2c, 0x44, 0xc9, 0xd2, 0x4d, 0x99, 0x74, 0x2e, 0x61,
	0xda, 0x74, 0x26, 0x4c, 0x42, 0xb1, 0x3e, 0x99, 0x6b, 0x9f, 0x4c, 0x32, 0x49, 0xd3, 0xae, 0xa4,
	0xcb, 0xfb, 0x3b, 0xf7, 0x9c, 0x73, 0x13, 0x06, 0x4e, 0x70, 0x83, 0x22, 0xcf, 0x6e, 0x15, 0x2e,
	0xa4, 0x62, 0x5c, 0xc4, 0x7e, 0xaa, 0x64, 0x2e, 0x89, 0x59, 0xf2, 0xc9, 0x03, 0x0c, 0xc2, 0x9d,
	0x34, 0x53, 0x48, 0x73, 0x64, 0xe4, 0x12, 0x3a, 0xf5, 0xfa, 0x9c, 0x33, 0x07, 0x5c, 0xc3, 0x6b,
	0x87, 0x76, 0xcd, 0x02, 0x36, 0x99, 0xc2, 0xb0, 0xb6, 0x05, 0x22, 0x43, 0x75, 0xa4, 0xef, 0xb0,
	0xee, 0x09, 0x13, 0x3c, 0xd2, 0xf6, 0xd3, 0x80, 0xf3, 0xfd, 0x99, 0x32, 0x16, 0x3c, 0xe7, 0x52,
	0xcc, 0xe4, 0x3a, 0x3d, 0x36, 0x82, 0x3c, 0x83, 0x95, 0xd2, 0x6d, 0x22, 0x29, 0x73, 0x6c, 0xd7,
	0xf0, 0xec, 0xbb, 0x1b, 0xbf, 0xfc, 0x05, 0xfe, 0x1f, 0xc1, 0xfe, 0x7b, 0x69, 0x09, 0x77, 0xde,
	0xb3, 0xef, 0x7f, 0x60, 0x55, 0x90, 0x8c, 0xc0, 0x5c, 0xca, 0x68, 0xdf, 0xd7, 0x5c, 0xca, 0x28,
	0x60, 0x64, 0x0c, 0x56, 0x4e, 0xb3, 0x55, 0xc1, 0x6d, 0xcd, 0xcd, 0x62, 0x0c, 0x18, 0xb9, 0x82,
	0x1e, 0x4d, 0xd3, 0x84, 0x2f, 0x68, 0x51, 0x52, 0xe8, 0x1d, 0xad, 0x77, 0x0f, 0x68, 0xc0, 0xc8,
	0x35, 0xf4, 0xa5, 0x8a, 0xa9, 0xe0, 0x5f, 0xf5, 0x5e, 0xd7, 0x35, 0xbc, 0x46, 0xd8, 0x3b, 0xc4,
	0x01, 0x23, 0x17, 0x00, 0x09, 0x8f, 0x14, 0x55, 0xdb, 0x62, 0xa7, 0xa7, 0xb3, 0xda, 0x15, 0x29,
	0xeb, 0xb8, 0x60, 0xf8, 0x39, 0x97, 0x1b, 0x54, 0x8a, 0x33, 0x74, 0xfa, 0x65, 0x9d, 0xa6, 0x6f,
	0x15, 0x24, 0xff, 0xa1, 0x99, 0xcb, 0x15, 0x0a, 0x67, 0x50, 0x7e, 0x84, 0x1e, 0xc8, 0x29, 0xb4,
	0x68, 0x96, 0x61, 0x5e, 0x24, 0x0f, 0xb5, 0x60, 0xe9, 0x39, 0x60, 0x64, 0x0a, 0xe3, 0x6c, 0xc5,
	0xd3, 0xf9, 0x1a, 0x85, 0xbe, 0x2f, 0x46, 0x81, 0x4a, 0xdf, 0xe4, 0x10, 0xd7, 0xf0, 0x5a, 0xe1,
	0xa8, 0x90, 0x5f, 0x4b, 0xf5, 0xa5, 0x16, 0x1f, 0x5b, 0x1f, 0xd5, 0xa3, 0x8b, 0x4c, 0xfd, 0x06,
	0xef, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff, 0x79, 0xb5, 0xe5, 0x96, 0x9d, 0x02, 0x00, 0x00,
}
