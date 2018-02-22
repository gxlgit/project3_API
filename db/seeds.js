const mongoose = require('../connection')

const Clothing = require('./clothing.js')
const clothingData = require('./clothingseeds.json')

const Weather = require('./weather.js')
const weatherData = require('./weatherseeds.json')

Clothing.remove({}).then(function () {
  Clothing.create(clothingData).then(() => {
    process.exit // process.exit() to close
    // you can also use mongoose.connection.close() here, which is probably better practice
  })
})

Weather.remove({})
  .then(() => {
    return Weather.collection.insert(weatherData)
  })
  .then(() => {
    process.exit()
  })
