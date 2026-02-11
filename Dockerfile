# --- Build Stage: Frontend ---
FROM node:20-alpine AS frontend-build

WORKDIR /app

# Copy frontend code
COPY client/package*.json ./client/
COPY client/ ./client/

# Install and build frontend
WORKDIR /app/client
RUN npm install
RUN npm run build

# --- Build Stage: Backend ---
FROM node:20-alpine AS backend-build

WORKDIR /app

# Copy backend code
COPY package*.json ./
COPY server/package*.json ./server/
COPY server/ ./server/
COPY drizzle.config.ts ./
COPY tsconfig.json ./
COPY tailwind.config.ts ./
COPY postcss.config.js ./
COPY vite.config.ts ./
COPY shared/ ./shared/
COPY db/ ./db/

# Copy built frontend from previous stage
COPY --from=frontend-build /app/client/dist ./dist/public

# Install backend dependencies
RUN npm install

# --- Production Image ---
FROM node:20-alpine

WORKDIR /app

# Copy backend and built frontend
COPY --from=backend-build /app ./

# Expose port
EXPOSE 3489

# Start server
CMD ["npm", "run", "start"]