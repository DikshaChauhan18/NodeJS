//stream.pipe() 


const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request",(req,res)=>{    
    const rstream = fs.createReadStream("input.txt");    //reading data
    rstream.pipe(res);                                   //printing in res, here res is our local host in realtime.
});

server.listen(8000,"127.0.0.1");

//best way.