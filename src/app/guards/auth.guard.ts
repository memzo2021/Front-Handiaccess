import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
    const token = localStorage.getItem('token');

    if (token !== null) {
      const decodedToken: { sub: string, iat: number, exp: number, roles: string[] } = jwtDecode(token);

      console.log(decodedToken);
      let monRole: string[];
      monRole = decodedToken.roles;
      const expirationDate = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();
      console.log(expirationDate);
      console.log(currentDate);

      if (expirationDate < currentDate) {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/sign-in');
        return false;
      }
      else {
        if (!monRole) {
          
          this.router.navigateByUrl('/admin-filter');
          return false;
        }

        if ((monRole.length > 0) && monRole.includes("ROLE_ADMIN")) {
           return true;
        } else {
          return false;
        }
      }

    }
    else {
      this.router.navigateByUrl('/sign-in');
      return false;
    }
  }

}
