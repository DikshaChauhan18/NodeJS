//events module
//it is an builtin module in js

//where we csn create,fire,listen for our own modules.


//example1: registering for event to be fired only one time using once.

const EventsEmitter = require("events");
const event = new EventsEmitter();  //obj is created

event.on('sayMyName',()=>{            //defining event using event.on (funct)
    console.log("dikshaaaaaaaaaaaa");
});

event.emit('sayMyName');      //calling funct  

//event should be defined above the call.


//example2 : create an event emitter instance(obj) and register a couple of callbacks.
/*
const EventsEmitter = require("events");
const event = new EventsEmitter();  //obj is created

event.on('sayMyName',()=>{            //defining event using event.on (funct)
    console.log("diksha");
});
event.on('sayMyName',()=>{            //defining event using event.on (funct)
    console.log("chauhan");
});

event.emit('sayMyName');        //it will call both first diksha then chauhan.

*/
//example 3: registering for event with callback parameters.
/*
const EventsEmitter = require("events");
const event = new EventsEmitter();  //obj is created

event.on("checkPage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage",200,"okay");    //func(event ) with parameter.
*/