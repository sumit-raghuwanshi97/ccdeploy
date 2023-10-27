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
        res.status(404).
        json({
            success : false,
            message : "User already exists",
        });
    };

    user.create(newUser);

    res.status(201)
    .json({
        success:true,
        message : `${newUser.name} Registered Successfully`,
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

    if(!user){
        res.status(400).json({
            success:false,
            message:"User does not exists",
        });
    }

    //Match password 
    const isMatch = await user1.matchPassword(password);

    if(!isMatch){
        res.status(400).json({
            success:false,
            message:"Incorect Password",
        });
    }

    //generate token 
    const token = await user1.generateToken();
     
    //send token to cookies
    res.status(200).cookie("token" , token).json({success:true,user1,token});

    } catch (error) {
        return res.status(201)
        .json({
            success :false,
            message : error.message,
        });
    }
    

    
}