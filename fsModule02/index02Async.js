const fs= require("fs");

/*
fs.writeFile("read.txt","welcome to asyncronous file system",
(err)=>{
    console.log("file is created");
    console.log(err);
});
*/

//append
/*
fs.appendFile("read.txt"," \n welcome to node js",(err)=>{
    console.log("appended");
    console.log(err);
});
*/

//read
/*
fs.readFile("read.txt","utf8",(err,data)=>{
    console.log(data);
    console.log(err);
});
*/


//rename
/*
fs.rename("read.txt","asynW-R",(err)=>{
    console.log("rename done");
});
*/

//delete
//using unlike -> del file
//rmdir ->del folder