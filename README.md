# README

A simple Docker container for Deno 🦕

## Usage

Dockerfile

```
FROM simoncoulton/deno:alpine-1.2.3

EXPOSE 80

CMD ["run", "mod.ts"]
```

docker-compose.yml

```
version: "3.8"

networks:
  deno:

services:
  deno:
    image: simoncoulton/deno:alpine-1.2.3
    container_name: deno
    volumes:
      - ./:/app
    expose:
      - 8000
    ports:
      - 8000:8000
    command: run --allow-net /app/mod.ts
    networks:
      - deno
```

For more details see the example container in `example/`
