import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model);
  }

  logout() {
    return this.http.post(this.baseUrl + 'logout', {});
  }

  loggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

}
