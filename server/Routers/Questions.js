import express from 'express'
import db from '../db_connections.js'

const Router = express.Router()


Router.get('/:id', async (req,res)=>{
    try {
        const [result] = await db.query("SELECT * from questions WHERE idCategory=4")
        console.log (result)
        res.status(200).json(result)

    }

    catch(err){
        res.status(500).send("error while selecting user database", err)
    }
})

Router.post("/", async (req,res)=>{
    try {
        const {Q,A, categoryID} = req.body
        console.log (req.body)
        await db.query("Insert Into questions (Q,A,idCategory ) values(?,?, ?)",[Q,A, categoryID])
        res.status(200).send("Welcome to Blank Trivia")
    }
    catch (error){
        res.status(500).send("Server Error on login")
    }
})



export default Router;