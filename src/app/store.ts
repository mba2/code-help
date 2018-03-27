/** STORES */
import { ILanguageState } from "./components/language/store";

/** REDUX */
import { tassign } from "tassign";


export interface IAppState {
  languages: ILanguageState;
  // test: string;
  // messaging?: {
  //   newMessages: number;
  // };
}

/**
 * APPROACH : using tassign() to prevent object Mutation
 */
// export function rootReducer(state: IAppState, action): IAppState {
//   switch (action.type) {
//     case 'ADD_LANG':
//       let nextIndex = state.languages.length;
//       state.languages.push({ 'name' : action.payload});

//       return Object.assign({}, state, { 
//         counter : state.counter + 1, 
//         languages: state.languages
//       });
//       // return  tassign(state, { counter : state.counter + 1});
//     default:
//       break;
//   }
//   return state;
// }

/**
 * APPROACH : using Immutable JS to prevent object Mutation
 */
// export function rootReducer(state: Map<string, any>, action): Map<string, any> {
//   switch (action.type) {
//     case 'INCREMENT':
//       return  state.set( 'counter' , state.get('counter') + 1);
//     default:
//       break;
//   }
//   return state;
// }
export const LOAD_APP_INFO = 'LOAD_APP_INFO';

export class IAppActions {
  constructor(
    private state: IAppState,
    private action: any) {}

    loadAppInfo(): IAppState {
      return tassign(
        this.state,
        {
          languages: {
            languages: this.action.languages,
            lastUpdate: new Date()
          }
        }
      );
  }
}
export function reducers(state: IAppState, action: any): IAppState {
  const actions = new IAppActions(state,action);

  switch(action.type) {
    case LOAD_APP_INFO: 
      return actions.loadAppInfo();
    default:
      return state;
  }
}
