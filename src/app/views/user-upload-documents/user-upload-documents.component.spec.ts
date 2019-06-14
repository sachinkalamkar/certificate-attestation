import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadDocumentsComponent } from './user-upload-documents.component';

describe('UserUploadDocumentsComponent', () => {
  let component: UserUploadDocumentsComponent;
  let fixture: ComponentFixture<UserUploadDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUploadDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
