const mysql = require('mysql')

const connection = mysql.createConnection({
  host      : 'bvzsbnpduashvjj6xwhq-mysql.services.clever-cloud.com',
  user      : 'uxwlyfsmmir3r4ot',
  password  : 'sTuNORNees4eBmneeoFX',
  database  : 'bvzsbnpduashvjj6xwhq',
  port      : '3306'
})

connection.connect(err => {
  if (!!err) {
    throw err
  }
})

setInterval(() => {
  connection.query('SELECT 1')
}, 5000)

module.exports  = connection