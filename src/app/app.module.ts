// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// COMPONENTS
import { AppComponent } from './app.component';
import { BackToHomeComponent } from './components/back-to-home/back-to-home.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LanguageComponent } from './components/language/language.component';
import { ConfigComponent } from './components/config/config.component';
import { LoginComponent } from './components/login/login.component';
// SERVICES
import { CentralService } from './services/central.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
// MISC VARIABLES
import { environment } from '../environments/environment';
// REDUX
import { IAppState, rootReducer} from './store';
import { NgRedux, NgReduxModule } from 'ng2-redux';
// FIREBASE
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
// ROUTER
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    BackToHomeComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    LanguageComponent,
    BackToHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuardService]},
      { path: 'config', component: ConfigComponent, canActivate: [AuthGuardService]},
      { path: 'login', component: LoginComponent},
    ])
  ],
  providers: [
    CentralService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
  private preloadState: IAppState;

  constructor(
    private service: CentralService,
    private ngRedux: NgRedux<IAppState>) {
    
    this.preloadState = {
      languages: ["php","js"],
      userIsLogged : false,
      hasError : false
    };

    // this.service.getLanguages()
    //   .subscribe( e => {
    //     console.log("getLanguages()", e);
    //   });

      ngRedux.configureStore(rootReducer, this.preloadState);
    //   CentralService.initializeStore()
    //   .subscribe( () => {
    //   });
  }
}
