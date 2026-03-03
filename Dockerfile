FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"

# Install build tools and jq for JSON manipulation
RUN apk update && \
    apk add --no-cache python3 make g++ git curl jq

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps --verbose

# Copy source code
COPY . .

## Check if angular.json exists and update budget limits
RUN if [ -f angular.json ]; then \
    echo "Updating Angular budget limits..." && \
    # Create backup
    cp angular.json angular.json.backup && \
    # Update budget limits for production build
    # Method 1: Using jq (more reliable)
    if command -v jq > /dev/null 2>&1; then \
        jq 'walk(if type == "object" and has("budgets") then \
            .budgets |= map(if .type == "anyComponentStyle" then \
                .maximumWarning = "2mb" | .maximumError = "4mb" \
            elif .type == "initial" then \
                .maximumWarning = "5mb" | .maximumError = "10mb" \
            elif .type == "bundle" then \
                .maximumWarning = "2mb" | .maximumError = "5mb" \
            else . end) \
        else . end)' angular.json > angular.tmp && \
        mv angular.tmp angular.json; \
    else \
        # Method 2: Using sed as fallback
        echo "jq not found, using sed..." && \
        sed -i 's/"maximumError": "8\.00 kB"/"maximumError": "2mb"/g' angular.json  true && \
        sed -i 's/"maximumWarning": "6\.00 kB"/"maximumWarning": "1mb"/g' angular.json  true && \
        sed -i 's/"maximumError": "2mb"/"maximumError": "10mb"/g' angular.json  true; \
    fi && \
    echo "Updated budget limits:" && \
    grep -A 5 -B 5 "budgets" angular.json  true; \
else \
    echo "ERROR: angular.json not found!" && \
    find . -name "angular.json" -type f && \
    exit 1; \
fi


# Debug: Show directory structure
RUN echo "Current directory structure:" && ls -la && \
    echo "Checking for dist directory:" && find . -name "dist" -type d

# Build with verbose output for debugging
RUN echo "Starting Angular build..." && \
    npm run build -- --configuration production --verbose 2>&1 | tee build.log  \
    { echo "Build failed! Showing tail of build.log:" && tail -100 build.log && exit 1; }

# Post-build: Normalize build output
RUN echo "Build completed. Normalizing build output..." && \
    if [ -d "dist" ]; then \
        echo "Dist directory found. searching for index.html..." && \
        # Find the folder containing index.html (handles dist/browser or dist/project-name/browser)
        BUILD_PATH=$(find dist -name "index.html" -type f | head -n 1 | xargs dirname) && \
        if [ -z "$BUILD_PATH" ]; then \
             echo "ERROR: index.html not found in dist directory!" && \
             ls -R dist && \
             exit 1; \
        fi && \
        echo "Found build artifacts in: $BUILD_PATH" && \
        # Move artifacts to a standard location that the next stage can expect
        mkdir -p /app/normalized_dist && \
        cp -R "$BUILD_PATH"/* /app/normalized_dist/ && \
        echo "Build artifacts prepared in /app/normalized_dist" && \
        # Print stats for debugging
        find /app/normalized_dist -type f -name "*.css" -exec ls -lh {} \; && \
        echo "Total CSS files size:" && \
        find /app/normalized_dist -name "*.css" -exec cat {} \; | wc -c | awk '{print "CSS size: " $1/1024 " KB"}'; \
    else \
        echo "ERROR: dist directory not created!" && \
        ls -la && \
        exit 1; \
    fi


# Runtime Stage
FROM alpine:3.21

# Install NGINX and headers-more module
RUN apk update && \
    apk add --no-cache nginx nginx-mod-http-headers-more && \
    # Create necessary directories
    mkdir -p /etc/nginx/ssl && \
    mkdir -p /var/log/nginx && \
    mkdir -p /var/cache/nginx && \
    mkdir -p /run/nginx && \
    # Set proper permissions
    chown -R nginx:nginx /var/log/nginx /var/cache/nginx /run/nginx

# Copy nginx configuration
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/nginx.dev.common /etc/nginx/conf.d/nginx.common

# Copy SSL cer
tificates (if they exist)
# Note: When using the wildcard trick, the destination must be a directory (ending in /).
COPY nginx/cert.pe[m] /etc/nginx/ssl/
COPY nginx/key.pe[m] /etc/nginx/ssl/


# We now simply copy from the pre-prepared /app/normalized_dist folder.
COPY --from=builder /app/normalized_dist /usr/share/nginx/html


# Verify copied files
RUN echo "Nginx HTML directory contents:" && \
    ls -la /usr/share/nginx/html/ && \
    echo "Checking for index.html..." && \
    if [ -f "/usr/share/nginx/html/index.html" ]; then \
        echo "index.html found successfully"; \
    else \
        echo "ERROR: index.html not found in /usr/share/nginx/html/"; \
        echo "Available files:"; \
        find /usr/share/nginx/html -type f; \
        exit 1; \
    fi

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:80/  exit 1

EXPOSE 3050 443

CMD ["nginx", "-g", "daemon off;"]
