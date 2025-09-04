#!/bin/bash

# Production Build Script for Paygneo React Application

echo "🚀 Starting Production Build for Paygneo React Application..."

# Clean previous build
echo "🧹 Cleaning previous build..."
npm run clean

# Install dependencies if needed
echo "📦 Checking dependencies..."
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build for production
echo "🏗️ Building for production..."
npm run build:prod

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Production build completed successfully!"
    echo "📁 Build output: ./dist"
    echo "📊 Build size:"
    du -sh dist/
    echo ""
    echo "🌐 To preview the production build:"
    echo "   npm run preview:prod"
    echo ""
    echo "📋 Build files:"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi

