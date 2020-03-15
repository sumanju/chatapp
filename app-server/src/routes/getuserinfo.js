const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const manu    = require("../common-func/string-manup")
const router  = express.Router()

router.post('/getuserinfo', (req, res) => {
  const encData     = req.body.cookie,
        decryData   = encrypt.decryption(String(manu.getObjectValueFromCookieString(encData, "username"))),
        queryString = `SELECT * FROM user_info WHERE user_id = '${decryData}'`
        
  try {
    conn.query(queryString, (err, row) => {
      if (!!err) {
        res.status(400).send({ status : false })
      } else {
        res.status(200).send({
          status  : true,
          data    : row
        })
      }
    })
  } catch (err) {
    res.status(400).send({ status : false })
  }
})

module.exports = router