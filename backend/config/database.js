const mongoose = require('mongoose');

function connectToDatabse(){

    mongoose.connect("mongodb://localhost:27017",{
        dbName:"campus-connect",
    })
    .then(()=>console.log("Database Connected"))
    .catch((e)=>console.log("Error: " + e));
}

module.exports = connectToDatabse;