const mongoose = require("mongoose");

const phdSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    sex:{
        type:String,
        required:true,
    },
    Category:{
        type:String,
        required:true,
    },
    id:{
        type:Number,
        required:true,
    },
    campusId:{
        type:String,
        required:true,
    },
    sourceOfFellowship:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:Number,
        required:true,
    },
    emailId:{
        type:String,
        required:true,
    },
    leave:{
        type:Boolean,
    }
});

module.exports = mongoose.model("phd",phdSchema);

