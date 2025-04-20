import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type ObjType = {
  category: string,
  difficulty: string,
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class RequestQuestionsService {

  constructor( private http: HttpClient ) { }

  getQuestions = new Subject();

  getQuizzQuestions ({category, difficulty, type}: ObjType) {

    category = category != "" ? `&category=${ category }` : '';
    difficulty = difficulty != "" ? `&difficulty=${ difficulty }` : '';
    type = type != "" ? `&type=${ type }` : '';
    // prepare link
    const url = `https://opentdb.com/api.php?amount=10${ category }${ difficulty }${ type }`;

    return this.http.get(url)

  }


}
