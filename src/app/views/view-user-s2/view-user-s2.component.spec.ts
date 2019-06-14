import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserS2Component } from './view-user-s2.component';

describe('ViewUserS2Component', () => {
  let component: ViewUserS2Component;
  let fixture: ComponentFixture<ViewUserS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
