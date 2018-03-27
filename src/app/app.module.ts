// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// COMPONENTS
import { AppComponent } from './app.component';
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
import { UserService } from './services/user.service';
// MISC VARIABLES
import { environment } from '../environments/environment';
// REDUX
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, reducers } from './store';
// FIREBASE
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
// ROUTER
import { RouterModule } from '@angular/router';
import { UserAreaComponent } from './components/user-area/user-area.component';
import { LoaderDonutComponent } from './components/loaders/loader-donut/loader-donut.component';
import { SyntaxListComponent } from './components/syntax-list/syntax-list.component';
import { FormsModule } from '@angular/forms';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';



@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    LanguageComponent,
    LoginComponent,
    UserAreaComponent,
    LoaderDonutComponent,
    SyntaxListComponent,
    PlaceholderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'config', component: ConfigComponent},
      // { path: 'config', component: ConfigComponent, canActivate: [AuthGuardService]},
      { path: 'login', component: LoginComponent},
    ])
  ],
  providers: [
    CentralService,
    AuthService,
    AuthGuardService,
    AngularFireAuth,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(
    private store: NgRedux<IAppState>, 
    private devTools: DevToolsExtension
    // private service: CentralService
  ) {
    const enhancers = (isDevMode()) ? [devTools.enhancer()] : [];
    this.store.configureStore(reducers, null, null, enhancers);

    // let subs = this.service.getLanguages()
    //   .subscribe( (e) => {
    //     console.log(typeof e);
    //     this.preload.languages = e;
    //     this.ngRedux.configureStore(rootReducer, this.preload);

    //     this.ngRedux.subscribe(() => console.log(this.ngRedux.getState()));
    //     subs.unsubscribe();
    //   });
      
  }
}
