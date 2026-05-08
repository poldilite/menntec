# Multi-stage build for production
# Stage 1: Build CMS
FROM node:18-alpine AS cms-builder
WORKDIR /cms
COPY cms/package*.json ./
RUN npm ci --only=production
COPY cms .

# Stage 2: Build Frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend .
RUN npm run build

# Stage 3: Runtime - Combined app
FROM node:18-alpine
WORKDIR /app

# Install PM2 for process management
RUN npm install -g pm2

# Copy CMS files
COPY --from=cms-builder /cms ./cms

# Copy frontend build
COPY --from=frontend-builder /frontend/.next ./frontend/.next
COPY --from=frontend-builder /frontend/public ./frontend/public
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm ci --only=production && cd ..

# Copy PM2 ecosystem config
COPY ecosystem.config.js .

# Expose ports
EXPOSE 3000 3001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start both services
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
