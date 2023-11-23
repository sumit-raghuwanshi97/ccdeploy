const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    //Basic Required information
    name : {
        type : String,
        required : true ,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : true,
    },

    //other details 
    branch : String,
    graduationYear : Number,

    //Verification 
    isEmailVerified : {
        type : Boolean,
        default : false,
    },

    bookmarkedPost : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "post",
        }
    ]


});

//hashing the passoword before save on every modificaiton
userSchema.pre("save" ,async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
});

//comparing the hashed passowrd with the recieved passoword
userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password);
};

//generating token to identify user after login 
userSchema.methods.generateToken = async function(){
    return jwt.sign({_id : this._id} ,process.env.JWT_SECRET);
};

const user = mongoose.model('User' , userSchema);
module.exports = user;