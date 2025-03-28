import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import morgan from "morgan"
import authRoute from "./routes/authRoute.js"
//configure env
dotenv.config()

//database connection
connectDB()

//rest object
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/v1/auth/', authRoute)
 
app.get('/', (req,res)=>{
    res.send({
        message: "Welcome to E-commerce"
    })
})

const PORT = process.env.PORT ||8080


//Run and listen 
app.listen(PORT, ()=>{
    console.log(`Server running on PORT : http://localhost:${PORT}`);
    
})