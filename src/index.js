const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')


const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect()

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))
// HTTP logger
// app.use(morgan('combined'))
// Template engine
app.engine('hbs', handlebars({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'))

route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})