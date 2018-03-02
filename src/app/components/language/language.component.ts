import { Component, OnInit } from '@angular/core';
import { CentralService } from '../../services/central.service';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { Input } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  @select('languages') lang;
  // private editMode: boolean = false;

  constructor(private service: CentralService) { 
    // this.languages$ = this.service.getLanguages();
  }

  ngOnInit() {
    console.log(this.lang);
  }



  removeLang() {
    
  }
}
