import { Component, inject, OnInit } from '@angular/core';
import { RequestQuestionsService } from '../../../services/request-questions/request-questions.service';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../partials/page-title/page-title.component';
import { AnswerLabelComponent } from '../../partials/answer-label/answer-label.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-question',
  imports: [ 
    NgFor,
    PageTitleComponent, AnswerLabelComponent 
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {

  requestQuestions = inject(RequestQuestionsService);
  route = inject(Router);

  pageTitle ="question page";

  currentQuestionIdx = 0;
  currentQuestion = null;

  ngOnInit(): void {
    const getUserFromLocalStorage = localStorage.getItem("user");
    const user = getUserFromLocalStorage ? JSON.parse(getUserFromLocalStorage) : [];

    if (user == null ) {
      this.route.navigate([""])
    } else {
      if ( user.currentQuize == null ) {
        this.route.navigate(["quizz"])
      }
    }
    
    this.requestQuestions.getQuestions.subscribe({
      next: (questions) => {
        console.log("getting questions from Question components")
        console.log(questions)
      }
    })

    console.log(user.currentQuize.questions)

  }

  
  // select question
  // suffule answers
  // set answers to ui


}
