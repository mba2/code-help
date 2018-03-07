import { Injectable } from '@angular/core';

/** FIREBASE */
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  updateUserInfo(user: firebase.User) {
    this.db.object('/users/' + user.uid)
      .update({
        name : user.displayName,
        email : user.email
      })
  }
}
