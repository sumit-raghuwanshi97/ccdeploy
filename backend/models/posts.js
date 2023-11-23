const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    
    caption : String,
    company : String,

    Role : {
        type :String,
        default : "Student",
    },

    type :String,

    status: String,
    content : String,

    createdAt : {
        type : Date,
        default : Date.now,
    },

    likes : [
       {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
       }
    ],

    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "comments",
        }
    ],

    bookmark : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        }
    ],

});

const posts = mongoose.model('posts' , postsSchema);

module.exports = posts;