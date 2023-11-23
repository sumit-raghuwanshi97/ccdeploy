const app = require('./app');
const port = process.env.SERVER_PORT;
const connectToDatabse = require('./config/database');

connectToDatabse();

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});