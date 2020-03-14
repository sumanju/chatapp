const express = require('express')
const conn    = require('../db-connection/mysql-db')
const router  = express.Router()

  router.post('/signup', (req, res) => {
    const data = req.body,
          queryString = `INSERT INTO user_info 
                         values(\'${data.name}\',\'${data.userId}\',\'${data.password}\',\'${data.phoneNo}\')`
   
    try {
      conn.query(queryString, (err) => {
        if (!!err) {
          res.status(400).send({
            status : false
          })
        } else {
          res.status(200).send({
            status : true
          })
        }
      })
    } catch(err) {
      res.status(400).send({
        status : false
      })
    }
  })

  module.exports = router
