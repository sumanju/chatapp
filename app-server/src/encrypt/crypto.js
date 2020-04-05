const crypto = require('crypto')

const KEY = "12345678901234567890123456789012",
      iv  =  crypto.randomBytes(16)

class Crypto {

  constructor() {
  }

  static encryption(raw) {
    let cipher     =  null
        cipher     =  crypto.createCipheriv('aes-256-cbc', KEY, iv)
    let encrypted  =  cipher.update(String(raw), 'utf-8', 'hex')
    encrypted +=  cipher.final('hex')
    return encrypted  
  }

  static decryption(enc) {
    let dichpher = null
    dichpher     =  crypto.createDecipheriv('aes-256-cbc', KEY, iv)
    dichpher.setAutoPadding(true)
    let decrypted   = dichpher.update(String(enc), 'hex', 'utf-8')  
    decrypted += dichpher.final('utf-8')
    return decrypted
  }

}
module.exports = Crypto