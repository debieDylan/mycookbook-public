import { Injectable, OnDestroy } from '@angular/core';
import { Recipe, RecipeI } from '../datatypes/recipe';
import { DatabaseService } from './database.service';
import { FirestorageService } from './firestorage.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ApiRecipe } from '../datatypes/apiResult';
import { AuthService } from './auth.service';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnDestroy {

  recipeListBehavior: BehaviorSubject<RecipeI[]> = new BehaviorSubject<RecipeI[]>([])
  currentRecipeList: Observable<RecipeI[]> = this.recipeListBehavior.asObservable()

  favoriteListBehavior: BehaviorSubject<RecipeI[]> = new BehaviorSubject<RecipeI[]>([])
  currentFavoriteList: Observable<RecipeI[]> = this.favoriteListBehavior.asObservable()

  private subscriptions: Subscription[] = []

  constructor(public databaseService: DatabaseService, public fireStorageService: FirestorageService, public authService: AuthService, auth: Auth) {
    //If the user signs out, all subscriptions in the service should be unsubscribed from.
    auth.onAuthStateChanged(user => {
      if (!user) {
        this.subscriptions.forEach(u => u.unsubscribe())
      }
    })
   }

   ngOnDestroy(): void {
     //Safe Fail: If the service is destroyed, unsubscribe from all subscriptions if there are any.
     if(this.subscriptions.length > 0) {
       this.subscriptions.forEach(u => u.unsubscribe())
     }
   }

   /**
    * A method that loads the personal recipe list and favorite recipe list.
    */
  loadRecipeList(): void {
    this.subscriptions.push(this.databaseService.retrieveRecipesAsObservable().subscribe(data => {
      this.recipeListBehavior.next(data)
    }))
    this.subscriptions.push(this.databaseService.retrieveFavoriteRecipesAsObservable().subscribe( data => {
      this.favoriteListBehavior.next(data)
    }))
  }

  clearRecipeList(): void {
    this.recipeListBehavior.next(null)
    this.favoriteListBehavior.next(null)
  }

  /**
   * A method that gets a recipe by its id value.
   * @param id The id of the recipe.
   * @returns A recipe with the given id is returned. If no recipe is found, undefined will be returned.
   */
  getRecipeById(id: string): RecipeI | undefined {
    let recipe: RecipeI
    this.subscriptions.push(this.currentRecipeList.subscribe(recipes => {
      recipe = recipes.find(x => x.id === id)
    }))

    return recipe
  }

  /**
   * A method that gets a favorite recipe by its id value.
   * @param id The id of the recipe.
   * @returns A favorite recipe with the given id is returned, If no recipe is found, undefined will be returned.
   */
  getFavoriteRecipeById(id: string): RecipeI | undefined {
    let recipe: RecipeI

    this.subscriptions.push(this.currentFavoriteList.subscribe(recipes => {
      recipe = recipes.find(x => x.id === id)
    }))

    return recipe
  }

  /**
   * A method that will delete a recipe and its corresponding image in Firebase.
   * @param id The id of the recipe that needs to be deleted.
   * @param collection the collection which needs to be refered to in order to delete the recipe.
   * @param isFavorite A boolean to indicate whether or not a recipe is toggled as favorite. Favorite recipes do not have a corresponding image in Firebase.
   * This is important when trying to delete a recipe.
   */
  async deleteRecipe(id: string, collection: string, isFavorite: boolean): Promise<void> {
    if(!isFavorite) {
      await this.fireStorageService.deleteImage(id)
    }
    await this.databaseService.deleteRecipe(collection, id)
  }

  /**
   * A method that will update an existing recipe in Firebase
   * @param recipe The recipe object that needs to be updated.
   */
  async updateRecipe(recipe: Recipe): Promise<void> {
    if(recipe.imageBase64 !== undefined) {
      const url = await this.fireStorageService.saveImage(recipe.imageBase64, recipe.id)
      recipe.imageUrl = url
    }
    await this.databaseService.updateRecipe('recipes', recipe)
  }

  /**
   * A method that will call the saveToFavorite method. This will save a favorite recipe to Firebase.
   * @param recipe The recipe object that needs to be saved as a favorite in Firebase.
   */
  saveToFavorites(recipe: RecipeI) {
    this.databaseService.saveFavorite(recipe)
  }

  /**
   * A method that will convert the ApiRecipe object to RecipeI object.
   * @param apiRecipe The ApiRecipe that needs to be converted.
   * @returns A RecipeI object.
   */
  convertApiToLocalRecipe(apiRecipe: ApiRecipe): RecipeI {
    const convertedRecipe: RecipeI = {
      id: apiRecipe.id.toString(),
      userId: "Spoonacular",
      name: apiRecipe.title,
      description: apiRecipe.summary,
      author: apiRecipe.sourceName,
      servings: apiRecipe.servings,
      ingredients: apiRecipe.ingredients,
      instructions: apiRecipe.instructions,
      prepTimeInMinutes: 0,
      cookTimeInMinutes: apiRecipe.readyInMinutes,
      date: Date.now(),
      imageUrl: apiRecipe.image
    }
    return convertedRecipe
  }

  /**
   * Deletes all Recipes and Favorite Recipes from Firestore, including linked images in Firebase Storage.
   */
  async deleteAllRecipes(): Promise<void> {
    //Delete all Favorite recipes from the user, this will delete the subcollection under this user.
    this.subscriptions.push(this.currentFavoriteList.subscribe(x => {
      x.forEach(async recipe => {
        await this.databaseService.deleteRecipe(`users/${this.authService.getUserUID()}/favorites`, recipe.id)
      })
    }))

    //Delete all personal recipes associated to the user, including images.
    this.subscriptions.push(this.currentRecipeList.subscribe(x => {
      x.forEach(async recipe => {
        await this.databaseService.deleteRecipe(`recipes`, recipe.id)
        await this.fireStorageService.deleteImage(recipe.id)
      })
    }))
  }
}
