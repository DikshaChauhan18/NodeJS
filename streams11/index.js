// streams in node js

//streams are the objects, that can read data from the source and write data to the destination in continuous fashion.
//streaming is  (listening and watching videos in real time(online) instead of downloading).

// there are 4 types of stream ::
// 1)readable : for read operation
// 2)writeable  : for write
// 3)duplex : read + write
// 4)transform : type of duplex where output is computer based on input.

//each stream is eventEmitter instance, and throws diff instances of times.

//commonly used events:

//1;  data : fired when data is avail to read
//2 : end: when no more data is avail to read.
//3 : error :during receiving data.
//4 : finish : when deleted from system (flushed from system).


const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request",(req,res)=>{
    
    const rstream = fs.createReadStream("input.txt");
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
        
    });
    rstream.on('end',(end)=>{
        res.end();
    });
});

server.listen(8000,"127.0.0.1");