set -e

podman stop krude-extensions || echo 1

podman rm krude-extensions || echo 1

podman build -t krude-extensions .

podman run --name krude-extensions -d -p 8000:8000 krude-extensions