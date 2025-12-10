#!/bin/bash
# Build script for Vercel deployment

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies and build
cd ../frontend
npm install
npm run build

# Copy build to backend
cd ..
mkdir -p backend/build
cp -r frontend/build/* backend/build/

echo "Build completed successfully!"

