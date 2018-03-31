/** ANGULAR`S CORE */
import { Component, OnInit, AfterViewInit , Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
/** DIRECTIVES */
import { LanguageInputDirective } from '../../directives/language-input.directive';
/** SERVICES */
import { LanguagesService } from './languages.service';
/** RXJS */
import { Observable } from '@firebase/util/dist/esm/src/subscribe';
/** REDUX */
import { NgRedux, select } from 'ng2-redux';
/** STORE(S) AND ACTIONS */
import { IAppState } from '../../store';
import { REMOVE_LANGUAGE, LOAD_LANGUAGES, EDIT_LANGUAGES, ADD_LANGUAGE } from './actions';

interface ILanguage {
  LANGUAGE_ID: string;
  LANGUAGE_NAME: string;
  USER_ID: string;
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})

export class LanguagesComponent implements OnInit, AfterViewInit {
    /** OBSERVABLE FOR ALL LANGUAGES IN THE STORE */
  @select(['languagesStore', 'languages']) avaliableLangs$: Observable<any>;
    /** REFERENCES FOR ALL LANGUAGES INPUT FIELDS */
  @ViewChildren(LanguageInputDirective) languagesAsInputs: QueryList<LanguageInputDirective>;
  
  private inEditMode = false;
  private inNewLanguageMode = false;

  constructor(
    private store: NgRedux<IAppState>,
    private service: LanguagesService) { }

  private removeLang(languageToBeRemoved) {
    this.store.dispatch( { type: REMOVE_LANGUAGE, languageToBeRemoved });
  }

  private getCurrentLanguagesInputs() {
    const arr = [];
    this.languagesAsInputs.map(lang => {
      if (lang.metadata.type === 'current-lang') {
        arr.push({
          'LANGUAGE_ID': lang.metadata.LANGUAGE_ID,
          'USER_ID': lang.metadata.USER_ID,
          'LANGUAGE_NAME': lang.elem.nativeElement.value
        });
      }
    });
    return arr;
  }

  private saveEdition() {
    this.store.dispatch( { type: EDIT_LANGUAGES, payload: this.getCurrentLanguagesInputs() });
    this.inEditMode = false;
  }

  private saveNewLanguage() {
    // const newLanguageRef = this.getAllLanguagesInputs()['newLanguage'];
    // const newLanguage = newLanguageRef.elem.nativeElement.value;

    // Promise.resolve(
    //   // this.service
    //   this.store.dispatch( { type: ADD_LANGUAGE, payload: newLanguage })
    // ).then(e => {
    //   this.service.loadLanguagesInfo()
    //   .then( (data) => {
    //     this.store.dispatch({type: LOAD_LANGUAGES, languages: data});
    //   })
    // })
    // this.store.dispatch( { type: ADD_LANGUAGE, payload: this.getAllLanguagesInputs() });
    // this.inNewLanguageMode = false;
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // console.log(this.test);
  }
}
