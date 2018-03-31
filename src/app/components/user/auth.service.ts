import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** RXJS */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/** FIREBASE */
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

/** REDUX */
import { NgRedux } from 'ng2-redux';

/** STORES AND ACTIONS */
import { IAppState } from './../../store';
import { LOAD_USER_DATA } from './actions';
import { LanguagesService } from '../languages/languages.service';
import { LOAD_LANGUAGES } from './../languages/actions';

/** INTERFACES */
interface UserData {
  status: string;
  user: {
    displayName: string
    phoneNumber: string
    photoURL: string
    providerId: string
    uid: string
  };
}


@Injectable()
export class AuthService {
  public user$: Observable<firebase.User>;
  
  private checkingUserInfo = true;
  private userUrl = 'http://www.mariobrusarosco.com/code-help/api/login/?user=';

  /**
   * @description CONSTRUCTOR
   * @param  {AngularFireAuth} public afAuth
   * @param  {ActivatedRoute} private routeInfo
   * @param  {Router} privat eroute
   * @param  {NgRedux<IAppState>} private store
   */
  constructor(
    public afAuth: AngularFireAuth, 
    private routeInfo: ActivatedRoute,
    private route: Router,
    private http: HttpClient,
    private store: NgRedux<IAppState>,
    private langService: LanguagesService) {

      this.user$ = afAuth.authState;
      this.user$
        .subscribe(response => {
          if (response) { 
            this.getUserInfo(response.toJSON());
          }
        });
  }


  getUserInfo(user: any) {
  //  console.log(user);
  //  console.log(this.userUrl + JSON.stringify(user.providerData));
    this.http.get(this.userUrl + JSON.stringify(user.providerData))
      .toPromise()
      .then( 
        (userData: UserData) => {
          // console.log(userData);
          // console.log(userData.user.uid);
          this.store.dispatch({type: LOAD_USER_DATA, payload: userData.user});
          this.langService.getUserLanguages(userData.user.uid)
          .then(
            data => {
              this.store.dispatch({type: LOAD_LANGUAGES, payload: data});
            },
            error => {
              console.log('error: ==>', error);
            },
          );
        },
        error => {
          console.log('error: ==>', error);
        },
      );

      // Promise.all(
      //   [
      //     this.http.get(this.userUrl + JSON.stringify(user.providerData)).toPromise()
      //   ]
      // ).then(
      //   (data) => {
      //     console.log(data);
      //     // this.store.dispatch({type: LOAD_USER_DATA, payload: e });
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
      
    // this.store.dispatch({type: LOAD_USER_DATA, payload: providerData});
      // this.checkingUserInfo = false;

  }


  login_with_google(): void {
    // let returnUrl = this.routeInfo.snapshot.queryParamMap.get('returnUrl') || '/';
    // localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


  logout(): void{
    this.afAuth.auth.signOut();
    this.route.navigateByUrl('/login');
  }
}