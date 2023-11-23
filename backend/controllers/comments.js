const Post = require('../models/posts');
const User = require('../models/user');
const Comment = require('../models/comments');


exports.LikeandUnlikeComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const comment = await Comment.findById(commentId);

        const userId = req.user._id;

        const isLiked = await comment.likes.includes(userId);
        if(isLiked)
        {
            const index = await comment.likes.indexOf(userId);
            await comment.likes.splice(index,1);
            await comment.save();

            return res.status(200)
            .json({
                successs:true,
                message : "Comment Unliked",
            });
        }

        await comment.likes.push(userId);
        await comment.save();

        res.status(200)
        .json({
            success:true,
            message:"Comment Liked",
        });

    } catch (error) {
        res.status(500)
        .json({
            success:false,
        });
    }
};


exports.getLikes = async (req , res) => {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);

    const Likedby =  await Comment.findById(commentId).populate("likes");
    const userLike = await comment.likes.includes(req.user._id);
    console.log(userLike);

    res.status(200)
    .json({
        success:true,
        Likedby,
        userLike,
    });
}


