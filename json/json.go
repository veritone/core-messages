package json

import (
	"bytes"

	"github.com/golang/protobuf/jsonpb"
	"github.com/golang/protobuf/proto"
)

// JsonMarshaler provides default json marshaler that is compatible with eventing data model
var JsonMarshaler = &Marshaler{
	Marshaler: &jsonpb.Marshaler{},
}

type Marshaler struct {
	*jsonpb.Marshaler
}

func (m *Marshaler) MarshalJSON(pb proto.Message) ([]byte, error) {
	b, e := m.MarshalToString(pb)
	return []byte(b), e
}

// JsonUnmshaler provides default json marshaler that is compatible with eventing data model
var JsonUnmshaler = &Unmarshaler{
	Unmarshaler: &jsonpb.Unmarshaler{},
}

type Unmarshaler struct {
	*jsonpb.Unmarshaler
}

func (m *Unmarshaler) UnmarshalJSON(data []byte, pb proto.Message) error {
	return m.Unmarshal(bytes.NewReader(data), pb)
}
