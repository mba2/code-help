import { Component } from '@angular/core';
import { Router } from '@angular/router';

/** SERVICES */
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private route: Router) {
    this.afAuth.auth.getRedirectResult().then(result => {
      if(result.user) {
        let route = localStorage.getItem('returnUrl');
        this.route.navigate([route]);
      }
    })
  }
}
