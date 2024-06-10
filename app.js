const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const product =require("./models/product")

const app = express()
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/contact",(req,res)=>{
    res.send("welcome to my contact psage")
})

app.listen(8009,()=>{
    console.log("server started")
})