import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";

@Injectable()

export class LanguagesService {
  private languagesEndpoint = 'http://www.mariobrusarosco.com/code-help/api/languages/';
        // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'Content-Type':  'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': '*'
      //   })
      // };


  constructor(
    // private db: AngularFireDatabase,
    private http: HttpClient ) { 


    }
    
    
    public getUserLanguages(userId: string) {
      return this.http.get(this.languagesEndpoint + '?user=' + JSON.stringify(userId)).toPromise();
    }

    public updateLanguages(languagesToUpdate) {
      return this.http.patch(
        this.languagesEndpoint + '?update=' + JSON.stringify(languagesToUpdate),
          null
      ).toPromise();
    }

    public addLanguage(newLanguage) {
      return this.http.post(
        this.languagesEndpoint + '?add=' + JSON.stringify(newLanguage),
          null
      ).toPromise();
    }
}
