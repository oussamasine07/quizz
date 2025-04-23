import { Component, inject, input, InputSignal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PassDataService } from '../../../services/pass-data/pass-data.service';

@Component({
  selector: 'app-insert-info',
  imports: [ FormsModule ],
  templateUrl: './insert-info.component.html',
  styleUrl: './insert-info.component.css'
})
export class InsertInfoComponent {

  info: string = ""
  dataService = inject(PassDataService)

  onSubmit(form: NgForm) {
    this.dataService.passData(this.info)
    this.info = "";
  }
}
