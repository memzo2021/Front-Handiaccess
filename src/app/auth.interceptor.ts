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

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('coucou c\'est moi ');
    const token = localStorage.getItem('token');

    if (token !== '' && token !== null) {
       // je viens modifier la requete sortante pour 
      // y ajouter le token trouvé dans le localStorage

      // vérif date expiration
      const decodedToken: { sub: string, iat: number, exp: number } = jwtDecode(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();

      if (expirationDate < currentDate) { 
        return next.handle(request);
      }

      const authReq = request.clone(
        {
       //   headers: request.headers.set('Authorization', `Bearer ${token}`)
            setHeaders:{Authorization: `Bearer ${token}`}
        }
      )
      // je laisse passer (vers le back) la requête possédant un token 
      return next.handle(authReq);
    } else {
      // si je n'ai pas de token, je ne modifie la requete sortante et je la laisse passer
      return next.handle(request);
    }

  }
}
