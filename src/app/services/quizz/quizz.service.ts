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
    // prepare ths link
    const link = `https://opentdb.com/api.php?amount=10&category=${ category }&difficulty=${difficulty}&type=${type}`;

    const res = await fetch(link);
    const { results } = await res.json();
    
    return results;

  }
}
