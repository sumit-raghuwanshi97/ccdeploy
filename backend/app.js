const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const commentRoute = require('./routes/comments');
const cors = require('cors');

dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


//routes
app.get('/',(req,res)=>{
  res.send("Welcome to Campus-Connect Backend Service for Api's Connection");
  res.end();
})
app.use('/posts',postRoutes);
app.use('/user',userRoutes);
app.use('/comments',commentRoute);

module.exports = app;
