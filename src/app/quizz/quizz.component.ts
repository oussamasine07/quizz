import { Component, signal } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { FormsModule, NgForm } from '@angular/forms';
import { QuizzService } from '../services/quizz/quizz.service';

@Component({
  selector: 'app-quizz',
  imports: [ PageTitleComponent, FormsModule ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
  standalone: true
})
export class QuizzComponent {
  
  // user: any = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
  title = signal("this is quizz");
  pageTitle ="Welcome test page";

  quizzDetails = {
    category: "",
    difficulty: "",
    type: ""
  }

  questions: any = [];
  
  constructor ( private quizzService: QuizzService ) {}

  async onSubmit ( form: NgForm ) {

    const { getQuizzQuestions } = this.quizzService;

    this.questions = await getQuizzQuestions(this.quizzDetails);

    this.quizzDetails = {
      category: "",
      difficulty: "",
      type: ""
    }
  }
  
}
