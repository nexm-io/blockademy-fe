FROM node:16.14.2-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

FROM node:16.14.2-alpine
WORKDIR /app

COPY --from=build /app ./

COPY . . 

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]