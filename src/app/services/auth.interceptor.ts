import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    const token = localStorage.getItem("token");
    if (token) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', "Bearer " + token)
      });
      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
