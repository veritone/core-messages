# core-messages

Data models for all events that are used internally at Veritone.

## Prequisites:

Due to the nature of Go project, this project must be cloned following the `$GOPATH`. Two ways to to this:

```
cd $GOPATH/src/github.com/veritone
git clone git@github.com:veritone/core-messages.git
```

Or using go get

```
go get github.com:veritone/core-messages
```

Install depedencies for typescript: `npm install`

## Create Builder Image:

This project provides a container image with dependencies for generating golang and typescript code from protobuf files. Simply run

```
make builder
```

## Generate Code

* Create generated folders: `make setup`
* Generate code: `make`
