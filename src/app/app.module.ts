import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/** REDUX */
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { combineReducers } from 'redux';
import { IAppState, rootReducer } from './store';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

/** COMPONENTS */
import { AppComponent } from './app.component';

import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AnotherPlaceholderComponent } from './components/another-placeholder/another-placeholder.component';

import { LanguagesComponent } from './components/languages/languages.component';
import { ConfigComponent } from './components/config/config.component';
import { LoginComponent } from './components/user/login/login.component';
/** SERVICES */
import { LanguagesService } from './components/languages/languages.service';
import { AuthService } from './components/user/auth.service';
/** DIRECTIVES */
import { LanguageInputDirective } from './directives/language-input.directive';

// MISC VARIABLES
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    LanguagesComponent,
    LanguageInputDirective,
    LoginComponent,
    PlaceholderComponent,
    AnotherPlaceholderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: 'config', component: ConfigComponent },
      { path: 'login', component: LoginComponent },
    ]),
    NgReduxModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    LanguagesService,
    AuthService,
    AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, undefined, [], enhancers);
  }
 }
