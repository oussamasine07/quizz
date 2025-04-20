import { Component, inject, OnInit } from '@angular/core';
import { RequestQuestionsService } from '../../../services/request-questions/request-questions.service';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../partials/page-title/page-title.component';
import { AnswerLabelComponent } from '../../partials/answer-label/answer-label.component';
import { NgFor } from '@angular/common';
import { CurrentQuestionService } from '../../../services/current-question/current-question.service';

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

  requestQuestionsService = inject(RequestQuestionsService);
  currentQuestionService = inject(CurrentQuestionService)
  route = inject(Router);

  pageTitle = "question page";

  
  getUserFromLocalStorage = localStorage.getItem("user");
  user = this.getUserFromLocalStorage ? JSON.parse(this.getUserFromLocalStorage) : [];

  currentQuestionIdx = 0;
  currentQuestion = this.user.currentQuize.questions[this.currentQuestionIdx]
  answers = [this.currentQuestion.correct_answer, ...this.currentQuestion.incorrect_answers]
  // shuffel answers
  shuffeledAnswers = this.currentQuestionService.onShuffelAnswers(this.answers); 


  ngOnInit(): void {
    // const getUserFromLocalStorage = localStorage.getItem("user");
    // const user = getUserFromLocalStorage ? JSON.parse(getUserFromLocalStorage) : [];

    if (this.user == null ) {
      this.route.navigate([""])
    } else {
      if ( this.user.currentQuize == null ) {
        this.route.navigate(["quizz"])
      }
    }
    
    this.requestQuestionsService.getQuestions.subscribe({
      next: (questions) => {
        console.log("getting questions from Question components")
        console.log(questions)
      }
    })

    console.log(this.shuffeledAnswers)


  }

  
  // select question
  // suffule answers
  // set answers to ui


}
