# construct base image (alpine)
FROM alpine

# Commands to run
RUN apk add --update gcc
RUN apk add --update redis

# default command to run when image is started
CMD ["redis-server"]
