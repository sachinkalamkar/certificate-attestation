import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserS6Component } from './view-user-s6.component';

describe('ViewUserS6Component', () => {
  let component: ViewUserS6Component;
  let fixture: ComponentFixture<ViewUserS6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserS6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserS6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
