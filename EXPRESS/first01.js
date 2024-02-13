//step 1:npm init
//step 2:npm install express


var express = require("express");      //req express module.

var app = express();                  //creating express app

//app.get(route,callback) which is

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.get("/about",(req,res)=>{
    res.send("<h1> Diksha Chauhan </h1>");
});


app.listen(5000,()=>{
    console.log("listening");
})

/*
API
get - read
post - create
put - update
del - delete

*/