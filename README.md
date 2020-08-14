# README

A simple Docker container for Deno 🦕

## Usage

Dockerfile

```Dockerfile
FROM simoncoulton/deno:alpine-latest

CMD ["run", "mod.ts"]
```

docker-compose.yml

```yaml
version: "3.8"

services:
  deno:
    image: simoncoulton/deno:alpine-latest
```

For more details see the example container in `example/`
