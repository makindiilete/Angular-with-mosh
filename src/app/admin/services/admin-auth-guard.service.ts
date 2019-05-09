import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserService} from '../../shared/services/user.service';
import {AuthService} from '../../shared/services/auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    // We start with the firebase auth users 'user$', we then switch to the user stored in database having the isAdmin property and we map it to an appUser returning a boolean value of 'isAdmin' property
    return this.auth.appUser$.map(appUser => appUser.isAdmin);
  }
}
