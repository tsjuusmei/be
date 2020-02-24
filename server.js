const express = require('express')
const cc = require('camelcase')
const path = require('path')
const app = express()
const port = 3000

app.use('/static', express.static('static'))

app.listen(port, () => console.log('listening on port ' + port))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/static/index.html')))
app.get('/about', (req, res) => res.sendFile(path.join(__dirname + '/static/about.html')))
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname + '/static/contact.html')))

app.use((req, res) => res.status(404).send('404'))

console.log(cc('back-end'))

// push command: git push -f origin master