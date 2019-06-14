import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserS5Component } from './view-user-s5.component';

describe('ViewUserS5Component', () => {
  let component: ViewUserS5Component;
  let fixture: ComponentFixture<ViewUserS5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserS5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
