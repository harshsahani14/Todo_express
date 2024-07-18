const express = require('express');
const server = express();
require('dotenv').config();
const Port = process.env.PORT;
const dbConnect = require('./config/database');
const { createTodo } = require('./routes/createTodo');

server.use(express.json());

server.listen(Port,()=>{
    console.log(`Server sucessfully at port ${Port}`)
})

dbConnect();

// Mount all the routes
server.use("v1",createTodo)

// Default route
server.get("/",(req,res)=>{
    res.send("Home page");
})