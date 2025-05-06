#!/bin/bash
set -e

# Load environment variables (helps fix PATH issues)
source ~/.bashrc || true
source ~/.profile || true

# Ensure Node.js is installed
if ! command -v npm &> /dev/null; then
  echo "Node.js not found. Installing..."
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
  export PATH=$PATH:/usr/bin
else
  echo "Node.js is already installed."
fi

# Navigate to app and run deployment
cd next-app-cicd-prac
git pull origin main
npm install
npm run build
nohup npm run start > app.log 2>&1 &
