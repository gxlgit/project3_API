const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
  title: String,
  imgURL: String,
  clothes: [{
    name: String,
    imgURL: String
  }]
})

Weather = mongoose.model('Weather', WeatherSchema)
module.exports = Weather
