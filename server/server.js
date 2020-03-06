const express = require('express')
const path = require('path')
const bodyParser = ('body-parser')
const find = require('array-find')
const app = express()
const port = 3000




// static files from static folders
app.use('/static', express.static('static'))

// templating engine
app.set('view engine', 'ejs')

// listen to port and display the port in console
app.listen(port, () => console.log('listening on port ' + port))

// routing with ejs files
app.get('/', (req, res) => res.render('index', {data: data}))
app.get('/about', (req, res) => res.render('about'))
app.get('/contact', (req, res) => res.render('contact'))
app.get('/:id', detail)

// 404 when not found
// app.use((req, res) => res.status(404).send('404'))

function detail(req, res, next) {
    let id = req.params.id
    let movie = find(data, function (value) {
        return value.id === id
    })

    if(!movie) {
        next()
        return
    }

    res.render('detail.ejs', {data: movie})
}

let data = [
    {
        id: 'film1',
        title: 'filmeen',
        plot: 'plot voor film een',
        description: 'de descriptie voor film een gaat als voort:'
    },
    {
        id: 'film2',
        title: 'filmtwee',
        plot: 'plot voor film twee',
        description: 'de descriptie voor film twee is heel anders'
    }
]

