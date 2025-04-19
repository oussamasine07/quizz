import { Component, signal } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { SignUpService } from '../services/signup/sign-up.service';
import { FormsModule, NgForm } from "@angular/forms";

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
