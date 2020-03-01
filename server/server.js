const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/static', express.static('static'))

app.set('view engine', 'ejs')

app.listen(port, () => console.log('listening on port ' + port))

// voorbeeld voor dynamic data
// app.get('/:route', (req, res) => res.render('index', {route: req.params.route}))

app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))
app.get('/contact', (req, res) => res.render('contact'))

app.use((req, res) => res.status(404).send('404'))

// push command: git push -f origin master