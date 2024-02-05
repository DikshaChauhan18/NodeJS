//web server : to access web page of any website.

//eg apache for php in xamppp

//in nodejs we can create our own web server, which handle http req asynchronously.
// therefore we use nodejs in backend which have its own web server.

//lets see how we can create it.

//step 1: to acquire or require http webser.

const http = require("http");

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
    else{
        res.writeHead(404)
        res.end("500 error page doesn't exist");
    }
    
});

//req is used to get info about current http req eg url,req,header and data.
//res object can be used to send a response for current http request.

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});

//for running:  in terminal write:  nodemon ownWebServer07.js you will get the output listening to the port no 8000
// && in browser write localhost:8000, it will print the output ie:hello from the other side