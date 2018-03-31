import { LanguagesService } from './../languages/languages.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private lang_service: LanguagesService) { 
  }

  ngOnInit() {
  }

}
