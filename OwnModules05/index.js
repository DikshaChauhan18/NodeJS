//for single module

//const add = require('./export')
//console.log(add(24355,3875));    //2 numbers are arguments

//for multiple module
/*
const oper = require('./export');
console.log(oper);

console.log(oper.multi(6,4));
console.log(oper.sub(10,5));
*/

//instead of writing oper.multi,oper.sub we can directly do that by:

const {sub,multi,name}=require('./export');

console.log(multi(5,5));
console.log(sub(4,2));
console.log(name);