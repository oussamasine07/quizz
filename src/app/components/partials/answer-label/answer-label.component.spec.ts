import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerLabelComponent } from './answer-label.component';

describe('AnswerLabelComponent', () => {
  let component: AnswerLabelComponent;
  let fixture: ComponentFixture<AnswerLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
