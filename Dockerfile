FROM denoland/deno:1.10.3

EXPOSE 3000

WORKDIR /app

USER deno

COPY . .
RUN deno cache main.ts

CMD ["run", "--allow-read", "--allow-write", "--allow-env", "--allow-net", "main.ts"]