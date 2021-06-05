const UserSchema = require("../model/user");

exports.signup = (req,res) => {

    const user = new UserSchema(req.body);

    user.save( (err,user) => {
        if(err){
            return res.json(err);
        }
        return res.json(user)
    }  )

}

exports.signin = (req,res) => {

    UserSchema.findOne({ email : req.body.email }, (err, user) => {
        if (err || !user) {
          return res.status(400).json({
            error: "USER email does not exists"
          });
        }
    
        if (!user.autheticate(req.body.password)) {
          return res.status(401).json({
            error: "Email and password do not match"
          });
        }

        return res.json({Message : "User found and successfully Logged In"})

    })
    

}