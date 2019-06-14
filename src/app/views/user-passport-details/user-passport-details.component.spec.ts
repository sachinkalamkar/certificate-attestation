import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPassportDetailsComponent } from './user-passport-details.component';

describe('UserPassportDetailsComponent', () => {
  let component: UserPassportDetailsComponent;
  let fixture: ComponentFixture<UserPassportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPassportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPassportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
