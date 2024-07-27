# Use an even-numbered Node.js LTS version
ARG NODE_VERSION=20.5.0

FROM node:${NODE_VERSION}-alpine as builder

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]