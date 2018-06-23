import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'walk';

  ngOnInit() {
   firebase.initializeApp({
     apiKey: 'AIzaSyArHE5K4jbqPQuusdyiZx4fXJ3-WiG8ic8',
     authDomain: 'walkmydog-bd9ce.firebaseapp.com',
     databaseURL: 'https://walkmydog-bd9ce.firebaseio.com',
     projectId: 'walkmydog-bd9ce',
     storageBucket: 'walkmydog-bd9ce.appspot.com',
     messagingSenderId: '162919034847'
   });
   console.log(firebase.auth());
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
