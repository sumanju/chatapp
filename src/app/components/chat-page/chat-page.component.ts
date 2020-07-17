import { Component, 
         OnInit,
         OnDestroy
       }                      from '@angular/core'
import { AppServiceService }  from 'src/app/app-service.service'
import { FormBuilder, 
         FormGroup, 
         Validators 
       }                      from '@angular/forms'

export interface ChatPageParams {
  userId  : string,
  name    : string,
  image   : string
}

@Component({
  selector    : 'app-chat-page',
  templateUrl : './chat-page.component.html',
  styleUrls   : ['./chat-page.component.css']
})

export class ChatPageComponent implements OnInit , OnDestroy {
  
  chatData    : any
  chatList    : object[]  = []
  msgForm     : FormGroup 
  nowVisit    : boolean   = true

  constructor(private chatDetails : AppServiceService,
              private formuilder  : FormBuilder) { 

    this.msgForm = this.formuilder.group({
      msg : [null, Validators.required]
    })
  }

  ngOnInit() {
    this.chatData = JSON.parse(localStorage.getItem('chatinfo'))
    this.getChatList()
  }

  ngOnDestroy(): void {
    this.chatDetails.emit('leave', true)
  }

////////////////////////////////////////////////////////////////////////////////
//                                  PRIVATE 
////////////////////////////////////////////////////////////////////////////////

  getChatList() {
    const data = {
      'userId'  : localStorage.getItem('userInfo'),
      'frndId'  : this.chatData.userId    
    }
    this.chatDetails.emit('mesg', data)
    this.chatDetails.listen('mesg').subscribe((data) => {
      if (this.nowVisit) {
        this.scroll()
        if (this.chatList.length) {
          this.nowVisit = false
        }
      }
      this.chatList = data
    })
  }

  private async sendMsg(msg : string) {
    this.chatList.push({
      'msg_from'  : '',
      'msg_to'    : this.chatData.userId,
      'msg'       : msg,
    })
    this.scroll()
    this.msgForm.setValue({
      msg : null
    })
    await this.chatDetails.sendMsg({ sndrId  : localStorage.getItem('userInfo'),
                                     recvId  : this.chatData.userId,
                                     msg     : msg })
  }

////////////////////////////////////////////////////////////////////////////////
//                                  PRIVATE 
////////////////////////////////////////////////////////////////////////////////

  scroll() {
    window.scrollBy({
      top : 10000,
      behavior : 'smooth'
    })
  }

  send() {
    if (this.msgForm.get('msg').value)
      this.sendMsg(this.msgForm.get('msg').value)
  }
  
}
