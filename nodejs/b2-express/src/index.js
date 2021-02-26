const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const db = require('./config/database')
const route = require('./routes')
const app = express()
const port = 8080
//github
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

//connect to database
db.connect()

//logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app);

app.get('/users/:username', function (req, res) {
    var username = req.params.username
    var page = req.query.page
    octokit.repos
        .listForUser({
            username: username,
            type: "all",
            per_page: "10",
            page: page,
            sort: "full_name"
        })
        .then(({ data }) => {
            // handle data
            res.status(200).json(data)
        })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})