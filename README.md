# Next JS + Tailwind + GraphQL + React Query + TypeScript templatae

This is a template for Next.js + Tailwind + GraphQL + React Query + TypeScript.
It supports SSR via React Query Hydrate.

## Getting Started

### Installation

```bash
npm install
```

## Setup

Run ngrok to get https url for webhooks

```bash
npx ngrok http 3000
```

Set the https url in the .env file

```bash
WEBHOOK_BASE_URL='<NGROK_HTTPS_URL>/api'
```

### Development

This will start the docker container for hasura and postgres, launch the console and start the app

```bash
npm run start:dev
```

### Production

```bash
npm run build
npm run start
```

## Local development

### Setting hasura actions url loa

Open a tunnel using ngrok or cloudflare to the running app and add the https host to hasura
You can add this from the admin dashboard or from env

## Event and Action triggers

There are webhooks triggers for events and actions. these should be added to the hasura console
