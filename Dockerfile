# Use Node.js 18
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies with npm
RUN npm ci --frozen-lockfile --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "preview", "--", "--host", "::", "--port", "3000"]
