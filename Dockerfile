FROM denoland/deno:1.44.4

WORKDIR /app

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
COPY . .

# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache src/server.ts

EXPOSE 8000

ENV HOST https://kexts.uselessthing.top 

CMD ["pwd"]

CMD ["ls", "-al"]

CMD ["deno", "serve", "--allow-all", "src/server.ts"]