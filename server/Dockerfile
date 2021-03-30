FROM node:15

ENV PORT 5000
EXPOSE 5000

ENV NODE_ENV=development

WORKDIR /src

COPY package.json yarn.lock /src/

RUN yarn install

COPY . /src

CMD ["yarn", "dev"]
