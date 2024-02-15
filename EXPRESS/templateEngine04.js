//Template engine is used to add dynamic data in our website.
//we are doing it here using hub, using hbs, index.hbs extension for making html files..
//here it is compulsory to make views folder for making our html file. 


//we can customize it using app.set("views", templatePath)
//where templatePath = path.join(__dirname,"NewFolderLocationOrNAME")


const express = require("express");
const app = express();


//set the view engine.
app.set('view engine','hbs');

//template engine route
app.get("/",(req,res)=>{
    res.render('index') 
});

//similarly we can send dynamuc data from server using {{}}.
//i.e.  res.render('index',{{}}) 


app.listen(3000,()=>{
    console.log("listening");
})