import mongoose from "mongoose";
 
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    address :{
        type:String,
        require:true
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true}
)


export default mongoose.model('users', userSchema)