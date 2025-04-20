import { Component } from '@angular/core';
import { PageTitleComponent } from '../../partials/page-title/page-title.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [
    NgFor, 
    PageTitleComponent 
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  pageTitle ="all quizzes history";

  getLocalStorage = localStorage.getItem("user");
  user = this.getLocalStorage && JSON.parse(this.getLocalStorage);

  quizzesHistory = this.user.quizzesHistory
  

}
