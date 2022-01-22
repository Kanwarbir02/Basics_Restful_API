const express = require("express");
const res = require("express/lib/response");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser")

const mongoose = require("mongoose");

const mongo_uri = process.env.DATABASE_URL;

const app = express();

app.use(bodyParser.json())

//Middleware
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

mongoose.connect("mongodb://localhost:27017/restful", {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => {
        console.log("Databse connected succesfully");
    })
    .catch((err) => {
        res.json(err);
    })

app.get("/", (req,res) => {
    res.send("Home Page");
})

app.post("/", (req,res) => {
    console.log(req.body)
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})