current_dir = $(shell pwd)

init: builder
	npm install

all: clean setup generate-golang generate-typescript generate-pbjs docs-html docs-md

clean:
	rm -rf generated

setup:
	mkdir -p generated/go
	mkdir -p generated/ts
	mkdir -p generated/pbjs

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

generate-pbjs:
	./node_modules/protobufjs/bin/pbjs -t static-module -w commonjs -o generated/pbjs/compiled.js events/*
	./node_modules/protobufjs/bin/pbts -o generated/pbjs/compiled.d.ts generated/pbjs/compiled.js

go-example:
	go run examples/golang/main.go 

ts-example:
	./node_modules/ts-node/dist/bin.js examples/typescript/index.ts 

docs-html:	
	docker run --rm -v $(current_dir):$(current_dir) -w $(current_dir) veritone/protoc \
	protoc \
	--plugin="protoc-gen-doc=/go/bin/protoc-gen-doc" \
	--doc_out=./doc \
	--doc_opt=html,index.html \
	-I=. \
	events/*.proto

docs-md:	
	docker run --rm -v $(current_dir):$(current_dir) -w $(current_dir) veritone/protoc \
	protoc \
	--plugin="protoc-gen-doc=/go/bin/protoc-gen-doc" \
	--doc_out=./doc \
	--doc_opt=markdown,README.md \
	-I=. \
	events/*.proto



