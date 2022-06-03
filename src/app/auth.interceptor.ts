import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('coucou c\'est moi ');
    const token = localStorage.getItem('token');
    if (token !== null && token !== '') {

      const authReq = request.clone(
        {
          setHeaders: { 'Authorization': `Bearer ${token}` } // version plus courte
        }
      )

      return next.handle(authReq);
    } else {
      return next.handle(request);
    }

  }
}