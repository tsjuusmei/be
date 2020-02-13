const express = require('express')
const cc = require('camelcase')
const app = express()
const port = 3000

app.use('/static', express.static('public'))
app.listen(port, () => console.log('listening on port ' + port))
app.get('/', (req, res) => {
    const route = req.url
    console.log(route)

    if (route === '/'){
        res.send('hello world')
    } else if (route === '/about') {
        res.send('about')
    } else if (route === '/contact') {
        res.send('contact')
    } else {
        res.statusCode = 404
        res.send('not found\n')
    }
})


// app.get('/about', (req, res) => res.send('about page'))

console.log(cc('back-end'))

