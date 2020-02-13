const express = require('express')
const cc = require('camelcase')
const app = express()
const port = 3000

app.use('/static', express.static('public'))
app.get('/', (res, req) => res.send('Hello World!'))
app.listen(port, () => console.log('listening on port ' + port))

console.log(cc('back-end'))

const asd = 1