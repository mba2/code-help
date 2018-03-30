import { tassign } from 'tassign'; 
import { combineReducers } from 'redux';

/** ANY OTHER STORE GOES HERE */
import { IPlaceholderState, PLACEHOLDER_INIT_STATE, placeholderReducer } from './components/placeholder/store';
import { AnotherPlaceholderReducer } from './components/another-placeholder/store';
import { LanguagesReducer, ILanguagesState } from './components/languages/store';
import { IUserState, UserReducer } from './components/user/store';

export interface IAppState {
  placeholder: IPlaceholderState;
  languages: ILanguagesState;
  user: IUserState;
}


export const rootReducer = combineReducers<IAppState>({
  placeholder: placeholderReducer,
  languagesStore: LanguagesReducer,
  userStore: UserReducer
});