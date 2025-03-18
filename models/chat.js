const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : [ true , ' run from'],
    },
    to : {
        type : String,
        required : [ true , 'run no to'],
    },
    msg :{
        type :String,
        maxLength :[50 , "msg length  is 50 "]
    },
    created_at :{
        type:Date,
        required : [ true , ' run from'],
    }

})

// create module
const chat = mongoose.model("chat",chatSchema)

module.exports = chat;
// let chat 