const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");

dotenv.config();

//middlewares
app.use(express.json());
app.use(cookieParser());


//routes
app.use('/posts',postRoutes);
app.use('/user',userRoutes);

module.exports = app;
