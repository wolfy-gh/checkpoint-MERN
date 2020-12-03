const express = require("express")
require('dotenv').config()
const app=express()
const connec_db = require("./config/connect_db")

//BODY PARSER 
app.use(express.json())

//CONNECT TO DATABASE
connec_db()
//ROUTES
app.use("/api/user",require("./routes/user"))


//CONFIGURE PORT 
app.listen(process.env.PORT,(error)=>{
    if(error){
        console.log(`there is an error running the server ${error}`)
    }else {
        console.log("server is running")
    }
})