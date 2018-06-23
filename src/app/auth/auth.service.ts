import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import * as firebase from 'firebase';
import { User } from '../shared/user.model';

@Injectable()
export class AuthService {
  token: string = null;

  user: User;
  storeData = false;

  constructor(private router: Router, private http: Http) {}

  signupUser(email: string, password: string, firstname: string, surname: string) {
    this.storeData = true;
    this.user = new User(email, firstname, surname);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.user.id = result.user.uid;
        this.signinUser(email, password);
      })
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.getToken())
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then((token: string) => {
      this.token = token;

      if (this.storeData) {
        this.storeUserData();
      }
    });
    return this.token;
  }

  storeUserData() {
    console.log("Store data");

    return this.http.put('https://walkmydog-bd9ce.firebaseio.com/Users/user-' + this.user.id + '.json?auth=' + this.token, this.user)
        .subscribe((result) => {
          console.log("store result:");
          console.log(result);
        });
  }

  isAuthenticated() {
    return this.token != null;
  }
}
