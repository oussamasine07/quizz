import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PageTitleComponent } from '../../partials/page-title/page-title.component';
import { QuizzService } from '../../../services/quizz/quizz.service';
import { NgFor } from '@angular/common';
import { RequestQuestionsService } from '../../../services/request-questions/request-questions.service';
import { QuestionComponent } from '../question/question.component';

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
  
  // user: any = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
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

  onSubmit ( form: NgForm ) {

    // const { getQuizzQuestions } = this.quizzService;

    this.requestQuestions.getQuizzQuestions(this.quizzDetails).subscribe({
      next: (val: any) => {
        // this.questions = val.results
        this.requestQuestions.getQuestions.next(val.results)
      }
    })
    
    this.quizzDetails = {
      category: "",
      difficulty: "",
      type: ""
    }
  }


  

}
