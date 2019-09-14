FROM node:12.10.0-alpine

# Add yarn
RUN apk update && apk add yarn
WORKDIR /app

# port 3000 visible in docker & on localhost
EXPOSE 3000

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

# Install dependencies
RUN yarn install

# Copy files
COPY . /app

# # Entrypoint of the script, this will run in the background
CMD ['yarn', 'start']

