import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(firebaseApp: FirebaseApp, public authService: AuthService) {
  }
}
