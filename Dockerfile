FROM node:12.10.0-alpine

# install yarn
RUN apk update && apk add yarn

WORKDIR /app

# Add node modules as executables in path
ENV PATH /app/node_modules/.bin:PATH

# Copy dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

# Install dependencies
yarn add

# Entry point
CMD ['npm', 'start']





