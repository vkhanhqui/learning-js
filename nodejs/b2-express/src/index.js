const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const db = require('./config/database')
const route = require('./routes')
const app = express()
const port = 8080

//connect to database
db.connect()

//logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})