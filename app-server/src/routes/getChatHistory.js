const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const manu    = require("../common-func/string-manup")
const router  = express.Router()

  router.post('/getchathistory', (req, res)=> {
    const data          = req.body,
          userId        = encrypt.decryption(data.userId)
          queryString1  = `SELECT DISTINCT(msg_to) as userId, image, name FROM (SELECT * FROM user_msg t4 LEFT JOIN user_info t5 on t4.msg_to = t5.user_id) t1 
                            LEFT JOIN 
                          user_image t2 on t1.msg_to = t2.user_id WHERE msg_from =  '${userId}'`
    try {
      conn.query(queryString1, (err , data) => {
        if (!!err) {
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