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
    id?: number, //belangrijk
    title?: string, //belangrijk
    readyInMinutes?: number, //belangrijk
    servings?: number, //belangrijk
    sourceUrl?: string, //belangrijk
    image?: string, //belangrijk
    imageType?: string, //belangrijk?
    summary?: string, //belangrijk
    cuisines?: string[], //handig
    dishTypes?: string[], //handig
    diets?: string[], //te bekijken...
    occasions?: string[],
    instructions?: string[], //belangrijk, kijken hoe logica om te zetten naar instructions...
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

export interface ApiRecipe2 {
    vegetarian: boolean,
        vegan: boolean,
        glutenFree: boolean,
        dairyFree: boolean,
        veryHealthy: boolean,
        cheap: boolean,
        veryPopular: boolean,
        sustainable: boolean,
        weightWatcherSmartPoints: number,
        gaps: string,
        lowFodmap: boolean,
        aggregateLikes: number,
        spoonacularScore: number,
        healthScore: number,
        creditsText: string,
        license: string,
        sourceName: string,
        pricePerServing: number,
        extendedIngredients: [],
        id: number,
        title: string,
        readyInMinutes: number,
        servings: number,
        sourceUrl: string,
        image: string,
        imageType: string,
        summary: string,
        cuisines: [],
        dishTypes: [],
        diets: [],
        occasions: [],
        analyzedInstructions: [],
        spoonacularSourceUrl: string,
        usedIngredientCount: number,
        missedIngredientCount: number,
        missedIngredients: [],
        likes: number,
        usedIngredients: [],
        unusedIngredients: []

        //extra properties
        ingredients?
        instructions?
        convertMinutes?
}