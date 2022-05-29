import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router,
    private auth: AuthService,
    private alert: AlertService
  ) { }
  public isMenuCollapsed = true;

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout().subscribe(
      (res: any) => {
        this.alert.toast().fire({
          icon: 'success',
          title: res.message
        });
      },
      (err) => {
        console.log(err.error);
        this.alert.toast().fire({
          icon: 'error',
          title: err.error.message
        })
      }
    )
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
