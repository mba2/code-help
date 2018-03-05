import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDonutComponent } from './loader-donut.component';

describe('LoaderDonutComponent', () => {
  let component: LoaderDonutComponent;
  let fixture: ComponentFixture<LoaderDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
