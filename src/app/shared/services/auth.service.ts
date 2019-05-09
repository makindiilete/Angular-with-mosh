import { UserService } from './user.service';
import { AppUser } from '../models/app-user';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  // with the ActivatedRoute, we can get the route users tried to visit
  constructor(
      private userService: UserService,
      private afAuth: AngularFireAuth,
      private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  login() {
    // before returning users to login with google, we want to store the return url in local storage
    // if we have a queryParams with 'returnUrl' we use it else we use the root of our website
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    // we store the returnUrl in the localStorage
    localStorage.setItem('returnUrl', returnUrl);
    // We then send them to google to login
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
        .switchMap(user => {
          if (user) return this.userService.get(user.uid);

          return Observable.of(null);
        });
  }
}
