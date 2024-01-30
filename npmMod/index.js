//step1 :npm init in terminal.

//step2 : npm install chalk
const chalk = require('chalk')
console.log(chalk.green.inverse("Hello world!"));



//next: VALIDATOR
// step1 : npm install validator
const validator=require('validator')
const res = validator.isEmail("diksha@gehu.ac.in");
console.log(res);
const rres = validator.isEmail("diksha.com");
console.log(rres);
