# Build Database Schema

## Project Overview

This project demonstrates how to build a MongoDB database schema using Mongoose and configure database access using environment variables.

## Folder Structure

build-database-schema/

* config/

  * db.js
* models/

  * User.js
* index.js
* .env.example
* package.json

## User Model

The project includes a User model with the following fields:

* fullName → String, required, minimum length 3, maximum length 50
* email → String, required, unique
* age → Number, minimum 18, maximum 100
* role → String, allowed values: user or admin, default is user
* active → Boolean, default true

## Installation

Install dependencies:

npm install

## Environment Setup

Create a `.env` file and add:

MONGO_URI=your_database_connection_string

`.env.example` is included as a template and should not contain secrets.

## Run

Start the application:

node index.js

## Validation

This project uses Mongoose validation including:

* required
* enum
* minlength
* maxlength
* min
* max
* unique
* default
