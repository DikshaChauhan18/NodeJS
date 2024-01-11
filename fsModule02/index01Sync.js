const fs = require("fs");

//write
//fs.writeFileSync("read.txt","welcome to core modules");
//fs.writeFileSync("read.txt","welcome to core modules "); //it over write data


//append
//fs.appendFileSync("read.txt"," thankyou");

//read
//const buffer_data = fs.readFileSync("read.txt"); //it will give buffer data
                                                // additional data type
                                                //use to store binary data
//data = buffer_data.toString();                                            
//console.log(data);

//rename

//fs.renameSync("read.txt","readwrite.txt");

//reading without buffer data
//const data = fs.readFileSync("readwrite.txt","utf8");
//console.log(data);

