import { Component, inject, OnInit } from '@angular/core';
import { RequestQuestionsService } from '../../../services/request-questions/request-questions.service';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {

  requestQuestions = inject(RequestQuestionsService);

  ngOnInit(): void {
    this.requestQuestions.getQuestions.subscribe({
      next: (questions) => {
        console.log("getting questions from Question components")
        console.log(questions)
      }
    })
  }

}
