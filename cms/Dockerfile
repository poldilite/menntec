FROM node:20-alpine

WORKDIR /app

# Build tools for node-gyp
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install

COPY . .

# Ensure uploads directory exists
RUN mkdir -p public/uploads

# Payload reads importMap before writing — create empty placeholders first
RUN printf 'export const importMap = {}\n' > 'src/app/(payload)/admin/importMap.js' && \
    printf 'export const importMap = {}\n' > 'src/app/(payload)/importMap.js'

# Generate Payload importMap
RUN DATABASE_URI=postgresql://dummy:dummy@localhost:5432/dummy \
    PAYLOAD_SECRET=dummy-build-secret-minimum-32-characters \
    npm run payload generate:importmap

# Prepend @ts-nocheck so TypeScript skips type inference on generated files
RUN { printf '// @ts-nocheck\n'; cat 'src/app/(payload)/admin/importMap.js'; } > /tmp/im_admin.js && \
    mv /tmp/im_admin.js 'src/app/(payload)/admin/importMap.js' && \
    { printf '// @ts-nocheck\n'; cat 'src/app/(payload)/importMap.js'; } > /tmp/im_root.js && \
    mv /tmp/im_root.js 'src/app/(payload)/importMap.js'

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
