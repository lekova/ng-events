import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  login(formValues) {
    console.log('formValues', formValues);
    this.authService.loginUser(formValues.userName, formValues.password);
  }
}
