#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const cli = join(__dirname, 'cli.ts')

spawn('npx', ['tsx', cli], { stdio: 'inherit' })
