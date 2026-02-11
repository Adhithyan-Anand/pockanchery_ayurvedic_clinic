# --- Build Stage ---
    FROM node:20-alpine AS build

    WORKDIR /app
    
    # Copy dependency files
    COPY package*.json ./
    
    # Install dependencies
    RUN npm install
    
    # Copy full project
    COPY . .
    
    # Build the frontend (Vite build)
    RUN npm run build
    
    # --- Production Stage ---
    FROM node:20-alpine
    
    WORKDIR /app
    
    # Copy built app from build stage
    COPY --from=build /app ./
    
    # Expose your server port
    EXPOSE 3489
    
    # Start the backend server
    CMD ["npm", "run", "start"]
    