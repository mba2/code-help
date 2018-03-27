/** ANGULAR`S CORE */
import { Component, OnInit, Input } from '@angular/core';
/** SERVICES */

/** RXJS */
import { Observable } from '@firebase/util/dist/esm/src/subscribe';
/** REDUX */
import { NgRedux, select } from 'ng2-redux';
/** STORE(S) */
import { IAppState } from '../../store';
import { REMOVE_LANGUAGE } from './actions';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent implements OnInit {
  private inEditMode = false;

  @select(['languages','languages']) avaliableLangs$: Observable<any>;

  constructor(private store: NgRedux<IAppState> ) { }

  private setEditMode() {
    this.inEditMode = true;
  }

  private removeLang(lang) {
    this.store.dispatch({type: REMOVE_LANGUAGE, languageToBeRemoved : lang});
  }
  private cancelEdition() {
    this.inEditMode = false;
  }
  private saveEdition() {
    this.inEditMode = false;
  }

  ngOnInit() { }
}
