import { TestBed } from '@angular/core/testing';

import { RequestQuestionsService } from './request-questions.service';

describe('RequestQuestionsService', () => {
  let service: RequestQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
