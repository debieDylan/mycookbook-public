import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ApiRecipe } from 'src/app/datatypes/apiResult';
import { Ingredient } from 'src/app/datatypes/ingredient';
import { RecipeI } from 'src/app/datatypes/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { InstructionComponent } from 'src/app/shared/instruction/instruction.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit, OnDestroy {

  recipe: ApiRecipe
  segment: string = 'about'
  isFavorite: boolean = false
  subscriptions: Subscription[] = []

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public recipeService: RecipeService,
    public modalController: ModalController) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.data['special']) {
      this.recipe = this.activatedRoute.snapshot.data['special']
      this.recipe.summary = this.recipe.summary.replace(/<\/?[^>]+>/gi, ' ')
      this.recipe.instructions = []
      this.recipe.ingredients = []

      this.recipe.analyzedInstructions.forEach(element => {
        element.steps.forEach(step => {
          this.recipe.instructions.push(step.step)
        });
      });

      if (this.recipe.instructions.length === 0) {
        this.recipe.instructions.push('There are no instructions available')
      }

      this.recipe.extendedIngredients.forEach(element => {
        let ingredient: Ingredient = {
          name: element.name,
          unit: element.unit,
          amount: element.amount
        }
        this.recipe.ingredients.push(ingredient)
      });

      this.checkFavoriteList()
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  addToFavorites(): void {
    const result: RecipeI = this.recipeService.convertApiToLocalRecipe(this.recipe)
    this.recipeService.saveToFavorites(result)
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
      }
    }))
  }
}
