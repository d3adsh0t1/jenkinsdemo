const express = require("express")

const app = express()

app.get('/',(req, res)=>{
    console.log("Index page logged in the logs")
    res.send("<h1>Welcome to the Node JS App</h1>")
})

app.get('/about',(req,res)=>{
    console.log("About Page logged in the logs")
    res.send("<h1>This is about page</h1>")
})

app.get('/home',(req,res)=>{
    console.log("Home Page logged in the logs")
    res.send("<h1>This is Home page</h1>")
})

app.get('/career',(req,res)=>{
    console.log("Career Page logged in the logs")
    res.send("<h1>This is Career page</h1>")
})

app.listen(3000)