// import { tassign } from 'tassign';
// import { fromJS, Map} from 'immutable';
/**
 * ACTIONS
 */
import { ADD_LANG } from './actions/actions';


export interface IAppState {
  counter: number;
  languages: [any];
  // messaging?: {
  //   newMessages: number;
  // };
}

export const INITIAL_STATE = {
  counter : 10,
  // messaging: {
  //   newMessages: 5
  // }
};

/**
 * APPROACH : using tassign() to prevent object Mutation
 */
export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case 'ADD_LANG':
      let nextIndex = state.languages.length;
      state.languages.push({ 'name' : action.payload});

      return Object.assign({}, state, { 
        counter : state.counter + 1, 
        languages: state.languages
      });
      // return  tassign(state, { counter : state.counter + 1});
    default:
      break;
  }
  return state;
}

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
