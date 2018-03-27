/** HELPERS */
import { tassign } from 'tassign';
/** ACTIONS */
import { ADD_LANG } from "../../actions/actions";

export interface ILanguageState {
  languages: any[],
  lastUpdate: Date
}

export class LanguageActions {
  constructor(
    private state: ILanguageState,
    private action
  ) {}

  addLang() {

  }
}

export function LanguageReducer(state: ILanguageState, action) {
  const actions = new LanguageActions(state,action);

  switch(action.type) {
    case ADD_LANG: 
      return actions.addLang();
    default:
      return state;
  }
}