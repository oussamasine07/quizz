import { Component, inject, OnInit } from '@angular/core';
import { RequestQuestionsService } from '../../../services/request-questions/request-questions.service';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../partials/page-title/page-title.component';
import { AnswerLabelComponent } from '../../partials/answer-label/answer-label.component';
import { NgFor } from '@angular/common';
import { CurrentQuestionService } from '../../../services/current-question/current-question.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-question',
  imports: [ 
    NgFor, FormsModule,
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
  score = 0

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

    this.currentQuestionService.currentQuestion.subscribe({
      next: (question) => {
        this.currentQuestion = question
        this.answers = [this.currentQuestion.correct_answer, ...this.currentQuestion.incorrect_answers]
        // shuffel answers
        this.shuffeledAnswers = this.currentQuestionService.onShuffelAnswers(this.answers);
      }
    })

  }

  selectedAnswer = "";
  onSubmit (form: FormsModule) {

    // select an answer
    if (this.currentQuestion.correct_answer == this.selectedAnswer) this.score++

    this.currentQuestionIdx++

    const idx = this.currentQuestionIdx < this.user.currentQuize.questions.length ? this.currentQuestionIdx : this.user.currentQuize.questions.length - 1;
    this.currentQuestionService.onSetCurrentQuestion(this.user.currentQuize.questions[idx])
  
    if (this.currentQuestionIdx === this.user.currentQuize.questions.length ) {
      console.log(this.score)
      console.log("done")

      // set this quizz to history
      const history = {
        quizz: this.user.currentQuize.questions,
        score: this.score
      }

      this.user.quizzesHistory.push(history);
      
      // clear current quizz
      this.user.currentQuize = null;

      localStorage.setItem("user", JSON.stringify(this.user))

      // redirect to choose quizz
      this.route.navigate(["quizz"])
    }

    
    
    

  }
  
  // select question
  // suffule answers
  // set answers to ui


}
