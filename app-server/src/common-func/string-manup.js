
class StringManipulation {

  constructor() {}

  static getObjectValueFromCookieString(cookieStr, obj) {
    const data = cookieStr.split('; ')
    
    for ( let i = 0; i < data.length; i++) {
      if (data[i].split("=")[0] == obj) 
        return  data[i].split("=")[1] 
    }
  }
}

module.exports = StringManipulation