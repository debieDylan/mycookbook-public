import { Ingredient } from "./ingredient"

export interface RecipeI {
    id?: string
    userId: string
    name: string
    imageUrl?: string
    servings: number
    ingredients: Ingredient[]
    description: string
    instructions: string[]
    author: string
    date?: number
    prepTimeInMinutes: number
    cookTimeInMinutes: number
}

export class Recipe implements RecipeI {
    id?: string
    userId: string
    name: string
    imageUrl?: string
    servings: number
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