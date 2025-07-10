import express from 'express'
import db from '../db_connections.js'

const Router = express.Router()



Router.post("/", async (req,res)=>{
    try {
        const {Username,user_password} = req.body
        console.log(Username, user_password)


        const [result]= await db.query("SELECT * FROM user_information WHERE Username =? AND user_password=?", [Username, user_password])
        console.log(result)
        res.status(200).send("Welcome Back to Blank Trivia")
    }
    catch (error){
        res.status(500).send("Server Error on login")
    }
})


export default Router;