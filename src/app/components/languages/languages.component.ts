import { Component, OnInit } from '@angular/core';
import { CentralService } from '../../services/central.service';

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  
  constructor(
    private service: CentralService,
    private languages$) {}

  ngOnInit() {
    this.languages$ = this.service.getLanguages();
  }

}
