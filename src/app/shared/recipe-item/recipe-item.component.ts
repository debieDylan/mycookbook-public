import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { intervalToDuration } from 'date-fns';
import { Recipe } from 'src/app/datatypes/recipe';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe

  constructor(public activatedRoute: ActivatedRoute, public router: Router, public alertController: AlertController,
              public databaseService: DatabaseService, public fireStorage: FirestorageService,
              public recipeService: RecipeService, private authService: AuthService,
              public toastController: ToastController) {
  }

  ngOnInit() {
    this.recipe.prepTimeConverted = this.converseToTimeFormat(this.recipe.prepTimeInMinutes)
    this.recipe.cookTimeConverted = this.converseToTimeFormat(this.recipe.cookTimeInMinutes)
  }

  private converseToTimeFormat(valueInMinutes: number): string {
    const duration = intervalToDuration({start: 0, end: valueInMinutes*60 * 1000})
    return `${duration.hours.toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false})}:${duration.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`
  }

  async deleteAlert() {
    const alert = await this.alertController.create({
      header: 'Delete recipe',
      subHeader: `Are you sure to delete '${this.recipe.name}'`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteRecipe(this.recipe.id)
          }
        }
      ]
    })
    await alert.present()
  }

  private async deleteRecipe(id: string) {
    if(this.activatedRoute.snapshot.parent.routeConfig.path === "myrecipes") {
      await this.recipeService.deleteRecipe(id, 'recipes', false).then(async () => {
        await this.presentToast()
      })
    } else if(this.activatedRoute.snapshot.parent.routeConfig.path === "favorites") {
      await this.recipeService.deleteRecipe(id, `users/${this.authService.getUserUID()}/favorites`, true).then(async () => {
        await this.presentToast()
      })
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'The recipe has been deleted.',
      duration: 2000
    });
    toast.present();
  }
}
