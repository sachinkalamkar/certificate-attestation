import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserS4Component } from './view-user-s4.component';

describe('ViewUserS4Component', () => {
  let component: ViewUserS4Component;
  let fixture: ComponentFixture<ViewUserS4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserS4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
