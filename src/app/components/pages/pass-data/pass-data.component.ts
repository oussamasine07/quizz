import { Component } from '@angular/core';
import { InsertInfoComponent } from '../../partials/insert-info/insert-info.component';
import { ShowInfoComponent } from '../../partials/show-info/show-info.component';

@Component({
  selector: 'app-pass-data',
  imports: [
    InsertInfoComponent, ShowInfoComponent
  ],
  templateUrl: './pass-data.component.html',
  styleUrl: './pass-data.component.css'
})
export class PassDataComponent {

}
