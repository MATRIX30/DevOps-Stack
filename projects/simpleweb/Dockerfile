# base image to import from
FROM node:alpine

# programs and dependencies to install
# define a working directory
WORKDIR /usr/app

# copy all files to docker container
COPY ./ ./

# install required dependencies
RUN npm install

# finall startup command
CMD ["npm", "start"]
