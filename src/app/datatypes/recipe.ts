import { FoodType, Ingredient } from "./ingredient"
import { Review } from "./review"

export interface RecipeI {
    id?: string //id of the recipe //is dit nodig in document database als veldje?
    userId: string //FK naar user // zal wss nodig zijn...
    name: string
    imageUrl?: string //ref naar Firebase Storage
    servings: number
    ingredients: Ingredient[] //bekijken....moet uiteindelijk maar een array zijn en geen subcollectie...
    description: string
    instructions: string[]
    author: string //display name van user ? nodig ? Ja voor duplicate data en vermijden extra reads...displayname van gebruiker is nodig...displayname = accountName en moet uniek zijn.
    date?: number
    prepTimeInMinutes: number //zeker maken in UI dat uur en minuut gescheiden zijn...
    cookTimeInMinutes: number
}

export class Recipe implements RecipeI {
    id?: string //hier wel id maken, Interface heeft deze niet, dus wanneer die gebruikt wordt, kan object met id meegegeven worden, maar id niet mee opgeslagen als property.
    userId: string // neemt id over van de user die het maakt.
    name: string
    imageUrl?: string //moet referentie zijn naar url in Firebase Storage...
    servings: number //enkel gehele getallen...
    ingredients: Ingredient[] = []
    description: string
    instructions: string[] = []
    author: string
    date?: number
    prepTimeInMinutes: number
    cookTimeInMinutes: number
    prepTimeConverted?: string
    cookTimeConverted?: string
    imageBase64?: string

    constructor(recipe: RecipeI) {
        Object.assign(this, recipe)
    }
}