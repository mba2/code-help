/** HELPERS */
import { tassign } from 'tassign';
/** ACTIONS */
import { REMOVE_LANGUAGE, LOAD_LANGUAGES } from './actions';
/** SERVICE */
import { LanguageService } from './language.service';


export interface ILanguageState {
  languages: any[],
  lastUpdate: Date
}

export class LanguageActions {
  constructor(
    private state: ILanguageState,
    private action
  ) {}

  loadLanguages() {
    console.log('loading some languages!');
    return this.state;
  }

  removeLanguage() {
    console.log(this.action);
    return tassign(
      this.state,
      {
        languages : this.state.languages.filter( (lang) => console.log(lang))
      }
    )
  }
}

const INIT_STATE = {
  languages: [],
  lastUpdate: new Date()
}

export function LanguageReducer(
  state: ILanguageState = INIT_STATE, 
  action): ILanguageState {

  const actions = new LanguageActions(state,action);

  switch(action.type) {
    case REMOVE_LANGUAGE: 
      return actions.removeLanguage();
    case LOAD_LANGUAGES: 
      return actions.loadLanguages();
    default:
      return state;
  }
}