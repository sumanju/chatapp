const express = require('express')
const router  = express.Router()

router.post('/login', (req, res) => {
  console.log(req.body)
  res.status(200).send({
    pro1 : 'suman',
    prop2 : 'mandal'
  })
})

module.exports = router