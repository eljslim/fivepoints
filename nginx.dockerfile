FROM node:latest as node
LABEL author='Slim ELJ'
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod
##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./nginx.config /etc/nginx/conf.d/default.conf