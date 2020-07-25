const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const manu    = require("../common-func/string-manup")
const router  = express.Router()

router.post('/getProfileImage', (req, res) => {
  const encData       = req.body.userId,
        decryData     = encrypt.decryption(encData),
        queryString   = `SELECT user_id, name, image FROM user_info WHERE user_id = '${decryData}'`

  try {
    conn.query(queryString, (err, userImage) => {
        if (!!err) {
          res.status(400).send({
            status : false
          })
        } else {
          res.status(200).send({
            status  : true,
            image   : userImage[0] 
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