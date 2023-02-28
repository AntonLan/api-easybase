FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install
COPY . .
RUN npm run build

CMD [ "node", "dist/main.js" ]