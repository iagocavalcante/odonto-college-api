FROM node:12.16-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn init-typeorm

RUN yarn build

FROM node:12.16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --prod

COPY . .

RUN yarn init-typeorm

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]