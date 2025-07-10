import express from 'express'
import db from '../db_connections.js'

const Router = express.Router()




Router.post("/", async (req,res)=>{
    try {
        const {Username,user_password} = req.body
        await db.query("Insert Into user_information (Username, user_password) values(?,?)",[Username,user_password])
        res.status(200).send("Welcome to Blank Trivia")
    }
    catch (error){
        res.status(500).send("Server Error on login")
    }
})


export default Router;