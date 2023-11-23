const Post = require('../models/posts');
const User = require('../models/user');
const comments = require('../models/comments');
const { trace } = require('../routes/posts');


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
            const isBookmarked = post.bookmark.includes(req.user._id);

            return res
            .status(200)
            .json({
            success:true,
            isBookmarked,
            post,
            });
        }
        
        const posts = await Post.find().populate('owner');
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


    if(post.likes.includes(userId))
    {
       const index = await post.likes.indexOf(userId);
       await post.likes.splice(index,1);

       return res.status(201)
       .json(
        {
            success: true ,
            message: "Post unliked",
        });
    }
    else
    {
    await post.likes.push(userId);
    }

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
    //   const likers = post.likes.map((liker) => ({ username: liker.name }));
     const likers = post.likes;
     console.log(likers);


      let currLike = false; // Initialize currLike as false
      if (post.likes.some(liker => liker.equals(req.user._id))) {
      currLike = true; // Set currLike to true if the user ID is found in the post's likes
      }
  
      res.json({ likers ,currLike});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };


  exports.AddComment = async (req,res) => {
    
    try {
        
        const comment = {
            text : req.body.text,
            user : req.user._id,
            userName : req.user.name,
            post : req.body.post,
            createdAt : req.body.createdAt
        };
       
        //find the post on which the comment is added
        const post = await Post.findById(comment.post);

        //Add comment to the comment db and to the corresponding post 
        const { _id } = await comments.create(comment);
        post.comments.push(_id);
        await post.save();

        res.status(200)
        .json({
            success: true,
            _id,
            message: "Comment added successfully",
        });

    } catch (error) {

        return res.status(500)
        .json({
            success:false,
            message:error.message,
        });

    }

  };


  exports.getComments = async(req,res) => {

    const postId = req.params.id;
    const post = Post.findById(postId);

    if(!post){
        return res.status(400)
        .json({
            success:false,
            message:"Post not found",
        });
    }

    const { comments } = await post.populate('comments');

    res.status(200)
    .json({
        success:true,
        comments,
    });


  };


  exports.bookmarkPost = async (req,res) => {

    const postId = req.params.id;

    const post = await Post.findById(postId);

    if(!post)
    {
        return res.status(400)
        .json({
            success : flase,
            message : "Post not found",
        });
    }

    const user = req.user;
    const userId = req.user._id;
    const isBookmarked = post.bookmark.includes(userId);

    if(isBookmarked){

        const indexOfUser = await post.bookmark.indexOf(userId);
        const indexOfPost = await user.bookmarkedPost.indexOf(postId);

        post.bookmark.splice(indexOfUser,1);
        user.bookmarkedPost.splice(indexOfUser);
        
        await post.save();
        await user.save();

        return res.status(200)
        .json({
            success:true,
            isBookmarked,
            message:"Bookmark removed",
        });
    }

    await post.bookmark.push(userId);
    await user.bookmarkedPost.push(postId);

    await post.save();
    await user.save();

    return res.status(200)
    .json({
        success:true,
        isBookmarked,
        message:"Post Bookmarked",
    });

  }

  

