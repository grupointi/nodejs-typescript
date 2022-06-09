# nodejs-typescript

# Docker
docker build . -t  dduran/ts-rest-server   | Building your image
docker run -p 49160:8000 -d dduran/ts-rest-server  | Run the image
docker ps
docker logs <container id>

More at https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
https://www.howtogeek.com/devops/how-to-connect-to-localhost-within-a-docker-container/