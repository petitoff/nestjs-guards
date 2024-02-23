FROM node:18

RUN npm install -g pnpm 

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/

RUN pnpm install

COPY . .

CMD ["pnpm", "start"]