const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
      },

      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
      },

      userName: {
        type: String,
        required: true,
      },

      post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
        required: true,
      },

      likes : [
        {
          type : mongoose.Schema.Types.ObjectId,
          ref : 'User',
          required:false,
        }
      ],

      replies : [
        {
          type : mongoose.Schema.Types.ObjectId,
          ref : 'replies',
          required : false ,
        }
      ],

      createdAt: {
        type: Date,
        default: Date.now,
      },
});

const comments = mongoose.model('comments',commentsSchema);
module.exports = comments;