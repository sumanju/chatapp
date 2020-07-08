const crypto = require('crypto')

const KEY = "abcdefghijklmnopqrstuvwx"

class Crypto {

  constructor() {
  }

  static encryption(raw) {
    let cipher     =  null
        cipher     =  crypto.createCipheriv('des-ede3', KEY,  "")
    let encrypted  =  cipher.update((raw), 'utf-8', 'hex')
    encrypted +=  cipher.final('hex')
    return encrypted  
  }

  static decryption(enc) {
    let dichpher = null
    dichpher     =  crypto.createDecipheriv('des-ede3', KEY, "")
    dichpher.setAutoPadding(true)
    let decrypted   = dichpher.update((enc), 'hex', 'utf-8')  
    decrypted += dichpher.final('utf-8')
    return decrypted
  }

}
module.exports = Crypto