import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from './shared/services/user.service';
import {AuthService} from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    router: Router,
    private userService: UserService
  ) {
    auth.user$.subscribe(user => {
      // if user is not auth we simple return
      if (!user) return;
      // When user login, we call this method to save the user
      userService.save(user);
      const returnUrl = localStorage.getItem('returnUrl');
      // if returnUrl doesnt av a value, we return
      if (!returnUrl) return;
      // otherwise we remove the url from storage and navigate the user
      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
