// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.5.1
// source: events/authentication.proto

package events

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type LoginSucceeded struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserName       string `protobuf:"bytes,10,opt,name=user_name,json=userName,proto3" json:"user_name,omitempty"`
	UserAgent      string `protobuf:"bytes,11,opt,name=user_agent,json=userAgent,proto3" json:"user_agent,omitempty"`
	Ip             string `protobuf:"bytes,12,opt,name=ip,proto3" json:"ip,omitempty"`
	RequestUrl     string `protobuf:"bytes,13,opt,name=request_url,json=requestUrl,proto3" json:"request_url,omitempty"`
	UserId         string `protobuf:"bytes,14,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	OrganizationId int64  `protobuf:"varint,15,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
}

func (x *LoginSucceeded) Reset() {
	*x = LoginSucceeded{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_authentication_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoginSucceeded) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginSucceeded) ProtoMessage() {}

func (x *LoginSucceeded) ProtoReflect() protoreflect.Message {
	mi := &file_events_authentication_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoginSucceeded.ProtoReflect.Descriptor instead.
func (*LoginSucceeded) Descriptor() ([]byte, []int) {
	return file_events_authentication_proto_rawDescGZIP(), []int{0}
}

func (x *LoginSucceeded) GetUserName() string {
	if x != nil {
		return x.UserName
	}
	return ""
}

func (x *LoginSucceeded) GetUserAgent() string {
	if x != nil {
		return x.UserAgent
	}
	return ""
}

func (x *LoginSucceeded) GetIp() string {
	if x != nil {
		return x.Ip
	}
	return ""
}

func (x *LoginSucceeded) GetRequestUrl() string {
	if x != nil {
		return x.RequestUrl
	}
	return ""
}

func (x *LoginSucceeded) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *LoginSucceeded) GetOrganizationId() int64 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

type LoginFailed struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserName   string `protobuf:"bytes,10,opt,name=user_name,json=userName,proto3" json:"user_name,omitempty"`
	UserAgent  string `protobuf:"bytes,11,opt,name=user_agent,json=userAgent,proto3" json:"user_agent,omitempty"`
	Ip         string `protobuf:"bytes,12,opt,name=ip,proto3" json:"ip,omitempty"`
	RequestUrl string `protobuf:"bytes,13,opt,name=request_url,json=requestUrl,proto3" json:"request_url,omitempty"`
}

func (x *LoginFailed) Reset() {
	*x = LoginFailed{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_authentication_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoginFailed) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginFailed) ProtoMessage() {}

func (x *LoginFailed) ProtoReflect() protoreflect.Message {
	mi := &file_events_authentication_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoginFailed.ProtoReflect.Descriptor instead.
func (*LoginFailed) Descriptor() ([]byte, []int) {
	return file_events_authentication_proto_rawDescGZIP(), []int{1}
}

func (x *LoginFailed) GetUserName() string {
	if x != nil {
		return x.UserName
	}
	return ""
}

func (x *LoginFailed) GetUserAgent() string {
	if x != nil {
		return x.UserAgent
	}
	return ""
}

func (x *LoginFailed) GetIp() string {
	if x != nil {
		return x.Ip
	}
	return ""
}

func (x *LoginFailed) GetRequestUrl() string {
	if x != nil {
		return x.RequestUrl
	}
	return ""
}

type LoginAttemptsExceeded struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserName   string `protobuf:"bytes,10,opt,name=user_name,json=userName,proto3" json:"user_name,omitempty"`
	UserAgent  string `protobuf:"bytes,11,opt,name=user_agent,json=userAgent,proto3" json:"user_agent,omitempty"`
	Ip         string `protobuf:"bytes,12,opt,name=ip,proto3" json:"ip,omitempty"`
	RequestUrl string `protobuf:"bytes,13,opt,name=request_url,json=requestUrl,proto3" json:"request_url,omitempty"`
}

func (x *LoginAttemptsExceeded) Reset() {
	*x = LoginAttemptsExceeded{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_authentication_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoginAttemptsExceeded) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginAttemptsExceeded) ProtoMessage() {}

