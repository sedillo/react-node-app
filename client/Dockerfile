# Use the official Node.js base image
FROM node:latest

# Set the working directory for your application
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy the package.json and package-lock.json files into the Docker image
COPY package.json ./
COPY package-lock.json ./

# Install the dependencies
RUN npm install --silent
RUN npm install react-scripts -g --silent

# Copy the rest of your application code into the Docker image
COPY . .

# Start the application
CMD ["npm", "start"]
