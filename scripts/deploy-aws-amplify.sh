#!/bin/bash

# AWS Amplify Deployment Script
# This script deploys the Next.js app to AWS Amplify
# Prerequisites: AWS CLI configured, Amplify CLI installed

set -e

echo "🚀 Deploying to AWS Amplify"
echo "============================"
echo ""

# Check if Amplify CLI is installed
if ! command -v amplify &> /dev/null; then
    echo "❌ AWS Amplify CLI not found"
    echo "   Install it with: npm install -g @aws-amplify/cli"
    exit 1
fi

# Check if AWS CLI is configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS CLI not configured"
    echo "   Run: aws configure"
    exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

# Initialize Amplify if not already initialized
if [ ! -d "amplify" ]; then
    echo "🔧 Initializing Amplify..."
    amplify init
else
    echo "✓ Amplify already initialized"
fi

# Deploy
echo "🚀 Deploying to Amplify..."
amplify publish

echo ""
echo "✅ Deployment complete!"
echo "   Your app is live at the URL shown above"
