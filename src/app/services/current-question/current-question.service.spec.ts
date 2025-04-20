import { TestBed } from '@angular/core/testing';

import { CurrentQuestionService } from './current-question.service';

describe('CurrentQuestionService', () => {
  let service: CurrentQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
