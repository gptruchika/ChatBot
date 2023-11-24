import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  predefinedAnswers: { [key: string]: string } = {
    'Hello': 'Hi there! How can I help you?',
    'How are you?': "I'm just a bot, but thanks for asking!",
    'Need help with appliances' : "Please Expalin the detail Issue",
    'Dilevery Issue':"Email at xyz@example.com",
    'Help': "Sure, I'm here to assist you!",
    'Refund Status':"Email at xyz@example.com", 
    'Contact Agent': "Cal at 9827345672",
    'ok':"Thankyou",
    'okay':"thankyou",
  };

  getPredefinedAnswer(message: string): string | null {
    return this.predefinedAnswers[message] || null;
  }
}
