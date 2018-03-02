import { CentralService } from "./services/central.service";

import { ADD_LANG } from "./actions/actions";

export interface IAppState {
  languages: [any],
  userIsLogged : boolean
  hasError : boolean
};


export function rootReducer(state,action) {
  switch (action.type) {
    case ADD_LANG:
      return state;
    default:
      break;
  }
}