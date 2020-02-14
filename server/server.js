const express = require('express')
const cc = require('camelcase')
const app = express()
const port = 3000

app.use('/static', express.static('public'))
app.listen(port, () => console.log('listening on port ' + port))
app.get('/', (req, res) => res.send('index'))
app.get('/about', (req, res) => res.send('about page'))
app.get('/contact', (req, res) => res.send('contact page'))
app.use((req, res) => res.status(404).send('404'))

console.log(cc('back-end'))


// push command: git push -f origin master