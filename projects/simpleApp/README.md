## Simple NodeJs Application based on Express

- package.json: to store configuration of dependencies
- index.js: main application file

#### concepts learned:
- create dependencies in package.js for node applications
- specify the script parameters of the package.json file
- creating a simple node app based on express
- Building images based on application
    - FROM node:alpine
    - WORKDIR /usr/app
    - COPY ./ ./ and COPY ./package.json ./
    - docker run -p source_port: dest_port image_name : port mapping local machine to container ports
    - order of placing COPY to avoid reinstall libraries with npm install