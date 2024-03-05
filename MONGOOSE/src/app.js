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
//$and $not $nor $or  
/*
//or
const getDocument = async () =>{
    const result = await studentModel
    .find({$or :[{name:"diksha"},{course:"ME"}]})
    console.log(result);
}

getDocument();
*/


//SORTING AND COUNTING
/*
//counting
const getDocument = async () =>{
    const result = await studentModel
    .find()
    .select({name:1})
    .countDocuments();
    console.log(result);
}
getDocument();
*/
/*
//sorting

const getDocument = async () =>{
    const result = await studentModel
    .find()
    .select({name:1})
    .sort({name:1})  //1 : ascending  //-1 descending
    console.log(result); 
}
getDocument();
*/


//UPDATION:
/*
const updateDocument = async (_id) =>{
    try{
        const result= await studentModel.updateOne({_id },{$set : {name:"xyz"}});
        console.log(result);
    }
    
    catch(err){console.log(err);}
    
}
updateDocument("65e5574c2c57afefb6d827ba");

*/
//similarly updateMany



//DELETION

/*
const deleteDocument = async (_id) =>{
    try{
        const result = await studentModel.deleteOne({_id});
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
}

deleteDocument("65e5574c2c57afefb6d827b9");
*/
const deleteDocument = async (_id) =>{
    try{
        const result = await studentModel.findByIdAndDelete({_id});   //it will give detail of obj that is being deleted. 
        //same we can use for udate to show details in terminal. it will give the record that is stored in db not the updates one.
        
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
}

deleteDocument("65e554d26b4ee1a54ee725f6");

//also have del many.
