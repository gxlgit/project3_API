const express = require('express');
const router = express.Router(); 

const Input = require('../db/input');
const Clothing = require('../db/clothing');
// const Weather = require('../db/weather');



router.get('/input', function(req, res){
    console.log('in get')
    Clothing.find({})
    .then(function(clothings){
        res.json(clothings)    
    });


router.post('/input', function(req,res){
    Input.create(req.body)
    .then(function(clothings){
    res.json(clothings)
    })
});

router.put('/input/:id', function(req,res){
    Input.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function(){
    Input.findOne({_id: req.params.id})
    .then(function(clothings){
    res.json(clothings)
        })
    })
});


router.delete('/input/delete/:id', function(req,res){
    Input.findByIdAndRemove({_id: req.params.id}, red.body)
    .then(function(clothing){
    res.json(clothing)
    })
})




















    // Ninja.findOne({}).then(function(ninjas){
    //     res.send(ninjas)})
   
});

/*
// //add a new ninja to the db
router.post('/ninjas', function(req, res){
//     //capital Ninja because it refers to model 
    Ninja.create(req.body)
//     //will create a NEW INSTANCE of the data received 
    .then(function(ninja){
    // console.log('sending the response ')
//         //function only fires once the create action has been completed 
        res.send(ninja);
// //video 9 7:40
    });
});
*/


router.post('/ninjas', function(req, res)
{      
    Ninja.create(req.body)
    .then(function(ninja){
    res.send(ninja);
  }).catch(next);
});


//update ninja to db
//:id acts as a variable and grabs the id of whichever ITEM you are pulling
//were gonna find by id they passed in and update by the req.body param
router.put('/:id', function(req, res){
    Input.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function(){
    Input.findOne({_id: req.params.id})
    .then(function(ninja){
    res.send(ninja)
        })
    })
});

//:id acts as a variable and grabs the id of whichever ITEM you are pulling
router.delete('/:id', function(req, res){
    Input.findByIdAndRemove({_id: req.params.id})
    .then(function(ninja){
        res.send(ninja);
    });
});
//THREE
//we want to be able to allow these routes to be used by index.js file. We need a way to export the routes 

//require in index file

module.exports = router;
