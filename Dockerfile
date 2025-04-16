FROM node:18-slim

WORKDIR /app

COPY package.json ./

RUN npm i -g pnpm --registry=https://registry.npmmirror.com

RUN pnpm install

COPY . ./

RUN pnpm build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
