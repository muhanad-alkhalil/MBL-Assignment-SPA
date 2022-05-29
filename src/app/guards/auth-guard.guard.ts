import { AlertService } from './../services/alert.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private alert: AlertService
  ) { }
  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }
    this.alert.toast().fire({
      icon: 'error',
      title: "Un Authenticated!"
    })

    this.router.navigate(['/login']);
  }

}
