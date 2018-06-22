# core-messages

Data models for all events that are used internally at Veritone.

## Prequisites

Due to the nature of Go project, this project must be cloned following the `$GOPATH`. Two ways to to this:

```shell
cd $GOPATH/src/github.com/veritone
git clone git@github.com:veritone/core-messages.git
```

Or using go get

```shell
go get github.com:veritone/core-messages
```

Install depedencies for typescript: `npm install`

## Create Builder Image

This project provides a container image with dependencies for generating golang and typescript code from protobuf files. Simply run

```shell
make builder
```

## Generate Code

Generate code: `make all`

## Style Guides and Documentations

The purpose of this repo is to provide:

- Rich documentations for all existing events that run through Veritone Eventing System.
- A central location for integration between services.

With this in mind, please see: https://developers.google.com/protocol-buffers/docs/proto3 to learn about Google Protocol Buffer in general and look into `./events/example_events.proto` to get started with a simple payload.  
We also enforce strict standards using: https://developers.google.com/protocol-buffers/docs/style
