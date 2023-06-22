import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStudentComponent } from './find-student.component';

describe('FindStudentComponent', () => {
  let component: FindStudentComponent;
  let fixture: ComponentFixture<FindStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindStudentComponent]
    });
    fixture = TestBed.createComponent(FindStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
