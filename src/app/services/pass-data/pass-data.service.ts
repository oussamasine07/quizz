import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  constructor() { }

  subject: Subject<string> = new Subject();

  passData (data: string) {
    this.subject.next(data);
  }

}
