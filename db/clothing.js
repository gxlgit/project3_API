const mongoose = require('mongoose')

const ClothingSchema = new mongoose.Schema({
  title: String,
  imgURL: String
})

Clothing = mongoose.model('Clothing', ClothingSchema)
module.exports = Clothing
