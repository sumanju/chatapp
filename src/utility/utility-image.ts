import { DomSanitizer } from '@angular/platform-browser'


export class ImageProcessing {
  static domSanitizer: any

  constructor(private domSanitizer : DomSanitizer) {
  }

  static async getBase64(file : any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  static getArrayBufferToBase64(blob) {
    var reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
        var base64data = reader.result;                
        console.log(base64data);
    }
  }

  static getCompressedImage(file : any) {

    return new Promise((resolve, reject) => {
      let resizedImage
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (readerEvent : any) => {

        const image = new Image()
        image.src = readerEvent.target.result
        
        image.onload = (imageEvent : any) => {

          const canvas  = document.createElement('canvas'),
                maxSize = 800
              
          let width = image.width,
              height = image.height;

          if (width > height) {
            if (width > maxSize) {
              height *= maxSize / width
              width   = maxSize
            }
          } else if (height > maxSize) {
            width *= maxSize / height
            height = maxSize
          }
          
          canvas.width  = width
          canvas.height = height

          canvas.getContext('2d').drawImage(image, 0, 0, width, height)
          resizedImage = canvas.toDataURL('image/jpeg', 0.1)
          resolve(resizedImage)
        }
      }
      reader.onerror = error => reject(error)
    })
  }

}