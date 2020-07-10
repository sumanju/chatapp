const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

  router.post('/settimelineimage', (req, res) => {
    const data        = req.body
          queryString = `INSERT INTO user_timeline(user_id, name, image) VALUE ('${encrypt.decryption(data.userId)}', '${data.name}', '${data.image}')`

    try {
      conn.query(queryString, (err, data) => {
        if (!!err) {
          res.status(400).send({
            status : false
          })
        } else {
          res.status(200).send({
            status : true
          })
        }
      })
    } catch (err) {
      res.status(200).send({
        status : false
      })
    }
  })

  module.exports = router