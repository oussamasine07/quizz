import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageTitleComponent } from './components/partials/page-title/page-title.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    //PageTitleComponent, SidebarComponent, 
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enaa-quizizz';
  pageTitle = "Welcome to QUIZIZZ";
}
