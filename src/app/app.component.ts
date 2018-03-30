import { Component } from '@angular/core';

/** REDUX */
import { select, NgRedux } from 'ng2-redux';
/** STORE(S) */
import { IAppState } from './store';
import { CHANGE_TITLE, INCREMENT } from './components/placeholder/actions';

/** SERVICES */
import { AuthService } from './components/user/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/toPromise';

/** STORES AND ACTIONS */
import { LOAD_USER_DATA } from './components/user/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @select( s => s.placeholder.title) placeholderTitle;
  @select( s => s.placeholder.counter) placeholderCounter;

  constructor(
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private store: NgRedux<IAppState>) {
      this.loadUserInfo();

  }


  loadUserInfo() {
    // this.auth.user$.switchMap()
    //   .subscribe(
    //     data => console.log(data) // success path,
    //     error => console.log('ae', error);
    //   );
    // this.auth.checkUserInfo()

    // this.afAuth.auth.getRedirectResult()
    //   .then(data => {
    //     if (data.user) {
    //       return data.user.providerData[0];
    //     }
    //   })
    //   // .then(providerData => {
    //   //   this.store.dispatch({type: LOAD_USER_DATA, payload: providerData});
    //   // })
    //   .then(providerData => {
    //     // this.auth.checkUserInfo();
    //     this.store.dispatch({type: LOAD_USER_DATA, payload: providerData});
    //   });


    // return Promise.all(
    //   [
    //     this.http.get(this.urlShow).delay(3000).toPromise(),
    //     this.http.get(this.urlSeasons).delay(3000).toPromise()
    //   ]);
    // }
  }

  // changeTitle(title: string) {
  //   this.store.dispatch( { type: CHANGE_TITLE, title });
  // }

  // increment() {
  //   this.store.dispatch( { type: INCREMENT });
  // }

}
