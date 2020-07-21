const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Students= require('../models/students');

const studentRouter = express.Router();

studentRouter.use(bodyParser.json());

studentRouter.route('/')


.put((req,res,next) => {
    res.statusCode = 403
    res.end("PUT Operation not supported on /students")

});


studentRouter.route('/:studentId')

.put((req, res, next) => {
    students.findByIdAndUpdate(req.params.studentId,{
        $set: req.body
    },{new: true })
    .then((student)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(student);
    }, (err)=>next(err))
    .catch((err)=> next(err));
})


module.exports = studentRouter;