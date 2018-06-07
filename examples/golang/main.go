package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/veritone/core-messages/generated/go/events"
	vJson "github.com/veritone/core-messages/json"
)

func main() {
	core := events.Core{
		Id:        "A Fake UUID",
		Event:     "FakeEventName",
		Topic:     "FakeTopicName",
		Timestamp: time.Now().Unix(),
	}
	e := &events.ExampleEvent{
		Core:      &core,
		FirstName: "FakeFirstName",
		LastName:  "FakeLastName",
	}

	raw, err := vJson.JsonMarshaler.MarshalJSON(e)
	if err != nil {
		log.Panic(err)
	}

	var buf bytes.Buffer
	err = json.Indent(&buf, raw, "", "    ")
	if err != nil {
		log.Panic(err)
	}
	fmt.Printf("%s", buf.Bytes())

	input := `{
		"core": {
			"event": "FakeEventName",
			"id": "A Fake UUID",
			"timestamp": "32132145",
			"topic": "FakeTopicName"
		},
		"firstName": "FakeFirstName",
		"lastName": "FakeLastName"
	}`

	e2 := &events.ExampleEvent{}
	err = vJson.JsonUnmshaler.UnmarshalJSON([]byte(input), e2)
	if err != nil {
		log.Panic(err)
	}
	fmt.Printf("\nevent:%s\n", e2.Core.GetEvent())
	fmt.Printf("timestamp:%d\n", e2.Core.GetTimestamp())
	fmt.Printf("firstName:%s\n", e2.GetFirstName())
}
