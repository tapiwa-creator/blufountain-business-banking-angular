# Build stage: Angular app
FROM node:20-alpine AS build-stage
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps --no-audit --no-fund
COPY . ./
RUN npx ng build --configuration=production

# Final stage: Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /app/dist/blufountain/browser .
COPY nginx/nginx.conf /etc/nginx/nginx.conf
ENV PORT=8443
EXPOSE 8443
CMD ["nginx", "-g", "daemon off;"]
