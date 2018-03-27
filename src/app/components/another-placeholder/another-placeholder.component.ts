import { Component, OnInit, Input, Output } from '@angular/core';

/** REDUX */
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { CHANGE_TITLE, INCREMENT } from '../placeholder/actions';

@Component({
  selector: 'another-placeholder',
  templateUrl: './another-placeholder.component.html',
  styleUrls: ['./another-placeholder.component.css'],
})

export class AnotherPlaceholderComponent implements OnInit {
  @select(s => s.placeholder.title) title;
  @select(s => s.placeholder.counter) counter;

  constructor(private store: NgRedux<IAppState>) { }
  
  sendToOtherComponent(e: HTMLInputElement) {
    this.store.dispatch( { type: CHANGE_TITLE, title: e.value});
  }
  
  increment() {
    this.store.dispatch({ type: INCREMENT}); 
  }
  ngOnInit() {}
}
