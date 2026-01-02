# redis-view

A visual tool to test your local Redis installation from the browser.

## Installation

```bash
npx redis-view
```

That's it! This will:

1. Start a local server on port 3000
2. Open your browser automatically
3. Let you connect to Redis and test key/value operations

## Features

- Connect to any Redis instance (configurable host and port)
- Visual connection status indicator
- Set, view, and delete key/value pairs
- CLI Commands tab showing equivalent `redis-cli` commands

## Options

### Custom server port

```bash
PORT=8080 npx redis-view
```

### Connect to non-default Redis

The UI lets you specify any Redis host and port. Default is `localhost:6379`.

## Development

```bash
git clone https://github.com/your-username/redis-view
cd redis-view
pnpm install
pnpm start    # Run the CLI
pnpm dev      # Run with auto-restart on changes
```

## Tech Stack

- [Hono](https://hono.dev/) - Web framework
- [ioredis](https://github.com/redis/ioredis) - Redis client
- [petite-vue](https://github.com/vuejs/petite-vue) - Lightweight Vue for the UI
- [Tailwind CSS](https://tailwindcss.com/) - Styling via CDN

## License

ISC
