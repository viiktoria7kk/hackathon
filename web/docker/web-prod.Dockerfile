FROM node:20-alpine3.19 as build

WORKDIR /app

RUN npm i -g pnpm

COPY package.json ./

RUN pnpm i

COPY . .

RUN pnpm build --mode production

FROM nginx:stable-alpine as release
COPY --from=build /app/dist /usr/share/nginx/html/
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]