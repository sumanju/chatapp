const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

  router.post('/gettimelineimage', (req, res) => {
    const data        = req.body.loadValue
          queryString = `SELECT * FROM user_timeline ORDER BY create_ts DESC  LIMIT ${data}`

    try {
      conn.query(queryString, (err, data) => {
        if (!!err) {
          console.log(err)
          res.status(400).send({
            status : false
          })
        } else {
          res.status(200).send({
            status : true,
            data   : data
          })
        }
      })
    } catch (err) {
      res.status(400).send({
        status : false
      })
    }
  })

  module.exports = router