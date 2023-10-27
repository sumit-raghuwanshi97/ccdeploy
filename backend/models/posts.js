const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
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
});

const posts = mongoose.model('posts' , postsSchema);

module.exports = posts;