// external imports
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser';
// local imports
import { buildDir } from '../../config/projectPaths'

// create Express app
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// add static file handling
app.use('/static', express.static(buildDir))
app.use('/static', express.static(path.join(__dirname, 'assets')))

// use jade as templating engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'templates'))

app.post('/api/links', (req, res) => {
  res.send(`link to process ${req.body.link}`);
})

app.all('*', (req, res) => {
  const resetCssLocation = '/static/styles/reset.css'
  const bundleLocation = '/static/client.js'
  res.render('index.pug', {
    bundleLocation,
    resetCssLocation
  })
})

// grab port
const port = process.env.PORT || process.argv[2] || 5050

// listen
app.listen(port, () => console.log(`[${new Date()}] Now listening on port: ${port}`))
