export interface ApiResult<T> {
    results: T[]
}

export interface ApiRecipe {
    vegetarian?: boolean,
    vegan?: boolean,
    glutenFree?: boolean,
    dairyFree?: boolean,
    veryHealthy?: boolean,
    cheap?: boolean,
    veryPopular?: boolean,
    sustainable?: boolean,
    weightWatcherSmartPoints?: number,
    gaps?: string,
    lowFodmap?: boolean,
    aggregateLikes?: number,
    spoonacularScore?: number,
    healthScore?: number,
    creditsText?: string,
    license?: string,
    sourceName?: string,
    pricePerServing?: number,
    extendedIngredients?,
    ingredients?,
    id?: number,
    title?: string,
    readyInMinutes?: number,
    servings?: number,
    sourceUrl?: string,
    image?: string,
    imageType?: string,
    summary?: string,
    cuisines?: string[],
    dishTypes?: string[],
    diets?: string[],
    occasions?: string[],
    instructions?: string[],
    analyzedInstructions?,
    preparationMinutes?: number,
    cookingMinutes?: number,
    originalId?: number | null,
    spoonacularSourceUrl?: string
    convertMinutes?: string
    usedIngredients?
    unusedIngredients?
    usedIngredientCount?
    missedIngredientCount?
    missedIngredients?
    likes?
}