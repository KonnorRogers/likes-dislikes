FROM node:12.10.0-alpine

# Install yarn
RUN apk update && apk add yarn bash

WORKDIR /app

# port 3000 visible in docker & on localhost
EXPOSE 3000

# Copy dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

# Install dependencies
RUN yarn install

# Copy files
COPY . /app

CMD ['npm', 'start']

