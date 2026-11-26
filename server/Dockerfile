FROM node:22

WORKDIR /docker-basics/server

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]