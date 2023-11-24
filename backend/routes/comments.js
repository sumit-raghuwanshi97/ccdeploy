const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { LikeandUnlikeComment, getLikes, getReplies, addReply } = require('../controllers/comments');
const { isAuthenticated } = require('../middlewares/auth');


router.use(bodyParser.json());

//routes

router.route('/like&unlike/:id').get(isAuthenticated,LikeandUnlikeComment);
router.route('/getLikes/:id').get(isAuthenticated,getLikes);
router.route('/reply').post(isAuthenticated, addReply);
router.route('/getReplies/:id').get(isAuthenticated , getReplies);



module.exports = router;