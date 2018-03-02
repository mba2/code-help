import { IAppState } from '../store';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class CentralService {
  
  constructor(
    private db: AngularFireDatabase ) { }

  public getLanguages (): Observable<any> {
    console.log('getLanguages');
    let languagesRef: AngularFireList<any>; 
    let languages$: Observable<any>;
    
    languagesRef = this.db.list("/languages");
    languages$ = languagesRef.snapshotChanges().map(changes => {
      return changes.map( item => ({ key: item.payload.key, name: item.payload.val()}) )
    });
    // languages$ = languagesRef.valueChanges();
    // console.log(languages$);

    return languages$; 
  }

}
