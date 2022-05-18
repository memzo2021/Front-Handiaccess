import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css'],
})
export class AdminSignUpComponent implements OnInit {
  public signUpForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: this.passwordMatchValidator
      }
    );
  }
  passwordMatchValidator(form: FormGroup) {
    if (form.get('password')?.value === form.get('confirmPassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }
  onSubmitForm() {
    console.log(this.signUpForm.value);
    // //TODO{"userName": "", "password": "", "confirmPassword": ""};

    const username = this.signUpForm.value.userName;
    const password = this.signUpForm.value.password;
    //TODO je transfère la valeur de mes champs userName et password
    ////TODO dans 2 constances pour plus de facilité de manipulation

    // this.authService
    //   .registerUser(username, password)
    //   .subscribe((reponseApi) => {
    //     console.log(reponseApi);
    //   });


  }
}
