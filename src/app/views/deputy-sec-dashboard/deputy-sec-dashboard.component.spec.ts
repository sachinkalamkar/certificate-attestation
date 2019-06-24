import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputySecDashboardComponent } from './deputy-sec-dashboard.component';

describe('DeputySecDashboardComponent', () => {
  let component: DeputySecDashboardComponent;
  let fixture: ComponentFixture<DeputySecDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeputySecDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputySecDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
