import { CentralService } from "./services/central.service";

import { ADD_LANG, REMOVE_LANG } from "./actions/actions";

class LanguagesActions {
  constructor(private state, private action) {}

  addLang(state,action) {
    return state;
  }
  removeLang(state,action) {
    return state;
  }
}

export interface IAppState {
  languages: [any];
  userIsLogged : boolean;
  hasError: boolean;
}


export function rootReducer(state, action) {
  const lang_actions = new LanguagesActions(state, action);
  switch (action.type) {
    case ADD_LANG: return lang_actions.addLang(state, action);
    case REMOVE_LANG: return lang_actions.removeLang(state, action);
    default:
      break;
  }
}
