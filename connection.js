const mongoose = require('mongoose')

if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/weather')
  console.log('something went wrong') // would just say connecting to local DB here, being in a non-deployment environment will trigger this message
}

mongoose.Promise = Promise

module.exports = mongoose
