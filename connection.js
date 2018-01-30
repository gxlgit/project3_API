const mongoose = require('mongoose')  

mongoose.connect('mongodb://localhost/weather') 

mongoose.Promise = Promise

module.exports = mongoose 
