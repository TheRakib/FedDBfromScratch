const mongoose = require("mongoose");


const schemaComment = new mongoose.Schema(
    {
        text:String,
        date: { type: Date,  default: Date.now }, 
        author:String
    }
)

const Comment = mongoose.model("Comment", schemaComment);

module.exports = Comment;