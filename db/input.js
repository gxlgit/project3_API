const mongoose = require('mongoose')

const InputSchema = new mongoose.Schema({
  weather: String,
  name: String,
  clothes: [{
    name: String,
    imgURL: String
  }],
  why: String
})

Input = mongoose.model('Input', InputSchema)
module.exports = Input
