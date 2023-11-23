const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { LikeandUnlikeComment, getLikes } = require('../controllers/comments');
const { isAuthenticated } = require('../middlewares/auth');


router.use(bodyParser.json());

//routes

router.route('/like&unlike/:id').get(isAuthenticated,LikeandUnlikeComment);
router.route('/getLikes/:id').get(isAuthenticated,getLikes);



module.exports = router;