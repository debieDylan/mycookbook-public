export interface IngredientI {
    name: string
    unit: string
    amount: number
}

export class Ingredient implements IngredientI {
    name: string
    unit: string
    amount: number

    constructor(ingredient: IngredientI) {
        Object.assign(this, ingredient)
    }
}