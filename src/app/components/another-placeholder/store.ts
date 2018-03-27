import { IAppState } from "../../store";
import { tassign } from "tassign";

export interface IAnotherPlaceholder {
  otherTitle: string;
  otherCounter: number;
}

export class AnotherPlaceholderAction {
  constructor(
    private state: IAppState,
    private action
  ){}

  // sendToAnotherComponentTitle() {
  //   return tassign(
  //     this.state,
  //     {
  //       title : this.action
  //     }
  //   );
  // }
}

export function AnotherPlaceholderReducer(){
  return null;
}