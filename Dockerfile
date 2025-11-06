# Use official Node.js 18 LTS image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Next.js app
RUN npm run build

# ---- Production image ----
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/node_modules ./node_modules

# Expose port 3000
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]
