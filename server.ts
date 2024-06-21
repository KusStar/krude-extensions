import { ExtensionRepo } from './types.ts'

import { Hono } from 'hono'
import { serveStatic } from 'hono/deno'
import extensions from "./extensions.json" with { type: "json" };

const host = Deno.env.get('HOST') || 'http://localhost:8000'

const app = new Hono()

app.use('/extensions/*', serveStatic({ root: './' }))

app.get("/ping", c => c.text("pong"))

app.get('/', (c) => {
  const data: ExtensionRepo[] = extensions.map(e => ({
    ...e,
    download_url: host + e.download_url
  }))
  return c.json(data)
})

export default app
