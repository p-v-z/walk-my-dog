import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'walk';

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyDGDTtGNC4FkKpSe85qb2wLHzNi2xkxFy8",
    //   authDomain: "ng-walk-dog.firebaseapp.com"
    // });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
