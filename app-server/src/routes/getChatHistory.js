const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

  router.post('/getchathistory', (req, res)=> {
    const data          = req.body,
          userId        = encrypt.decryption(data.userId),
          queryString   = `SELECT * FROM
                            (SELECT t2.user_id as userId, t2.name as name, t2.image as image, t1.create_ts as create_ts FROM follower_list t1 
                            LEFT JOIN user_info t2 ON t1.following_id = t2.user_id
                            WHERE t1.user_id = "${userId}") t3
                           ORDER BY t3.create_ts DESC`

    try {
      conn.query(queryString, (err , data) => {
        if (!!err) {
          res.sendStatus(400)
        } else {
          res.status(200).send({
            status : true,
            data   : data 
          })
        }
      }) 
    } catch (err) {
      res.sendStatus(400)
    }
  })

  module.exports = router