import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<any> {

  constructor(public recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id')
    if(route.parent.routeConfig.path === "myrecipes") {
      return this.recipeService.getRecipeById(id)
    } else if(route.parent.routeConfig.path === "favorites") {
      return this.recipeService.getFavoriteRecipeById(id)
    }
  }
}
