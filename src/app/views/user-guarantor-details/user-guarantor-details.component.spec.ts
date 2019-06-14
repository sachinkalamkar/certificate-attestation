import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGuarantorDetailsComponent } from './user-guarantor-details.component';

describe('UserGuarantorDetailsComponent', () => {
  let component: UserGuarantorDetailsComponent;
  let fixture: ComponentFixture<UserGuarantorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGuarantorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGuarantorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
