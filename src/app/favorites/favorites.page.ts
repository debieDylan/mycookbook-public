import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeI } from '../datatypes/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  searchTerm: string
  favorites$: Observable<RecipeI[]> = this.recipeService.currentFavoriteList

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
  }

}
