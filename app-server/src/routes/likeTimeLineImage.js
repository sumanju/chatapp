const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

  router.post('/likeTimeLineImage', (req, res) => {
    const data = req.body

    try {
      const queryString = `SELECT * FROM  user_like_info  T1 LEFT JOIN  user_timeline T2 
                           ON T1.unique_id = T2.unique_id 
                           WHERE T1.unique_id=${data['uniqueId']} AND T1.user_id="${encrypt.decryption(data['userId'])}"`
      conn.query(queryString, (err, statusData) => {
        if (!!err)  {
          res.status(400).send({
            status  : false
          })
        } else  {

          if (!statusData.length) {  // if user had not like yet
            const queryString1  = `INSERT INTO user_like_info values (${data['uniqueId']}, "${encrypt.decryption(data['userId'])}")`
            conn.query(queryString1, ()  =>  {
              res.status(200).send({
                status : true
              })
            })

          } else {                  //  if user had already like it

            const queryString2  = `DELETE FROM user_like_info WHERE unique_id=${data['uniqueId']} AND user_id="${encrypt.decryption(data['userId'])}"`
            conn.query(queryString2, ()  =>  {
              res.status(200).send({
                status : true
              })
            })

          }
        }
      })
    } catch (err) {
      res.status(400).send({
        status  : false
      })
    }

  })

  module.exports = router