func (x *LoginAttemptsExceeded) ProtoReflect() protoreflect.Message {
	mi := &file_events_authentication_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoginAttemptsExceeded.ProtoReflect.Descriptor instead.
func (*LoginAttemptsExceeded) Descriptor() ([]byte, []int) {
	return file_events_authentication_proto_rawDescGZIP(), []int{2}
}

func (x *LoginAttemptsExceeded) GetUserName() string {
	if x != nil {
		return x.UserName
	}
	return ""
}

func (x *LoginAttemptsExceeded) GetUserAgent() string {
	if x != nil {
		return x.UserAgent
	}
	return ""
}

func (x *LoginAttemptsExceeded) GetIp() string {
	if x != nil {
		return x.Ip
	}
	return ""
}

func (x *LoginAttemptsExceeded) GetRequestUrl() string {
	if x != nil {
		return x.RequestUrl
	}
	return ""
}

type Impersonated struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserName            string `protobuf:"bytes,10,opt,name=user_name,json=userName,proto3" json:"user_name,omitempty"`
	UserAgent           string `protobuf:"bytes,11,opt,name=user_agent,json=userAgent,proto3" json:"user_agent,omitempty"`
	Ip                  string `protobuf:"bytes,12,opt,name=ip,proto3" json:"ip,omitempty"`
	RequestUrl          string `protobuf:"bytes,13,opt,name=request_url,json=requestUrl,proto3" json:"request_url,omitempty"`
	UserId              string `protobuf:"bytes,14,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	OrganizationId      int64  `protobuf:"varint,15,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ImpersontatedUserId string `protobuf:"bytes,16,opt,name=impersontated_user_id,json=impersontatedUserId,proto3" json:"impersontated_user_id,omitempty"`
}

func (x *Impersonated) Reset() {
	*x = Impersonated{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_authentication_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Impersonated) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Impersonated) ProtoMessage() {}

func (x *Impersonated) ProtoReflect() protoreflect.Message {
	mi := &file_events_authentication_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Impersonated.ProtoReflect.Descriptor instead.
func (*Impersonated) Descriptor() ([]byte, []int) {
	return file_events_authentication_proto_rawDescGZIP(), []int{3}
}

func (x *Impersonated) GetUserName() string {
	if x != nil {
		return x.UserName
	}
	return ""
}

func (x *Impersonated) GetUserAgent() string {
	if x != nil {
		return x.UserAgent
	}
	return ""
}

func (x *Impersonated) GetIp() string {
	if x != nil {
		return x.Ip
	}
	return ""
}

func (x *Impersonated) GetRequestUrl() string {
	if x != nil {
		return x.RequestUrl
	}
	return ""
}

func (x *Impersonated) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *Impersonated) GetOrganizationId() int64 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *Impersonated) GetImpersontatedUserId() string {
	if x != nil {
		return x.ImpersontatedUserId
	}
	return ""
}

type ActionUserForbidden struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserName       string `protobuf:"bytes,10,opt,name=user_name,json=userName,proto3" json:"user_name,omitempty"`
	UserAgent      string `protobuf:"bytes,11,opt,name=user_agent,json=userAgent,proto3" json:"user_agent,omitempty"`
	Ip             string `protobuf:"bytes,12,opt,name=ip,proto3" json:"ip,omitempty"`
	RequestUrl     string `protobuf:"bytes,13,opt,name=request_url,json=requestUrl,proto3" json:"request_url,omitempty"`
	UserId         string `protobuf:"bytes,14,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	OrganizationId int64  `protobuf:"varint,15,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
}

func (x *ActionUserForbidden) Reset() {
	*x = ActionUserForbidden{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_authentication_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ActionUserForbidden) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ActionUserForbidden) ProtoMessage() {}

