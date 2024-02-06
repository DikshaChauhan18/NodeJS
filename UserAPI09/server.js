const fs = require("fs");
const http = require("http");
const { dirname } = require("path");

const server= http.createServer((req,res)=>{  //request and response as parameter.
    //console.log(req.url);
    if(req.url=="/"){
        res.end("hello from the other side");
    }
    else if(req.url == "/about"){
        //res.end("hello from the about side");
        //also ca(n be doone as
        res.write("hello from the about side");
        res.end();
    }
    else if(req.url == "/contact"){
        res.end("hello from the contact side");
    }
    else if(req.url == "/userapi"){
        fs.readFile("userapi.json","utf-8",(err,data)=>{
            //console.log(err);
            //console.log(data);  //print json file in terminal

            res.end(data); //print json file in server.

            /*
            const objdata = JSON.parse(data);  
            res.end(objdata[0].title);       //print title of 0th index  value;
            */
        });
        
    }
    else{
        res.writeHead(404)
        res.end("500 error page doesn't exist");
    }
    
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});


// in asynchronous way it is reading file again and again if any changes occurs.
//so better to user sync way. which is done in index.js