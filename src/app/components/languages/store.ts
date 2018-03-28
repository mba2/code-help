/** HELPERS */
import { tassign } from 'tassign';
/** ACTIONS */
import { REMOVE_LANGUAGE, LOAD_LANGUAGES, EDIT_LANGUAGES } from './actions';
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
    console.log(this.action); 
    const languageToBeRemoved = this.action.languageToBeRemoved;
    return tassign(
      this.state,
      {
        languages : this.state.languages.filter( (lang) => {
          return lang.id !== languageToBeRemoved.id;
        })
      }
    )
  }

  editLanguages() {
    return tassign(
      this.state,
      {
        languages : this.action.languagesAfterEdition
      }
    )
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
    default:
      return state;
  }
}