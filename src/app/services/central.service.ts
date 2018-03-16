import { IAppState } from '../store';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import { Http } from '@angular/http';
@Injectable()

export class CentralService {
  
  private languagesRef: AngularFireList<any>; 
  private languages$: Observable<any>;

  private syntaxesRef: AngularFireList<any>; 
  private syntaxes$: Observable<any>;
  
  constructor(
    private db: AngularFireDatabase,
    private http: Http ) { }
  
  public get(resource?, url?) {
    // APPROACH: DEALING WITH A RESPONSE OBJECT
    return this.http.get(url);
    /** 
      * APPROACH: DEALING WITH AN ARRAY OF NORMAL OBJECTS.
      *   WE GET THE 'response' AS AN ARGUEMNT OF AN ARROW FUNCTION 
      *   AND CONVERT IT TO AN ARRAY OF OBJECT WITH THE .json()
    */ 
    // return this.http.get(this.url)
    //   .map( response => response.json())
    //   .catch(this.errorHandler);
  }
  public getLanguages (): Observable<any> {
    this.languagesRef = this.db.list("languages");
    this.languages$ = this.languagesRef.snapshotChanges().map(changes => {
      return changes.map( item => ( { key: item.payload.key, name: item.payload.val()} ) )
    });
    return this.languages$; 
  }
  // public getLanguages () {
  //   var languagesRef = firebase.database().ref('languages/');
  //   languagesRef.on('value', function(snapshot) {
  //     console.log(snapshot.val());
  //   });
  // }

  // public addLang(lang:string) : Observable<any>{
  //   let index = this.languagesRef.push(lang).key();
  // }

  // public editLang(key:string, newName: string) {
  //   console.log(key,newName);
  //   this.languagesRef.update(key,newName);
  // }

  getUserSyntaxes(user) {
    return this.syntaxesRef = this.db.list("syntax/" + user.uid);
  }
}
