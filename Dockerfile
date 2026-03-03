# Build stage: Node.js app
FROM node:16-alpine AS build-stage
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"
# Copy package files first
COPY package.json package-lock.json* ./
# Clean install with dependency fixes
RUN npm cache clean --force
RUN npm install --legacy-peer-deps --no-audit --no-fund
RUN npm install ajv@^8.12.0 ajv-keywords@^5.1.0 schema-utils@^4.0.0 --save --no-audit --no-fund
RUN rm -rf node_modules/.cache
COPY . ./
# Disable ESLint during build
RUN DISABLE_ESLINT_PLUGIN=true CI=false npx react-scripts build
# FINAL STAGE: Production Nginx
# We use 'nginx:alpine' instead of raw 'alpine' to ensure standard paths and user setup
FROM nginx:alpine
# 2. Copy the React Build artifacts to the standard Nginx folder
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /app/build .
# 3. Copy Configuration Files
COPY nginx/nginx.dev.common /etc/nginx/conf.d/nginx.common
COPY nginx/nginx.conf /etc/nginx/nginx.conf
# 4. Expose the HTTP port defined in your config
ENV PORT=3050
EXPOSE 3050
# 5. Start Nginx
CMD ["nginx", "-g", "daemon off;"]
