const mongoose=require('mongoose')
const students=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    course:{type:String}
})
const studentModel=mongoose.model('student',students)
module.exports=studentModel