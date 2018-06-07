import * as coreEvents from "../../generated/ts/events/core_pb";
import * as exampleEvents from "../../generated/ts/events/example_event_pb";

let core = new coreEvents.Core();
core.setId("A Fake UUID");
core.setEvent("FakeEventName");
core.setTopic("FakeTopicName");
core.setTimestamp(new Date().getUTCSeconds());

let example = new exampleEvents.ExampleEvent();
example.setCore(core);
example.setFirstName("FakeFirstName");
example.setLastName("FakeLastName");
console.log(JSON.stringify(example.toObject(false), null, 2));

const input: string = `
{
    "core": {
      "id": "A Fake UUID",
      "event": "FakeEventName",
      "topic": "FakeTopicName",
      "timestamp": "195435435"
    },
    "firstName": "FakeFirstName",
    "lastName": "FakeLastName"
  }`;

const data = JSON.parse(input) as exampleEvents.ExampleEvent.AsObject;
console.log("event:", data.core.event);
console.log("timestamp:", data.core.timestamp);
console.log("firstName:", data.firstName);
