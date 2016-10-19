// require('./config/connect.js')
const path = require('path')
const exphbs = require('express-handlebars')
const express = require('express')
const app = express()
const port = 80

console.log(__dirname)

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened')
    }

    console.log('server is listening on ', port)
})

// HTML
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

// Routes

app.get('/', (request, response) => {
    response.render('index', {
        title: 'Home'
    })
})
app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About'
    })
})
