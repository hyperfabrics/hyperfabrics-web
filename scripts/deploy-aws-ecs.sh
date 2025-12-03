#!/bin/bash

# AWS ECS/Fargate Deployment Script
# This script builds a Docker image and deploys to ECS
# Prerequisites: AWS CLI configured, ECR repository, ECS cluster and service

set -e

echo "🚀 Deploying to AWS ECS/Fargate"
echo "==============================="
echo ""

# Configuration (update these values)
AWS_REGION="${AWS_REGION:-us-east-1}"
ECR_REPOSITORY="${AWS_ECR_REPO:-fazezero-website}"
ECS_CLUSTER="${AWS_ECS_CLUSTER:-fazezero-cluster}"
ECS_SERVICE="${AWS_ECS_SERVICE:-fazezero-service}"
AWS_ACCOUNT_ID="${AWS_ACCOUNT_ID:-}"

# Get AWS account ID if not set
if [ -z "${AWS_ACCOUNT_ID}" ]; then
    AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
fi

ECR_URI="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}"

# Check if AWS CLI is configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS CLI not configured"
    echo "   Run: aws configure"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "❌ Docker is not running"
    exit 1
fi

# Login to ECR
echo "🔐 Logging into ECR..."
aws ecr get-login-password --region "${AWS_REGION}" | \
    docker login --username AWS --password-stdin "${ECR_URI}"

# Build Docker image
echo "📦 Building Docker image..."
docker build -t "${ECR_REPOSITORY}:latest" .

# Tag image
docker tag "${ECR_REPOSITORY}:latest" "${ECR_URI}:latest"
docker tag "${ECR_REPOSITORY}:latest" "${ECR_URI}:$(date +%Y%m%d-%H%M%S)"

# Push to ECR
echo "📤 Pushing to ECR..."
docker push "${ECR_URI}:latest"
docker push "${ECR_URI}:$(date +%Y%m%d-%H%M%S)"

# Update ECS service
echo "🔄 Updating ECS service..."
aws ecs update-service \
    --cluster "${ECS_CLUSTER}" \
    --service "${ECS_SERVICE}" \
    --force-new-deployment \
    --region "${AWS_REGION}"

echo ""
echo "✅ Deployment complete!"
echo "   ECR Repository: ${ECR_URI}"
echo "   ECS Cluster: ${ECS_CLUSTER}"
echo "   ECS Service: ${ECS_SERVICE}"
