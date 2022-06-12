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
    const token = localStorage.getItem('token');
    if (token !== null && token !== '') {

      const authReq = request.clone(
        {
          setHeaders: { 'Authorization': `Bearer ${token}` }
        }
      )

      return next.handle(authReq);
    } else {
      return next.handle(request);
    }

  }
}