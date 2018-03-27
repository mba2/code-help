import { Component, OnInit , AfterViewInit, AfterContentInit,  ViewChildren } from '@angular/core';
import { QueryList, ContentChildren } from '@angular/core';

import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';
import { CentralService } from '../../services/central.service';
import { AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { PlaceholderComponent } from '../placeholder/placeholder.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren(PlaceholderComponent) days : QueryList<PlaceholderComponent>;

  private in_d: PlaceholderComponent;
  private out_d: PlaceholderComponent;

  constructor(private service: CentralService) {
    // console.log(this.items);
  }

  getSelectedDays(): number {
    return this.days.filter( day => day.isSelected).length;
  }

  unselectDay(day: PlaceholderComponent = null) {
    /** IN CASE NOTHING IS PASSED AS ARGUMENT.. */
    if(!day) {
      this.days.map( day => { day.isSelected = day.isInRange = false; }); 
      return;
    }
    /** OTHERWISE... */
    day.isSelected = !day.isSelected;
  } 

  userFirstSelection(d: PlaceholderComponent) {
    this.in_d = d;
    d.isSelected = !d.isSelected;
  }

  defineInRangeDays() {
    // console.log(this.in_d);
    // console.log(this.out_d);
    this.days.forEach( day => {
      if( day.rawDate > this.in_d.rawDate && day.rawDate < this.out_d.rawDate) {
        console.log('day:', day);
        day.isInRange = true;
      }
    })
  }

  revertDates() {
    let temp = this.in_d;
    this.in_d = this.out_d;
    this.out_d = temp;
  }

  test(d: PlaceholderComponent) {
    // console.log(d);
    // /** 
    //  * IF THIS CONDITION IS TRUE... THEN IT`S THE USER`S FIRST CLICK ...
    //  * SET THE CLICKED DAY AS CHECKIN AND TERMINATE THE FUNCTION
    // * */
    if(!this.getSelectedDays()) {
      d.isSelected = true;
      this.in_d = d;
      return;
    }
    
    if(this.getSelectedDays() === 1 && d !== this.in_d) {
      d.isSelected = true;
      this.out_d = d;
      if(this.in_d.rawDate > this.out_d.rawDate) {
        this.revertDates();
      }
      this.defineInRangeDays();
      return;
    }else {
      
    }



    // if(d.rawDate <= this.in_d.rawDate) {
    //   this.in_d = null;
    //   return;
    // }

    // else if(d === this.out_d) {
    //   this.unselectDay(d);
    //   this.out_d = null;
    //   return;
    // }

    if(this.getSelectedDays() === 2) {
      this.unselectDay();
      d.isSelected = true;
      this.in_d = d;
      this.out_d = null;
    }



    // /** AT THIS POINT, ONE DAY IS ALREADY SELECTED...*/
    // if(d.rawDate.getTime() <= this.in_d.rawDate.getTime()) {
    //   d.isSelected =  true;
    //   this.in_d.isSelected = false;
    //   this.in_d = d;
    // }else {
    //   d.isSelected =  true;
    //   this.out_d = d;
    //   // this.out_d.isSelected = true;
    // }

    console.log('continuing: ', this.getSelectedDays());

  }
  
  ngOnInit() {
  } 
  
  ngAfterViewInit() {
    // console.log("ngAfterViewInit", this.days);
  }
  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit", this.days);
  // }
  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked", this.days);
  // }
}
