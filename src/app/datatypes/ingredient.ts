export enum Allergenics {
    peanut = "peanut",
    nut = "nut",
    shellfish = "shellfish",
    fish = "fish",
    dairy = "dairy",
    egg = "egg",
    wheat = "wheat",
    soy = "soy"
}

export enum FoodType {
    fruit = "meat",
    vegetable = "vegetable",
    meat = "meat",
    fish = "fish",
    egg = "egg",
    carbohydrate = "carbohydrate",
    dairy = "dairy",
    fat = "fat",
    alcohol = "alcohol",
    water = "water"
}

export interface IngredientI {
    name: string
    unit: string
    amount: number
    type?: FoodType
    allergenic?: Allergenics
}

export class Ingredient implements IngredientI {
    name: string
    unit: string
    amount: number
    type?: FoodType
    allergenic?: Allergenics

    constructor(ingredient: IngredientI) {
        Object.assign(this, ingredient)
    }
}