const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

router.post('/profileImage', (req, res) => {
  const userId        = req.body.userInfo,
        base64Img     = req.body.base64,
        status        = req.body.status
        queryString1  = `INSERT INTO user_image VALUE ('${userId}', '${base64Img}')`,
        queryString2  = `UPDATE user_image SET image = '${base64Img}' WHERE user_id = '${userId}'`
  let   queryString

  if (status) {
    queryString = queryString1
  } else {
    queryString = queryString2
  }

  try {
    conn.query(queryString, (err, data) => {
      console.log(err)
      if (!!err) {
        res.status(400).send({ status : false })
      } else {
        res.status(200).send({
          status : true
        })
      }
    })
  } catch (err) {
    res.status(200).send({ status : false })
  }
})

module.exports = router