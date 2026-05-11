FROM node:20-alpine

WORKDIR /app

# Build tools for node-gyp
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install

COPY . .

# Ensure uploads directory exists
RUN mkdir -p public/uploads

# Payload reads importMap files before writing — create empty placeholders first
RUN printf 'export const importMap = {}\n' > 'src/app/(payload)/admin/importMap.js' && \
    printf 'export const importMap = {}\n' > 'src/app/(payload)/importMap.js'

# Generate Payload importMap (overwrites placeholders with real content)
RUN DATABASE_URI=postgresql://dummy:dummy@localhost:5432/dummy \
    PAYLOAD_SECRET=dummy-build-secret-minimum-32-characters \
    npm run payload generate:importmap

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
