const express       = require('express')
const path          = require('path')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const cookieParser  = require('cookie-parser')
const routeList     = require('./app-server/route-list')
const socket        = require('socket.io')
const conn          = require('./app-server/src/db-connection/mysql-db')
const encrypt       = require('./app-server/src/encrypt/crypto')

const app = express()
      app.use(bodyParser.json())
      app.use(cors())
      app.use(routeList)
      app.use(cookieParser())
 
      app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        )
        next()
      })

app.use(express.static(path.join(__dirname, "./dist/angular/")))

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/angular/index.html'))
})

const port = process.env.PORT || 5000

const server = app.listen(port, (req, res) => {
  console.log('running ', port)
})

const io   = socket(server)

io.sockets.on('connection', (socket) => {
  console.log('connected', socket.id)
  let timerId = undefined

  socket.on('mesg', (data) => {

    function recur() {
      queryString = `SELECT * FROM user_msg 
                 WHERE msg_from = '${data.frndId}' AND msg_to = '${encrypt.decryption(data.userId)}' OR
                 msg_from ='${encrypt.decryption(data.userId)}' AND msg_to='${data.frndId}'
                 ORDER BY create_ts DESC
                 LIMIT 20` 

      try {
        conn.query(queryString, (err, msgInfo) => {
          socket.emit('mesg' , msgInfo.reverse())
        })
      } catch (err) {
        throw new Error(err)
      }
    }
    recur()
    timerId = setInterval(recur, 2000)
  })
  
  socket.on('leave', (data) => {
    clearInterval(timerId)
    timerId = 0
  })
})