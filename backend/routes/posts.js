const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../models/posts');
const { isAuthenticated } = require("../middlewares/auth");
const { CreatePost } = require("../controllers/post");
const { getPosts } = require("../controllers/post");

router.use(bodyParser.json());

//routes
router.route('/createPost').post(isAuthenticated, CreatePost);
router.route('/getPosts').post(isAuthenticated, getPosts);


module.exports = router;