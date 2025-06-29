import express from "express";
import cors from 'cors';
import db from "./db_connections.js";
const app = express();

app.use(cors());

app.listen(4000, ()=>{
    console.log("server 4000")  
});


