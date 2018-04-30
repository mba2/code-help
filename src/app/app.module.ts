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
import { HomeComponent } from './components/home/home.component';
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
import { HeaderComponent } from './components/header/header.component';
import { AuthGuardService } from './general-services/auth-guard.service';
import { NavbarComponent } from './components/user/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent,
    LanguagesComponent,
    LanguageInputDirective,
    LoginComponent,
    PlaceholderComponent,
    AnotherPlaceholderComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'config', component: ConfigComponent, canActivate: [AuthGuardService] },
      { path: 'login', component: LoginComponent },
    ]),
    NgReduxModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    LanguagesService,
    AngularFireAuth,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, undefined, [], enhancers);
  }
 }
