const user = require('../models/user');

exports.RegisterUser = async (req,res) => {
try {

    const newUser = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        branch : req.body.branch,
        graduationYear: req.body.graduationYear,
    };

    if(!newUser.email || !newUser.password)
    {
        res.status(404).
        json({
            success:false,
            message:"Please Enter email and password",
        });
    }

    const existing_user = await user.findOne({ email : req.body.email });
    
    if(existing_user){
        res.status(201).
        json({
            success : false,
            message : "User already exists",
        });
    };

    user.create(newUser);

    res.status(201)
    .json({
        success:true,
        message : `Registered Successfully`,
    });

} catch (error) {
     res.status(500)
    .json({
        success : false,
        message : error.message,
    });
}

};


exports.loginUser = async (req,res) => {

    try {
        const { email , password } = req.body;

    if(!email || !password){
        return res.status(201)
        .json({
            success : false ,
            message : "Invalid Username or password"
        });
    }

    const user1 = await user.findOne( {email} );
    
   
    if(!user1){
        return res.status(404).json({
            success:false,
            message:"User does not exists",
        });
       
    }
    
    console.log(user1);
    //Match password 
    const isMatch = await user1.matchPassword(password);

    if(!isMatch){
        res.status(404).json({
            success:false,
            message:"Incorrect Password !",
        });
    }
    else{
    //generate token 
    const token = await user1.generateToken();
     
    //send token to cookies
    res.status(200).cookie("token" , token)
    .json(
        {
        success:true,
        message: `hi! ${user1.name} you are logged in successfully`,
        user1,
        token,
        }
        );
    }

    } catch (error) {
        return res.status(201)
        .json({
            success :false,
            message : error.message,
        });
    }
    
};


exports.getUser = async (req,res) => {

    const userId = req.params.id ;

    const userInfo = await user.findById(userId);
    console.log(userInfo);

    res.status(200)
    .json({
        success:true,
        userInfo,
    });
};


exports.getLoggedInUser = async (req, res) => {

   try {
    
    const User = req.user;

    res.status(200)
    .json({
        success:true,
        User,
    });

   } catch (error) {
    
    res.status(500)
    .json({
        success:false,
        error,
    });
    
   }
}