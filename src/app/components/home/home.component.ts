import { Component, OnInit , AfterViewInit, AfterContentInit,  ViewChildren } from '@angular/core';
import { QueryList, ContentChildren } from '@angular/core';

import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';
import { CentralService } from '../../services/central.service';
import { LanguageComponent } from '../language/language.component';
import { AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterContentInit , AfterContentChecked {
  
  private url = "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json";
  private url_2 = "https://api.github.com/users/mosh-hamedani/followers";
  private url_3 = "https://api.github.com/users/mba2/followers";
  
  private infoIsFullyLoaded = false;

  private myArray = [];

  @ViewChildren(LanguageComponent) items : QueryList<LanguageComponent>;

  constructor(private service: CentralService) {
    // console.log(this.items);
   }

  private loadInfo() {
    this.service.loadOne(this.url)
      .then( a => this.myArray = a.json() )
      .then( b => {
        return this.service.loadOne(this.url_2)
      })
      .then(c => {
        console.log(c)
        return this.service.loadOne(this.url_3)
      })
      .then( d => {
        // console.log(d);
        this.infoIsFullyLoaded = true;
        console.log(this.items);
      })
  }

  // test() {
  //   console.log(this.items.first);
  // }
  ngOnInit() {
    this.loadInfo();
  } 
  
  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit", this.items);
  // }
  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit", this.items);
  // }
  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit", this.items);
  // }
  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked", this.items);
  // }


}
