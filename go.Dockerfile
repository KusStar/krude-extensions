FROM golang:1.23-bullseye AS builder

WORKDIR /app

COPY go go
COPY extensions.json extensions.json
COPY extensions extensions

WORKDIR /app/go

RUN go mod download
RUN go mod verify

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /main .

FROM gcr.io/distroless/static-debian12

COPY --from=builder /main .
COPY --from=builder /app/extensions /extensions
COPY --from=builder /app/extensions.json /extensions.json

ENV EXTENSIONS_DIR=/extensions
ENV EXTENSIONS_JSON=/extensions.json
ENV HOST=https://kexts.uselessthing.top 
ENV GIN_MODE=release

EXPOSE 8000

CMD ["./main"]
