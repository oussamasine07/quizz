import { Injectable } from '@angular/core';

type ObjType = {
  category: string,
  difficulty: string,
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor() { }

  

  async getQuizzQuestions ({category, difficulty, type}: ObjType) {
    category = category != "" ? `&category=${ category }` : '';
    difficulty = difficulty != "" ? `&difficulty=${ difficulty }` : '';
    type = type != "" ? `&type=${ type }` : '';
    // prepare ths link
    const link = `https://opentdb.com/api.php?amount=10${ category }${ difficulty }${ type }`;
    console.log(link)
    
    const res = await fetch(link);
    const { results } = await res.json();
    
    return results;

  }
}
