/*
const add=(a,b)=>{    //a and b are parameters
    return a+b;
}
*/

//for single module
//module.exports=add;


//for multiple modules

const sub=(a,b)=>{    //a and b are parameters
    return (a-b);
}
const multi=(a,b)=>{    //a and b are parameters
    return a*b;
}
/*
module.exports.sub=sub;
module.exports.multi=multi;
*/

const name = "diksha";
module.exports={sub,multi,name};