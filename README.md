Project Setup

Introduction

This project is built using Node.js, Express, EJS, and Mongoose. The purpose of this repository is to provide a basic setup for a web application using these technologies.

Prerequisites

Before starting, ensure you have the following installed:

Node.js (Download from nodejs.org)

MongoDB (Install from mongodb.com)

Installation

Follow these steps to set up the project:

Initialize a new Node.js project:

npm init -y

Install required dependencies:

npm install express ejs mongoose

Create necessary folders and files:

mkdir views
touch index.js

Set up index.js with the required modules:

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

Folder Structure

/project-root
│── index.js
│── package.json
│── views/
│   └── index.ejs
│── node_modules/

Running the Project

Start the server with:

node index.js

The app will be available at http://localhost:3000/.
