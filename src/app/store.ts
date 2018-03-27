/** STORES */
import { ILanguageState } from "./components/language/store";


export interface IAppState {
  languages: ILanguageState;
  test: string;
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

export function reducers(state: IAppState): IAppState {

  return state;
}
