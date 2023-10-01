const express = require('express');
const router = express.Router();

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

  module.exports = router;