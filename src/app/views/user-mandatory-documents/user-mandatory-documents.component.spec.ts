import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMandatoryDocumentsComponent } from './user-mandatory-documents.component';

describe('UserMandatoryDocumentsComponent', () => {
  let component: UserMandatoryDocumentsComponent;
  let fixture: ComponentFixture<UserMandatoryDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMandatoryDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMandatoryDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
