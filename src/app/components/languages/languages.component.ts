import { element } from 'protractor';
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

import { ActionCreators } from 'redux-undo';
import { AngularFireAuth } from 'angularfire2/auth';

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
  @select(['languagesStore', 'present', 'languages']) avaliableLangs$: Observable<any>;
    /** REFERENCES FOR ALL LANGUAGES INPUT FIELDS */
  @ViewChildren(LanguageInputDirective) languagesAsInputs: QueryList<LanguageInputDirective>;
  
  private inEditMode = false;
  private inNewLanguageMode = false;
  private userId: string;

  constructor(
    public afAuth: AngularFireAuth, 
    private store: NgRedux<IAppState>,
    private service: LanguagesService) {
      this.afAuth.authState
        .subscribe(user => {
            this.userId = user.providerData[0].uid;
        });
    }

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

  private getNewLanguageInput() {
    return this.languagesAsInputs.filter(lang => {
      return lang.metadata.type === 'new-lang';
    });
  }

  private saveEdition() {
    const languagesToUṕdate = this.getCurrentLanguagesInputs();
    this.store.dispatch( { type: EDIT_LANGUAGES, payload: languagesToUṕdate });
    this.service.updateLanguages(languagesToUṕdate)
      .then(
        () => {
          console.log('s')
        }
      )
      .catch((e) => {
        console.log('test');
        console.log(e);
        // this.store.dispatch(ActionCreators.undo())
      });
    this.inEditMode = false;
  }

  private saveNewLanguage() {
    const input = this.getNewLanguageInput()[0];
    const value = input.elem.nativeElement.value;
    const userId = input.metadata.USER_ID;

    const newLanguage = {
      'LANGUAGE_ID': null,
      'USER_ID': userId,
      'LANGUAGE_NAME': value
    }

    console.log(newLanguage);
    this.store.dispatch( { type: ADD_LANGUAGE, payload: newLanguage });
    this.service.addLanguage(newLanguage)
    .then(
      (s) => {
        console.log('s', s);
      }
    )
    .catch((e) => {
      console.log('erroe');
      console.log(e);
      // this.store.dispatch(ActionCreators.undo())
    });

    // const newLanguageRef = this.getAllLanguagesInputs()['newLanguage'];
    // const newLanguage = newLanguageRef.elem.nativeElement.value;

    // Promise.resolve(
    //   // this.service
    // ).then(e => {
    //   this.service.loadLanguagesInfo()
    //   .then( (data) => {
    //     this.store.dispatch({type: LOAD_LANGUAGES, languages: data});
    //   })
    // })
    // this.store.dispatch( { type: ADD_LANGUAGE, payload: this.getAllLanguagesInputs() });
    this.inNewLanguageMode = false;
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // console.log(this.test);
  }
}
