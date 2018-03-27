/** ANGULAR`S CORE */
import { Component, OnInit, Input } from '@angular/core';
/** SERVICES */

/** RXJS */
import { Observable } from '@firebase/util/dist/esm/src/subscribe';
/** REDUX */
import { NgRedux, select } from 'ng2-redux';
/** STORE(S) */
import { IAppState } from '../../store';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent implements OnInit {
  @select(['languages','languages']) avaliableLangs$: Observable<any>;

  constructor(private store: NgRedux<IAppState> ) { }

  ngOnInit() { }
}
