import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExamPresentationComponent } from './show-exam-presentation.component';

describe('ShowExamPresentationComponent', () => {
  let component: ShowExamPresentationComponent;
  let fixture: ComponentFixture<ShowExamPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExamPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowExamPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
