  const express = require('express')
  const app     = express()

//       ROUTES LIST

const logIn   = require('./src/routes/login.js'),
      signUp  = require('./src/routes/signup')


//       MIDDLE WARE
  app.use('/', logIn)
  app.use('/', signUp)


module.exports = app 