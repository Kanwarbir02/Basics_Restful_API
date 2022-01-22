const express = require("express");
const res = require("express/lib/response");
const dotenv = require("dotenv").config();

const mongoose = require("mongoose");

const mongo_uri = process.env.DATABASE_URL

const app = express();

mongoose.connect(mongo_uri) 
    .then(() => {
        console.log("Databse connected succesfully");
    })
    .catch((err) => {
        res.status(200).json(err);
    })

app.get("/", (req,res) => {
    res.send("Home Page");
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})