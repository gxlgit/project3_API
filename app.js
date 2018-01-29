const express = require('express')
const parser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const methodOverride = require('method-override')
const morgan = require('morgan')
const input = require('./controllers/input')
const app = express()


if(process.env.NODE_ENV == "production"){
    mongoose.connect(process.env.MLAB_URL)
} else {
    mongoose.connect('mongodb://localhost/project3', {useMongoClient: true})
}
mongoose.Promise = Promise

app.use(cors())
app.use(morgan('dev'))
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(methodOverride("_method"))

app.use('/', input)

const port = 4001 
app.listen(process.env.port || 4001, function(){console.log(`now listening on ${port}`)
});
