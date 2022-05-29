import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiRecipe, ApiResult } from '../datatypes/apiResult';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiKey = environment.spoonacular.key
  readonly baseURL = environment.spoonacular.url

  behaviorRecipes: BehaviorSubject<ApiRecipe[]> = new BehaviorSubject<ApiRecipe[]>([])
  currentRecipeList: Observable<ApiRecipe[]> = this.behaviorRecipes.asObservable()

  private subscriptions: Subscription[] = []

  constructor(private http: HttpClient, auth: Auth) {
    //If the user signs out, all subscriptions in the service should be unsubscribed from.
    auth.onAuthStateChanged(user => {
      if (!user) {
        this.subscriptions.forEach(u => u.unsubscribe())
      }
    })
  }

  /**
   * Gets the first 10 records from the API. The offset decides the starting point.
   * @param offset A number that indicates how many records should be skipped before returning a result.
   * @returns A list of ApiRecipe
   */
  getRecipes(offset: number): Observable<ApiRecipe[]> {
    return this.http
      .get<ApiResult<ApiRecipe>>(
        `${this.baseURL}/complexSearch`,
        {
          observe: 'body',
          responseType: 'json',
          params: {
            apiKey: `${this.apiKey}`,
            addRecipeInformation: true,
            fillIngredients: true,
            offset: offset
          }
        }
      )
      .pipe(
        map<ApiResult<ApiRecipe>, ApiRecipe[]>(o => { return o.results }),
        catchError(error => {
          console.error(error)
          return of(undefined)
        })
      )
  }

  /**
   * Gets the first 10 records from the API that fullfills the searchText filter. If the searchText is "" or undefined,
   * the call will return 0 records, hence why it needs to be a seperate method.
   * @param searchText The filter that is applied to the search that will return all recipes containing the searchText.
   * @param offset A number that indicates how many records should be skipped before returning a result.
   * @returns A list of ApiRecipe
   */
  getRecipesFiltered(searchText: string, offset: number): Observable<ApiRecipe[]> {
    return this.http
      .get<ApiResult<ApiRecipe>>(
        `${this.baseURL}/complexSearch`,
        {
          observe: 'body',
          responseType: 'json',
          params: {
            apiKey: `${this.apiKey}`,
            addRecipeInformation: true,
            fillIngredients: true,
            titleMatch: searchText,
            offset: offset
          }
        }
      )
      .pipe(
        map<ApiResult<ApiRecipe>, ApiRecipe[]>(o => { return o.results }),
        catchError(error => {
          console.error(error)
          return of(undefined)
        })
      )
  }

  /**
   * A method that saves the latest list to a behaviorSubject.
   * @param list The list that should be saved.
   */
  setData(list: ApiRecipe[]): void {
    this.behaviorRecipes.next(list)
  }

  /**
   * A method that retrieves a specific recipe by its id. The record is fetched from an observable.
   * @param id The id of the recipe that needs to be fetched.
   * @returns An ApiRecipe with the correct id.
   */
  getDataById(id: number): ApiRecipe {
    let recipe: ApiRecipe
    this.subscriptions.push(this.currentRecipeList.subscribe(recipes => {
      recipe = recipes.find(x => x.id === id)
    }))
    return recipe
  }
}
