import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeI } from '../datatypes/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.page.html',
  styleUrls: ['./myrecipes.page.scss'],
})
export class MyrecipesPage {

  searchTerm: string
  recipes$: Observable<RecipeI[]> = this.recipeService.currentRecipeList

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public recipeService: RecipeService) { }
}
