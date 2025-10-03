import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(()=>{         // promise is returned by the async function connectDB
    app.on(("error",(error)=>{      //check for errors in express app connection with mongodb
        console.log("error ", error);
    }))
    app.listen(process.env.PORT||8000,()=>{             //start server
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongodb connection error !!!", error);
})