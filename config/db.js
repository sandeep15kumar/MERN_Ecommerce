import mongoose from "mongoose";

//Script to connect DB

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongo ${conn.connection.host}`);
    } catch (error) {
        console.log(`connected to mongo ${error.message}`);
        
    }
}

export default connectDB
