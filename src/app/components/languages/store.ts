/** HELPERS */
import { tassign } from 'tassign';
/** ACTIONS */
import { REMOVE_LANGUAGE, LOAD_LANGUAGES, EDIT_LANGUAGES, ADD_LANGUAGE } from './actions';
/** SERVICE */
import { LanguagesService } from './languages.service';


export interface ILanguagesState {
  languages: any[],
  lastUpdate: Date
}

export class LanguagesActions {
  constructor(
    private state: ILanguagesState,
    private action
  ) {}

  loadLanguages() {
    return tassign(
      this.state,
      {
        languages : this.action.languages
      }
    );
  }

  removeLanguage() {
    const languageToBeRemoved = this.action.languageToBeRemoved;
    return tassign(
      this.state,
      {
        languages : this.state.languages.filter( (lang) => lang.id !== languageToBeRemoved.id)
      }
    )
  }

  editLanguages() {
    return tassign(
      this.state,
      {
        languages : this.action.payload.existingLanguages
      }
    )
  }
  
  addLanguage() {
    
    return this.state;
  }
}

export function LanguagesReducer(
  state: ILanguagesState = null, 
  action): ILanguagesState {

  const actions = new LanguagesActions(state,action);

  switch(action.type) {
    case EDIT_LANGUAGES: 
      return actions.editLanguages();
    case REMOVE_LANGUAGE: 
      return actions.removeLanguage();
    case LOAD_LANGUAGES: 
      return actions.loadLanguages();
    case ADD_LANGUAGE: 
      return actions.addLanguage();
    default:
      return state;
  }
}