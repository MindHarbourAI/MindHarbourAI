# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package management files
COPY package*.json ./

# Install dependencies cleanly
RUN npm ci

# Build arguments for Vite environment variables (embedded into static JS during build)
ARG VITE_SAILANCHOR_URL=https://anchor.mindharbourai.com
ARG VITE_SAILTASK_URL=https://task.mindharbourai.com

ENV VITE_SAILANCHOR_URL=${VITE_SAILANCHOR_URL}
ENV VITE_SAILTASK_URL=${VITE_SAILTASK_URL}

# Copy remaining project source code
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Production web server
FROM nginx:1.25-alpine AS runner

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration for SPA routing & performance
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production static build output from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
