const Clothing = require('./clothing')
const clothingData = require('./clothingseeds.json')

const Weather = require('./weather')
const weatherData = require('./weatherseeds.json')

// const Input = require('./input')

console.log('in seeds.js');
 console.log(Clothing.find({}));

// Clothing.remove({})
//   .then((removed) => {
//     console.log('removed clothing');
//     console.log(removed);
//     return Clothing.collection.insert(clothingData)
//   })
//   .then((found) => { console.log(found);
//     process.exit()
//   })

Clothing.remove({}).then(function() {
  Clothing.create(clothingData).then(()=>{
    console.log('finished create');
    process.exit
  })
})

  Weather.remove({})
  .then(() => {
    return Weather.collection.insert(weatherData)
  })
  .then(() => {
    process.exit()
  })



  // Candidate.remove({}).then(function() {
  //   Candidate.create(seedData).then(()=>{
  //     process.exit
  //   })
  // })
