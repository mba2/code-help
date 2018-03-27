import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";

@Injectable()

export class LanguageService {
  
  constructor(
    // private db: AngularFireDatabase,
    private http: HttpClient ) { }
    
    public loadLanguagesInfo(){
      return this.http.get("https://my-json-server.typicode.com/mba2/code-help/languages").toPromise();
    }
}
