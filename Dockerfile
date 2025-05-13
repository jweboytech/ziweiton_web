FROM node:18-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm --registry=https://registry.npmmirror.com

RUN pnpm install

COPY . ./

# RUN pnpm build

EXPOSE 3400

CMD [ "npm", "run", "dev" ]
