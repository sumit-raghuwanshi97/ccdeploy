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
    
        const {id} = req.params
        if(id)
        {
            const post = await Post.findOne({ _id : id });
            return res
            .status(200)
            .json({
            success:true,
            post,
            });
        }
        
        const posts = await Post.find();
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


//like and unlike post 

exports.likeandUnlikePost = async (req,res) => {
    try {
    console.log(req.user._id);
    const postId = req.params.id;
    console.log(postId);
    const post = await Post.findOne({ _id : postId}); 
     
    if(!post){
        console.log("post not found");
        res.status(200).json({message:"not found",});
    }

    const userId = await req.user.id;
    await post.likes.push(userId);

    await post.save();

     res.status(200)
     .json({
        success:true,
        message:"Post Liked",
     });

    } catch (error) {
        console.log(error);
        res.status(404)
        .json({
            message: error.message,
        });
    }

};


exports.getLikers = async (req, res) => {
    try {
      const postId = req.params.id; 
  
      const post = await Post.findById(postId).populate('likes');
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // Extract the usernames from the likers
      const likers = post.likes.map((liker) => ({ username: liker.name }));

      let currLike = false; // Initialize currLike as false
      if (post.likes.some(liker => liker.equals(req.user._id))) {
      currLike = true; // Set currLike to true if the user ID is found in the post's likes
      }
  
      res.json({ likers ,currLike });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };

