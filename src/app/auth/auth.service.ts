import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private http: Http) {}

  signupUser(email: string, password: string, firstname: string, surname: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        //successfuly created user
        const userId = result.user.uid;
        this.storeUserData(firstname, surname, userId);
      })
      .catch(error => console.log(error));


  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then((token: string) => (this.token = token));
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  storeUserData(name, surname, userId) {
     const token = this.getToken();
     const body =  {
       'name' : 'name',
       'surname' : 'surname',

     }
      return this.http.put('https://walkmydog-bd9ce.firebaseio.com/user/jack/name.json?auth=' + token, body);
  }
}
