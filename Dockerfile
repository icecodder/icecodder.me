FROM node:lts-alpine as build
WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

FROM nginx:alpine
WORKDIR /app

COPY --from=build /app/dist /usr/share/nginx/html

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
