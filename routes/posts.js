const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");

router.get("/", (req,res) => {
    res.send("On the posts router");
})

router.post("/", async (req,res) => {
    const post = new Post({
        title: req.body.title,
        desc: req.body.desc
    });
    console.log(post)
    const savedPost = await post.save();
    
    console.log(savedPost)
})

module.exports = router;