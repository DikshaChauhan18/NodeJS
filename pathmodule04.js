const path = require("path");

//path name
console.log(path.dirname('C:/Users/diksha/Desktop/nodejs/pathmodule04.js'));

//extension name
console.log(path.extname('C:/Users/diksha/Desktop/nodejs/pathmodule04.js'));

//file name
console.log(path.basename('C:/Users/diksha/Desktop/nodejs/pathmodule04.js'));

//provide all basic details like root name, dir,base, etx, file name.
console.log(path.parse('C:/Users/diksha/Desktop/nodejs/pathmodule04.js'));

//getting one particular from parse
const mypath = path.parse('C:/Users/diksha/Desktop/nodejs/pathmodule04.js');
console.log(mypath.name);
console.log(mypath.ext);