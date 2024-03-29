const mongoose = require("mongoose");
const uuidv1 = require("uuid")
const crypto = require("crypto")

const userSchema = new mongoose.Schema({

    name : {
         type : String,
         required : true   
    },
    email : { 
        type : String,
        required : true
    } ,  encry_password: {
        type: String
      },
      salt: String,
      role: {
        type: Number,
        default: 0
      },

});



userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exports = mongoose.model("users" , userSchema  )