const mongoose = require('mongoose');
const URL = process.env.Database_URL;
const URL2 = process.env.Database_URL2;
const flag = true;

async function connectToDatabse(){

    await mongoose.connect(URL2,{
        dbName:"campus-connect",
    })
    .then(()=>{
        console.log("Database Connected")
        flag = false;
    }
    )
    .catch((e)=>console.log("There is a problem connecting to the online database"));

     
    if(flag)
    {
        mongoose.connect(URL2)
        .then(()=>{
            console.log("Local Database Connected")
        }
        )
        .catch((e)=>console.log("An Error Occurred " + e));
    }

}

module.exports = connectToDatabse;