import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** RXJS */
import { Observable } from 'rxjs/Observable';
/** FIREBASE */
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class AuthService {
  public user$: Observable<firebase.User>;
  private checkingUserInfo: boolean =  true;

  /**
   * @description CONSTRUCTOR
   * @param  {AngularFireAuth} publicafAuth
   * @param  {ActivatedRoute} privaterouteInfo
   * @param  {Router} privateroute
   */
  constructor(
    public afAuth: AngularFireAuth, 
    private routeInfo: ActivatedRoute,
    private route: Router) { 
      
    this.user$ = afAuth.authState;
    this.checkUserInfo();
  }
  /**
   * @description The 'checkingUserInfo' flag starts as 'true' to indicate that the
   * application doesn`t have returned the user data yet. This function sets a subscription 
   * that is set when the user data is returned. Then, it changes the 'checkingUserInfo' flag
   * to false to indicate that the application has all user data.
   */
  checkUserInfo(): void {
    this.user$.subscribe(() => {
      this.checkingUserInfo = false;
    });
  }
  /**
   * @description logs in the user with google provider,  
   * and redirects it to the login page
   */
  login_with_google(): void {
    let returnUrl = this.routeInfo.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  /**
   * @description logs out the user and redirects it to the login page
   */
  logout(): void{
    this.afAuth.auth.signOut();
    this.route.navigateByUrl('/login');
  }
}
