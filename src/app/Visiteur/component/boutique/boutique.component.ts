import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  chats = [];


  constructor(private chatService : ChatService) { }

  async ngOnInit() {

    this.chats = await this.chatService.getAllChats().toPromise();

    console.log(this.chats);
  }

}
