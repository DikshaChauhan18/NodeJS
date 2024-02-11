// step 1: npm install nodemailer.
// step 2: npm install express.
const express = require("express");
const app = express();


const sendMail = require("./controllers/sendMail");  // importing sendMail.


app.get("/",(req,res)=>{
    res.send("I am a Server");
});

app.get("/sendmail",sendMail); //if we type localhost:5000/sendmail in browser, it will call sendMail.js from controllers which we aready had imported

const start= async()=>{
    try{
        app.listen(5000,()=>{
            console.log("i am listening");       //running our server
        });
    }
    catch(error){}
    
};

start(); 