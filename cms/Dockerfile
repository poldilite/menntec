FROM node:20-alpine

WORKDIR /app

# Build tools for node-gyp
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install

COPY . .

# Ensure uploads directory exists
RUN mkdir -p public/uploads

# Generate Payload importMap before build
# Dummy env vars needed so the config can be loaded without a real DB
RUN DATABASE_URI=postgresql://dummy:dummy@localhost:5432/dummy \
    PAYLOAD_SECRET=dummy-build-secret-minimum-32-characters \
    npm run payload generate:importmap

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
