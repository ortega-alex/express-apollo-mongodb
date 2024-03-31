
### DOCKER RUN MONGO DB
docker run -d  --name mongo-on-docker  -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo

## Enviroment variables
MONTODB_URI=mongodb://localhost:27017/tasksdb
PORT=3000