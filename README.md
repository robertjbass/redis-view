# redis-ui

A visual tool to test your local Redis installation from the browser.

## Usage

```bash
npx redis-ui
```

This will:
1. Start a local server on port 3000
2. Open your browser automatically
3. Connect to Redis and let you test key/value operations

## Features

- Connect to any Redis instance by specifying host and port
- Visual connection status indicator
- Set key/value pairs
- View all stored keys and their values
- Delete keys
- CLI Commands tab showing equivalent `redis-cli` commands

## Options

Set a custom port:

```bash
PORT=8080 npx redis-ui
```

## Development

```bash
pnpm install
pnpm start    # Run the CLI
pnpm dev      # Run with auto-restart on changes
```

## Tech Stack

- [Hono](https://hono.dev/) - Web framework
- [ioredis](https://github.com/redis/ioredis) - Redis client
- [petite-vue](https://github.com/vuejs/petite-vue) - Lightweight Vue for the UI
- [Tailwind CSS](https://tailwindcss.com/) - Styling (via CDN)
