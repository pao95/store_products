FROM node:20.11.1-slim
WORKDIR /web
COPY package.json package-lock.json ./

RUN npm install
WORKDIR /web/app
COPY . .

CMD ["npm","run","dev"]
