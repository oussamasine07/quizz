import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageTitleComponent } from './page-title/page-title.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    SidebarComponent, SignUpComponent, PageTitleComponent, 
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enaa-quizizz';
  pageTitle = "Welcome to QUIZIZZ";
}
