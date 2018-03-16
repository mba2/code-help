import { Component, OnInit } from '@angular/core';

import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private url = "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json";
  
  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

  // For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
  // to set initial date range value using the selDateRange attribute.
  private model: any = {beginDate: {year: 2018, month: 10, day: 9},
                         endDate: {year: 2018, month: 10, day: 19}};
  constructor() { }

  ngOnInit() {
  }

      // dateRangeChanged callback function called when the user apply the date range. This is
    // mandatory callback in this option. There are also optional inputFieldChanged and
    // calendarViewChanged callbacks.
    onDateRangeChanged(event: IMyDateRangeModel) {
      console.log('test');
      // event properties are: event.beginDate, event.endDate, event.formatted,
      // event.beginEpoc and event.endEpoc
  }

  
}
