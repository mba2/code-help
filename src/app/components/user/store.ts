import { tassign } from 'tassign';
/** ACTIONS **/
import { LOAD_USER_DATA } from './actions';

export interface IUserState {
  provider: string;
  displayName: string;
  email: string;
  number: string;
  photo: string;
}

export class UserActions {
  constructor(
    private state: IUserState,
    private action
  ) {}

  public loadUserData() {
    return tassign(
      this.state,
      {
        provider: this.action.payload.providerId,
        displayName: this.action.payload.displayName,
        email: this.action.payload.email,
        number: this.action.payload.phoneNumber,
        photo: this.action.payload.photoURL
      }
    );
  }
}

export function UserReducer(
  state: IUserState = null, 
  action): IUserState {
  const actions = new UserActions(state,action);

  switch (action.type) {
    case LOAD_USER_DATA:
      return actions.loadUserData();
    default:
      return state;
  }
}
