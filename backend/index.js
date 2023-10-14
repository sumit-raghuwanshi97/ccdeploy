const express = require('express');
const app = express();
const port = 5000;
const connectToDatabse = require('./config/database');

connectToDatabse();

const postRoutes = require('./routes/posts');
app.use('/posts',postRoutes);

app.listen(port, () => {
    console.log('server is running on port 5000');
});
