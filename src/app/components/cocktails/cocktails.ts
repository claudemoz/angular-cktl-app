import { Component } from '@angular/core';
import { CocktailsList } from './cocktails-list';
import { CocktailDetails } from './cocktail-details';
@Component({
  selector: 'app-cocktails',
  imports: [CocktailsList, CocktailDetails],
  template: `
    <app-cocktails-list class="w-half card" />
    <app-cocktail-details class="w-half card" />
  `,
  
  styles: `
    :host {
      display: flex;
      gap:24px;
      padding: 24px;
    }
  `,
})
export class Cocktails{}