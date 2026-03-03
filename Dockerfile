# Build stage: Angular app
FROM node:18-alpine AS build-stage
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"

# Copy package files first
COPY package.json package-lock.json* ./

# Clean install with dependency fixes
RUN npm cache clean --force
RUN npm install --legacy-peer-deps --no-audit --no-fund

# Copy all source files
COPY . .

# Build Angular app using npx (if @angular/cli is in devDependencies)
RUN npx ng build --configuration production --output-path=dist

# FINAL STAGE: Production Nginx
FROM nginx:alpine

# Copy Angular build artifacts to Nginx folder
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /app/dist .

# Copy Configuration Files
COPY nginx/nginx.dev.common /etc/nginx/conf.d/nginx.common
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expose the HTTP port
ENV PORT=3050
EXPOSE 3050

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
