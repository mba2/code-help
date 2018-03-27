import { tassign } from 'tassign'; 
import { combineReducers } from 'redux';

/** ANY OTHER STORE GOES HERE */
import { IPlaceholderState, PLACEHOLDER_INIT_STATE, placeholderReducer } from './components/placeholder/store';
import { AnotherPlaceholderReducer } from './components/another-placeholder/store';

export interface IAppState {
  placeholder: IPlaceholderState
}

export const INITIAL_STATE = {
  placeholder: PLACEHOLDER_INIT_STATE,
}

export const rootReducer = combineReducers<IAppState>({
  placeholder: placeholderReducer,
  anotherPlaceholder: AnotherPlaceholderReducer
});