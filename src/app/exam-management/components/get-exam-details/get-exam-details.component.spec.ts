import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExamDetailsComponent } from './get-exam-details.component';

describe('GetExamDetailsComponent', () => {
  let component: GetExamDetailsComponent;
  let fixture: ComponentFixture<GetExamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetExamDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetExamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
