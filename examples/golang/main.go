package main

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/veritone/core-messages/generated/go/events"
)

func main() {
	core := events.Core{
		Id:        "A Fake UUID",
		Event:     "FakeEventName",
		Topic:     "FakeTopicName",
		Timestamp: time.Now().Unix(),
	}
	e := events.ExampleEvent{
		Core:      &core,
		FirstName: "FakeFirstName",
		LastName:  "FakeLastName",
	}

	raw, err := json.Marshal(e)
	if err != nil {
		log.Panic(err)
	}
	fmt.Printf("%s", raw)

}
