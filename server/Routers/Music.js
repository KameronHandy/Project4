import express from 'express'
import db from '../db_connections.js'

const Router = express.Router()

console.log('D')

Router.get('/', async (req,res)=>{
    try {
        const [result] = await db.query("SELECT * from music")
        console.log (result)
        res.status(200).json(result)

    }

    catch(err){
        res.status(500).send("error while selecting user database", err)
    }
})

Router.post("/", async (req,res)=>{
    try {
        const {Username,user_password} = req.body
        await db.query("Insert Into user_information (Q, A) values(?,?)",[Username,user_password])
        res.status(200).send("Welcome to Blank Trivia")
    }
    catch (error){
        res.status(500).send("Server Error on login")
    }
})
