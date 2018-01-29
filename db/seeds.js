const Clothing = require('./clothing')
const clothingData = require('./clothingseeds.json')

const Weather = require('./weather')
const weatherData = require('./weatherseeds.json')

// const Input = require('./input')


Clothing.remove({}) 
  .then(() => {
    return Clothing.collection.insert(clothingData)
  })
  .then(() => {
    process.exit()
  })

  Weather.remove({}) 
  .then(() => {
    return Weather.collection.insert(weatherData)
  })
  .then(() => {
    process.exit()
  })
