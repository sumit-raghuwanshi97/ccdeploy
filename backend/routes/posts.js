const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../models/posts');

router.use(bodyParser.json());

  router.get('/getPost',async(req,res)=>{
    const showPost = await posts.find();
    res.json(showPost);
  });

  router.post('/createPost',(req,res)=>{
    const newPost = req.body;
    posts.create(newPost).then(()=>console.log("Post sent to database successfully"));
    res.status(201).json(newPost);
  });

  module.exports = router;