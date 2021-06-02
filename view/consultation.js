const express = require("express");

const Router = express.Router();

const {createConsultation,getAllConsultations} = require("../controller/consultation")

Router.post("/create/consultation" , createConsultation );

Router.get("/getallconsultations" , getAllConsultations)

module.exports = Router;


