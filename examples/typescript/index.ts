import * as coreEvents from '../../generated/ts/events/core_pb';
import * as exampleEvents from '../../generated/ts/events/example_event_pb';

let core = new coreEvents.Core();
core.setId('A Fake UUID');
core.setEventname('FakeEventName');
core.setTopicname('FakeTopicName');
core.setTimestamp(new Date().toUTCString());

let example = new exampleEvents.ExampleEvent();
example.setCore(core);
example.setFirstname('FakeFirstName');
example.setLastname('FakeLastName');
//console.log(JSON.stringify(core.toObject(false)));
console.log(JSON.stringify(example.toObject(false)));
