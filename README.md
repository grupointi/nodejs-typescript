# NODE JS TYPESCRIPT BOILERPLATE

# TypeScript
Build App :  ```npm run build ```

# Run  and build app
Production mode :  ```npm start ```
Development mode : ```npm run dev ```

# Express library (Endpoints)
Create user (post) :   ``` localhost:8000/api/usuarios/ ```
Login User (post) :   ``` localhost:8000/api/usuarios/login ```
Get Users (get) :  ``` localhost:8000/api/usuarios ```
Get User by Id (get) :  ``` localhost:8000/api/usuarios/:id ```
Edit User  (put) :  ``` localhost:8000/api/usuarios/:id ```
Delete User (delete) : ``` localhost:8000/api/usuarios/:id ```
Create Products (post) : ``` localhost:8000/api/productos ```
Get Products By User (get) : ``` localhost:8000/api/productos ```


# ESLint
Run ESLint Code Review : ```npm run lint```

# Jasmine (UnitTest)
Run Unit Test :  ```npm run test```

# JWT Authentication
Include headers on request :  ``` Authorization : Bearer {jwt-token} ```

# Docker
Building the image, eg :  ``` docker build . -t  dduran/ts-rest-server ```
Run the image (Container) : ``` docker run -e DB_HOST=host.docker.internal -p 49160:8000 -d dduran/ts-rest-server ```
List docker containers : ``` docker ps```
View docker container logs : ``` docker logs <container id> ```
Remove container : ``` docker rm -f <container id> ```

# GIT
Repository : ``` https://github.com/grupointi/nodejs-typescript```




