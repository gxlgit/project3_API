const express = require('express')
const parser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const methodOverride = require('method-override')
const morgan = require('morgan')
const input = require('./controllers/input')
const app = express()


if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
} else {
    mongoose.connect('mongodb://localhost/weather')
}
mongoose.Promise = Promise

app.set('port', process.env.PORT || 5001)
app.use(cors())
app.use(morgan('dev'))
app.use(parser.urlencoded({
    extended: true
}))
app.use(parser.json())
app.use(methodOverride("_method"))

app.use('/', input)
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
});
