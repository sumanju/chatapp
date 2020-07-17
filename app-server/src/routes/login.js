const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

router.post('/login', (req, res) => {
  const data        = req.body,
        queryString = `SELECT * FROM user_info
                       WHERE user_id = "${data.userId}" AND password = "${data.password}"`

  try {
    conn.query(queryString, (err, row) => {
      if (!!err) {
        res.status(400).send({
          status : false
        })
      } else {
        if (row[0] != null) {
          res.status(200).send({
            status  : true,
            data    : encrypt.encryption(data.userId),
            error   : null
          })
        } else {
          res.status(200).send({
            status : false,
            data   :  null,
            error  : 'INVALID_LOGIN'
          })
        } 
      }
    })
  } catch (err) {
    res.status(400).send({
      status : false
    })
  }
})  

module.exports = router