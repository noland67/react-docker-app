FROM node:18-alpine

RUN apk add --no-cache bash

WORKDIR /usr/src/app

COPY app/package*.json ./
RUN npm install

COPY app/ ./

# ✅ OpenSSL互換性のために環境変数を追加
ENV CHOKIDAR_USEPOLLING=true
ENV NODE_OPTIONS=--openssl-legacy-provider

CMD ["npm", "start"]
