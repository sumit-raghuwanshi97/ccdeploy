const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.isAuthenticated = async (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader.split('=')[1]; 

    if(!token){
        return res.status(401).json({
            message : "Please login first"
        });
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    next();
};