import { Component, inject, OnInit } from '@angular/core';
import { PassDataService } from '../../../services/pass-data/pass-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-show-info',
  imports: [ NgFor],
  templateUrl: './show-info.component.html',
  styleUrl: './show-info.component.css'
})
export class ShowInfoComponent implements OnInit {
  datas: string[] = []

  dataService = inject(PassDataService)

  ngOnInit(): void {

    this.dataService.subject.subscribe((val: string) => {
      this.datas.push(val)
    })

  }

}
