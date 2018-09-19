# Protocol Documentation
<a name="top"/>

## Table of Contents

- [events/asset.proto](#events/asset.proto)
    - [AssetUploaded](#events.AssetUploaded)
  
  
  
  

- [events/authentication.proto](#events/authentication.proto)
    - [ActionTokenForbidden](#events.ActionTokenForbidden)
    - [ActionUserForbidden](#events.ActionUserForbidden)
    - [Impersonated](#events.Impersonated)
    - [LoginAttemptsExceeded](#events.LoginAttemptsExceeded)
    - [LoginFailed](#events.LoginFailed)
    - [LoginSucceeded](#events.LoginSucceeded)
  
  
  
  

- [events/core.proto](#events/core.proto)
    - [Core](#events.Core)
    - [Trace](#events.Trace)
    - [Trace.TraceContextEntry](#events.Trace.TraceContextEntry)
    - [Trace.TraceTagsEntry](#events.Trace.TraceTagsEntry)
    - [VtEvent](#events.VtEvent)
    - [VtEvent.BaggageEntry](#events.VtEvent.BaggageEntry)
  
  
  
  

- [events/engine.proto](#events/engine.proto)
    - [EngineBuildApproved](#events.EngineBuildApproved)
    - [EngineBuildCreate](#events.EngineBuildCreate)
    - [EngineBuildDisapprove](#events.EngineBuildDisapprove)
    - [EngineBuildInvalidate](#events.EngineBuildInvalidate)
    - [EngineBuildManifestProcessed](#events.EngineBuildManifestProcessed)
    - [EngineBuildTestReportDone](#events.EngineBuildTestReportDone)
    - [EngineBuildUpload](#events.EngineBuildUpload)
    - [EngineBuildUploadCompleted](#events.EngineBuildUploadCompleted)
    - [EngineBuildVulnerabilityChecked](#events.EngineBuildVulnerabilityChecked)
    - [engineBuildDeployFail](#events.engineBuildDeployFail)
    - [engineBuildDeploySuccess](#events.engineBuildDeploySuccess)
  
  
  
  

- [events/example_event.proto](#events/example_event.proto)
    - [ExampleEvent](#events.ExampleEvent)
    - [ExampleFour](#events.ExampleFour)
    - [ExampleOne](#events.ExampleOne)
    - [ExampleThree](#events.ExampleThree)
    - [ExampleTwo](#events.ExampleTwo)
  
  
  
  

- [events/job.proto](#events/job.proto)
    - [JobCompleted](#events.JobCompleted)
    - [JobCreated](#events.JobCreated)
    - [JobFailed](#events.JobFailed)
  
  
  
  

- [events/mention_notification.proto](#events/mention_notification.proto)
    - [MentionDeleted](#events.MentionDeleted)
    - [MentionEmailGenerated](#events.MentionEmailGenerated)
    - [MentionEmailGenerated.Mention](#events.MentionEmailGenerated.Mention)
    - [MentionEmailGenerated.PlaceHolders](#events.MentionEmailGenerated.PlaceHolders)
    - [MentionInserted](#events.MentionInserted)
    - [MentionModifiedData](#events.MentionModifiedData)
    - [MentionUpdated](#events.MentionUpdated)
  
  
  
  

- [events/notification.proto](#events/notification.proto)
    - [BasicEmail](#events.BasicEmail)
    - [SMSNotification](#events.SMSNotification)
  
  
  
  

- [events/recording.proto](#events/recording.proto)
    - [RecordingAssetCreated](#events.RecordingAssetCreated)
    - [RecordingAudioFragmentCaptured](#events.RecordingAudioFragmentCaptured)
    - [RecordingCognitionCompleted](#events.RecordingCognitionCompleted)
    - [RecordingCognitionCompleted.Payload](#events.RecordingCognitionCompleted.Payload)
    - [RecordingCompleted](#events.RecordingCompleted)
    - [RecordingCreated](#events.RecordingCreated)
    - [RecordingDeleted](#events.RecordingDeleted)
    - [RecordingImageExtracted](#events.RecordingImageExtracted)
    - [RecordingInserted](#events.RecordingInserted)
    - [RecordingVideoFragmentCaptured](#events.RecordingVideoFragmentCaptured)
  
  
  
  

- [events/task.proto](#events/task.proto)
    - [TaskCompleted](#events.TaskCompleted)
    - [TaskQueued](#events.TaskQueued)
    - [TaskUpdated](#events.TaskUpdated)
  
  
  
  

- [events/trigger.proto](#events/trigger.proto)
    - [TriggerCacheRefresh](#events.TriggerCacheRefresh)
  
  
  
  

- [Scalar Value Types](#scalar-value-types)



<a name="events/asset.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/asset.proto



<a name="events.AssetUploaded"/>

### AssetUploaded



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assetId | [string](#string) |  |  |
| recordingId | [string](#string) |  |  |





 

 

 

 



<a name="events/authentication.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/authentication.proto



<a name="events.ActionTokenForbidden"/>

### ActionTokenForbidden



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |






<a name="events.ActionUserForbidden"/>

### ActionUserForbidden



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  |  |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |
| user_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |






<a name="events.Impersonated"/>

### Impersonated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  |  |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |
| user_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |
| impersontated_user_id | [string](#string) |  |  |






<a name="events.LoginAttemptsExceeded"/>

### LoginAttemptsExceeded



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  |  |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |






<a name="events.LoginFailed"/>

### LoginFailed



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  |  |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |






<a name="events.LoginSucceeded"/>

### LoginSucceeded



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  |  |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |
| user_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |





 

 

 

 



<a name="events/core.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/core.proto



<a name="events.Core"/>

### Core



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Read-only and auto-generated. ID of the message, ID is a uuid v4 auto-generated by messaging library. It will be propagate through the system. Similar to correlationId |
| name | [string](#string) |  | The name of the event is |
| timestamp | [string](#string) |  | Read-only and auto-generated. Messaging library will compute the timestamp in RFC1123Z when a message is produced. |
| type | [string](#string) |  | the type of the event |
| service_name | [string](#string) |  | Messaging library will default to value from `hostname` if not set */ |
| application_id | [string](#string) |  | Application Id which owns the event. For internal components, it should be set to &#34;system&#34; |
| event_id | [string](#string) |  | The event id that matches with event_id in Event Registry Table |
| organization_id | [string](#string) |  | The organization where event is generated |
| user_id | [string](#string) |  | The user who owns the event |
| token_id | [string](#string) |  | The API token used to generate the event |






<a name="events.Trace"/>

### Trace



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| trace_context | [Trace.TraceContextEntry](#events.Trace.TraceContextEntry) | repeated | Open Tracing trace context. |
| trace_tags | [Trace.TraceTagsEntry](#events.Trace.TraceTagsEntry) | repeated | Open Tracing trace context. |
| service_name | [string](#string) |  |  |






<a name="events.Trace.TraceContextEntry"/>

### Trace.TraceContextEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="events.Trace.TraceTagsEntry"/>

### Trace.TraceTagsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="events.VtEvent"/>

### VtEvent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| core | [Core](#events.Core) |  |  |
| trace | [Trace](#events.Trace) |  |  |
| baggage | [VtEvent.BaggageEntry](#events.VtEvent.BaggageEntry) | repeated |  |
| data | [google.protobuf.Any](#google.protobuf.Any) |  |  |






<a name="events.VtEvent.BaggageEntry"/>

### VtEvent.BaggageEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |





 

 

 

 



<a name="events/engine.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/engine.proto



<a name="events.EngineBuildApproved"/>

### EngineBuildApproved



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildCreate"/>

### EngineBuildCreate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildDisapprove"/>

### EngineBuildDisapprove



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildInvalidate"/>

### EngineBuildInvalidate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildManifestProcessed"/>

### EngineBuildManifestProcessed



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| job_id | [string](#string) |  |  |
| success | [bool](#bool) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |






<a name="events.EngineBuildTestReportDone"/>

### EngineBuildTestReportDone



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| job_id | [string](#string) |  |  |
| success | [bool](#bool) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |






<a name="events.EngineBuildUpload"/>

### EngineBuildUpload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildUploadCompleted"/>

### EngineBuildUploadCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| job_id | [string](#string) |  |  |
| asset_id | [string](#string) |  |  |
| success | [bool](#bool) |  |  |






<a name="events.EngineBuildVulnerabilityChecked"/>

### EngineBuildVulnerabilityChecked



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| job_id | [string](#string) |  |  |
| asset_id | [string](#string) |  |  |
| success | [bool](#bool) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |






<a name="events.engineBuildDeployFail"/>

### engineBuildDeployFail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |






<a name="events.engineBuildDeploySuccess"/>

### engineBuildDeploySuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |





 

 

 

 



<a name="events/example_event.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/example_event.proto



<a name="events.ExampleEvent"/>

### ExampleEvent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| core | [Core](#events.Core) |  |  |
| first_name | [string](#string) |  |  |
| last_name | [string](#string) |  |  |






<a name="events.ExampleFour"/>

### ExampleFour



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [string](#string) |  |  |
| number | [int64](#int64) |  |  |
| boolean | [bool](#bool) |  |  |






<a name="events.ExampleOne"/>

### ExampleOne



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [string](#string) |  |  |






<a name="events.ExampleThree"/>

### ExampleThree



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| boolean | [bool](#bool) |  |  |






<a name="events.ExampleTwo"/>

### ExampleTwo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| number | [int64](#int64) |  |  |





 

 

 

 



<a name="events/job.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/job.proto



<a name="events.JobCompleted"/>

### JobCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |
| job_status | [string](#string) |  |  |






<a name="events.JobCreated"/>

### JobCreated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |






<a name="events.JobFailed"/>

### JobFailed



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |
| job_status | [string](#string) |  |  |





 

 

 

 



<a name="events/mention_notification.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/mention_notification.proto



<a name="events.MentionDeleted"/>

### MentionDeleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| event | [string](#string) |  | event name |
| type | [string](#string) |  | event type |
| payload | [MentionModifiedData](#events.MentionModifiedData) |  |  |






<a name="events.MentionEmailGenerated"/>

### MentionEmailGenerated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| event | [string](#string) |  | must match &#39;mention_email_generated&#39; for backward compatibility |
| type | [string](#string) |  | must be &#39;notification&#39; for backward compatibility |
| service_name | [string](#string) |  | the service name which generates this payload (hostname) |
| to_email | [string](#string) |  | email of the receipient |
| from_email | [string](#string) |  | email of the sender |
| from_name | [string](#string) |  | name of the sender |
| template | [string](#string) |  | the email tempalte via mandrill, mention-notification or mention-notification-bulk |
| place_holders | [MentionEmailGenerated.PlaceHolders](#events.MentionEmailGenerated.PlaceHolders) |  | the placeholder object |
| merge_language | [string](#string) |  | merge language, should be either &#39;handlers&#39; or &#39;mandril&#39; |






<a name="events.MentionEmailGenerated.Mention"/>

### MentionEmailGenerated.Mention



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tracking_unit_name | [string](#string) |  | the watchlist name |
| program_name | [string](#string) |  | program name |
| program_image | [string](#string) |  | program image url |
| mention_date | [int64](#int64) |  | mention_date unix seconds |
| snippets | [string](#string) |  | mention snippets, 100 characters or less |
| invite_link | [string](#string) |  | invite url |
| via | [string](#string) |  | via variable (platform) |
| logouri | [string](#string) |  | logo url |
| creator_email | [string](#string) |  | creator email |
| unsubscribe_hash | [string](#string) |  | unsubscribe hash |
| unsubscribe_link | [string](#string) |  | unsubscribe link |






<a name="events.MentionEmailGenerated.PlaceHolders"/>

### MentionEmailGenerated.PlaceHolders



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tracking_unit_name | [string](#string) |  | tracking unit name or watchlist name |
| via | [string](#string) |  | via |
| logouri | [string](#string) |  | logo url |
| mentions | [MentionEmailGenerated.Mention](#events.MentionEmailGenerated.Mention) | repeated | list of mentions |






<a name="events.MentionInserted"/>

### MentionInserted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| event | [string](#string) |  | event name |
| type | [string](#string) |  | event type |
| payload | [MentionModifiedData](#events.MentionModifiedData) |  |  |






<a name="events.MentionModifiedData"/>

### MentionModifiedData
Shared structure for MentionUpdate, MentionDeleted, and MentionInserted


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mention_id | [int64](#int64) |  | the mention id |
| organization_id | [int64](#int64) |  | the org id |
| mention_date | [string](#string) |  | mention date in UTC with RFC1123 format |
| transaction_timestamp | [string](#string) |  | transaction timestamp in RFC1123 format, event producer should set this to current time |






<a name="events.MentionUpdated"/>

### MentionUpdated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| event | [string](#string) |  | event name |
| type | [string](#string) |  | event type |
| payload | [MentionModifiedData](#events.MentionModifiedData) |  |  |





 

 

 

 



<a name="events/notification.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/notification.proto



<a name="events.BasicEmail"/>

### BasicEmail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  | email address of sender |
| to_address | [string](#string) |  | email address of recipient |
| subject | [string](#string) |  | email subject |
| body | [string](#string) |  | email body, should be just pure text |
| reply_to | [string](#string) |  | reply_to field of the email. |
| body_html | [string](#string) |  | email body in HTML syntax, this takes precedence over `body` field |






<a name="events.SMSNotification"/>

### SMSNotification



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_number | [string](#string) |  | SMS number of the recipient (number should follow Twilo format) |
| to_number | [string](#string) |  | SMS number of the sender (number should follow Twilo format) |
| message | [string](#string) |  | message payload |





 

 

 

 



<a name="events/recording.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/recording.proto



<a name="events.RecordingAssetCreated"/>

### RecordingAssetCreated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |
| recording_id | [string](#string) |  |  |
| asset_type | [string](#string) |  |  |
| uri | [string](#string) |  |  |






<a name="events.RecordingAudioFragmentCaptured"/>

### RecordingAudioFragmentCaptured



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |
| sample_index | [int32](#int32) |  |  |
| relative_start_time_ms | [int32](#int32) |  |  |
| relative_end_time_ms | [int32](#int32) |  |  |
| uri | [string](#string) |  |  |






<a name="events.RecordingCognitionCompleted"/>

### RecordingCognitionCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recording_id | [string](#string) |  |  |
| payload | [RecordingCognitionCompleted.Payload](#events.RecordingCognitionCompleted.Payload) |  |  |






<a name="events.RecordingCognitionCompleted.Payload"/>

### RecordingCognitionCompleted.Payload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |
| application_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |
| library_id | [string](#string) |  |  |
| index_override | [string](#string) |  |  |
| token | [string](#string) |  |  |
| asset_id | [string](#string) |  |  |
| skip_mention_generation | [bool](#bool) |  |  |






<a name="events.RecordingCompleted"/>

### RecordingCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |
| recording_id | [string](#string) |  |  |






<a name="events.RecordingCreated"/>

### RecordingCreated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recording_id | [string](#string) |  |  |






<a name="events.RecordingDeleted"/>

### RecordingDeleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recording_id | [string](#string) |  |  |






<a name="events.RecordingImageExtracted"/>

### RecordingImageExtracted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |
| sample_index | [int32](#int32) |  |  |
| sample_rate_per_sec | [double](#double) |  |  |
| uri | [string](#string) |  |  |






<a name="events.RecordingInserted"/>

### RecordingInserted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recording_id | [string](#string) |  |  |






<a name="events.RecordingVideoFragmentCaptured"/>

### RecordingVideoFragmentCaptured



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |
| sample_index | [int32](#int32) |  |  |
| relative_start_time_ms | [int32](#int32) |  |  |
| relative_end_time_ms | [int32](#int32) |  |  |
| uri | [string](#string) |  |  |





 

 

 

 



<a name="events/task.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/task.proto



<a name="events.TaskCompleted"/>

### TaskCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |
| task_status | [string](#string) |  |  |






<a name="events.TaskQueued"/>

### TaskQueued



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |






<a name="events.TaskUpdated"/>

### TaskUpdated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |
| task_status | [string](#string) |  |  |





 

 

 

 



<a name="events/trigger.proto"/>
<p align="right"><a href="#top">Top</a></p>

## events/trigger.proto



<a name="events.TriggerCacheRefresh"/>

### TriggerCacheRefresh






 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |

