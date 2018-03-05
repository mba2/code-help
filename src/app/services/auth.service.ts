import { Injectable } from '@angular/core';

/** RXJS */
import { Observable } from 'rxjs/Observable';
/** FIREBASE */
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  private user$: Observable<firebase.User>;
  private userInfoIsChecked: boolean =  false;

  constructor(public afAuth: AngularFireAuth) { 
    this.user$ = afAuth.authState;
    this.user$.subscribe(() => this.userInfoIsChecked = true);
  }
  
  login_with_google(): void {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
