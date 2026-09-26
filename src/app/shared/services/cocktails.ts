import { resource, Service } from '@angular/core';
import { Cocktail } from '../interfaces';

@Service()
export class CocktailsService {
  BASE_URL = 'https://restapi.fr/api/cocktails';

  cocktailRessource = resource({
    loader: async (): Promise<Cocktail[]> => (await fetch(this.BASE_URL)).json()
  })
}
