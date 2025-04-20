import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentQuestionService {

  user = localStorage.getItem("user");

  getCurrentQuizzFromLocalStorage = this.user && JSON.parse(this.user);

  currentQuestion = new Subject();

  constructor() { }

  onSetCurrentQuestion (question: any) {
    this.currentQuestion.next( question )
  }

  onShuffelAnswers (answers: any) {
    let i = answers.length, j, temp;

    while (--i > 0) {
      j = Math.floor(Math.random() * (i +1));
      temp = answers[j]
      answers[j] = answers[i]
      answers[i] = temp
    }

    return answers
  }


}
