import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/** REDUX */
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { combineReducers } from 'redux';
import { IAppState, rootReducer } from './store';

/** ERRORS */

/** COMPONENTS */
import { AppComponent } from './app.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AnotherPlaceholderComponent } from './components/another-placeholder/another-placeholder.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ConfigComponent } from './components/config/config.component';
/** SERVICES */
import { LanguagesService } from './components/languages/languages.service';
/** DIRECTIVES */
import { LanguageInputDirective } from './directives/language-input.directive';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    LanguagesComponent,
    PlaceholderComponent,
    AnotherPlaceholderComponent,
    LanguageInputDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: 'config', component: ConfigComponent }
    ])
  ],
  providers: [
    LanguagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    let enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, undefined, [], enhancers);
  }
 }
