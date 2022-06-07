import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {
  signInError = false;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    
  }
   
  onSubmitSignIn(form: NgForm) {
    console.log(form.value);
    const username = form.value.username;
    const password = form.value.password;

    const requeteObservable = this.authService.logUser(username, password);

    requeteObservable.subscribe({
      // method a appeler en cas de succès 
      next: (resp: any) => {
        console.log(resp.token);

        this.router.navigateByUrl('/admin-crud');
        // TODO stockage de mon token 
        // Localstorage
        localStorage.setItem("token", resp.token);
        this.authService.messager.next(true);

      },
       error: (err: any) => {
         this.signInError = true;
        console.log(err);
        this.authService.newsletter.next('Erreur de connexion ...');

      }
    })

     
  }

}
