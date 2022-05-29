import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../Models/Message';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor(
    private message: MessageService,
    private alert: AlertService

  ) { }

  ngOnInit(): void {
    this.message.getAll().subscribe(
      (res: any) => {
        this.messages = res.data;
      },
      (err) => {
        console.log(err.error);
        this.alert.toast().fire({
          icon: 'error',
          title: err.error.message
        })
      }
    )
  }

  messages: Message[] = [];

}
