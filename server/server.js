const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// statische files uit static folder
app.use('/static', express.static('static'))

// templating engine
app.set('view engine', 'ejs')

// port met een console log op welke port de server naar luisterd
app.listen(port, () => console.log('listening on port ' + port))

// voorbeeld voor dynamic data
// app.get('/:route', (req, res) => res.render('index', {route: req.params.route}))

// routing met render van ejs files
app.get('/', (req, res) => res.render('index', {data: data}))
app.get('/about', (req, res) => res.render('about'))
app.get('/contact', (req, res) => res.render('contact'))

// 404 bij not found
app.use((req, res) => res.status(404).send('404'))

// push command: git push -f origin master

// data voor films
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

