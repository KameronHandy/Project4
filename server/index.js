import express from "express";
import cors from 'cors';
import db from "./db_connections.js";
import userRouter from "./Routers/User.js";
import contactUsRouter from "./Routers/ContactsUs.js"
import questionsRouter from "./Routers/Questions.js";
import loginRouter from "./Routers/Login.js"
import categoriesRouter from "./Routers/Categories.js"

const app = express();

app.use(express.json())
app.use(cors());

app.use('/user', userRouter)
app.use('/questions', questionsRouter)
app.use('/categories', categoriesRouter)
app.use('contactUs', contactUsRouter)
app.use('/login', loginRouter)



app.get("/", (req,res)=>{
    res.send("the server is running")
})

app.listen(4000, ()=>{
    console.log("server is listening to port 4000")  
});


