# Base image
FROM node:alpine

# Creat working directory
WORKDIR /usr/app

# copy package files
COPY package.json ./

# install dependencies and programs
RUN npm install


# copy files
COPY ./ ./
# startup command
CMD ["npm", "start"]
