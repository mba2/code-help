import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CentralService {
  
  constructor(
    private db: AngularFireDatabase ) { }

    getLanguages () {
      let languagesRef: AngularFireList<any>; 
      let languages$: Observable<any>;
      
      languagesRef = this.db.list("/languages");
      languages$ = languagesRef.snapshotChanges().map( data => { 
        return data.map(lang => ({ 
          "key"  : lang.payload.key,
          "name" : lang.payload.val()
        }))
      });
      
      return languages$; 
    }
}
