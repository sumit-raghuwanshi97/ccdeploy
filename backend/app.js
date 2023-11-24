const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const commentRoute = require('./routes/comments');

dotenv.config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


//routes
app.get('/',(req,res)=>{
  res.send("Api's Campus-Connect");
  res.end();
})
app.use('/posts',postRoutes);
app.use('/user',userRoutes);
app.use('/comments',commentRoute);

module.exports = app;
