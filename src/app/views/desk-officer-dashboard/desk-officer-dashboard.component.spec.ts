import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskOfficerDashboardComponent } from './desk-officer-dashboard.component';

describe('DeskOfficerDashboardComponent', () => {
  let component: DeskOfficerDashboardComponent;
  let fixture: ComponentFixture<DeskOfficerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskOfficerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskOfficerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
