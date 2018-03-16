import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** SERVICES */
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './services/user.service';
import { HeaderComponent } from './components/header/header.component';
import { CentralService } from './services/central.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private route: Router,
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private userService: UserService) {
      
    this.afAuth.auth.getRedirectResult().then(result => {
      if(result.user) {
        console.log(result.user);
        this.userService.updateUserInfo(result.user);

        this.route.navigateByUrl('/');
      }
    })
  }

  ngOnInit() {}
}
