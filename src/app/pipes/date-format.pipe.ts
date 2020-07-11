import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(dateTs : Date): any {
    const seconds : number = (new Date(dateTs).getTime())/1000

    if  ((Date.now()/1000) - seconds < 60)
      return  ((Date.now()/1000) - seconds).toFixed(0) + 's'
    if  ((Date.now()/1000) - seconds < 3600)
      return  (((Date.now()/1000) - seconds)/60).toFixed(0) + 'm'
    if  ((Date.now()/1000) - seconds < 86400) 
      return  (((Date.now()/1000) - seconds)/(60*60)).toFixed(0) + 'h'

    return new Date(dateTs).toDateString()
  }

}
