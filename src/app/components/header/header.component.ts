import { Component, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { LanguagesComponent } from '../languages/languages.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
