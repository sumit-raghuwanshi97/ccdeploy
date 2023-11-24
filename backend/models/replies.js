const mongoose = require('mongoose');


const replySchema = new mongoose.Schema({

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

      comment : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comments',
        required: true,
      },

      likes : [
        {
          type : mongoose.Schema.Types.ObjectId,
          ref : 'User',
          required:false,
        }
      ],

      createdAt: {
        type: Date,
        default: Date.now,
      },
});

const replies  = mongoose.model('replies' , replySchema);
module.exports = replies;