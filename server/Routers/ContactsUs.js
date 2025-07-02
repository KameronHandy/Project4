import express from 'express'
import db from '../db_connections.js'

const Router = express.Router()

console.log('A')

Router.get('/', async (req,res)=>{
    try {
        const [result] = await db.query("SELECT * from contactus")
        console.log (result)
        res.status(200).json(result)

    }

    catch(err){
        res.status(500).send("error while selecting user database", err)
    }
})

Router.post("/", async (req,res)=>{
    try {
        const {Email,UserThoughts} = req.body
        await db.query("Insert Into user_information (Email,UserThoughts) values(?,?)",[Email,UserThoughts])
        res.status(200).send("Added")
    }
    catch (error){
        res.status(500).send("Server Error on login")
    }
})

console.log('C')

export default Router;