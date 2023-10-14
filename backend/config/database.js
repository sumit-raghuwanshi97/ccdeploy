const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const URL = process.env.Database_URL;

function connectToDatabse(){

    mongoose.connect(URL,{
        dbName:"campus-connect",
    })
    .then(()=>console.log("Database Connected"))
    .catch((e)=>console.log("Error: " + e));
}

module.exports = connectToDatabse;