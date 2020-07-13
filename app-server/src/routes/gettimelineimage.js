const express = require('express')
const conn    = require('../db-connection/mysql-db')
const encrypt = require('../encrypt/crypto')
const router  = express.Router()

  router.post('/gettimelineimage', (req, res) => {
    console.log(req.body)
    const loadValue        = req.body.loadValue,
          userId           =  encrypt.decryption(req.body.userId),
          queryString = `SELECT * FROM
                         (SELECT t1.user_id as user_id, t1.name, t1.image, t1.unique_id, t1.create_ts, t2.user_id as like_by FROM 
                         (SELECT * FROM user_timeline ORDER BY create_ts DESC LIMIT ${loadValue}) t1 LEFT JOIN user_like_info t2 ON t1.unique_id = t2.unique_id) t3
                         ORDER BY create_ts DESC`

    try {
      conn.query(queryString, (err, data) => {
        if (!!err) {
          console.log(err)
          res.status(400).send({
            status : false
          })
        } else {
          let respData  = []

          for (let i = 0; i < data.length; i++) {
            if (data[i]['like_by'] == null)  {
              respData.push({
                user_id     : data[i]['user_id'],
                name        : data[i]['name'],
                image       : data[i]['image'],
                create_ts   : data[i]['create_ts'],
                unique_id   : data[i]['unique_id'],
                like_count  : 0,
                isLike      : false
              })
              continue
            } else {
              let count   = 0,
                  id      = data[i]['unique_id']
                  isLike  = false

              for (j = i; j < data.length; j++) {
                if (data[j]['like_by'] != null && data[j]['unique_id'] == id) {
                  count = count + 1
                  if (userId == data[j]['like_by'])  {
                    isLike = true 
                  }
                }
                else 
                  break
              } 
              respData.push({
                user_id     : data[i]['user_id'],
                name        : data[i]['name'],
                image       : data[i]['image'],
                create_ts   : data[i]['create_ts'],
                unique_id   : data[i]['unique_id'],
                like_count  : isLike ? count - 1 : count,
                isLike      : isLike
              })
              i = j - 1
            }
          }  

          res.status(200).send({
            status : true,
            data   : respData
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

//   SELECT * FROM
// (SELECT t1.user_id, t1.name, t1.image, t1.unique_id, COUNT(t1.unique_id), create_ts FROM `user_timeline` t1 LEFT JOIN `user_like_info` t2 ON t1.unique_id = t2.unique_id GROUP BY t1.unique_id) t3
// ORDER BY t3.create_ts DESC