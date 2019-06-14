import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserS3Component } from './view-user-s3.component';

describe('ViewUserS3Component', () => {
  let component: ViewUserS3Component;
  let fixture: ComponentFixture<ViewUserS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
