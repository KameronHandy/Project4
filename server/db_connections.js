import mysql from 'mysql2/promise'

const db = await mysql.createConnection ( {
    host:'localhost',
    user:'root',
    port:'3006',
    password:'Katherinehasitall1234!',
    database:'project4_testdatabase'

})





db.connect((error)=> {
    if (error){
        console.log ("error on DBconnect", error)
        return;
    }
    console.log("connected to user_information Database")
})

export default db;