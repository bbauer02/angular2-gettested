import { Injectable } from '@angular/core';

import { Pastrie, List } from './pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from './mock-pastries';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  private pastries: Pastrie[] = PASTRIES; // _ convention private et protected
  private ingredientsList: List[] = INGREDIENTS_LISTS;

  sendCurrentNumberPage = new Subject<number>();

  constructor() { }

  getPastries(): Pastrie[] {

    return this.pastries.sort(
      (a, b) => { return b.quantity - a.quantity }
    );
  }

  getPastrie(id: string): Pastrie | undefined {

    return this.pastries.find(pastrie => pastrie.id === id);
  }

  getPastrieIngredientsList(id: string): List | undefined {

    return this.ingredientsList.find(list => list.id === id);
  }

  count():number{

    return this.pastries.length;
  }

  paginate(start: number, end: number) : Pastrie[] {

    return this.pastries.sort(
      (a, b) => { return a.order - b.order }
    ).slice(start, end);
  }

  search(word: string): Pastrie[] | void {
    if (word.length > 2) {
      let response:Pastrie[] = [];
      this.pastries.forEach(pastrie => {
        if (pastrie.name.includes(word)) response.push(pastrie);
      });

      return response;
    }
  }

  paginateNumberPage(): number {
    if ( typeof environment.numberPage == 'undefined' )
      throw "Attention la pagination n'est pas définie !" ;

    return environment.numberPage;
  }

  currentPage(numberPage: number) {
    // L'Observer notifie une information page, ici numérique, puis envoie le journal ...
    return this.sendCurrentNumberPage.next(numberPage);
  }
}
