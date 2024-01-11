const os = require("os");

//os architecture
console.log(os.arch());

//free memory
const fmem = os.freemem();
console.log(`${fmem/1024/1024/1024}`);

//total memory
const tmem = os.totalmem();
console.log(`${tmem/1024/1024/1024}`);

//hostname
console.log(os.hostname());

//platform
console.log(os.platform());

//home directory
console.log(os.homedir());

console.log(os.type());
