import { Component, OnInit, Input, Output } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @select( s => s.placeholder.counter) counter;

  constructor(private ngRedux: NgRedux<IAppState>) { 
    console.log(this.ngRedux.getState());
  }
  
  ngOnInit() {
    console.log(this.ngRedux.getState());
  }

}
