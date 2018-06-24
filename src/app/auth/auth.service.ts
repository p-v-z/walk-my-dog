import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import * as firebase from 'firebase';
import { User } from '../shared/user.model';
import { AlertService } from '../shared/alert.service';

@Injectable()
export class AuthService {
  token: string = null;
  storeData = false;
  user: User;

  constructor(
    private router: Router,
    private http: Http,
    private alertService: AlertService,
  ) {}

  signupUser(email: string, password: string, firstname: string, surname: string) {
    this.storeData = true;
    this.user = new User(email, firstname, surname);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.user.id = result.user.uid;
        this.signinUser(email, password);
      })
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.getToken())
      .catch((error) => {
        this.alertService.error('Login Unsuccessful');
        console.log(error);
      });
  }

  getToken(): string {
    firebase.auth().currentUser.getIdToken()
    .then((token: string) => {
      this.token = token;
      this.router.navigateByUrl('/walks');
      this.alertService.success("Login successful", true);

      if (this.storeData) {
        this.storeUserData();
      }
    });
    return this.token;
  }

  storeUserData() {
    this.storeData = false;

    return this.http.put('https://walkmydog-bd9ce.firebaseio.com/Users/user-' + this.user.id + '.json?auth=' + this.token, this.user)
        .subscribe((result) => {
          console.log("Store result:");
          console.log(result);
        });
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }


}
