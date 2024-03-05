const mongoose = require('mongoose');

//connection creation and creating new db if not already exist.
mongoose.connect("mongodb://localhost:27017/learningmongoose")
.then(()=>console.log("connection successfull.."))
.catch((err)=>console.log(err));


//schema : a mongo schema defines the structure of the document, default values, validdators etc.

const student = new mongoose.Schema({
    name:String,
    id:{
        type:Number,
        required:true
    },
    course:String,
    dob:{
        type:Date,
        default:Date.now
    }
});

//Mongoose model is a wrapper on the Mongoose Schema.
//it provide an interface to the database for creating,quering,deleting records etc.


//collection creation
const studentModel = mongoose.model("student",student);

//creating doc or insert


//older way
/*
const newStudent = new studentModel({
    name:"diksha",
    id:21010242,
    course:"CSE",
    dob:'2004-07-18'
});

newStudent.save() //promise
*/
/*
//another way :   //async and await.
const createDocument = async () => {
    try{
        const newStudent = new studentModel({
            name:"abc",
            id:21010243,
            course:"CSE",
            dob:'2003-01-8'
        });
        await newStudent.save();
        console.log(newStudent);
    }
    catch(err){
        console.log(err);
    }
}

createDocument();

*/

//INSERT MANY 

const createDocument = async () => {
    try{
        const newStudent1 = new studentModel({
            name:"def",
            id:21010244,
            course:"ECE",
            dob:'2003-01-8'
        });
        const newStudent2 = new studentModel({
            name:"ghi",
            id:21010245,
            course:"ME",
            dob:'2003-01-8'
        });
        const result = await studentModel.insertMany([newStudent1,newStudent2]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

//createDocument();


//READING THE DOCUMENT
/*
// reading whole document
const getDocument = async () =>{
    const result = await studentModel.find();
    console.log(result);
}

getDocument();
*/

/*
//reading with conditions
const getDocument = async () =>{
    const result = await studentModel.find({name:"diksha"});
    console.log(result);
}

getDocument();
*/
/*
// reading only names
const getDocument = async () =>{
    const result = await studentModel.find().select({name:1});

    console.log(result);
}

getDocument();
*/

// Comparision Operator
/*
//%gt : greater than
const getDocument = async () =>{
    const result = await studentModel
    
    .find({id:{$gt : 21012043}})
    .select({name:1});

    console.log(result);
}

getDocument();
*/

//$gte, $eq, $lt, $lte, $ne 
//$in : array 
//$nin : not in array


// LOgical Operator
