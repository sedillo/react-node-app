# react-node-app

# Network

```bash
docker network create my-network
```

# MYSQL

## Create
```bash
docker run -p 3306:3306 --network my-network -e MYSQL_ROOT_PASSWORD=root -e MYSQL_INITDB_SKIP_TZINFO=true --hostname "db.local" --rm -v "${PWD}/db:/docker-entrypoint-initdb.d/" --name sedillo/mysql mysql
```

## Test 
```bash
docker run -it --network my-network --rm mysql mysql -h"db.local" -uroot -proot healthcare -e "SHOW TABLES;"
docker run -it --network my-network --rm mysql mysql -h"db.local" -uroot -proot healthcare -e "SELECT * FROM clinics;"
```

# Server

## Bootstrap
```bash
docker run -it --rm -v ${PWD}:/app -w /app -p 3001:3000 node:latest /bin/bash
npm init -y
npm install express cors mysql2
npm install --save-dev nodemon
```

## Build
```bash
docker build -t server .
docker run --rm -p 3:3001 --name server --network my-network --hostname "server.local" -it server
```

## Testing
```bash
# Test GET
curl -X GET 127.0.0.1:3001

# Test POST
curl -X POST -H "Content-Type: application/json" -d '{"setBookName": "value1", "setReview": "value2"}' http://server.local:3001/insert/
```

# Client React Section

## Bootstrap

```bash
docker run -it --rm -v ${PWD}:/app -w /app -p 3000:3000 node:latest /bin/bash
npx create-react-app client
```

Now you can create client code

## Build 
```bash
docker build -t client .
```

## Run Development 

This allows to debug locally on your machine

```bash
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --name client client
```

## Run Production
```bash
docker run -it --rm -d -p 3000:3000 --name client client
```

