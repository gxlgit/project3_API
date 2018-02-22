const mongoose = require('mongoose')

const ClothingSchema = new mongoose.Schema({
  name: String,
  imgURL: String
})

console.log('in clothing.js') // remove this console.log

Clothing = mongoose.model('Clothing', ClothingSchema)

module.exports = Clothing
