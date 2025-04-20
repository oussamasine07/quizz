import { Component, input } from '@angular/core';

@Component({
  selector: 'app-answer-label',
  imports: [],
  templateUrl: './answer-label.component.html',
  styleUrl: './answer-label.component.css'
})
export class AnswerLabelComponent {
  answer = input();
}
