  const express = require('express')
  const app     = express()

//       ROUTES LIST
const logIn           = require('./src/routes/login'),
      signUp          = require('./src/routes/signup'),
      getuserinfo     = require('./src/routes/getuserinfo'),
      profileImg      = require('./src/routes/profileImage'),
      getUserProImg   = require('./src/routes/getProfileImage'),
      getPeopleInfo   = require('./src/routes/getpeoplelist'),
      getChatList     = require('./src/routes/getchatlist'),
      sendMsg         = require('./src/routes/sendmsg'),
      setTimeLineImg  = require('./src/routes/settimelineimage'),
      getTimeLineImg  = require('./src/routes/gettimelineimage'),
      getChatHistory  = require('./src/routes/getChatHistory'),
      getProfTLImage  = require('./src/routes/getProfileTimelineImage')

//       MIDDLE WARE
  app.use('/',  logIn)
  app.use('/',  signUp)
  app.use('/',  getuserinfo)
  app.use('/',  profileImg)
  app.use('/',  getUserProImg)
  app.use('/',  getPeopleInfo)
  app.use('/',  getChatList)
  app.use('/',  sendMsg)
  app.use('/',  setTimeLineImg)
  app.use('/',  getTimeLineImg)
  app.use('/',  getChatHistory)
  app.use('/',  getProfTLImage)

module.exports = app