/** ANGULAR`S CORE */
import { Component, OnInit, Input } from '@angular/core';
/** SERVICES */
import { CentralService } from '../../services/central.service';
/** REDUX */
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
/** STORE(S) */


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent implements OnInit {

  constructor(private store: NgRedux<IAppState> ) { }

  ngOnInit() {}
}
