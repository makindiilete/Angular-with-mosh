import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  // with the canActivate parameter, we can get the url the user tries to access when authguard kicked it
  canActivate(route, state: RouterStateSnapshot) {
    //  here we want to get the auth status of the current user if user is auth, we return true, else we navigate them to login page
    return this.auth.user$.map(user => {
      if (user) return true;
      // we modify this to include the queryParams
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    });
  }
}
