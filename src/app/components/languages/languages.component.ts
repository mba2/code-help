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
import { REMOVE_LANGUAGE, LOAD_LANGUAGES, EDIT_LANGUAGES } from './actions';

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})

export class LanguagesComponent implements OnInit, AfterViewInit {
  // @ViewChild("test") test: ElementRef;
  @ViewChildren(LanguageInputDirective) test: QueryList<LanguageInputDirective>;

  private inEditMode = false;
  @select(['languages','languages']) avaliableLangs$: Observable<any>;

  constructor(
    private store: NgRedux<IAppState>,
    private service: LanguagesService) { }

  private loadLanguages() {
    this.service.loadLanguagesInfo()
      .then( (data) => {
        this.store.dispatch({type: LOAD_LANGUAGES, languages: data});
      })
  }

  private setEditMode() {
    this.inEditMode = true;
  }

  private editLang(languageToBeRemoved) {
    this.store.dispatch( { type: EDIT_LANGUAGES, languageToBeRemoved });
  }

  private removeLang(languageToBeRemoved) {
    this.store.dispatch( { type: REMOVE_LANGUAGE, languageToBeRemoved });
  }
  private cancelEdition() {
    this.inEditMode = false;
  }
  private saveEdition() {

    // console.log(this.test.last);
    // console.log(this.test.last.elem.nativeElement.value);

    const languagesAfterEdition = this.test.map( e => {
      // console.log(e.data.name);
      // console.log(e.elem.nativeElement.value);
      return {
        'id': e.data.id,
        'name': e.elem.nativeElement.value 
    });
    this.store.dispatch( { type: EDIT_LANGUAGES, languagesAfterEdition });
    this.inEditMode = false;
  }

  ngOnInit() { 
    this.loadLanguages();
  }

  ngAfterViewInit(): void {
    // console.log(this.test);
  }
}
