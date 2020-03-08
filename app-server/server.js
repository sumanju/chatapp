const express     = require('express')
const path        = require('path')
const bodyParser  = require('body-parser')
const cors        = require('cors')
const routeList   = require('./route-list')


const app = express()
      app.use(bodyParser.json())
      app.use(cors())
      app.use(routeList)

app.use(express.static(path.join(__dirname, "../dist/angular/")))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
  console.log('running ', port)
});
