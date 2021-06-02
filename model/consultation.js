const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({

    Name : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },Mobile_no : {
        type : Number,
        required : true
    },
    Gender : {
        type : String,
        required : true
    },
    Date_of_birth : {
        type : String,
        required : true
    },
    BirthPlace : {
        type : String,
        required : true
    },
    BirthHour : {
        type : String,
        required : true
    }

}, { timestamps: true })

module.exports = mongoose.model("Consultation",ConsultationSchema)