import mongoose from "mongoose";
//import isEmail from "validator/lib/isemail";
mongoose.connect("mongodb://127.0.0.1:27017/studentRegistration")
.then(()=>{
    console.log("Success to register or connect to mongodb.......")
}).catch((err)=>{
console.log(err)
})

const studentSchema=new mongoose.Schema({
 firstname:{
type:String,
require:true
 },
 lastname:{
    type:String,
    require:true
 },
 email:{
    type:String,
    require:true,
    unique:true,
  
 },
 gender:{
    type:String,
    require:true
 },
 phone:{
    type:Number,
    require:true,
   
 },
 age:{
    type:Number,
    require:true
 },
 password:{
    type:String,
    require:true,
    unique:true
 },
 confirmpassword:{
    type:String,
    require:true,
    unique:true
 },


});

const Student=new mongoose.model("students",studentSchema);
 
 export  default Student;