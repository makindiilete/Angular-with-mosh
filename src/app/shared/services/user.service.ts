import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from 'angularfire2/database';
import * as firebase from 'firebase';
import {AppUser} from '../models/app-user';

@Injectable()
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  // Here this method is responsible for saving new users to the database
  save(user: firebase.User) {
    // we calling the object method bcos we are working with each user object and we are storing the users in '/users/' location plus the unique user id then we update this field with the object properties
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // we are using this method to read a user
  // <AppUser> is our newly defined model
  get(uid: string): FirebaseObjectObservable<AppUser> {
    // this returns the application user object
    return this.db.object('/users/' + uid);
  }
}
