import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDODSDashboardComponent } from './admin-do-ds-dashboard.component';

describe('AdminDODSDashboardComponent', () => {
  let component: AdminDODSDashboardComponent;
  let fixture: ComponentFixture<AdminDODSDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDODSDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDODSDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
