const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
  title: String,
  imgURL: String,
  clothes: [{
    title: String,
    imgURL: String
  }]
})

Weather = mongoose.model('Weather', WeatherSchema)
module.exports = Weather
