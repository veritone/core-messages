current_dir = $(shell pwd)

all: clean setup generate-golang generate-typescript

clean:
	rm -rf generated

setup:
	mkdir -p generated/go
	mkdir -p generated/ts

builder:
	docker build -t veritone/protoc .

generate-golang:
	docker run --rm -v $(current_dir):$(current_dir) -w $(current_dir) veritone/protoc \
	protoc \
	--go_out=generated/go \
	-I=. \
	events/*.proto

generate-typescript:
	docker run --rm -v $(current_dir):$(current_dir) -w $(current_dir) veritone/protoc \
	protoc \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	--js_out="import_style=commonjs,binary:generated/ts" \
	--ts_out="generated/ts" \
	-I=. \
	events/*.proto

go-example:
	go run examples/golang/main.go |  python -m json.tool

ts-example:
	./node_modules/ts-node/dist/bin.js examples/typescript/index.ts | python -m json.tool






