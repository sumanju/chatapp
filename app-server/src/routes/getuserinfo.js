const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const manu    = require("../common-func/string-manup")
const router  = express.Router()

router.post('/getuserinfo', (req, res) => {
  const encData       = req.body.userInfo,
        decryData     = encrypt.decryption(encData),
        queryString1  = `SELECT user_id, name, image FROM user_info WHERE user_id  = '${decryData}'`

  try {
    conn.query(queryString1, (err, userInfo) => {
      if (!!err) {
        res.status(400).send({ status : false })
      } else {
        res.status(200).send({ 
          status    : true,
          userInfo  : userInfo[0]
        })
      }
    })
  } catch (err) {
    res.status(400).send({ status : false })
  }
})

module.exports = router