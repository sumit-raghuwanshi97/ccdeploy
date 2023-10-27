const express = require('express');
const { RegisterUser } = require('../controllers/user');
const { loginUser } = require("../controllers/user");
const router = express.Router();

router.route('/register').post(RegisterUser);
router.route('/login').post(loginUser);

module.exports = router ;