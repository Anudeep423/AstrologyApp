const Consultation = require("../model/consultation");


exports.createConsultation = (req, res) => {
    const consultation = new Consultation(req.body);
    consultation.save((err, consultation) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json({ consultation });
    });
  };

  exports.getAllConsultations = (req,res) => {

    Consultation.find()
    .exec( (err,consultations) => {
        if(err){
            res.json(err).status(400)
        }
        res.json(consultations).status(200)
    }  )

  }