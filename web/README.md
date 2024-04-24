
# Frontend

##### Local Development:

To set up local development for the frontend, ensure you have `.env` file with all environment variables listed in `.env.example`. Then, follow these steps:

If you haven't already installed `pnpm`, you can do so globally by running:

```bash
npm install -g pnpm
# or
yarn global add pnpm
```

Navigate to the `web/` directory in your terminal.

Install project dependencies using `pnpm`:

```bash
pnpm i
```

Once the dependencies are installed, start the development server by running:

```bash
pnpm start
```

##### Production:

To run the frontend for the production environment, you can build a Docker container named `web` containing your application. Follow these steps:

Create a `.env.prod` file in root directory with all the necessary environment variables listed, similar to `.env.example`.
Build the production frontend container by running the following command:

```bash
docker-compose build web
```

If the Docker image is built successfully, run the built container using:

```bash
docker-compose up web
```

These steps will build and run your frontend application in a Docker container suitable for production deployment. For local development, you can simply install dependencies and run the application locally using `pnpm`.
