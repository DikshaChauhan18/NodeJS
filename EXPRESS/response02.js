//HOW TO SEND HTML AND JSON DATA AS A RESPONSE USING EXPRESS JS


const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.write("<h1>Hello diksha this side</h1>");
    res.write("<h1>Hello</h1>");
    res.end();
});
/*
app.get("/jsondata",(req,res)=>{
    res.send(
        [{
        id:1,
        name:"diksha",
    }]);
});
*/
//can also be as using json instead of send.
app.get("/jsondata",(req,res)=>{
    res.json(
        [{
        id:1,
        name:"diksha",
    }]);
});

//diff :using json it can convert non objects like null,undefined which are not valid json.
//therefore advantage of using json.



app.listen(8000,()=>{
    console.log("working fine");
})