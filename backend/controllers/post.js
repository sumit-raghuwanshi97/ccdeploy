const Post = require('../models/posts');
const User = require('../models/user');


exports.CreatePost = async (req,res) =>{
    
try {
        
    const newPostData = {
    owner: req.user._id,
    caption : req.body.caption,
    company : req.body.companyName,
    
    role : req.body.role,

    type :req.body.type,

    status: req.body.status,
    content : req.body.content,

    };

    const newPost = await Post.create(newPostData);

    res.status(201).json({
        success:true,
        post : newPost,
      });

} catch (error) {
    res.status(200).json({
        success : false ,
        message : error.message
    });
}
};


exports.getPosts = async (req,res) => {
    try {
    
        const posts = Post.find();
        
        return res
        .status(200)
        .json({
        success:true,
        posts,
        });

    } catch (error) {
        res.status(401).json({
            success : false ,
            message : error.message
        });
    }
};


