//API : Application Programming interface
// it is a software, allow two software to commmunicate with each other.
//it is like a service that request for the data.






//synchronous way

const fs = require("fs");
const http = require("http");




const server= http.createServer((req,res)=>{  //request and response as parameter.


    const data = fs.readFileSync("userapi.json", "utf-8");
    const objdata=JSON.parse(data);

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
        
            

           // res.end(data); //whole data of json file
           res.writeHead(200,{"content-type":"application/json"});
           //res.end(objdata[0].title);
           res.end(objdata[0].body);
       
        
    }
    else{
        res.writeHead(404)
        res.end("500 error page doesn't exist");
    }
    
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});