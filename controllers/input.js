const express = require('express');
const router = express.Router();

const Input = require('../db/input');
const Clothing = require('../db/clothing');
const Weather = require('../db/weather.js')

router.get('/input', (req, res) => {
    Input.find({})
        .then(function (input) {
            res.json(input)
        })
});

router.get('/input/:id', (req, res) => {
    Input.findOne({
            _id: req.params.id
        }, req.body)
        .then(function (input) {
            res.json(input)
        })
});

router.post('/input', (req, res) => {
    Input.create(req.body)
        .then(function (input) {
            res.json(input)
        })
});

router.put('/input/:id', (req, res) => {
    Input.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(function (input) {
            res.json(input)
        })
});

router.delete('/input/:id', (req, res) => {
    Input.findByIdAndRemove({
            _id: req.params.id
        }, req.body)
        .then(function (input) {
            res.json(input)
        })
});

router.get('/clothing', (req, res) => {
    Clothing.find({})
        .then(function (clothing) {
            res.json(clothing)
        })
});

router.get('/clothing/:name', (req, res) => {
    Clothing.findOne({
            name: req.params.name
        })
        .then(function (clothingByName) {
            res.json(clothingByName)
        })
});

router.get('/weather', (req, res) => {
    console.log('get weather')
    Weather.find({})
        .then(function (weather) {
            res.json(weather)
        });
});

router.get('/weather/:name', (req, res) => {
    Weather.findOne({
            name: req.params.name
        })
        .then(function (weatherByTitle) {
            res.json(weatherByTitle)
        })
});

module.exports = router;
