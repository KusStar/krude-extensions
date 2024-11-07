# Builder stage
FROM rust:slim AS builder
# Create a new empty shell project
WORKDIR /app

# Copy files
COPY rust rust
COPY extensions.json extensions.json
COPY extensions extensions

WORKDIR /app/rust

# Build for release
RUN --mount=type=cache,target=/usr/local/cargo/registry \
    cargo build --release
# RUN strip /app/rust/target/release/kexts-rs

# Final stage
FROM debian:bookworm-slim AS runtime

# Install only the necessary system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates libc6 && rm -rf /var/lib/apt/lists/*

# Copy the binary from builder
COPY --from=builder /app/extensions /extensions
COPY --from=builder /app/extensions.json /extensions.json
COPY --from=builder /app/rust/target/release/kexts-rs .

# Set environment variables
ENV EXTENSIONS_DIR=/extensions
ENV EXTENSIONS_JSON=/extensions.json
ENV RUST_LOG=info
ENV RUST_BACKTRACE=1

# Expose the port your server listens on
EXPOSE 8000

# Run the binary
CMD ["/kexts-rs"]
