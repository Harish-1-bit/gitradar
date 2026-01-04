# Use stable Node.js image (Debian-based, more reliable than Alpine)
FROM node:20-alpine

# Create app directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./


RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite’s default dev port
EXPOSE 4173

# Run Vite dev server with host flag (so it's accessible from your browser)
CMD ["npm", "run", "dev", "--", "--host"]