func (x *ActionUserForbidden) ProtoReflect() protoreflect.Message {
	mi := &file_events_authentication_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ActionUserForbidden.ProtoReflect.Descriptor instead.
func (*ActionUserForbidden) Descriptor() ([]byte, []int) {
	return file_events_authentication_proto_rawDescGZIP(), []int{4}
}

func (x *ActionUserForbidden) GetUserName() string {
	if x != nil {
		return x.UserName
	}
	return ""
}

func (x *ActionUserForbidden) GetUserAgent() string {
	if x != nil {
		return x.UserAgent
	}
	return ""
}

func (x *ActionUserForbidden) GetIp() string {
	if x != nil {
		return x.Ip
	}
	return ""
}

func (x *ActionUserForbidden) GetRequestUrl() string {
	if x != nil {
		return x.RequestUrl
	}
	return ""
}

func (x *ActionUserForbidden) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *ActionUserForbidden) GetOrganizationId() int64 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

type ActionTokenForbidden struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserAgent  string `protobuf:"bytes,11,opt,name=user_agent,json=userAgent,proto3" json:"user_agent,omitempty"`
	Ip         string `protobuf:"bytes,12,opt,name=ip,proto3" json:"ip,omitempty"`
	RequestUrl string `protobuf:"bytes,13,opt,name=request_url,json=requestUrl,proto3" json:"request_url,omitempty"`
}

func (x *ActionTokenForbidden) Reset() {
	*x = ActionTokenForbidden{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_authentication_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ActionTokenForbidden) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ActionTokenForbidden) ProtoMessage() {}

func (x *ActionTokenForbidden) ProtoReflect() protoreflect.Message {
	mi := &file_events_authentication_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ActionTokenForbidden.ProtoReflect.Descriptor instead.
func (*ActionTokenForbidden) Descriptor() ([]byte, []int) {
	return file_events_authentication_proto_rawDescGZIP(), []int{5}
}

func (x *ActionTokenForbidden) GetUserAgent() string {
	if x != nil {
		return x.UserAgent
	}
	return ""
}

func (x *ActionTokenForbidden) GetIp() string {
	if x != nil {
		return x.Ip
	}
	return ""
}

func (x *ActionTokenForbidden) GetRequestUrl() string {
	if x != nil {
		return x.RequestUrl
	}
	return ""
}

var File_events_authentication_proto protoreflect.FileDescriptor

var file_events_authentication_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x65, 0x6e, 0x74,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x22, 0xbf, 0x01, 0x0a, 0x0e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x53,
	0x75, 0x63, 0x63, 0x65, 0x65, 0x64, 0x65, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73, 0x65,
	0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x61, 0x67,
	0x65, 0x6e, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x73, 0x65, 0x72, 0x41,
	0x67, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x70, 0x12, 0x1f, 0x0a, 0x0b, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f,
	0x75, 0x72, 0x6c, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x72, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x55, 0x72, 0x6c, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64,
	0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x27,
	0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x22, 0x7a, 0x0a, 0x0b, 0x4c, 0x6f, 0x67, 0x69, 0x6e,
	0x46, 0x61, 0x69, 0x6c, 0x65, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x4e,
	0x61, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x61, 0x67, 0x65, 0x6e,
	0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x73, 0x65, 0x72, 0x41, 0x67, 0x65,
	0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x70, 0x12, 0x1f, 0x0a, 0x0b, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x75, 0x72,
	0x6c, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x55, 0x72, 0x6c, 0x22, 0x84, 0x01, 0x0a, 0x15, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x41, 0x74, 0x74,
	0x65, 0x6d, 0x70, 0x74, 0x73, 0x45, 0x78, 0x63, 0x65, 0x65, 0x64, 0x65, 0x64, 0x12, 0x1b, 0x0a,
	0x09, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x73,
	0x65, 0x72, 0x5f, 0x61, 0x67, 0x65, 0x6e, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x75, 0x73, 0x65, 0x72, 0x41, 0x67, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x70, 0x18,
	0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x70, 0x12, 0x1f, 0x0a, 0x0b, 0x72, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a,
	0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x55, 0x72, 0x6c, 0x22, 0xf1, 0x01, 0x0a, 0x0c, 0x49,
	0x6d, 0x70, 0x65, 0x72, 0x73, 0x6f, 0x6e, 0x61, 0x74, 0x65, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x75,
	0x73, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x75, 0x73, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x61, 0x67, 0x65, 0x6e, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x73,
	0x65, 0x72, 0x41, 0x67, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x0c, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x70, 0x12, 0x1f, 0x0a, 0x0b, 0x72, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x72, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x55, 0x72, 0x6c, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x69, 0x64, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49,
	0x64, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x69, 0x64, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x32, 0x0a, 0x15, 0x69, 0x6d,
	0x70, 0x65, 0x72, 0x73, 0x6f, 0x6e, 0x74, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x69, 0x64, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x13, 0x69, 0x6d, 0x70, 0x65, 0x72,
	0x73, 0x6f, 0x6e, 0x74, 0x61, 0x74, 0x65, 0x64, 0x55, 0x73, 0x65, 0x72, 0x49, 0x64, 0x22, 0xc4,
	0x01, 0x0a, 0x13, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x55, 0x73, 0x65, 0x72, 0x46, 0x6f, 0x72,
	0x62, 0x69, 0x64, 0x64, 0x65, 0x6e, 0x12, 0x1b, 0x0a, 0x09, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x4e,
	0x61, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x61, 0x67, 0x65, 0x6e,
	0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x73, 0x65, 0x72, 0x41, 0x67, 0x65,
	0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x70, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x70, 0x12, 0x1f, 0x0a, 0x0b, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x75, 0x72,
	0x6c, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x55, 0x72, 0x6c, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x0e,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x27, 0x0a, 0x0f,
	0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18,
	0x0f, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x49, 0x64, 0x22, 0x66, 0x0a, 0x14, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x46, 0x6f, 0x72, 0x62, 0x69, 0x64, 0x64, 0x65, 0x6e, 0x12, 0x1d, 0x0a,
	0x0a, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x61, 0x67, 0x65, 0x6e, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x75, 0x73, 0x65, 0x72, 0x41, 0x67, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x70, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x70, 0x12, 0x1f, 0x0a, 0x0b,
	0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x0d, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x55, 0x72, 0x6c, 0x42, 0x08, 0x5a,
	0x06, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_events_authentication_proto_rawDescOnce sync.Once
	file_events_authentication_proto_rawDescData = file_events_authentication_proto_rawDesc
)

