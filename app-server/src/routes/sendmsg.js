const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const manu    = require("../common-func/string-manup")
const router  = express.Router()

router.post('/sendmsg', (req, res) => {
  const data  = req.body,
  queryString = `INSERT INTO user_msg(msg_from, msg_to, msg) VALUES 
                 ("${encrypt.decryption(data.sndrId)}","${data.recvId}","${data.msg}")`
  try {
    conn.query(queryString, (err) => {
      if (!!err) {
        res.status(400).send({ status : false })
      } else {
        res.status(200).send({ 
          status    : true
        })
      }
    })
  } catch (err) {
    res.status(400).send({ status : false })
  }
})

module.exports = router