# Backend Installation Guide

Requirements:

- NodeJS version >=21.1.0
- Docker, docker-compose

## Backend

### Development:

To set up local development, create a `.env` file in with all required environment variables listed and mocked in the `.env.example` file.

Follow these steps:

Ensure you have the `pnpm` package manager installed. If not, run one of the following commands:

```bash
npm i -g pnpm
# or
yarn global add pnpm
```

Install packages using:

```bash
$ pnpm i
```

#### Local

Start the application using:

```bash
$ pnpm start:dev
```

#### With Docker

Build Docker images from the Dockerfile using:

```bash
$ docker-compose build api
```

Once the Docker images are built successfully, run the containers using:

```bash
$ docker-compose up api
```

### Production:

To run the backend for the production environment:

Create a `.env` file in root directory with all necessary environment variables listed in `.env.production`.
Build the production backend container with:

```bash
$ docker-compose build api-prod
```

If the Docker images are built successfully, run the built container using:

```bash
$ docker-compose up api-prod
```
