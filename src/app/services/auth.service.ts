import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** RXJS */
import { Observable } from 'rxjs/Observable';
/** FIREBASE */
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class AuthService {
  public user$: Observable<firebase.User>;
  private userInfoIsChecked: boolean =  false;

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute) { 
    this.user$ = afAuth.authState;
    this.user$.subscribe(() => {
      console.log('checking for userCheckedInfo');
      this.userInfoIsChecked = true;
    });
  }
  
  login_with_google(): void {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(): void{
    this.afAuth.auth.signOut();
  }
}
