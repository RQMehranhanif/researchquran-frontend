# FROM node:lts-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# COPY . .
# EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start"]

# # ==== CONFIGURE =====
# # Use a Node 16 base image
# FROM node:14.17.3-alpine 
# # Set the working directory to /app inside the container
# WORKDIR /app
# # Copy app files
# COPY . .
# # ==== BUILD =====
# # Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# RUN npm ci 
# # Build the app
# RUN npm run build
# # ==== RUN =======
# # Set the env to "production"
# ENV NODE_ENV development
# # Expose the port on which the app will be running (3000 is the default that `serve` uses)
# # RUN chown -R node /usr/src/app
# RUN chown -R node /bin/sh
# EXPOSE 3000
# # Start the app
# CMD [ "npx", "serve", "build" ]



FROM node:14.17.3-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]