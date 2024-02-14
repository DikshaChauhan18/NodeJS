const express = require("express");
const path = require("path");

const app = express();


//console.log(__dirname);
//console.log(path.join(__dirname,"/staticweb"));

const staticPath = path.join(__dirname,"/staticweb")

//building middle ware.
app.use(express.static(staticPath));


app.get("/",(req,res)=>{
console.log("hi");
});


app.listen(3000,()=>{
    console.log("listening");
})