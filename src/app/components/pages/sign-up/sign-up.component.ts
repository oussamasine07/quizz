import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { PageTitleComponent } from '../../partials/page-title/page-title.component';

@Component({
  selector: 'app-sign-up',
  imports: [ PageTitleComponent, FormsModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  standalone: true
})
export class SignUpComponent {
  title = signal("Welcome to QUIZIZZ")

  pageTitle = "Welcome to QUIZIZZ";

  userObj = {
    username: ""
  }

  userInfo = {
    username: "",
    quizzes: []
  }

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
    
  }

  

}
