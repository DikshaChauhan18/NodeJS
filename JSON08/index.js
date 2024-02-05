//JSON : javascript object notation.
//it is a lightweight format for storing and transporting data.
//used when data is sent from a server to a web page.


// here is a object.
const bioData = {
    name:"diksha",
    age :20,
};

//console.log(bioData.name);

//now lets convert the object into json

// 1. using stringify
const jsonData = JSON.stringify(bioData);
//console.log(jsonData);   //cannot do console.log(jsonData.name); it will give undefined 
                           // because output format: {"name":"diksha","age":20}

//2.parse
const objData=JSON.parse(jsonData);
console.log(objData);                  //output format : { name: 'diksha', age: 20 }
console.log(objData.name);             // it will work




