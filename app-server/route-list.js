  const express = require('express')
  const app     = express()

//       ROUTES LIST
const logIn       = require('./src/routes/login.js'),
      signUp      = require('./src/routes/signup'),
      getuserinfo = require('./src/routes/getuserinfo')

//       MIDDLE WARE
  app.use('/', logIn)
  app.use('/', signUp)
  app.use('/', getuserinfo)

module.exports = app