const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        maxLength:15
    },
    description:{
        type:String,
        required:true,
        maxLength:50
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
}
)

module.exports = mongoose.model("Todo",todoSchema);