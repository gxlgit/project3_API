const mongoose = require('mongoose')

const ClothingSchema = new mongoose.Schema({
  name: String,
  imgURL: String
})

console.log('in clothing.js');

Clothing = mongoose.model('Clothing', ClothingSchema)

module.exports = Clothing
