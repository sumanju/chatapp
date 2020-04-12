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
 
  chatData  : any
  chatList  : object[]  = []
  msgForm   : FormGroup 
  interval  : any

  constructor(private chatDetails : AppServiceService,
              private formuilder  : FormBuilder) { 

    this.msgForm = this.formuilder.group({
      msg : [null, Validators.required]
    })
  }

  ngOnInit() {
    this.chatData = JSON.parse(localStorage.getItem('chatinfo'))
    this.interval = setInterval(() => {
      this.getChatList()
    }, 1000)
    this.getChatList()
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

////////////////////////////////////////////////////////////////////////////////
//                                  PRIVATE 
////////////////////////////////////////////////////////////////////////////////

  getChatList() {
    this.chatDetails.getChatList({sndrId : this.chatData.userId, 
                                  recvId : localStorage.getItem('userInfo')}).subscribe(res => {
      if (res.status) {
        this.chatList = res.data
      }
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
        this.getChatList()
      }                        
    })
  }

////////////////////////////////////////////////////////////////////////////////
//                                  PRIVATE 
////////////////////////////////////////////////////////////////////////////////

  send() {
    this.sendMsg(this.msgForm.get('msg').value)
  }
  
}
