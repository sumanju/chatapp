const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

router.post('/profileImage', (req, res) => {
  const userId        = req.body.userInfo,
        base64Img     = req.body.base64,
        queryString   = `UPDATE user_info SET image = "${base64Img}" WHERE user_id = "${userId}"`

  try {
    conn.query(queryString, (err, data) => {
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