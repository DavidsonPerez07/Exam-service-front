import { TestBed } from '@angular/core/testing';

import { ExamPresentationServiceService } from './exam-presentation-service.service';

describe('ExamPresentationServiceService', () => {
  let service: ExamPresentationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamPresentationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
