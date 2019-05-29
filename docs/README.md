# Protocol Documentation
<a name="top"></a>

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
  
  
  
  

- [events/mention.proto](#events/mention.proto)
    - [MentionGenerated](#events.MentionGenerated)
  
  
  
  

- [events/mention_generation.proto](#events/mention_generation.proto)
    - [MentionGenerateMediaCompleted](#events.MentionGenerateMediaCompleted)
    - [MentionGenerateWatchlistCompleted](#events.MentionGenerateWatchlistCompleted)
  
  
  
  

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
    - [RecordingCognitionCompleted](#events.RecordingCognitionCompleted)
    - [RecordingCognitionCompleted.Payload](#events.RecordingCognitionCompleted.Payload)
    - [RecordingCreated](#events.RecordingCreated)
    - [RecordingDeleted](#events.RecordingDeleted)
    - [RecordingInsertFailed](#events.RecordingInsertFailed)
    - [RecordingInserted](#events.RecordingInserted)
  
  
  
  

- [events/shared_collection.proto](#events/shared_collection.proto)
    - [NewCollectionShare](#events.NewCollectionShare)
    - [UpdateSharedCollection](#events.UpdateSharedCollection)
  
    - [UpdateSharedCollection.UpdateType](#events.UpdateSharedCollection.UpdateType)
  
  
  

- [events/task.proto](#events/task.proto)
    - [TaskCompleted](#events.TaskCompleted)
    - [TaskQueued](#events.TaskQueued)
    - [TaskUpdated](#events.TaskUpdated)
  
  
  
  

- [events/trigger.proto](#events/trigger.proto)
    - [TriggerCacheRefresh](#events.TriggerCacheRefresh)
  
  
  
  

- [Scalar Value Types](#scalar-value-types)



<a name="events/asset.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/asset.proto



<a name="events.AssetUploaded"></a>

### AssetUploaded



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_id | [string](#string) |  |  |
| recording_id | [string](#string) |  |  |





 

 

 

 



<a name="events/authentication.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/authentication.proto



<a name="events.ActionTokenForbidden"></a>

### ActionTokenForbidden



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |






<a name="events.ActionUserForbidden"></a>

### ActionUserForbidden



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  |  |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |
| user_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |






<a name="events.Impersonated"></a>

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






<a name="events.LoginAttemptsExceeded"></a>

### LoginAttemptsExceeded



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  |  |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |






<a name="events.LoginFailed"></a>

### LoginFailed



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  |  |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |






<a name="events.LoginSucceeded"></a>

### LoginSucceeded



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  |  |
| user_agent | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| request_url | [string](#string) |  |  |
| user_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |





 

 

 

 



<a name="events/core.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/core.proto



<a name="events.Core"></a>

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






<a name="events.Trace"></a>

### Trace



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| trace_context | [Trace.TraceContextEntry](#events.Trace.TraceContextEntry) | repeated | Open Tracing trace context. |
| trace_tags | [Trace.TraceTagsEntry](#events.Trace.TraceTagsEntry) | repeated | Open Tracing trace context. |
| service_name | [string](#string) |  |  |






<a name="events.Trace.TraceContextEntry"></a>

### Trace.TraceContextEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="events.Trace.TraceTagsEntry"></a>

### Trace.TraceTagsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="events.VtEvent"></a>

### VtEvent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| core | [Core](#events.Core) |  |  |
| trace | [Trace](#events.Trace) |  |  |
| baggage | [VtEvent.BaggageEntry](#events.VtEvent.BaggageEntry) | repeated |  |
| data | [google.protobuf.Any](#google.protobuf.Any) |  |  |






<a name="events.VtEvent.BaggageEntry"></a>

### VtEvent.BaggageEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |





 

 

 

 



<a name="events/engine.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/engine.proto



<a name="events.EngineBuildApproved"></a>

### EngineBuildApproved



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildCreate"></a>

### EngineBuildCreate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildDisapprove"></a>

### EngineBuildDisapprove



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| organization_id | [int64](#int64) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildInvalidate"></a>

### EngineBuildInvalidate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildManifestProcessed"></a>

### EngineBuildManifestProcessed



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| job_id | [string](#string) |  |  |
| success | [bool](#bool) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |






<a name="events.EngineBuildTestReportDone"></a>

### EngineBuildTestReportDone



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| job_id | [string](#string) |  |  |
| success | [bool](#bool) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |






<a name="events.EngineBuildUpload"></a>

### EngineBuildUpload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |
| status_code | [int32](#int32) |  |  |
| action | [string](#string) |  |  |






<a name="events.EngineBuildUploadCompleted"></a>

### EngineBuildUploadCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| job_id | [string](#string) |  |  |
| asset_id | [string](#string) |  |  |
| success | [bool](#bool) |  |  |






<a name="events.EngineBuildVulnerabilityChecked"></a>

### EngineBuildVulnerabilityChecked



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| job_id | [string](#string) |  |  |
| asset_id | [string](#string) |  |  |
| success | [bool](#bool) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |






<a name="events.engineBuildDeployFail"></a>

### engineBuildDeployFail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |






<a name="events.engineBuildDeploySuccess"></a>

### engineBuildDeploySuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| engine_id | [string](#string) |  |  |
| build_id | [string](#string) |  |  |





 

 

 

 



<a name="events/example_event.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/example_event.proto



<a name="events.ExampleEvent"></a>

### ExampleEvent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| core | [Core](#events.Core) |  |  |
| first_name | [string](#string) |  |  |
| last_name | [string](#string) |  |  |






<a name="events.ExampleFour"></a>

### ExampleFour



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [string](#string) |  |  |
| number | [int64](#int64) |  |  |
| boolean | [bool](#bool) |  |  |






<a name="events.ExampleOne"></a>

### ExampleOne



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [string](#string) |  |  |






<a name="events.ExampleThree"></a>

### ExampleThree



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| boolean | [bool](#bool) |  |  |






<a name="events.ExampleTwo"></a>

### ExampleTwo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| number | [int64](#int64) |  |  |





 

 

 

 



<a name="events/job.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/job.proto



<a name="events.JobCompleted"></a>

### JobCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |
| job_status | [string](#string) |  |  |






<a name="events.JobCreated"></a>

### JobCreated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |






<a name="events.JobFailed"></a>

### JobFailed



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |
| job_status | [string](#string) |  |  |





 

 

 

 



<a name="events/mention.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/mention.proto



<a name="events.MentionGenerated"></a>

### MentionGenerated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mention_id | [int64](#int64) |  | the mention id |
| watchlist_id | [int64](#int64) |  | the watchlist/tracking unit id |
| schedule_id | [int64](#int64) |  | the schedule/program id |
| tdo_id | [int64](#int64) |  | the tdo/media/recording id |





 

 

 

 



<a name="events/mention_generation.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/mention_generation.proto



<a name="events.MentionGenerateMediaCompleted"></a>

### MentionGenerateMediaCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tdo_id | [int64](#int64) |  | tdo/media/recording id |
| elapsed_s | [uint32](#uint32) |  | time it took to generate mentions in seconds |
| watchlist_count | [uint32](#uint32) |  | total watchlists executed |
| mention_count | [uint32](#uint32) |  | total mentions created |
| details | [string](#string) |  | arbitrary data |






<a name="events.MentionGenerateWatchlistCompleted"></a>

### MentionGenerateWatchlistCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| watchlist_id | [int64](#int64) |  | the watchlist/tracking unit id |
| elapsed_s | [uint32](#uint32) |  | time it took to generate mentions in seconds |
| mention_count | [uint32](#uint32) |  | total mentions created |
| mention_limit_exceeded | [bool](#bool) |  | whether mention generation was completed due to exceeding the mention limit for the org |





 

 

 

 



<a name="events/mention_notification.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/mention_notification.proto



<a name="events.MentionDeleted"></a>

### MentionDeleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| event | [string](#string) |  | event name |
| type | [string](#string) |  | event type |
| payload | [MentionModifiedData](#events.MentionModifiedData) |  |  |






<a name="events.MentionEmailGenerated"></a>

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






<a name="events.MentionEmailGenerated.Mention"></a>

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






<a name="events.MentionEmailGenerated.PlaceHolders"></a>

### MentionEmailGenerated.PlaceHolders



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tracking_unit_name | [string](#string) |  | tracking unit name or watchlist name |
| via | [string](#string) |  | via |
| logouri | [string](#string) |  | logo url |
| mentions | [MentionEmailGenerated.Mention](#events.MentionEmailGenerated.Mention) | repeated | list of mentions |






<a name="events.MentionInserted"></a>

### MentionInserted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| event | [string](#string) |  | event name |
| type | [string](#string) |  | event type |
| payload | [MentionModifiedData](#events.MentionModifiedData) |  |  |






<a name="events.MentionModifiedData"></a>

### MentionModifiedData
Shared structure for MentionUpdate, MentionDeleted, and MentionInserted


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mention_id | [int64](#int64) |  | the mention id |
| organization_id | [int64](#int64) |  | the org id |
| mention_date | [string](#string) |  | mention date in UTC with RFC1123 format |
| transaction_timestamp | [string](#string) |  | transaction timestamp in RFC1123 format, event producer should set this to current time |






<a name="events.MentionUpdated"></a>

### MentionUpdated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| event | [string](#string) |  | event name |
| type | [string](#string) |  | event type |
| payload | [MentionModifiedData](#events.MentionModifiedData) |  |  |





 

 

 

 



<a name="events/notification.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/notification.proto



<a name="events.BasicEmail"></a>

### BasicEmail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  | email address of sender |
| to_address | [string](#string) |  | email address of recipient |
| subject | [string](#string) |  | email subject |
| body | [string](#string) |  | email body, should be just pure text |
| reply_to | [string](#string) |  | reply_to field of the email. |
| body_html | [string](#string) |  | email body in HTML syntax, this takes precedence over `body` field |






<a name="events.SMSNotification"></a>

### SMSNotification



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_number | [string](#string) |  | SMS number of the recipient (number should follow Twilo format) |
| to_number | [string](#string) |  | SMS number of the sender (number should follow Twilo format) |
| message | [string](#string) |  | message payload |





 

 

 

 



<a name="events/recording.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/recording.proto



<a name="events.RecordingCognitionCompleted"></a>

### RecordingCognitionCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| payload | [RecordingCognitionCompleted.Payload](#events.RecordingCognitionCompleted.Payload) |  |  |






<a name="events.RecordingCognitionCompleted.Payload"></a>

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
| recording_id | [string](#string) |  |  |






<a name="events.RecordingCreated"></a>

### RecordingCreated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recording_id | [string](#string) |  |  |






<a name="events.RecordingDeleted"></a>

### RecordingDeleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recording_id | [string](#string) |  |  |






<a name="events.RecordingInsertFailed"></a>

### RecordingInsertFailed



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recording_id | [string](#string) |  |  |
| error | [string](#string) |  |  |
| fauilureType | [string](#string) |  |  |






<a name="events.RecordingInserted"></a>

### RecordingInserted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recording_id | [string](#string) |  |  |





 

 

 

 



<a name="events/shared_collection.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/shared_collection.proto



<a name="events.NewCollectionShare"></a>

### NewCollectionShare



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_id | [string](#string) |  | Collection Id |
| share_id | [string](#string) |  | Id of the Share created for the Collection |
| history_id | [string](#string) |  | Id of the Share collection history |






<a name="events.UpdateSharedCollection"></a>

### UpdateSharedCollection



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_id | [string](#string) |  | Collection Id |
| share_id | [string](#string) |  | Id of the Share created for the Collection |
| mention_ids | [string](#string) | repeated | Ids of the mentions added or removed from Collection |
| update_type | [UpdateSharedCollection.UpdateType](#events.UpdateSharedCollection.UpdateType) |  | The type of update to collection: Add/Remove |
| history_id | [string](#string) |  | Id of the Share collection history |





 


<a name="events.UpdateSharedCollection.UpdateType"></a>

### UpdateSharedCollection.UpdateType


| Name | Number | Description |
| ---- | ------ | ----------- |
| AddMention | 0 | Add mention to collection |
| RemoveMention | 1 | Remove mention from collection |
| UpdateMention | 2 | Update mention details |


 

 

 



<a name="events/task.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/task.proto



<a name="events.TaskCompleted"></a>

### TaskCompleted



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |
| task_status | [string](#string) |  |  |






<a name="events.TaskQueued"></a>

### TaskQueued



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |






<a name="events.TaskUpdated"></a>

### TaskUpdated



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |
| timestamp_ms | [string](#string) |  |  |
| task_status | [string](#string) |  |  |





 

 

 

 



<a name="events/trigger.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## events/trigger.proto



<a name="events.TriggerCacheRefresh"></a>

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

