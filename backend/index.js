const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const interviewRoutes = require('./routes/interviews');
app.use('/api/interviews',interviewRoutes);

app.listen(port, () => {
    console.log('server is running on port 5000');
});
