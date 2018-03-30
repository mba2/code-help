import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";

@Injectable()

export class LanguagesService {
  private languagesUrl = 'http://www.mariobrusarosco.com/code-help/api/languages/?user=';
        // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'Content-Type':  'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': '*'
      //   })
      // };


  constructor(
    // private db: AngularFireDatabase,
    private http: HttpClient ) { }
    
    public loadLanguagesInfo(){
      return this.http.get('https://my-json-server.typicode.com/mba2/code-help/languages').toPromise();
    }
    
    public getUserLanguages(userId: string) {
      return this.http.get(this.languagesUrl + JSON.stringify(userId)).toPromise();
    }
}
