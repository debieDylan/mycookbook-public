import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Ingredient } from 'src/app/datatypes/ingredient';
import { Unit } from 'src/app/datatypes/unit';
import { Recipe } from 'src/app/datatypes/recipe';
import { DatabaseService } from 'src/app/services/database.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { v4 as uuid } from 'uuid'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';
import { HelpComponent } from './component/help/help.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit, OnDestroy {

  recipeName: string
  recipeDescription: string
  recipeServings: number
  recipePrepHours: number
  recipePrepMinutes: number
  recipeCookHours: number
  recipeCookMinutes: number
  recipeId: string
  oldRecipe: Recipe
  currentRecipe: Recipe
  recipeDate: number

  ingredient: Ingredient = {
    name: undefined,
    unit: Unit.gram,
    amount: undefined
  }

  ingredientList: Ingredient[] = []
  instructionList: string[] = []
  base64Image: string
  instruction: string
  units = Object.values(Unit)
  disableReorder: boolean = true
  imageUrl: string

  error: string = ""
  checkTheme: boolean = false
  doubleClick: boolean = true
  editIngredients: boolean = false
  editInstruction: boolean = false
  subscriptions: Subscription[] = []

  constructor(public photoService: PhotoService,
    public fireStorage: FirestorageService,
    public databaseService: DatabaseService,
    public router: Router, public activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public recipeService: RecipeService,
    public toastController: ToastController,
    public themeService: ThemeService,
    public modalController: ModalController,
    public alertController: AlertController,
    private navController: NavController) {
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.data['special']) {
      this.setData()
    }
    this.subscriptions.push(this.themeService.darkValue.subscribe(value => {
      this.checkTheme = value
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  private setData() {
    this.currentRecipe = this.activatedRoute.snapshot.data['special']
    this.oldRecipe = JSON.parse(JSON.stringify(this.currentRecipe))

    this.assignValuesToFields(this.currentRecipe)
  }

  /**
   * This method will take a photo and converts it to base64string.
   */
  async takePhoto() {
    await this.photoService.takePhoto()
    this.base64Image = 'data:image/jpeg;base64,'
    this.base64Image += this.photoService.getPhoto().base64String
  }


  /**
   * This method will push a new instruction into the instructionlist.
   */
  addInstructionToList(): void {
    if (this.instruction === undefined || this.instruction === '') {
      return
    }
    this.instructionList.push(this.instruction)
    this.instruction = undefined
  }

  /**
   * This method will push a new ingredient into the ingredientlist.
   */
  addIngredientToList(): void {
    if (Object.values(this.ingredient).some(x => x === undefined || x === null)) {
      this.presentToast("the ingredient contains something undefined")
      return
    }

    this.ingredientList.push(this.ingredient)
    this.ingredient = {
      name: undefined,
      unit: Unit.gram,
      amount: undefined
    }
  }

  /**
   * Deletes an ingredient from the local list.
   * @param ingredient Ingredient to be deleted from the local list.
   */
  deleteIngredient(ingredient: Ingredient): void {
    this.ingredientList = this.ingredientList.filter(x => x !== ingredient)
  }

  /**
   * Deletes an instruction from the local list.
   * @param instruction Instruction to be deleted from the local list.
   */
  deleteInstruction(instruction: string): void {
    this.instructionList = this.instructionList.filter(x => x !== instruction)
  }

  /**
   * Toggles the editIngredient boolean.
   */
  editIngredient(): void {
    this.editIngredients = !this.editIngredients
  }

  /**
   * Toggles the editInstruction boolean
   */
  editInstructions(): void {
    this.editInstruction = !this.editInstruction

    if (!this.disableReorder) {
      this.disableReorder = true
    }
  }

  doReorder(e: any) {
    this.instructionList = e.detail.complete(this.instructionList)
  }

  toggleReorder() {
    this.disableReorder = !this.disableReorder

    if (this.editInstruction === true) {
      this.editInstruction = false
    }
  }

  async handleSaveButton(): Promise<void> {
    if (this.doubleClick) {
      this.doubleClick = false
      if (this.recipeId) {
        await this.updateRecipe()
      } else {
        await this.createRecipe()
      }
      this.doubleClick = true
    }
  }

  /**
   * Compares the values of two recipes with eachother
   * @param recipe1 First recipe to compare
   * @param recipe2 Second recipe to compare
   * @returns true if both recipes are equal
   */
  private compareRecipes(recipe1: Recipe, recipe2: Recipe): boolean {
    let flag: boolean = false

    if (recipe1.name === recipe2.name
      && recipe1.description === recipe2.description
      && recipe1.servings === recipe2.servings
      && recipe1.prepTimeInMinutes === recipe2.prepTimeInMinutes
      && recipe1.cookTimeInMinutes === recipe2.cookTimeInMinutes
      && JSON.stringify(recipe1.ingredients) == JSON.stringify(recipe2.ingredients)
      && JSON.stringify(recipe1.instructions) == JSON.stringify(recipe2.instructions)
      && recipe1.author === recipe2.author
      && recipe1.imageBase64 === recipe2.imageBase64) {
      flag = true
    }

    return flag
  }

  /**
   * Compares the input values with the original recipe
   * @returns True if equal, False if there are any differences.
   */
  private compareTextValue(): boolean {
    let flag: boolean = true

    const recipePrepTimeInMinutes = (this.recipePrepHours * 60) + this.recipePrepMinutes
    const recipeCookTimeInMinutes = (this.recipeCookHours * 60) + this.recipeCookMinutes

    if (this.recipeName !== this.oldRecipe.name) {
      flag = false
    }
    if (this.recipeDescription !== this.oldRecipe.description) {
      flag = false
    }
    if (this.recipeServings !== this.oldRecipe.servings) {
      flag = false
    }
    if (recipePrepTimeInMinutes !== this.oldRecipe.prepTimeInMinutes) {
      flag = false
    }
    if (recipeCookTimeInMinutes !== this.oldRecipe.cookTimeInMinutes) {
      flag = false
    }
    if (this.base64Image) {
      if (this.base64Image !== this.oldRecipe.imageBase64) {
        flag = false
      }
    }
    if (JSON.stringify(this.ingredientList) !== JSON.stringify(this.oldRecipe.ingredients)) {
      flag = false
    }
    if (JSON.stringify(this.instructionList) !== JSON.stringify(this.oldRecipe.instructions)) {
      flag = false
    }

    return flag
  }

  /**
   * This method will update the existing recipe
   */
  async updateRecipe() {

    this.formatTime()

    if (!this.recipeValidation()) {
      await this.presentToast(this.error)
      return
    }

    this.currentRecipe.name = this.recipeName
    this.currentRecipe.description = this.recipeDescription
    this.currentRecipe.servings = this.recipeServings
    this.currentRecipe.prepTimeInMinutes = this.recipePrepHours * 60 + this.recipePrepMinutes
    this.currentRecipe.cookTimeInMinutes = this.recipeCookHours * 60 + this.recipeCookMinutes
    this.currentRecipe.userId = this.authService.getUserUID()
    this.currentRecipe.ingredients = this.ingredientList
    this.currentRecipe.instructions = this.instructionList
    this.currentRecipe.author = this.authService.getDisplayName()

    if (this.base64Image) {
      this.currentRecipe.imageBase64 = this.base64Image
    }

    if (this.compareRecipes(this.currentRecipe, this.oldRecipe)) {
      await this.presentToast("There are no changes made.")
      return
    } else {

      this.recipeService.updateRecipe(this.currentRecipe)
      this.router.navigate(['../tabs/myrecipes/recipe-details', this.currentRecipe.id])
      await this.presentToast("The recipe has been updated.")
    }
  }

  /**
   * Assigns the value of the provided recipe to the input field variables.
   * @param recipe values that needs to be assigned to the input field variables.
   */
  assignValuesToFields(recipe: Recipe): void {
    this.recipeId = recipe.id
    this.recipeName = recipe.name
    this.recipeDescription = recipe.description
    this.recipeServings = recipe.servings
    this.ingredientList = JSON.parse(JSON.stringify(recipe.ingredients))
    this.instructionList = JSON.parse(JSON.stringify(recipe.instructions))
    this.imageUrl = recipe.imageUrl
    this.recipePrepMinutes = recipe.prepTimeInMinutes % 60
    this.recipePrepHours = Math.floor(recipe.prepTimeInMinutes / 60)
    this.recipeCookMinutes = recipe.cookTimeInMinutes % 60
    this.recipeCookHours = Math.floor(recipe.cookTimeInMinutes / 60)
    this.recipeDate = recipe.date
  }

  /**
   * This method will create a new recipe and save it to the database if all neccesary data is filled in.
   */
  async createRecipe() {
    this.formatTime()

    if (!this.recipeValidation()) {
      await this.presentToast(this.error)
      return
    }

    const newrecipe: Recipe = {
      name: this.recipeName,
      description: this.recipeDescription,
      servings: this.recipeServings,
      prepTimeInMinutes: this.recipePrepHours * 60 + this.recipePrepMinutes,
      cookTimeInMinutes: this.recipeCookHours * 60 + this.recipeCookMinutes,
      userId: this.authService.getUserUID(),
      id: uuid(),
      imageBase64: this.base64Image,
      ingredients: this.ingredientList,
      instructions: this.instructionList,
      author: this.authService.getDisplayName()
    }

    newrecipe.imageUrl = await this.fireStorage.saveImage(this.base64Image, newrecipe.id)
    this.databaseService.createRecipe('recipes', newrecipe)
    this.router.navigate(['../tabs/myrecipes'])
    await this.presentToast("The recipe has been created.")
  }

  /**
   * This method will format all time values to numbers if they are undefined or 0.
   */
  private formatTime(): void {
    this.recipePrepHours = this.recipePrepHours === undefined || this.recipePrepHours <= 0 ? 0 : this.recipePrepHours
    this.recipePrepMinutes = this.recipePrepMinutes === undefined || this.recipePrepMinutes <= 0 ? 0 : this.recipePrepMinutes
    this.recipeCookHours = this.recipeCookHours === undefined || this.recipeCookHours <= 0 ? 0 : this.recipeCookHours
    this.recipeCookMinutes = this.recipeCookMinutes === undefined || this.recipeCookMinutes <= 0 ? 0 : this.recipeCookMinutes
  }

  /**
   * This method will validate the recipe to check if all conditions are met.
   * @param recipe The recipe that needs to be validated.
   * @returns True if the recipe is valid.
   */
  private recipeValidation(): boolean {
    const prepTimeInMinutes = this.recipePrepHours * 60 + this.recipePrepMinutes
    const cookTimeInMinutes = this.recipeCookHours * 60 + this.recipeCookMinutes

    if (this.recipeName === undefined || this.recipeName === '') {
      this.error = "The name is not filled in."
      return false
    }
    if (this.recipeDescription === undefined || this.recipeDescription === '') {
      this.error = "The description is not filled in."
      return false
    }
    if (this.recipeServings === undefined || this.recipeServings <= 0) {
      this.error = "The serving size is not valid."
      return false
    }
    if (prepTimeInMinutes === 0) {
      this.error = "Preptime is not valid."
      return false
    }
    if (cookTimeInMinutes === 0) {
      this.error = "Cooktime is not valid."
      return false
    }
    if ((this.base64Image === undefined || this.base64Image === '')
      && this.imageUrl === undefined || this.imageUrl === '') {
      this.error = "There is no image taken."
      return false
    }
    if (this.ingredientList.length === 0) {
      this.error = "The ingredients are not filled in."
      return false
    }
    if (this.instructionList.length === 0) {
      this.error = "The instructions are not filled in."
      return false
    }
    return true
  }

  /**
   * A method that will present a toast containing a message onscreen
   * @param message Message to be presented to the user.
   */
  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
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

  /**
   * Shows a window with helpful information
   */
  async showHelp(): Promise<void> {
    const modal = await this.modalController.create({
      component: HelpComponent
    })
    return await modal.present()
  }

  /**
   * Handles back button navigation. When creating a new recipe, it will
   * always show an alert incase the user accidentally clicks the back button.
   * When a user edits an existing recipe, the alert will only prompt
   * when there are existing changes on the page.
   */
  async handleBack(): Promise<void> {
    if (!this.currentRecipe) {
      const alert = await this.alertController.create({
        header: 'Unsaved changes',
        subHeader: 'Leaving will discard all unsaved changes.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'alertColor'
          },
          {
            text: 'Leave',
            handler: _ => {
              this.navController.back()
            },
            cssClass: 'alertColor'
          }
        ]
      })
      await alert.present()
    } else if (!this.compareTextValue()) {
      //show popup if user is certain to leave = losing changes...
      const alert = await this.alertController.create({
        header: 'Unsaved changes',
        subHeader: 'Leaving will discard all unsaved changes.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'alertColor'
          },
          {
            text: 'Leave',
            handler: _ => {
              this.currentRecipe = this.oldRecipe
              this.assignValuesToFields(this.currentRecipe)
              this.navController.back()
            },
            cssClass: 'alertColor'
          }
        ]
      })
      await alert.present()
    } else {
      this.navController.back()
    }
  }
}
