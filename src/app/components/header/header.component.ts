import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @select(['userStore']) user$: Observable<string>;

 
  constructor() { }

  ngOnInit() {
    this.user$.toPromise()
      .then( user => {
        console.log(user);
      });
  }

}
