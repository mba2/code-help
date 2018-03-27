import { Component, OnInit } from '@angular/core';

/** SERVICES */
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './services/user.service';
import { HeaderComponent } from './components/header/header.component';
import { CentralService } from './services/central.service';


/** REDUX */
import { IAppState, LOAD_APP_INFO } from './store';
import { NgRedux } from 'ng2-redux';
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    // private auth: AuthService,
    // private afAuth: AngularFireAuth,
    // private userService: UserService,
    private service: CentralService,
    private store: NgRedux<IAppState>) {
      
    // this.afAuth.auth.getRedirectResult().then(result => {
    //   if(result.user) {
    //     console.log(result.user);
    //     this.userService.updateUserInfo(result.user);

    //     this.route.navigateByUrl('/');
    //   }
    // })
  }

  ngOnInit() {
    this.loadAppInfo();
  }

  loadAppInfo() {
    Promise.all([
      this.service.loadAppInfo()

    ]).then( (e) => {
      const languages = e[0]['languages'];

      this.store.dispatch({ type: LOAD_APP_INFO, languages })
      console.log(e);
    })
  }
}
