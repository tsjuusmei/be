const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const find = require('array-find')
const slug = require('slug')
const multer = require('multer')
const mongo = require('mongodb')

require('dotenv').config()

let db = null
const url = 'mongodb://' = process.env.DB_HOST + ':' + process.env.DB_PORT

mongo.MongoClient.connect(url, function(err, client) {
    if (err) throw err
    db = client.db(process.env.DB_NAME)
})

const app = express()

const port = 3000

const upload = multer({dest: 'static/upload'})


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
app.get('/add', (req, res) => res.render('add'))
app.get('/:id', detail)

// post route for form
app.post('/', upload.single('cover'), add)

// 404 when not found
app.use((req, res) => res.status(404).send('404'))

function detail(req, res, next) {
    const id = req.params.id
    const movie = find(data, function(movie) {
        return movie.id === id
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

function add(req, res) {
    const id = slug(req.body.title).toLowerCase()
  
    data.push({
      id: id,
      title: req.body.title,
      cover: req.file ? req.file.filename : null,
      plot: req.body.plot,
      description: req.body.description
    })
  
    res.redirect('/' + id)
  }

  function remove(req, res) {
    var id = req.params.id
  
    data = data.filter(function (value) {
      return value.id !== id
    })
  
    res.json({status: 'ok'})
  }
  

