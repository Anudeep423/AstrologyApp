const express = require("express");

const app = express();

const port = 8080

const mongoose = require("mongoose");

const blogRoutes = require("./view/blog");

const consultationRoutes = require("./view/consultation")

const bodyParser = require("body-parser");

const cors = require("cors")

app.use(bodyParser.json());

app.use(cors());

app.use("/api",blogRoutes)

app.use("/api",consultationRoutes);

mongoose.connect("mongodb+srv://Anudeep123:12345678aA$@cluster0.ni9vp.mongodb.net/AstroApp?retryWrites=true&w=majority" ,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => {console.log("DB CONNECTED")} )
.catch(err   => {console.log(err)} )



app.get("/" , (req,res) => {

    res.send({Message : "/ route is working"})
} )




app.listen(port , () => {
    console.log(`server started running on ${port}`)
})

console.log("INDEX DOT JS");
