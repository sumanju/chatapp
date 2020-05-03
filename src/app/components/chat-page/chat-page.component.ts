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

export class ChatPageComponent implements OnInit, OnDestroy {
 
  chatData    : any
  chatList    : object[]  = []
  msgForm     : FormGroup 
  interval    : any
  currNavFlag : boolean   = true

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
      this.chatList = data
    })
    window.scrollBy({
      top : window.innerHeight,
      behavior : 'smooth'
    })
  }

  sendMsg(msg : string) {
    this.chatDetails.sendMsg(({ sndrId  : localStorage.getItem('userInfo'),
                                recvId  : this.chatData.userId,
                                msg     : msg})).subscribe(res => {
      if (res.status) {
        this.msgForm.setValue({
          msg : null
        })
      }                        
    })
  }

////////////////////////////////////////////////////////////////////////////////
//                                  PRIVATE 
////////////////////////////////////////////////////////////////////////////////

  send() {
    if (this.msgForm.get('msg').value)
      this.sendMsg(this.msgForm.get('msg').value)
  }
  
}
