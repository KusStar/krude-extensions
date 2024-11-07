docker build . --rm -t kexts-rs -f ./rust.Dockerfile
docker run --rm -it -p 8000:8000 kexts-rs 