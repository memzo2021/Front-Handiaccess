import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isAuthenticated = false;
  constructor(private authService: AuthenticationService, private router: Router) { }
  ngOnInit(): void {


    this.authService.messager.subscribe((message: boolean) => {
       console.log(message);
      this.isAuthenticated = message;
    })
    this.authService.newsletter.subscribe((textNewsletter: string) => {
      alert(textNewsletter);
    })


  }
  onClickLogout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigateByUrl('/app-sign-in');
    
  }
}