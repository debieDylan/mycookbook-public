import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
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
export class RecipeDetailsPage implements OnInit {

  isOriginalRecipe: boolean
  segment: string = "about"
  list: RecipeI

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
    if(this.activatedRoute.snapshot.data['special']) {
      this.recipe = this.activatedRoute.snapshot.data['special']
      this.checkFavoriteList()
    } else {
      this.router.navigateByUrl('tabs/myrecipes', {replaceUrl: true})
    }
   }

  async deleteRecipe(): Promise<void> {
    await this.presentAlert()
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
            if(this.isOriginalRecipe) {
              await this.recipeService.deleteRecipe(this.recipe.id, 'recipes', false)
              this.router.navigateByUrl('tabs/myrecipes', {replaceUrl: true})
            } else {
              await this.recipeService.deleteRecipe(this.recipe.id, `users/${this.authService.getUserUID()}/favorites`, true)
              this.router.navigateByUrl('tabs/favorites', {replaceUrl: true})
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

      if(result) {
        this.isFavorite = true
      }
    }))
  }

  addToFavorites(): void {
    this.recipeService.saveToFavorites(this.recipe)
  }
}
