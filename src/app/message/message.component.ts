import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../Models/Message';
import { AlertService } from '../services/alert.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private message: MessageService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {

    this.message.getById(this.route.snapshot.params.id).subscribe(
      (res: any) => {
        this.userMessage = res.data;
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

  userMessage: Message = { id: 0, subject: "", content: "", isRead: 0 }

  goToInbox() {
    this.router.navigateByUrl('inbox')
  }

}
