#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Create a directory for the backend if it doesn't exist
mkdir -p backend

# Navigate to the backend directory
cd backend

# Initialize a new Node.js project (skip if already done)
npm init -y

# Install Express.js (skip if already done)
npm install express

# Remove any unnecessary files (if applicable)
rm -rf routes controllers models

# Create the folder structure
mkdir -p routes
mkdir -p controllers
mkdir -p models
mkdir -p middleware
mkdir -p config
mkdir -p utils

# Create empty placeholder files for future development
touch app.js
touch server.js
touch routes/index.js
touch controllers/userController.js
touch models/userModel.js
touch middleware/authMiddleware.js
touch config/db.js
touch utils/helper.js

# Success message
echo "Backend setup completed successfully!"
