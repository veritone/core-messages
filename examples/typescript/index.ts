import * as coreEvents from "../../generated/ts/events/core_pb";
import * as exampleEvents from "../../generated/ts/events/example_event_pb";

let core = new coreEvents.Core();
core.setId("A Fake UUID");
core.setName("FakeEventName");
core.setTimestamp(new Date().toUTCString());

let example = new exampleEvents.ExampleEvent();
example.setCore(core);
example.setFirstName("FakeFirstName");
example.setLastName("FakeLastName");

console.log("======================== DECODING =====================");
console.log(JSON.stringify(example.toObject(false), null, 2));

const input: string = `
{
    "core": {
      "id": "A Fake UUID",
      "name": "FakeEventName",
      "timestamp": "Mon, 18 Jun 2018 01:33:40 PDT"
    },
    "firstName": "FakeFirstName",
    "lastName": "FakeLastName"
  }`;

const data = JSON.parse(input) as exampleEvents.ExampleEvent.AsObject;
console.log("======================== ENCODING =====================");
console.log("name:", data.core.name);
console.log("timestamp:", data.core.timestamp);
console.log("firstName:", data.firstName);
