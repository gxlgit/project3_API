const express = require('express')
const parser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const methodOverride = require('method-override')
const morgan = require('morgan')
const input = require('./controllers/input')
const app = express()
const port = 4001 


if(process.env.NODE_ENV == "production"){
    mongoose.connect(process.env.MLAB_URL)
} else {
    mongoose.connect('mongodb://localhost/project3')
}
mongoose.Promise = Promise

app.set('port', process.env.PORT || port)
app.use(cors())
app.use(morgan('dev'))
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(methodOverride("_method"))

// app.use('/', input)

app.listen(process.env.port || port, function(){console.log(`now listening on ${port}`)
});
