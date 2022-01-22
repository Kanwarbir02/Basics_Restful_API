const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", (req,res) => {
    res.send("On the posts router");
})

router.post("/", (req,res) => {
    const post = new Post({
        title: req.body.title,
        desc: req.body.desc
    });
    console.log(post)
    
    post.save()
        .then(() => {
            console.log("Success adding post")
        })
        .catch((err) => {
            console.log("failed post", err);
        })
    

});

router.post(":postID", async(req,res) => {

    const postFound = await Post.findById(req.params.postID);

    res.json(postFound);
})

router.delete(":postID", async(req,res) => {
    
    const postDeleted = await Post.findById(req.params.postID);

    res.json(postDeleted);
})


module.exports = router;