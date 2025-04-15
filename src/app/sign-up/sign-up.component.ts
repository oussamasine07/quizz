import { Component } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-sign-up',
  imports: [ PageTitleComponent ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  title = "Welcome to QUIZIZZ"
}
