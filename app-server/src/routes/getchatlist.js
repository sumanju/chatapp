const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const manu    = require("../common-func/string-manup")
const router  = express.Router()

router.post('/getchatlist', (req, res) => {
  const data  = req.body
  queryString = `SELECT * FROM user_msg 
                 WHERE msg_from = '${data.sndrId}' AND msg_to = '${encrypt.decryption(data.recvId)}' OR
                 msg_from ='${encrypt.decryption(data.recvId)}' AND msg_to='${data.sndrId}'` 
  try {
    conn.query(queryString, (err, chatData) => {
      if (!!err) {
        res.status(400).send({
          status : false
        })
      } else {
        res.status(200).send({
          status : true,
          data   : chatData
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