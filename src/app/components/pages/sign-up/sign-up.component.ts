import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { PageTitleComponent } from '../../partials/page-title/page-title.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ PageTitleComponent, FormsModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  standalone: true
})
export class SignUpComponent implements OnInit {
  title = signal("Welcome to QUIZIZZ")

  pageTitle = "Welcome to QUIZIZZ";

  userObj = {
    username: ""
  }

  userInfo = {
    username: "",
    quizzesHistory: [],
    currentQuize: null
  }

  route = inject(Router);

  onSubmit ( form: NgForm ) {
    const { username } = this.userObj;

    this.userInfo = {
      ...this.userInfo,
      username
    }

    localStorage.setItem("user", JSON.stringify(this.userInfo));
    
    this.userObj = {
      username: ""
    }
    
    //redirect to quizz page
    this.route.navigate(["quizz"])
  }

  ngOnInit(): void {
    if ( localStorage.getItem("user")) {
      this.route.navigate(["quizz"])
    }
  }

}
