/** PREVENTION TO OBJECT MUTATION */
import { tassign } from 'tassign'; 
/** ACTIONS */
import { CHANGE_TITLE, INCREMENT } from './actions';


export interface IPlaceholderState {
  counter: number;
  title: string;
  items: any[];
}

export const PLACEHOLDER_INIT_STATE: IPlaceholderState = {
  counter: 0,
  title: 'Placeholder Title',
  items: ['Placeholder Item 1', 'Placeholder Item 2']
}

export function placeholderReducer( 
  state: IPlaceholderState = PLACEHOLDER_INIT_STATE, 
  action): IPlaceholderState 
  {
    
  let actions = new PlaceholderActions(state, action);
  switch(action.type) {
    case CHANGE_TITLE:
      return actions.changeTitle(); 
    case INCREMENT:
      return actions.increment();
    }
    return state;
}
 

class PlaceholderActions {
  constructor( 
    private state: IPlaceholderState, 
    private action: any) 
  {}

  changeTitle() {
    console.log(this.action);
    return tassign(
      this.state,
      {
        title : this.action.title
      }
    ) 
  };

  increment() {
    return tassign(
      this.state,
      {
        counter: this.state.counter + 1
      });
  }
}
  


