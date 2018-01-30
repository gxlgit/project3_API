const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
  name: String,
  imgURL: String,
  clothes: [{
    name: String,
    imgURL: String
  }]
})

Weather = mongoose.model('Weather', WeatherSchema)
module.exports = Weather