func file_events_authentication_proto_rawDescGZIP() []byte {
	file_events_authentication_proto_rawDescOnce.Do(func() {
		file_events_authentication_proto_rawDescData = protoimpl.X.CompressGZIP(file_events_authentication_proto_rawDescData)
	})
	return file_events_authentication_proto_rawDescData
}

var file_events_authentication_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_events_authentication_proto_goTypes = []interface{}{
	(*LoginSucceeded)(nil),        // 0: events.LoginSucceeded
	(*LoginFailed)(nil),           // 1: events.LoginFailed
	(*LoginAttemptsExceeded)(nil), // 2: events.LoginAttemptsExceeded
	(*Impersonated)(nil),          // 3: events.Impersonated
	(*ActionUserForbidden)(nil),   // 4: events.ActionUserForbidden
	(*ActionTokenForbidden)(nil),  // 5: events.ActionTokenForbidden
}
var file_events_authentication_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_events_authentication_proto_init() }
func file_events_authentication_proto_init() {
	if File_events_authentication_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_events_authentication_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LoginSucceeded); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_events_authentication_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LoginFailed); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_events_authentication_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LoginAttemptsExceeded); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_events_authentication_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Impersonated); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_events_authentication_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ActionUserForbidden); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_events_authentication_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ActionTokenForbidden); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_events_authentication_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_events_authentication_proto_goTypes,
		DependencyIndexes: file_events_authentication_proto_depIdxs,
		MessageInfos:      file_events_authentication_proto_msgTypes,
	}.Build()
	File_events_authentication_proto = out.File
	file_events_authentication_proto_rawDesc = nil
	file_events_authentication_proto_goTypes = nil
	file_events_authentication_proto_depIdxs = nil
}
