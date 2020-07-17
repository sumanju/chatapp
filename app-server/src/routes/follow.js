const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

  router.post('/getchathistory', (req, res)=> {
    const data          = req.body,
          queryString1  = `INSERT INTO follwer_list (user_id, follwing_id) 
                           VALUES ("${data.userId}", "${data.followingId}")`
    try {
      conn.query(queryString1, (err) => {
        if (!!err) {
          res.status(400).send({
            status : false  
          })
        } else {
          res.status(200).send({
            status : true,
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