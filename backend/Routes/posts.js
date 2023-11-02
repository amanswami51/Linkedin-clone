const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

//ROUTE 1 :-Fetch all the Notes using: GET "/api/post/fetchallPosts"
router.post('/fetchallPosts', async (req, res)=>{
    try {
        const post = await Posts.find({username: req.body.username})
        res.json(post)
    } 
    catch(error){
        res.status(500).send("some error occured");
    }
});


//ROUTE 2 :- add a new Note using: POST "/api/post/addPosts"
router.post('/addPosts', async (req, res)=>{
    try {
        const {username, name, description, message, photoUrl} = req.body;
        const post = new Posts({
            username, name, description, message, photoUrl
        })
        const savePost = await post.save();
        res.json(savePost);
    }
    catch (error) {
        res.status(500).send("some error occured");
    }
});

module.exports = router;