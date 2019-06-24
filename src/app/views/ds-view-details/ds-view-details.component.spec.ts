import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSViewDetailsComponent } from './ds-view-details.component';

describe('DSViewDetailsComponent', () => {
  let component: DSViewDetailsComponent;
  let fixture: ComponentFixture<DSViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
