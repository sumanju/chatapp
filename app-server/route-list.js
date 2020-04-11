  const express = require('express')
  const app     = express()

//       ROUTES LIST
const logIn         = require('./src/routes/login'),
      signUp        = require('./src/routes/signup'),
      getuserinfo   = require('./src/routes/getuserinfo'),
      profileImg    = require('./src/routes/profileImage'),
      getUserProImg = require('./src/routes/getProfileImage'),
      getPeopleInfo = require('./src/routes/getpeoplelist'),
      getChatList   = require('./src/routes/getchatlist'),
      sendMsg       = require('./src/routes/sendmsg')

//       MIDDLE WARE
  app.use('/', logIn)
  app.use('/', signUp)
  app.use('/', getuserinfo)
  app.use('/', profileImg)
  app.use('/', getUserProImg)
  app.use('/', getPeopleInfo)
  app.use('/', getChatList)
  app.use('/', sendMsg)

module.exports = app