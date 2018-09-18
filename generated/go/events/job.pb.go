// Code generated by protoc-gen-go. DO NOT EDIT.
// source: events/job.proto

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

type JobCreated struct {
	JobId                string   `protobuf:"bytes,10,opt,name=job_id,json=jobId,proto3" json:"job_id,omitempty"`
	TimestampMs          string   `protobuf:"bytes,11,opt,name=timestamp_ms,json=timestampMs,proto3" json:"timestamp_ms,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *JobCreated) Reset()         { *m = JobCreated{} }
func (m *JobCreated) String() string { return proto.CompactTextString(m) }
func (*JobCreated) ProtoMessage()    {}
func (*JobCreated) Descriptor() ([]byte, []int) {
	return fileDescriptor_job_e8198225edb3934a, []int{0}
}
func (m *JobCreated) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_JobCreated.Unmarshal(m, b)
}
func (m *JobCreated) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_JobCreated.Marshal(b, m, deterministic)
}
func (dst *JobCreated) XXX_Merge(src proto.Message) {
	xxx_messageInfo_JobCreated.Merge(dst, src)
}
func (m *JobCreated) XXX_Size() int {
	return xxx_messageInfo_JobCreated.Size(m)
}
func (m *JobCreated) XXX_DiscardUnknown() {
	xxx_messageInfo_JobCreated.DiscardUnknown(m)
}

var xxx_messageInfo_JobCreated proto.InternalMessageInfo

func (m *JobCreated) GetJobId() string {
	if m != nil {
		return m.JobId
	}
	return ""
}

func (m *JobCreated) GetTimestampMs() string {
	if m != nil {
		return m.TimestampMs
	}
	return ""
}

type JobCompleted struct {
	JobId                string   `protobuf:"bytes,10,opt,name=job_id,json=jobId,proto3" json:"job_id,omitempty"`
	TimestampMs          string   `protobuf:"bytes,11,opt,name=timestamp_ms,json=timestampMs,proto3" json:"timestamp_ms,omitempty"`
	JobStatus            string   `protobuf:"bytes,12,opt,name=job_status,json=jobStatus,proto3" json:"job_status,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *JobCompleted) Reset()         { *m = JobCompleted{} }
func (m *JobCompleted) String() string { return proto.CompactTextString(m) }
func (*JobCompleted) ProtoMessage()    {}
func (*JobCompleted) Descriptor() ([]byte, []int) {
	return fileDescriptor_job_e8198225edb3934a, []int{1}
}
func (m *JobCompleted) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_JobCompleted.Unmarshal(m, b)
}
func (m *JobCompleted) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_JobCompleted.Marshal(b, m, deterministic)
}
func (dst *JobCompleted) XXX_Merge(src proto.Message) {
	xxx_messageInfo_JobCompleted.Merge(dst, src)
}
func (m *JobCompleted) XXX_Size() int {
	return xxx_messageInfo_JobCompleted.Size(m)
}
func (m *JobCompleted) XXX_DiscardUnknown() {
	xxx_messageInfo_JobCompleted.DiscardUnknown(m)
}

var xxx_messageInfo_JobCompleted proto.InternalMessageInfo

func (m *JobCompleted) GetJobId() string {
	if m != nil {
		return m.JobId
	}
	return ""
}

func (m *JobCompleted) GetTimestampMs() string {
	if m != nil {
		return m.TimestampMs
	}
	return ""
}

func (m *JobCompleted) GetJobStatus() string {
	if m != nil {
		return m.JobStatus
	}
	return ""
}

