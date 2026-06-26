# Build Database Schema

## Overview

This project demonstrates creating a MongoDB database schema using Mongoose and configuring a database connection using environment variables.

## User Model

Fields:

* fullName → required, minimum length 3, maximum length 50
* email → required and unique
* age → minimum 18, maximum 100
* role → user/admin (default user)
* active → boolean (default true)

## Installation

npm install

## Environment Setup

Create `.env` and add:

MONGO_URI=your_connection_string

## Run

node index.js

## Validation

This project uses schema validation including:

* required
* minlength
* maxlength
* unique
* enum
* min
* max
* default
