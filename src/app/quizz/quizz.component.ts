import { Component, signal } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-quizz',
  imports: [ PageTitleComponent ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  
  // user: any = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
  title = signal("this is quizz");
  pageTitle ="Welcome test page";
  
  constructor () {
    console.log(localStorage.getItem("user"))
  }
}
