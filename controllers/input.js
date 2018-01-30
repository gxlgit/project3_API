const express = require('express');
const router = express.Router(); 

const Input = require('../db/input');
const Clothing = require('../db/clothing');
// const Weather = require('../db/weather');


//Routes for the INPUT Form

router.get('/input', (req, res)=>{
    console.log('get')
    Input.find({})
    .then(function(clothings){
        res.json(clothings)    
    });
})


router.post('/input', (req, res)=>{
    Input.create(req.body)
    .then(function(clothings){
    res.json(clothings)
    })
});

router.put('/input/:id', (req, res)=>{
    console.log('put')
    console.log(req.params.id)
    Input.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function(clothings){
    res.json(clothings)
        })
});
//may need to use findOne later


router.delete('/input/:id', (req,res)=>{
    console.log('delete')
    Input.findByIdAndRemove({_id: req.params.id}, req.body)
    .then(function(clothing){
    res.json(clothing)
    })
});

//Routes for Clothing 

router.get('/clothing', (req, res)=>{
    console.log('get clothing')
    Input.find({})
    .then(function(input){
        res.json(input)    
    });
});
//this works


router.get('/weather', (req, res)=>{
    console.log('get weather')
    Weather.find({})
    .then(function(weather){
        res.json(weather)
    });
});

module.exports = router;
