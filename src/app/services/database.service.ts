import { Injectable } from '@angular/core';
import { Recipe, RecipeI } from '../datatypes/recipe';
import { AuthService } from './auth.service';

//firestore imports
import {
  collection, Firestore, CollectionReference,
  doc, DocumentReference, deleteDoc, query,
  getDocs, updateDoc, orderBy, where, setDoc, Unsubscribe,
  collectionSnapshots, QueryDocumentSnapshot
} from '@angular/fire/firestore'

import { CustomUser } from '../datatypes/customUser';
import { Auth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private readonly unsubscribeAll: Unsubscribe[] = []

  constructor(private authService: AuthService, private toastController: ToastController,
    private fireStore: Firestore,
    auth: Auth) {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleLogin(user.displayName)
      } else {
        this.unsubscribeAll.forEach(u => u())
      }
    })
  }

  /**
   * This method converts the recipe object to the recipeI object, which does not include an id.
   * The id will be used to set the document in Firestore so that the document name becomes the value of the id.
   * @param collection The collection that should be referenced to when trying to insert data
   * @param recipe The recipe that needs to be inserted.
   */
  async createRecipe(collection: string, recipe: Recipe): Promise<void> {
    const newRecipe: RecipeI = {
      name: recipe.name,
      description: recipe.description,
      imageUrl: recipe.imageUrl,
      servings: recipe.servings,
      prepTimeInMinutes: recipe.prepTimeInMinutes,
      cookTimeInMinutes: recipe.cookTimeInMinutes,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      date: Date.now(),
      author: this.authService.getDisplayName(),
      userId: this.authService.getUserUID()
    }

    await setDoc<RecipeI>(
      this.getDocumentRef<RecipeI>(collection, recipe.id),
      newRecipe
    )
  }

  /**
   * Inserts a recipe into the "Favorite" subcollection of the "User" collection in Firestore.
   * @param recipe The recipe that needs to be inserted into the favorite collection of the Firestore.
   */
  async saveFavorite(recipe: RecipeI): Promise<void> {
    await setDoc<RecipeI>(
      this.getDocumentRef<RecipeI>(`users/${this.authService.getUserUID()}/favorites`, recipe.id),
      recipe
    ).then(_ => this.presentToast("The recipe has been saved to your Favorites")).catch((e) => {
      this.presentToast("You already saved the recipe")
    })
  }

  /**
   * A method that will create a new record in Firestore under the user collection.
   * @param userId The userId that is needed to set the new document with the correct name.
   * @param displayName The display name of the new user.
   */
  async createUser(userId: string, displayName: string): Promise<void> {
    const newUser = {
      displayName: displayName
    }

    await setDoc<CustomUser>(
      this.getDocumentRef<CustomUser>('users', userId),
      newUser
    )
  }

  /**
   * Retrieves messages as an observable.
   * @returns Observable if the query is succesful.
   */
  retrieveRecipesAsObservable(): Observable<RecipeI[]> {
    return collectionSnapshots<RecipeI>(
      query<RecipeI>(
        this.getCollectionRef<RecipeI>(`recipes`),
        where("userId", "==", this.authService.getUserUID()),
        orderBy('date')
      )
    ).pipe(
      map<QueryDocumentSnapshot<RecipeI>[], RecipeI[]>(
        x => x.map(d => ({ ...d.data(), id: d.id }))
      ),
      shareReplay(1)
    )
  }

  /**
   * Retrieves recipes from the user subcollection "favorites"
   * @returns An observable of the RecipeI list.
   */
  retrieveFavoriteRecipesAsObservable(): Observable<RecipeI[]> {
    return collectionSnapshots<RecipeI>(
      query<RecipeI>(
        this.getCollectionRef<RecipeI>(`users/${this.authService.getUserUID()}/favorites`),
        orderBy('date')
      )
    ).pipe(
      map<QueryDocumentSnapshot<RecipeI>[], RecipeI[]>(
        x => x.map(d => ({ ...d.data(), id: d.id }))
      ),
      shareReplay(1)
    )
  }

  /**
   * This method will delete a recipe by id in Firestore.
   * @param collection The collection that should be referenced to when trying to insert data.
   * @param id The id of the recipe that needs to be deleted.
   */
  async deleteRecipe(collection: string, id: string): Promise<void> {
    await deleteDoc(this.getDocumentRef(collection, id))
  }

  /**
   * This method converts the recipe object to the recipeI object, which does not include an id.
   * The id will be used to update the document in Firestore.
   * @param collection The collection that should be referenced to when trying to insert data.
   * @param recipe The recipe that needs to be inserted.
   */
  async updateRecipe(collection: string, recipe: Recipe): Promise<void> {
    const updateRecipe: RecipeI = {
      name: recipe.name,
      description: recipe.description,
      imageUrl: recipe.imageUrl,
      servings: recipe.servings,
      prepTimeInMinutes: recipe.prepTimeInMinutes,
      cookTimeInMinutes: recipe.cookTimeInMinutes,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      date: Date.now(),
      author: this.authService.getDisplayName(),
      userId: this.authService.getUserUID()
    }
    await updateDoc(this.getDocumentRef(collection, recipe.id), updateRecipe)
  }

  async deleteUser(): Promise<void> {
    await deleteDoc(this.getDocumentRef('users', this.authService.getUserUID()))
    await this.authService.permaDeleteUser()
  }

  private getCollectionRef<T>(collectionName: string): CollectionReference<T> {
    return collection(this.fireStore, collectionName) as CollectionReference<T>
  }

  private getDocumentRef<T>(collectionName: string, id: string): DocumentReference<T> {
    return doc(this.fireStore, `${collectionName}/${id}`) as DocumentReference<T>
  }

  /**
   * A method that will verify whether a user is logged in for the first time or not.
   * If it's the first login, a new user record will be stored in Firestore.
   */
  private async handleLogin(displayName: string): Promise<void> {
    const isFirstLogIn = await this.isFirstLogIn()

    if (!isFirstLogIn) {
      return
    }
    this.createUser(this.authService.getUserUID(), displayName)
  }

  /**
   * A method that will check Firestore if there is an existing user record. No record indicates that the user has not signed in yet.
   * @returns A boolean that indicates whether the user document exists or not.
   */
  private async isFirstLogIn(): Promise<boolean> {
    const result = await getDocs<CustomUser>(
      query<CustomUser>(
        this.getCollectionRef('users'),
        where('__name__', '==', this.authService.getUserUID())
      )
    )
    return result.docs.length === 0
  }

  /**
  * A method that will present a toast containing a message onscreen
  * @param message Message to be presented to the user.
  */
  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      icon: 'information-circle-outline',
      buttons: [
        {
          side: 'end',
          text: 'OK',
          role: 'cancel'
        }
      ]
    })
    toast.present()
  }
}
