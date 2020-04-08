const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const manu    = require("../common-func/string-manup")
const router  = express.Router()

router.post('/getuserinfo', (req, res) => {
  const encData       = req.body.userInfo,
        decryData     = encrypt.decryption(encData),
        queryString1  = `SELECT * FROM user_info WHERE user_id  = '${decryData}'`,
        queryString2  = `SELECT user_id , name  FROM user_info WHERE NOT user_id  = '${decryData}'`
  try {
    conn.query(queryString1, (err, userInfo) => {
      if (!!err) {
        res.status(400).send({ status : false })
      } else {

        try {
          conn.query(queryString2 , (err, msgInfo) => {
            if (!!err){
              res.status(400).send({ status : false })
            } else {
              res.status(200).send({ 
                status    : true,
                userInfo  : userInfo[0],
                msgInfo   : msgInfo[0]
              })
            }
          })
        } catch (err) {
          res.status(400).send({ status : false })
        }
      }
    })
  } catch (err) {
    res.status(400).send({ status : false })
  }
})

module.exports = router