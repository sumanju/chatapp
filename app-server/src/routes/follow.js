const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

  router.post('/follow', (req, res)=> {
    const data          = req.body,
          userId        = encrypt.decryption(data.userId),
          queryString   = `SELECT * FROM follower_list 
                           WHERE user_id = "${userId}" AND following_id = "${data.following}"`,
          queryString1  = `INSERT INTO follower_list (user_id, following_id, create_ts) VALUES ("${userId}", "${data.following}", NOW())`,
          queryString2  = `UPDATE follower_list SET create_ts = NOW() 
                           WHERE user_id = "${userId}" AND following_id = "${data.following}"
                           OR user_id = "${data.following}" AND following_id = "${userId}"`

    try {
      conn.query(queryString, (err, data) => {
        if (!!err) {
          res.sendStatus(400)
        } else {
          
          if (data.length ==  0)  {
            conn.query(queryString1, (err)  =>  {
              if (!!err)  res.sendStatus(400)
              else  res.sendStatus(200)
            })
          } else  {
            conn.query(queryString2, (err)  =>  {
              if  (!!err) res.sendStatus(400)
              else  res.sendStatus(200)
            })
          }
        }
      }) 
    } catch (err) {
      res.sendStatus(400)
    }
  })

  module.exports = router