import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

interface Message {
  sender: string;
  text: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  messages: Message[] = [];
  newMessage: string = '';
  botResponded: boolean = false;
  messageSelected: boolean = true;
  predefinedMessages: string[] = ['Need help with appliances', 'Dilevery Issue', 'Refund Status', 'Contact Agent'];
  stopchat=true;

  constructor(private chatService : ChatService){

  }

  ngOnInit() {
    // Simulate the bot sending predefined messages when the component initializes
    // this.predefinedMessages.forEach((message) => {
    //   this.selectPredefinedMessage(message);
    // });
  }

  selectPredefinedMessage(message: string) {
    this.addMessage('User', message);
  }

  addMessage(sender: string, text: string) {
    this.messages.push({ sender, text });
    this.newMessage = '';
    if (sender === 'User') {
      
      const predefinedAnswer = this.chatService.getPredefinedAnswer(text);
      if (predefinedAnswer) {
        this.messageSelected=false;
        setTimeout(() => {
          this.addMessage('Bot', predefinedAnswer);
        }, 1000);
      } else {
        // If no predefined answer, simulate a default response
        setTimeout(() => {
          this.addMessage('Bot', 'Ok , Our agent will contact you');
        }, 10);
        this.stopchat = false;
      }
    // if(!this.botResponded){
    //   setTimeout(() => {
    //   this.addMessage('Bot', 'Our agent will contact you');
    //   }, 100);
    //   this.botResponded = true;
    // }
    this.newMessage = '';
  }

  
}
}
