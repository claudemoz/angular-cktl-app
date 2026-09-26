import { Service, signal } from '@angular/core';

@Service()
export class CartService {
  likedCocktailIds = signal<string[]>([])
  ingredients = signal<string[]>([]);


  likeCocktail(cocktailId: string){
    this.likedCocktailIds.update((likedCocktailIds) => [...likedCocktailIds, cocktailId])
  }

  unlikeCocktail(cocktailId: string){
    this.likedCocktailIds.update((likedCocktailIds) => likedCocktailIds.filter((id) => id !== cocktailId))
  }

  addIngredients(ingredients: string[]) {
    this.ingredients.update((i) => [...i, ...ingredients]);
  }
}
