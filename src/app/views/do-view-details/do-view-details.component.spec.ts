import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DOViewDetailsComponent } from './do-view-details.component';

describe('DOViewDetailsComponent', () => {
  let component: DOViewDetailsComponent;
  let fixture: ComponentFixture<DOViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DOViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DOViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
