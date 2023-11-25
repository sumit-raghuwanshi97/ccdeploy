const mongoose = require('mongoose');
const URL = process.env.Database_URL;
const URL2 = process.env.Database_URL2;

async function connectToDatabse(){

    await mongoose.connect(URL,{
        dbName: "campus-connect"
    })
    .then(()=>{
        console.log("Database Connected")
    }
    )
    .catch((e)=>console.log(e));

     
    // if(flag)
    // {
    //     mongoose.connect(URL2)
    //     .then(()=>{
    //         console.log("Local Database Connected")
    //     }
    //     )
    //     .catch((e)=>console.log("An Error Occurred " + e));
    // }

}

module.exports = connectToDatabse;