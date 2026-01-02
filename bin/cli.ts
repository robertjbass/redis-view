#!/usr/bin/env tsx
import { exec } from 'node:child_process'
import { serve } from '@hono/node-server'
import app from '../src/server.js'

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000
const url = `http://localhost:${PORT}`

console.log(`
┌─────────────────────────────────────────┐
│            Redis View                   │
├─────────────────────────────────────────┤
│  Server running at ${url}       │
│  Press Ctrl+C to stop                   │
└─────────────────────────────────────────┘
`)

serve({ fetch: app.fetch, port: PORT })

function openBrowser(url: string) {
  const platform = process.platform
  const cmd = platform === 'darwin' ? 'open' : platform === 'win32' ? 'start' : 'xdg-open'

  exec(`${cmd} ${url}`, (err) => {
    if (err) {
      console.log(`Open ${url} in your browser`)
    }
  })
}

openBrowser(url)
