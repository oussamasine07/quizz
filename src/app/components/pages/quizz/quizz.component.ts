import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PageTitleComponent } from '../../partials/page-title/page-title.component';
import { QuizzService } from '../../../services/quizz/quizz.service';
import { NgFor } from '@angular/common';
import { RequestQuestionsService } from '../../../services/request-questions/request-questions.service';
import { QuestionComponent } from '../question/question.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  imports: [ 
    PageTitleComponent, QuestionComponent,
    FormsModule, NgFor 
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
  standalone: true
})
export class QuizzComponent {
  
  
  title = signal("this is quizz");
  pageTitle ="Welcome test page";

  categories = [
    {
      id: "any",
      name: "Any Category"
    },
    {
      id: "9",
      name: "General Knowledge"
    },
    {
      id: "10",
      name: "Entertainment: Books"
    },
    {
      id: "11",
      name: "Entertainment: Film"
    },
    {
      id: "12",
      name: "Entertainment: Music"
    },
    {
      id: "14",
      name: "Entertainment: Television"
    },
    {
      id: "15",
      name: "Entertainment: Video Games"
    },
    {
      id: "16",
      name: "Entertainment: Board Games"
    },
  ]


  quizzDetails = {
    category: "",
    difficulty: "",
    type: ""
  }

  questions: any = [];
  
  constructor ( private quizzService: QuizzService ) {}

  requestQuestions: RequestQuestionsService = inject(RequestQuestionsService);

  getUserFromLocalStorage = localStorage.getItem("user");

  user = this.getUserFromLocalStorage ? JSON.parse(this.getUserFromLocalStorage) : null;
  
  route = inject(Router)

  onSubmit ( form: NgForm ) {

    // const { getQuizzQuestions } = this.quizzService;

    this.requestQuestions.getQuizzQuestions(this.quizzDetails).subscribe({
      next: (val: any) => {
        // this.questions = val.results
        this.requestQuestions.getQuestions.next(val.results)
        this.user.currentQuize = {
          title: val.results[0].category,
          questions: val.results,
          score: 0
        };
        localStorage.setItem("user", JSON.stringify(this.user))
        this.route.navigate(["question"])
      }
    })
    
    this.quizzDetails = {
      category: "",
      difficulty: "",
      type: ""
    }
  }


  

}
