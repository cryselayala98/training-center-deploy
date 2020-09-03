FROM node:14.8.0-alpine

# install git
RUN apk add --update git

# install aurelia-cli to build the app & http-server to serve static contents
#RUN npm i -g http-server
RUN npm i -g aurelia-cli
  
# set working directory to app
# henceforth all commands will run inside this folder
WORKDIR /app
  
# copy package.json related files first and install all required dependencies
COPY package*.json ./

# Try running install with --unsafe-perm option. When running as root, npm won't run any scripts.

RUN npm install typings -g  
RUN npm install 

# copy the rest of the files and folders & install dependencies
COPY . ./
RUN au build
  
# by default http-server will serve contents on port 9000
# so we expose this port to host machine
EXPOSE 9000
  
CMD [ "au" , "run" ]


