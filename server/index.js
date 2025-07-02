import express from "express";
import cors from 'cors';
import db from "./db_connections.js";
import userRouter from "./Routers/User.js";
import mathRouter from "./Routers/Math.js";
import musicRouter from "./Routers/Music.js";
import theatreRouter from "./Routers/Theatre.js";
import sportsRouter from "./Routers/Sports.js";
import contactUsRouter from "./Routers/ContactsUs.js"

const app = express();

app.use(express.json())
app.use(cors());

app.use('/user', userRouter)
app.use('/math', mathRouter)
app.use('/sports', sportsRouter)
app.use('/theatre',theatreRouter)
app.use('/music', musicRouter)
app.use('contactUs', contactUsRouter)



app.get("/", (req,res)=>{
    res.send("the server is running")
})

app.listen(4000, ()=>{
    console.log("server is listening to port 4000")  
});


