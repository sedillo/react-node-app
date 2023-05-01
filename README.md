# react-node-app

# Client React section

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
docker run -it --rm -p 3000:3000 sample:dev
```

# Server Express Node JS Section
