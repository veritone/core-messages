FROM ubuntu

ENV PROTO_VERSION 3.5.1

RUN apt-get update
RUN apt-get install -y curl \
    unzip \
    git 

# Protobuf
RUN curl -OL https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-linux-x86_64.zip

# Unzip
RUN unzip protoc-3.5.1-linux-x86_64.zip -d protoc3

# Move protoc to /usr/local/bin/
RUN mv protoc3/bin/* /usr/local/bin/

# Move protoc3/include to /usr/local/include/
RUN mv protoc3/include/* /usr/local/include/

# Install Golang
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:gophers/archive
RUN apt-get update
RUN apt-get install -y golang-1.10-go
RUN mv /usr/lib/go-1.10/bin/* /usr/local/bin/

# Set GOPATH and GOBIN
ENV GOPATH /go
ENV PATH $GOPATH/bin:/usr/local/go/bin:$PATH

# Install code gen for Golang
RUN go get -u github.com/golang/protobuf/protoc-gen-go

# Install node 8 for typescript generation
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# Install docs generator
RUN go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc