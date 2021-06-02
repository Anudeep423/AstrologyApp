const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({

    Title : {
        type : String,
        required : true
    },
    Content : {
        type : String,
        required : true
    },

    Img : {
        data: Buffer,
        contentType: String
      }

}, { timestamps: true })

module.exports = mongoose.model("Blog",BlogSchema)