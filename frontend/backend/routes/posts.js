const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../models/posts');
const { isAuthenticated } = require("../middlewares/auth");
const { CreatePost, getLikers , AddComment, getComments, bookmarkPost } = require("../controllers/post");
const { getPosts } = require("../controllers/post");
const { likeandUnlikePost } = require("../controllers/post");

router.use(bodyParser.json());

//routes
router.route('/createPost').post(isAuthenticated,CreatePost);
router.route('/getPosts').get(getPosts);
router.route('/getPosts/:id').get(isAuthenticated, getPosts);
router.route('/likePost/:id').get(isAuthenticated,likeandUnlikePost);
router.route('/getLikers/:id').get(isAuthenticated, getLikers);
router.route('/addComment').post(isAuthenticated, AddComment);
router.route('/getComment/:id').get(getComments);
router.route('/bookmarkPost/:id').get(isAuthenticated, bookmarkPost);



module.exports = router;