type JobFailed struct {
	JobId                string   `protobuf:"bytes,10,opt,name=job_id,json=jobId,proto3" json:"job_id,omitempty"`
	TimestampMs          string   `protobuf:"bytes,11,opt,name=timestamp_ms,json=timestampMs,proto3" json:"timestamp_ms,omitempty"`
	JobStatus            string   `protobuf:"bytes,12,opt,name=job_status,json=jobStatus,proto3" json:"job_status,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *JobFailed) Reset()         { *m = JobFailed{} }
func (m *JobFailed) String() string { return proto.CompactTextString(m) }
func (*JobFailed) ProtoMessage()    {}
func (*JobFailed) Descriptor() ([]byte, []int) {
	return fileDescriptor_job_e8198225edb3934a, []int{2}
}
func (m *JobFailed) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_JobFailed.Unmarshal(m, b)
}
func (m *JobFailed) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_JobFailed.Marshal(b, m, deterministic)
}
func (dst *JobFailed) XXX_Merge(src proto.Message) {
	xxx_messageInfo_JobFailed.Merge(dst, src)
}
func (m *JobFailed) XXX_Size() int {
	return xxx_messageInfo_JobFailed.Size(m)
}
func (m *JobFailed) XXX_DiscardUnknown() {
	xxx_messageInfo_JobFailed.DiscardUnknown(m)
}

var xxx_messageInfo_JobFailed proto.InternalMessageInfo

func (m *JobFailed) GetJobId() string {
	if m != nil {
		return m.JobId
	}
	return ""
}

func (m *JobFailed) GetTimestampMs() string {
	if m != nil {
		return m.TimestampMs
	}
	return ""
}

func (m *JobFailed) GetJobStatus() string {
	if m != nil {
		return m.JobStatus
	}
	return ""
}

func init() {
	proto.RegisterType((*JobCreated)(nil), "events.JobCreated")
	proto.RegisterType((*JobCompleted)(nil), "events.JobCompleted")
	proto.RegisterType((*JobFailed)(nil), "events.JobFailed")
}

func init() { proto.RegisterFile("events/job.proto", fileDescriptor_job_e8198225edb3934a) }

var fileDescriptor_job_e8198225edb3934a = []byte{
	// 169 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x48, 0x2d, 0x4b, 0xcd,
	0x2b, 0x29, 0xd6, 0xcf, 0xca, 0x4f, 0xd2, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x83, 0x88,
	0x28, 0xb9, 0x71, 0x71, 0x79, 0xe5, 0x27, 0x39, 0x17, 0xa5, 0x26, 0x96, 0xa4, 0xa6, 0x08, 0x89,
	0x72, 0xb1, 0x65, 0xe5, 0x27, 0xc5, 0x67, 0xa6, 0x48, 0x70, 0x29, 0x30, 0x6a, 0x70, 0x06, 0xb1,
	0x66, 0xe5, 0x27, 0x79, 0xa6, 0x08, 0x29, 0x72, 0xf1, 0x94, 0x64, 0xe6, 0xa6, 0x16, 0x97, 0x24,
	0xe6, 0x16, 0xc4, 0xe7, 0x16, 0x4b, 0x70, 0x83, 0x25, 0xb9, 0xe1, 0x62, 0xbe, 0xc5, 0x4a, 0xe9,
	0x5c, 0x3c, 0x20, 0x73, 0xf2, 0x73, 0x0b, 0x72, 0x52, 0x29, 0x32, 0x49, 0x48, 0x96, 0x8b, 0x0b,
	0xa4, 0xb3, 0xb8, 0x24, 0xb1, 0xa4, 0xb4, 0x58, 0x82, 0x07, 0xac, 0x80, 0x33, 0x2b, 0x3f, 0x29,
	0x18, 0x2c, 0xa0, 0x94, 0xc2, 0xc5, 0xe9, 0x95, 0x9f, 0xe4, 0x96, 0x98, 0x99, 0x43, 0x43, 0x5b,
	0x9c, 0x38, 0xa2, 0xa0, 0x01, 0x94, 0xc4, 0x06, 0x0e, 0x2f, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff,
	0xff, 0xd2, 0x38, 0xd8, 0x28, 0x43, 0x01, 0x00, 0x00,
}
