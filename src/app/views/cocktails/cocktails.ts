import { Component, computed, effect, inject, signal } from '@angular/core';
import { Cocktail } from 'app/shared/interfaces';
import { CocktailDetails } from './components/cocktail-details';
import { CocktailsList } from './components/cocktails-list';
import { CocktailsService } from 'app/shared/services/cocktails';
import { CartService } from 'app/shared/services/cart';
// import { cocktails } from 'app/shared/data/cocktails.data';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsList, CocktailDetails],
  template: `
    <app-cocktails-list
      [(selectedCocktailId)]="selectedCocktailId"
      [cocktails]="cocktails()"
      [likedCocktailIds]="likedCocktailIds()"
      (likeCocktail)="likeCocktail($event)"
      (unlikeCocktail)="unlikeCocktail($event)"
      class="w-half xs-w-full card"
    />
    @let sc = selectedCocktail();
    @if(sc){
      <app-cocktail-details
      [cocktail]="sc"
      [isLiked]="selectedCocktailLiked()"
      (likeCocktail)="likeCocktail($event)"
      (unlikeCocktail)="unlikeCocktail($event)"
      class="w-half xs-w-full card"
    />
    }
    
  `,
  styles: `
    :host {
      flex: 1 1 auto;
      display: flex;
      gap:24px;
      padding: 24px;
      @media screen and (max-width: 820px) {
        flex-direction: column;
      }
    }
  `,
})
export class Cocktails {
  cocktailsService = inject(CocktailsService)
  cartService = inject(CartService)
  cocktails = computed(() => this.cocktailsService.cocktailRessource.value() || [])
  selectedCocktailId = signal<string | null>(null);
  selectedCocktail = computed(()=> this.cocktails().find(({_id})=> _id === this.selectedCocktailId()))
  likedCocktailIds = computed(() => this.cartService.likedCocktailIds())
  selectedCocktailLiked = computed(()=> {
    const selectedCocktailId = this.selectedCocktailId()
    return selectedCocktailId ?  this.likedCocktailIds().includes(selectedCocktailId) : false
  })
  
  likeCocktail(cocktailId: string){
    this.cartService.likeCocktail(cocktailId)
  }
  unlikeCocktail(cocktailId: string){
    this.cartService.unlikeCocktail(cocktailId)
  }
}