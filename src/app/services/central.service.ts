import { IAppState } from '../store';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class CentralService {
  
  private languagesRef: AngularFireList<any>; 
  private languages$: Observable<any>;
  
  constructor(
    private db: AngularFireDatabase ) { }

  public getLanguages (): Observable<any> {
    console.log('getLanguages');
    this.languagesRef = this.db.list("languages");
    this.languages$ = this.languagesRef.snapshotChanges().map(changes => {
      return changes.map( item => ({ key: item.payload.key, name: item.payload.val()}) )
    });
    // languages$ = languagesRef.valueChanges();
    // console.log(languages$);

    return this.languages$; 
  }

  // public addLang(lang:string) : Observable<any>{
  //   let index = this.languagesRef.push(lang).key();
    
  // }

  public editLang(key:string, newName: string) {
    console.log(key,newName);
    this.languagesRef.update(key,newName);
  }
}
