# # Use the base image from Docker Hub

# FROM node:24.6.0-alpine


# # Set the working directory
# WORKDIR /app

# # Copy the package.json and package-lock.json files
# COPY package*.json .

# # Install the dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Expose the port your app will run on
# EXPOSE 3000

# # Start the application
# CMD [ "npm" , "run" , "dev" ]

# Stage 1 - build
FROM node:24.6.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


# Stage 2 - production
FROM node:24.6.0-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD [ "npm" , "run" , "dev" ]
