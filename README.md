# Build Database Schema

## Overview

This project demonstrates creating a MongoDB database schema using Mongoose and connecting to MongoDB using environment variables.

## User Schema

Fields included:

* fullName → String (required, min 3, max 50)
* email → String (required, unique)
* age → Number (18–100)
* role → Enum: user/admin (default: user)
* active → Boolean (default: true)

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env` file:

```env
MONGO_URI=your_connection_string
```

## Run Project

```bash
node index.js
```
# build-database-schema
# build-database-schema
