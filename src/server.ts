import { ExtensionRepo } from './types.ts'

import { Hono } from 'hono'
import { serveStatic } from 'hono/deno'
import extensions from "../extensions.json" with { type: "json" };
import { logger } from 'hono/logger'
import { etag } from 'hono/etag'
import { cache } from 'hono/cache'
import { compress } from 'hono/compress'

const host = Deno.env.get('HOST') || 'http://localhost:8000'

const app = new Hono()

app.use(logger())
app.use(compress())
app.use(etag())

// /extensions
app.use('/extensions/*', cache({
  cacheName: 'krude-extensions',
  // 1 year
  cacheControl: 'max-age=31536000',
  wait: true,
}))
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
