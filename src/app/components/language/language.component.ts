import { Component, OnInit, Input } from '@angular/core';
import { CentralService } from '../../services/central.service';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { ADD_LANG } from '../../actions/actions';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  @select('counter') counter;
  @select('languages') languages;

  constructor(private service: CentralService, private ngRedux: NgRedux<IAppState> ) { 
    // this.languages$ = this.service.getLanguages();
  }

  ngOnInit() {
  }

  editLang(key,test) {
    this.service.editLang(key,test);
  }

  addLang(val) {
    console.log(val);
    // this.service.addLang(val);
    this.ngRedux.dispatch( { type: ADD_LANG , payload: val})
  }
}
