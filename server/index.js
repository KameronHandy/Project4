import express from "express";
import cors from 'cors';
import db from "./db_connections.js";
import userRouter from "./Routers/User.js";

const app = express();

app.use(cors());

app.use('/user', userRouter)

app.get("/", (req,res)=>{
    res.send("the server is running")
})

app.listen(4000, ()=>{
    console.log("server is listening to port 4000")  
});


