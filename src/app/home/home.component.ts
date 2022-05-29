import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private user: UserService,
    private alert: AlertService
  ) { }

  public userInfo: any = { username: "", totalMessages: 0, unreadMessages: 0 }

  ngOnInit(): void {
    console.log(this.userInfo)
    this.user.getInfo().subscribe(
      (res: any) => {
        this.userInfo = res.data;
      }
    ),
      (err) => {
        console.log(err.error);
        this.alert.toast().fire({
          icon: 'error',
          title: err.error.message
        })
      }
  }

  goToInbox() {
    this.router.navigateByUrl('inbox')
  }

}
