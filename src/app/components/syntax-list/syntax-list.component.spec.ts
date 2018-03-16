import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxListComponent } from './syntax-list.component';

describe('SyntaxListComponent', () => {
  let component: SyntaxListComponent;
  let fixture: ComponentFixture<SyntaxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntaxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntaxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
