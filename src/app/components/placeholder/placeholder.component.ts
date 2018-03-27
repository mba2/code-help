import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})

export class PlaceholderComponent implements OnInit {
  @Input('config') config;

  public rawDate: Date;
  
  public day;
  public month;
  public year;
  private months_arr = ['January','February','March','Abril','May','June','July','August','September','November','December'];

  public isSelected = false;
  public isInRange = false;

  constructor() { }

  customToString() {
    this.rawDate = new Date(
      this.config[2],         /** year */
      (this.config[0] - 1),   /** month (array based indexed) */
      this.config[1],         /** day */
    );
    this.day = this.rawDate.getDate();
    this.month = this.months_arr[this.rawDate.getMonth()];
    this.year= this.rawDate.getFullYear();

    // console.log(this.full_date_string.toString())
  }

  ngOnInit() {
    this.customToString();
  }

  isReadyToSearch() {
    
  }
  
}
