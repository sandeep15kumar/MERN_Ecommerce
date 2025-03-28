import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

//Protected routes token based

export const requireSignIn =async(req, res, next)=>{
    console.log("req.headers:",req.headers);
    
  const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
  console.log("DECODED JWD OUTPUT:", decode);
  
  req.user = decode
  next()
  
}

export const isAdmin =async(req,res,next)=>{
try {
    const user = await userModel.findById(req.user._id)
    if(user.role!=1){
        return res.status(401).send({
            success: false,
            message: 'Unauthorised access'
        })
    }
    else{
        next()
    }
} catch (error) {
    console.log(error);
    res.status(401).send({
        success:false,
        error,
        message:'Error in admin middleware'
    })
}
}