import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBeHMKptxgBmCBEWPyPzpYtWvlflLFjlgE',
      authDomain: 'angular-4534a.firebaseapp.com',
      databaseURL: 'https://angular-4534a.firebaseio.com',
      projectId: 'angular-4534a',
      storageBucket: 'angular-4534a.appspot.com',
      messagingSenderId: '410244313115',
      appId: '1:410244313115:web:1e0f141f319127d7'
    };
    firebase.initializeApp(firebaseConfig);
  }

}
