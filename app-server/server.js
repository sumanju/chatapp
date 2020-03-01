const express = require('express')
const path    = require('path')
const app     = express()

app.use(express.static(path.join(__dirname, "../dist/angular/")))
 
const port = process.env.PORT || 4300

app.listen(port, (req, res) => {
  console.log('running ', port)
})