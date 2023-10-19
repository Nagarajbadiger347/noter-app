# noter-app
to run this application Make sure you have Node.js and npm (Node Package Manager) installed on your system.

this is the express REST Aplication
To install all the dependencies for this application use 

     npm install
After installing all the dependencies, start your Express REST API application, run the following command:

     node app.js
Now you can able to use this application.

     localhost:3000

For creation of docker image
build the docker image by Dockerfile

     docker bild .
. indicates in the present directory

you can see the images by using the following command

    docker images
Run the docker image by using 

    docker run -it -p 3000:3000 <image-name>

If u want to run the application usiong docker compose file use this command to start

    docker-compose -f docker-compose.yaml up 
to stop 
 
    docker-compose -f docker-compose.yaml down


    
