const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    userName: String,
    companyName: String,
    status: String,
    details: String,
});

const posts = mongoose.model('posts' , postsSchema);

module.exports = posts;