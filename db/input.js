const mongoose = require('mongoose')

const InputSchema = new mongoose.Schema({ // I would call this somehting a little more descriptive than Input, like WeatherOutfit? That doesn't sound that natural, but more specific than Input
  weather: String,
  name: String,
  clothes: [{
    name: String,
    imgURL: String
  }],
  why: String
})

const Input = mongoose.model('Input', InputSchema)
module.exports = Input
