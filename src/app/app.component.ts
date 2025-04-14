import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageTitleComponent } from './page-title/page-title.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    SidebarComponent, PageTitleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enaa-quizizz';
}
