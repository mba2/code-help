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

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})

export class LanguagesComponent implements OnInit, AfterViewInit {
  /** OBSERVABLE FOR ALL LANGUAGES IN THE STORE */
  @select(['languagesStore','languages']) avaliableLangs$: Observable<any>;
  /** REFERENCES FOR ALL LANGUAGES INPUT FIELDS */
  @ViewChildren(LanguageInputDirective) languagesAsInputs: QueryList<LanguageInputDirective>;
  
  private inEditMode = false;
  private inNewLanguageMode = false;

  constructor(
    private store: NgRedux<IAppState>,
    private service: LanguagesService) { }

  private setEditMode(): void {
    this.inNewLanguageMode = false;
    this.inEditMode = true;
  }
  private setNewLangMode(): void {
    this.inNewLanguageMode = true;
    this.inEditMode = false;
  }
  private loadLanguages() {
    this.service.loadLanguagesInfo()
      .then( (data) => {
        this.store.dispatch({type: LOAD_LANGUAGES, languages: data});
      })
  }
  private removeLang(languageToBeRemoved) {
    this.store.dispatch( { type: REMOVE_LANGUAGE, languageToBeRemoved });
  }
  private cancelEdition() {
    this.inEditMode = false;
  }
  private getAllLanguagesInputs(): any {
    let existingLanguages = [], newLanguage = {};

      this.languagesAsInputs.map(lang => {
        if (lang.data.id) {
          existingLanguages.push({
            'id': lang.data.id || null,
            'name': lang.elem.nativeElement.value 
          })
        } else {
          newLanguage = lang;
        }
      });

      return {
        existingLanguages,
        newLanguage
      } 
  }

  private saveEdition() {
    this.store.dispatch( { type: EDIT_LANGUAGES, payload: this.getAllLanguagesInputs() });
    this.inEditMode = false;
  }
  private saveNewLanguage() {
    const newLanguageRef = this.getAllLanguagesInputs()['newLanguage'];
    const newLanguage = newLanguageRef.elem.nativeElement.value;

    Promise.resolve(
      // this.service
      this.store.dispatch( { type: ADD_LANGUAGE, payload: newLanguage })
    ).then(e => {
      this.service.loadLanguagesInfo()
      .then( (data) => {
        this.store.dispatch({type: LOAD_LANGUAGES, languages: data});
      })
    })
    // this.store.dispatch( { type: ADD_LANGUAGE, payload: this.getAllLanguagesInputs() });
    // this.inNewLanguageMode = false;
  }

  public fakeSaveLanguage(arr) {
    console.log(arr);
  }

  ngOnInit() { 

  }

  ngAfterViewInit(): void {
    // console.log(this.test);
  }
}
