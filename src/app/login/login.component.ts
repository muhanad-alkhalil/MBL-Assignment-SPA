import { AlertService } from './../services/alert.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private alert: AlertService
  ) { }

  loginModel: any = {};
  token



  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.loginModel).subscribe(
      (res: any) => {
        localStorage.setItem("token", res.token);
        this.alert.toast().fire({
          icon: 'success',
          title: 'Signed in successfully'
        });
        this.router.navigateByUrl('Home')
      },
      (err) => {
        console.log(err.error);
        this.alert.toast().fire({
          icon: 'error',
          title: err.error.message
        })
      }
    );
  }

}
