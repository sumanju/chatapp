const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const manu    = require("../common-func/string-manup")
const router  = express.Router()

  router.post('/getpeoplelist', (req, res) => {
    const encData     = req.body.userId,
          decryData   = encrypt.decryption(encData),
          queryString = `SELECT t1.user_id, t1.name, t2.image from user_info t1 LEFT JOIN user_image t2 on t1.user_id = t2.user_id WHERE NOT t1.user_id = '${decryData}'`

    try {
      conn.query(queryString, (err, usersData) => {
        if (!!err) {
          res.status(400).send({
            status  : false
          })
        } else {
          res.status(200).send({
            status    : true,
            usersData : usersData
          })
        }
      })
    } catch (err) {
      res.status(400).send({
        status  : false
      })
    }
  })

module.exports = router

// SELECT t1.user_id, t1.name, t2.image from user_info t1 LEFT JOIN user_image t2 on t1.user_id = t2.user_id 
// WHERE NOT t1.user_id = "suman"