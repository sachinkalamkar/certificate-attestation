import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserS1Component } from './view-user-s1.component';

describe('ViewUserS1Component', () => {
  let component: ViewUserS1Component;
  let fixture: ComponentFixture<ViewUserS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
