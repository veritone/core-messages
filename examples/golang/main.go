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
		Name:      "FakeEventName",
		Timestamp: time.Now().Format(time.RFC1123),
	}
	e := &events.ExampleEvent{
		Core:      &core,
		FirstName: "FakeFirstName",
		LastName:  "FakeLastName",
	}
	fmt.Println("======================== DECODING =====================")
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
			"name": "FakeEventName",
			"id": "A Fake UUID",
			"timestamp": "Mon, 18 Jun 2018 01:33:40 PDT"
		},
		"firstName": "FakeFirstName",
		"lastName": "FakeLastName"
	}`

	e2 := &events.ExampleEvent{}
	err = vJson.JsonUnmshaler.UnmarshalJSON([]byte(input), e2)
	if err != nil {
		log.Panic(err)
	}
	fmt.Println("\n======================== ENCODING =====================")
	fmt.Printf("name: %s\n", e2.Core.GetName())
	fmt.Printf("timestamp: %s\n", e2.Core.GetTimestamp())
	fmt.Printf("firstName: %s\n", e2.GetFirstName())
}
