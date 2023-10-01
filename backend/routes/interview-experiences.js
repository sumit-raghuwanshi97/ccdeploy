const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const interviewExperiences = [
    {
      id: 1,
      userName: 'Sumit Raghuwanshi',
      companyName: 'Tally Solutions',
      status: 'Selected',
      details: 'Had a great interview experience at TallySolutions',
    },

    {
      id: 2,
      userName: 'Prachi Suryawanshi',
      companyName: 'NRI Fintech',
      status: 'Rejected',
      details: 'Unfortunately, I was not selected at NRI',
    },
  ];

  router.get('/',(req,res)=>{
    res.json(interviewExperiences);
  });


  router.post('/',(req,res)=>{
    const newExperience = req.body
    interviewExperiences.push(newExperience);
    res.status(201).json(newExperience);
  })

  module.exports = router;