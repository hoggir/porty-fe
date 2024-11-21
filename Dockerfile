# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Install production dependencies.
RUN npm install --production --legacy-peer-deps

# Copy local code to the container image.
COPY . .

# Build the Next.js application
RUN npm run build

# Run the Next.js application
CMD ["npm", "start"]