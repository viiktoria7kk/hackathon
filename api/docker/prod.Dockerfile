FROM node:20-alpine3.19

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm i

COPY . .

RUN npx prisma generate

RUN pnpm build

CMD [ "node", "./dist/main.js" ]