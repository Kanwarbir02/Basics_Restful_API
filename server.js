const express = require("express");
const res = require("express/lib/response");
const dotenv = require("dotenv").config();

const mongoose = require("mongoose");

const mongo_uri = process.env.DATABASE_URL;

const app = express();

app.use(express.json())

//Middleware
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true}) 
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