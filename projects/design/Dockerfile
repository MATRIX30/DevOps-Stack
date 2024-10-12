# this docker file will implement multi build phase
# phase 1: build containerized app

# from base image
FROM node:alpine as build-app

# work directory
WORKDIR /usr/app

# copy dependency file

COPY package.json .

# install program and dependencies

RUN npm install

# copy all files to work dir

COPY . .

# build the project

RUN npm run build


# Phase 2: serve with nginx container

# import base image
FROM nginx

COPY --from=build-app usr/app/build /usr/share/nginx/html