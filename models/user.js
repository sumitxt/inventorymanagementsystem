const mongoose=require('mongoose')
const validator=require('validator')
const userSchema=mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    confirmPassword:{type:String},
    role:{type:String},
},
{timestamps: true,versionKey: false })



module.export =user