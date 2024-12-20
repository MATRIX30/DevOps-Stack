# Docker

- **docker run <image-name>** to create and start a docker container with its default command
- **docker ps:** to list all the running containers
- **docker run <image-name> new-command:** to create and override old command and run docker with new-command
- **docker images:** to list all the images in dockers image repo
- **docker create <image-name>:** to create a container from an <image-name>
- **docker start <container-id>:** to  start the container with id <container-id> Nb we cant run docker start busybox echo hi . because start command always runs with the default execution command and we cant override the command with docker start
- **docker ps —all :** to list  all the containers that have ever ran
- **docker system prune:** to delete all stopped containers , cache and dangling images
- **docker logs <container-id> :** gives you the log emitted by the container
- **docker stop <container-id> :** used to stop a container ie it sends a SIGTERM signal to the running process in the container which will allow the container to cleanup and close gracefully. if after 10secs the container does not terminate docker will automatically switch and send a kill command
- **docker kill <container-id> :** used to install kill a container without giving it any time to cleanup it sends a SIGKILL signal to the running process  and kills it instantly with no delay
- **docker exec -it <container-id>  <command>:** this command is made up of several parts but it helps you execute commands in a docker container
    - exec: this tells docker you want to execute a command
    - -it: this flag is actually the combination of 2 flags
        - **the -i flag** which tells docker you want to get attached to the STDIN of the container remember any container has 3 connections the STDIN, STDOUT and the STDERR. the STDIN will connect to the STDIN and enable you send commands while the STDOUT and STDERR will connect to the screen and send out messages on the screen
        - **the -t flag:** enables pretty printing of the results to the terminal
    - <container-id> is the container id
    - <command> the command you want to execute in the container
- docker exec -it <container-id> sh: this will give you terminal access within your container
- docker run -it <image name> sh: This will create and start a container with the shell running

# creation of Images

- docker build . : build an image from a Dockerfile

## docker file structure:

-  name of file must be : Dockerfile
    - FROM: use to Build base image
    - RUN: Command to run to install dependencies
    - CMD: Set the default command to execute when image is runned

- docker -t build <username>/<projectname>:latest(version number) .: enables you to tag image and give them names when they are generated instead of having them generate ID's which is difficult to remember
- docker commit -c 'CMD ["<startup command>"] <container_id>: This command helps you generate an image from a container manually
- COPY <source address> <destination>: this command enables you to copy local files to image directory during the build process eg COPY ./ ./ copies from the local current director to the images current directory

## port mapping
- docker run -p <source port on local pc>: < destination port on docker> <image name(id)>: this will
help you to map a local port to a port in docker eg docker run -p 8080: 4000 image-name: this will run the image-name container and 
map port 8080 of your machine to port 4000 of docker
- WORKDIR </path to working directory>: this will enable you to create a directory where your program files will be stored and it will
serve as the main program directory or reference directory


### Docker compose
Generally it enables you to perform the normal command we did in docker but now allowing us to run multiple containers with a single command and to manage multiple commands in a more compact command but we need to create a configuration file for docker compose to use called *docker-compose.yml*
- docker compose up: this command is equivalent to docker run and it will run all containers(services) provided in the docker docker-compose file
- docker compose down: is the same like docker stop  and will stop multiple containers specified in the docker-compose config file
- docker compose up --build: it will build the containers based on the docker-compose file and startup the containers while providing networking functionalities for the containers to communicate
- sample docker compose file looks as follows
### sample docker-compose.yml file
```yaml
# specify the version number of docker-compose to use
version: "3"

# specify the containers or services to create
services:
	redis-server:
		# build the service redis-server from docker-hub image called redis
		image: "redis"
	node-app:
		# build node-app service from docker file ie Dockerfile as we did with docker build . 
		# on the current directory
		build: .

		# specify port mapping
		port:
			- "8080:8047" 
		# specify restart policy which handles what will happen if a container process fails we have 3 of them
		# - "no" this must be in qoute and its the default which means we should never restart a container if it fails
		# always: means always restart container
		# on-failure: only restart if container process failed ie exits with a status code different from 0
		# unless-stopped: always restart unless if the process is stopped by developer
		
		restart: "on"
```
 
 - docker compose ps : help you view the status of all containers(status) in docker compose files

 - docker build -f <custom docker file> . : the -f parameter enables you specify the specific docker file to execute. 
 - Dockerfile is the docker file to execute in production 
 - Dockerfile.dev is the main file to execute during development

#### some useful node commands
- npm run start: to run application in developer mode
- npm run test: to run test runner for project
- npm run build: to run program in production mode

## CI/CD piple
