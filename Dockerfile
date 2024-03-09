# Use the official Node.js 14 image as base
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy server.js and models.js to the working directory
COPY server.js .
COPY models.js .

# Copy the static folder to the working directory
COPY ./static .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "server.js"]
