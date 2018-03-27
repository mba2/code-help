import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

/** REDUX */
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { combineReducers } from 'redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

/** ERRORS */

/** COMPONENTS */
import { AppComponent } from './app.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AnotherPlaceholderComponent } from './components/another-placeholder/another-placeholder.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    AnotherPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    let enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
 }
