const express = require ("express")
const app= express();
const mongoose = require('mongoose');
const cors = require('cors')
require("dotenv").config();
const registerController = require('./routes/register&login')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.listen(3001,(err)=>{
    if(!err){
        console.log("Server connected succesfully at 3001")
    }
    else{
        console.log(err)
    }
});

mongoose.connect("mongodb://localhost/Todo-assign",()=>{
    console.log("connected to db")
},(err)=>{
    console.log(err)
});

app.use('/userRegister', registerController);


app.get("/",(req,res)=>{
    res.status(200).send("Todo-Mern Application")
},(err)=>{
    console.log(err)
})