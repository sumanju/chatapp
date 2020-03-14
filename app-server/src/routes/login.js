const express = require('express')
const conn    = require('../db-connection/mysql-db')
const router  = express.Router()

router.post('/login', (req, res) => {
  console.log(req)
  const data        = req.body,
        queryString = `SELECT * FROM user_info
                       WHERE user_id = '${data.userId}' AND password = '${data.password}'`

  try {
    conn.query(queryString, (err, row) => {
      if (!!err) {
        res.status(400).send({
          status : false
        })
      }
      res.status(200).send({
        status  : true,
        data    : row
      })
    })
  } catch (err) {
    res.status(400).send({
      status : false
    })
  }
})  

module.exports = router