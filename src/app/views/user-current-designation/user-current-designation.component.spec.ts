import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurrentDesignationComponent } from './user-current-designation.component';

describe('UserCurrentDesignationComponent', () => {
  let component: UserCurrentDesignationComponent;
  let fixture: ComponentFixture<UserCurrentDesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCurrentDesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCurrentDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
