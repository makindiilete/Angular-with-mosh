import { Component } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // injecting the service
  constructor(private auth: AuthService) {}

  // calling the login method from the service
  login() {
    this.auth.login();
  }
}
