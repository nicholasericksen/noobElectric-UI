To build the docker image
`docker build -t noobelectric-ui .`

and run the container using
`docker run -d -p 80:3000 noobelectric-ui`

to run the container locally with mounted host volume for development
`docker run -it -p 80:8080 -v "$(pwd)"/public:/app/public noobelectric-ui`