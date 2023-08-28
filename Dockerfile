FROM node:16.14.2-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . . 

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]