# import base image
FROM node:alpine

# adding a work directory for app
WORKDIR /usr/app
# copy local files to docker
# puting just the packages.json file will cause the copy to
# only run npm install command when the  package file changes
# hence saving us the stress of installing dependencies when the package file has not changed
COPY ./package.json ./ 

# install programs and dependencies
RUN npm install

# this is more efficient as it copies 
COPY ./ ./
# startup command
CMD ["npm","start"]