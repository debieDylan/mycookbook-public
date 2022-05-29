import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, ToastController, ViewDidEnter } from '@ionic/angular';
import { intervalToDuration } from 'date-fns';
import { Subscription } from 'rxjs';
import { RecipeI } from 'src/app/datatypes/recipe';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { InstructionComponent } from 'src/app/shared/instruction/instruction.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit, ViewDidEnter {

  isOriginalRecipe: boolean
  segment: string = "about"
  list: RecipeI
  prepMinutes: string
  cookMinutes: string

  recipe: RecipeI

  isFavorite: boolean = false

  subscriptions: Subscription[] = []

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public recipeService: RecipeService,
    public alertController: AlertController,
    private authService: AuthService,
    public toastController: ToastController,
    public modalController: ModalController) {
    this.isOriginalRecipe = this.activatedRoute.snapshot.parent.parent.routeConfig.path === "myrecipes" ? true : false
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.data['special']) {
      this.recipe = this.activatedRoute.snapshot.data['special']
      this.prepMinutes = this.converseToTimeFormat(this.recipe.prepTimeInMinutes)
      this.cookMinutes = this.converseToTimeFormat(this.recipe.cookTimeInMinutes)
    } else {
      this.router.navigateByUrl('tabs/myrecipes', { replaceUrl: true })
    }
  }

  ionViewDidEnter(): void {
    this.checkFavoriteList()
  }

  async deleteRecipe(): Promise<void> {
    await this.presentAlert()
  }

  private converseToTimeFormat(valueInMinutes: number): string {
    const duration = intervalToDuration({ start: 0, end: valueInMinutes * 60 * 1000 })
    return `${duration.hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${duration.minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`
  }

  private async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Delete Recipe',
      subHeader: 'Are you sure to delete this recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alertColor'
        }, {
          text: 'OK',
          handler: async _ => {
            if (this.isOriginalRecipe) {
              await this.recipeService.deleteRecipe(this.recipe.id, 'recipes', false)
              this.router.navigateByUrl('tabs/myrecipes', { replaceUrl: true })
            } else {
              await this.recipeService.deleteRecipe(this.recipe.id, `users/${this.authService.getUserUID()}/favorites`, true)
              this.router.navigateByUrl('tabs/favorites', { replaceUrl: true })
            }
            await this.presentDeleteToast()
          },
          cssClass: 'alertColor'
        }
      ]
    })
    await alert.present()
  }

  private async presentDeleteToast() {
    const toast = await this.toastController.create({
      message: 'The recipe has been deleted.',
      duration: 3000,
      buttons: [
        {
          side: 'end',
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InstructionComponent,
      componentProps: {
        instructions: this.recipe.instructions
      }
    })
    return await modal.present()
  }

  checkFavoriteList() {
    this.subscriptions.push(this.recipeService.currentFavoriteList.subscribe(favorites => {
      const result = favorites.find(recipe => recipe.id === this.recipe.id.toString())

      if (result) {
        this.isFavorite = true
      } else {
        this.isFavorite = false
      }
    }))
  }

  addToFavorites(): void {
    this.recipeService.saveToFavorites(this.recipe)
  }
}
