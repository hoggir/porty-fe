# Use the official Node.js image (LTS version for stability)
FROM node:18-alpine

# Set environment variables for Node.js and NPM
ENV NODE_ENV=production

# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install compatible React version
RUN npm install react@18 react-dom@18 --legacy-peer-deps

# Install TypeScript and type definitions as devDependencies with legacy peer deps
RUN npm install --save-exact --save-dev typescript @types/react @types/node --legacy-peer-deps

# Install all other production dependencies with legacy peer deps
RUN npm install --omit=dev --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]