FROM node:12-alpine

WORKDIR /usr/app

COPY package.json index.js ./

RUN npm install

CMD ["npm", "start"]