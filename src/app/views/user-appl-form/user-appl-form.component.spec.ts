import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplFormComponent } from './user-appl-form.component';

describe('UserApplFormComponent', () => {
  let component: UserApplFormComponent;
  let fixture: ComponentFixture<UserApplFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApplFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
