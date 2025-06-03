FROM node:18-alpine

RUN apk add --no-cache bash

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . ./

ENV CHOKIDAR_USEPOLLING=true
ENV NODE_OPTIONS=--openssl-legacy-provider

CMD ["npm", "start"]
