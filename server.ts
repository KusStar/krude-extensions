import { Glob } from "bun";

const glob = new Glob("*");

const port = 12345

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/ping") return new Response("pong");

    if (path === "/") {
      const data = []
      for (const file of glob.scanSync("./extensions")) {
        data.push({
          name: file,
          download_url: `http://localhost:${port}/download/${file}`
        });
      }
      return Response.json(data);
    }

    if (path.startsWith("/download/")) {
      const file = path.replaceAll("/download/", "");
      const content = await Bun.file(`./extensions/${file}`).json();
      return Response.json(content);
    }

    return new Response("Page not found", { status: 404 });
  },
  port
})

console.log(`Listening on ${server.url}`);