import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Hono } from 'hono'
import Redis from 'ioredis'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = new Hono()

let redis = new Redis({
  host: 'localhost',
  port: 6379,
  lazyConnect: true,
})

let currentHost = 'localhost'
let currentPort = 6379

app.get('/api/status', async (c) => {
  try {
    const pong = await redis.ping()
    return c.json({
      connected: pong === 'PONG',
      connectedTo: `${currentHost}:${currentPort}`,
    })
  } catch {
    return c.json({ connected: false })
  }
})

app.post('/api/connect', async (c) => {
  const { host, port } = await c.req.json()

  try {
    await redis.quit()
  } catch {
    // ignore disconnect errors
  }

  currentHost = host || 'localhost'
  currentPort = port || 6379

  redis = new Redis({
    host: currentHost,
    port: currentPort,
    lazyConnect: true,
  })

  try {
    const pong = await redis.ping()
    return c.json({
      connected: pong === 'PONG',
      connectedTo: `${currentHost}:${currentPort}`,
    })
  } catch {
    return c.json({ connected: false })
  }
})

app.get('/api/keys', async (c) => {
  const keys = await redis.keys('*')
  return c.json(keys)
})

app.post('/api/set', async (c) => {
  const { key, value } = await c.req.json()
  await redis.set(key, value)
  return c.json({ success: true })
})

app.get('/api/get/:key', async (c) => {
  const key = c.req.param('key')
  const value = await redis.get(key)
  return c.json({ key, value })
})

app.delete('/api/delete/:key', async (c) => {
  const key = c.req.param('key')
  await redis.del(key)
  return c.json({ success: true })
})

app.get('/', (c) => {
  const html = readFileSync(join(__dirname, 'index.html'), 'utf-8')
  return c.html(html)
})

export default app
