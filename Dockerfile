# latest node.js image as base image
FROM node:latest

#setting up of working directory inside the container
WORKDIR /tmp/app 

#copy the package.json insie the conainer
COPY package.json ./

# Install the all application dependencies
RUN npm install 

#copy all the files inside the container

COPY . .

# exposing the port 3000 to run the application
EXPOSE 3000

# commands to run the application
CMD ["node", "app.js"]
