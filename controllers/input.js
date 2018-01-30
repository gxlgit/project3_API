const express = require('express');
const router = express.Router(); 

const Input = require('../db/input');
const Clothing = require('../db/clothing');
const Weather = require('../db/weather.js')

//Routes for the INPUT Form
router.get('/input', (req, res)=>{
    Input.find({})
    .then(function(input){
        res.json(input)    
    })
});

router.post('/input', (req, res)=>{
    Input.create(req.body)
    .then(function(input){
    res.json(input)
    })
});

router.put('/input/:id', (req, res)=>{
    Input.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function(input){
    res.json(input)
        })
 //may need to use findOne for the input form later
});

router.delete('/input/:id', (req,res)=>{
    Input.findByIdAndRemove({_id: req.params.id}, req.body)
    .then(function(input){
    res.json(input)
    })
});

//Routes for Clothing 
router.get('/clothing', (req, res)=>{
    Clothing.find({})
    .then(function(clothing){
        res.json(clothing)    
    })
});

router.get('/clothing/:name', (req, res)=>{
    Clothing.findOne({name: req.params.name})
    .then(function(clothingbyname){  
        res.json(clothingbyname)      
    })
});

//Routes for Weather
router.get('/weather', (req, res)=>{
    console.log('get weather')
    Weather.find({})
    .then(function(weather){
        res.json(weather)
    })
});

module.exports = router;
