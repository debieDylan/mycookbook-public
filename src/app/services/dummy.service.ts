import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiRecipe } from '../datatypes/apiResult';

@Injectable({
    providedIn: 'root'
})
export class DummyService {

    dummylist: ApiRecipe[]

    ob: Observable<ApiRecipe[]>

    constructor() {
        this.dummylist = [
            {
                "vegetarian": true,
                "vegan": true,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": true,
                "sustainable": false,
                "weightWatcherSmartPoints": 4,
                "gaps": "no",
                "lowFodmap": false,
                "aggregateLikes": 3689,
                "spoonacularScore": 100.0,
                "healthScore": 76.0,
                "creditsText": "Full Belly Sisters",
                "license": "CC BY-SA 3.0",
                "sourceName": "Full Belly Sisters",
                "pricePerServing": 112.39,
                "extendedIngredients": [
                    {
                        "id": 11090,
                        "aisle": "Produce",
                        "image": "broccoli.jpg",
                        "consistency": "solid",
                        "name": "broccoli",
                        "nameClean": "broccoli",
                        "original": "2 cups cooked broccoli, chopped small",
                        "originalName": "cooked broccoli, chopped small",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [
                            "cooked",
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 473.176,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11135,
                        "aisle": "Produce",
                        "image": "cauliflower.jpg",
                        "consistency": "solid",
                        "name": "cauliflower",
                        "nameClean": "cauliflower",
                        "original": "1 head of cauliflower, raw",
                        "originalName": "cauliflower, raw",
                        "amount": 1.0,
                        "unit": "head",
                        "meta": [
                            "raw"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "head",
                                "unitLong": "head"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "head",
                                "unitLong": "head"
                            }
                        }
                    },
                    {
                        "id": 4047,
                        "aisle": "Health Foods;Baking",
                        "image": "oil-coconut.jpg",
                        "consistency": "liquid",
                        "name": "coconut oil",
                        "nameClean": "coconut oil",
                        "original": "1 + 1 T coconut oil or butter",
                        "originalName": "1 T coconut oil or butter",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 20041,
                        "aisle": "Pasta and Rice",
                        "image": "rice-brown-cooked.png",
                        "consistency": "solid",
                        "name": "cooked brown rice",
                        "nameClean": "cooked brown rice",
                        "original": "3 cups of cooked brown rice, cold",
                        "originalName": "cooked brown rice, cold",
                        "amount": 3.0,
                        "unit": "cups",
                        "meta": [
                            "cold",
                            "cooked"
                        ],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 709.764,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.png",
                        "consistency": "solid",
                        "name": "garlic",
                        "nameClean": "garlic",
                        "original": "5 cloves of garlic, chopped",
                        "originalName": "garlic, chopped",
                        "amount": 5.0,
                        "unit": "cloves",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 5.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            },
                            "metric": {
                                "amount": 5.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            }
                        }
                    },
                    {
                        "id": 4517,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "vegetable-oil.jpg",
                        "consistency": "liquid",
                        "name": "grapeseed oil",
                        "nameClean": "grape seed oil",
                        "original": "1 + 1 T grapeseed oil",
                        "originalName": "1 T grapeseed oil",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 16424,
                        "aisle": "Ethnic Foods;Condiments",
                        "image": "soy-sauce.jpg",
                        "consistency": "liquid",
                        "name": "low sodium soy sauce",
                        "nameClean": "lower sodium soy sauce",
                        "original": "3T reduced-sodium soy sauce",
                        "originalName": "reduced-sodium soy sauce",
                        "amount": 3.0,
                        "unit": "T",
                        "meta": [
                            "reduced-sodium"
                        ],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 3.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 11304,
                        "aisle": "Produce",
                        "image": "peas.jpg",
                        "consistency": "solid",
                        "name": "peas",
                        "nameClean": "petite peas",
                        "original": "1 cup frozen peas",
                        "originalName": "frozen peas",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [
                            "frozen"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 236.588,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 2047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "solid",
                        "name": "salt",
                        "nameClean": "table salt",
                        "original": "salt, to taste",
                        "originalName": "salt, to taste",
                        "amount": 8.0,
                        "unit": "servings",
                        "meta": [
                            "to taste"
                        ],
                        "measures": {
                            "us": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 11291,
                        "aisle": "Produce",
                        "image": "spring-onions.jpg",
                        "consistency": "solid",
                        "name": "scallion",
                        "nameClean": "spring onions",
                        "original": "additional chopped scallion tops for garnish",
                        "originalName": "additional chopped scallion tops for garnish",
                        "amount": 8.0,
                        "unit": "servings",
                        "meta": [
                            "chopped",
                            "for garnish"
                        ],
                        "measures": {
                            "us": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 11291,
                        "aisle": "Produce",
                        "image": "spring-onions.jpg",
                        "consistency": "solid",
                        "name": "scallions",
                        "nameClean": "spring onions",
                        "original": "7 scallions, chopped (keep white/light green ends separate from dark green tops)",
                        "originalName": "scallions, chopped (keep white/light green ends separate from dark green tops)",
                        "amount": 7.0,
                        "unit": "",
                        "meta": [
                            "dark",
                            "green",
                            "chopped",
                            "(keep white/light ends separate from tops)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 7.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 7.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 4058,
                        "aisle": "Ethnic Foods",
                        "image": "sesame-oil.png",
                        "consistency": "liquid",
                        "name": "sesame oil",
                        "nameClean": "sesame oil",
                        "original": "2t toasted sesame oil",
                        "originalName": "toasted sesame oil",
                        "amount": 2.0,
                        "unit": "t",
                        "meta": [
                            "toasted"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 12023,
                        "aisle": "Ethnic Foods;Spices and Seasonings",
                        "image": "sesame-seeds.png",
                        "consistency": "solid",
                        "name": "sesame seeds",
                        "nameClean": "sesame seeds",
                        "original": "toasted sesame seeds, optional",
                        "originalName": "toasted sesame seeds, optional",
                        "amount": 8.0,
                        "unit": "servings",
                        "meta": [
                            "toasted"
                        ],
                        "measures": {
                            "us": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    }
                ],
                "id": 716426,
                "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
                "readyInMinutes": 30,
                "servings": 8,
                "sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
                "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
                "imageType": "jpg",
                "summary": "Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199\">Vegetable Fried Brown Rice</a>, <a href=\"https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261\">Vegetable Fried Cauliflower Rice</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042\">Easy Vegetable Fried Brown Rice with Egg</a>.",
                "cuisines": [
                    "Chinese",
                    "Asian"
                ],
                "dishTypes": [
                    "side dish"
                ],
                "diets": [
                    "gluten free",
                    "dairy free",
                    "lacto ovo vegetarian",
                    "vegan"
                ],
                "occasions": [],
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
                                "ingredients": [
                                    {
                                        "id": 10011135,
                                        "name": "cauliflower florets",
                                        "localizedName": "cauliflower florets",
                                        "image": "cauliflower.jpg"
                                    },
                                    {
                                        "id": 10111135,
                                        "name": "cauliflower rice",
                                        "localizedName": "cauliflower rice",
                                        "image": "cauliflower.jpg"
                                    },
                                    {
                                        "id": 11135,
                                        "name": "cauliflower",
                                        "localizedName": "cauliflower",
                                        "image": "cauliflower.jpg"
                                    },
                                    {
                                        "id": 20028,
                                        "name": "couscous",
                                        "localizedName": "couscous",
                                        "image": "couscous-cooked.jpg"
                                    },
                                    {
                                        "id": 20444,
                                        "name": "rice",
                                        "localizedName": "rice",
                                        "image": "uncooked-white-rice.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404771,
                                        "name": "food processor",
                                        "localizedName": "food processor",
                                        "image": "food-processor.png"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
                                "ingredients": [
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "butter-sliced.jpg"
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "pan.png"
                                    }
                                ]
                            },
                            {
                                "number": 3,
                                "step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
                                "ingredients": [
                                    {
                                        "id": 11291,
                                        "name": "green onions",
                                        "localizedName": "green onions",
                                        "image": "spring-onions.jpg"
                                    },
                                    {
                                        "id": 11215,
                                        "name": "garlic",
                                        "localizedName": "garlic",
                                        "image": "garlic.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 4,
                                "step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
                                "ingredients": [
                                    {
                                        "id": 11135,
                                        "name": "cauliflower",
                                        "localizedName": "cauliflower",
                                        "image": "cauliflower.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "spread",
                                        "localizedName": "spread",
                                        "image": ""
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "pan.png"
                                    }
                                ]
                            },
                            {
                                "number": 5,
                                "step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
                                "ingredients": [
                                    {
                                        "id": 4047,
                                        "name": "coconut oil",
                                        "localizedName": "coconut oil",
                                        "image": "oil-coconut.jpg"
                                    },
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "butter-sliced.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "spread",
                                        "localizedName": "spread",
                                        "image": ""
                                    },
                                    {
                                        "id": 20444,
                                        "name": "rice",
                                        "localizedName": "rice",
                                        "image": "uncooked-white-rice.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "pan.png"
                                    }
                                ]
                            },
                            {
                                "number": 6,
                                "step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
                                "ingredients": [
                                    {
                                        "id": 20444,
                                        "name": "rice",
                                        "localizedName": "rice",
                                        "image": "uncooked-white-rice.png"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 2,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 7,
                                "step": "Add the peas and broccoli and stir again.",
                                "ingredients": [
                                    {
                                        "id": 11090,
                                        "name": "broccoli",
                                        "localizedName": "broccoli",
                                        "image": "broccoli.jpg"
                                    },
                                    {
                                        "id": 11304,
                                        "name": "peas",
                                        "localizedName": "peas",
                                        "image": "peas.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 8,
                                "step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
                                "ingredients": [
                                    {
                                        "id": 4058,
                                        "name": "sesame oil",
                                        "localizedName": "sesame oil",
                                        "image": "sesame-oil.png"
                                    },
                                    {
                                        "id": 16124,
                                        "name": "soy sauce",
                                        "localizedName": "soy sauce",
                                        "image": "soy-sauce.jpg"
                                    },
                                    {
                                        "id": 20444,
                                        "name": "rice",
                                        "localizedName": "rice",
                                        "image": "uncooked-white-rice.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 9,
                                "step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
                                "ingredients": [
                                    {
                                        "id": 12023,
                                        "name": "sesame seeds",
                                        "localizedName": "sesame seeds",
                                        "image": "sesame-seeds.png"
                                    },
                                    {
                                        "id": 16124,
                                        "name": "soy sauce",
                                        "localizedName": "soy sauce",
                                        "image": "soy-sauce.jpg"
                                    },
                                    {
                                        "id": 11291,
                                        "name": "green onions",
                                        "localizedName": "green onions",
                                        "image": "spring-onions.jpg"
                                    },
                                    {
                                        "id": 5006,
                                        "name": "whole chicken",
                                        "localizedName": "whole chicken",
                                        "image": "whole-chicken.jpg"
                                    },
                                    {
                                        "id": 18070,
                                        "name": "toast",
                                        "localizedName": "toast",
                                        "image": "toast"
                                    },
                                    {
                                        "id": 20444,
                                        "name": "rice",
                                        "localizedName": "rice",
                                        "image": "uncooked-white-rice.png"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "salt.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "pan.png"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426",
                "usedIngredientCount": 0,
                "missedIngredientCount": 8,
                "missedIngredients": [
                    {
                        "id": 11090,
                        "amount": 2.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Produce",
                        "name": "broccoli",
                        "original": "2 cups cooked broccoli, chopped small",
                        "originalName": "cooked broccoli, chopped small",
                        "meta": [
                            "cooked",
                            "chopped"
                        ],
                        "extendedName": "cooked broccoli",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/broccoli.jpg"
                    },
                    {
                        "id": 11135,
                        "amount": 1.0,
                        "unit": "head",
                        "unitLong": "head",
                        "unitShort": "head",
                        "aisle": "Produce",
                        "name": "cauliflower",
                        "original": "1 head of cauliflower, raw",
                        "originalName": "cauliflower, raw",
                        "meta": [
                            "raw"
                        ],
                        "extendedName": "raw cauliflower",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/cauliflower.jpg"
                    },
                    {
                        "id": 20041,
                        "amount": 3.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Pasta and Rice",
                        "name": "cooked brown rice",
                        "original": "3 cups of cooked brown rice, cold",
                        "originalName": "cooked brown rice, cold",
                        "meta": [
                            "cold",
                            "cooked"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/rice-brown-cooked.png"
                    },
                    {
                        "id": 11215,
                        "amount": 5.0,
                        "unit": "cloves",
                        "unitLong": "cloves",
                        "unitShort": "cloves",
                        "aisle": "Produce",
                        "name": "garlic",
                        "original": "5 cloves of garlic, chopped",
                        "originalName": "garlic, chopped",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                    },
                    {
                        "id": 16424,
                        "amount": 3.0,
                        "unit": "T",
                        "unitLong": "tablespoons",
                        "unitShort": "Tbsp",
                        "aisle": "Ethnic Foods;Condiments",
                        "name": "low sodium soy sauce",
                        "original": "3T reduced-sodium soy sauce",
                        "originalName": "reduced-sodium soy sauce",
                        "meta": [
                            "reduced-sodium"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/soy-sauce.jpg"
                    },
                    {
                        "id": 11304,
                        "amount": 1.0,
                        "unit": "cup",
                        "unitLong": "cup",
                        "unitShort": "cup",
                        "aisle": "Produce",
                        "name": "peas",
                        "original": "1 cup frozen peas",
                        "originalName": "frozen peas",
                        "meta": [
                            "frozen"
                        ],
                        "extendedName": "frozen peas",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/peas.jpg"
                    },
                    {
                        "id": 11291,
                        "amount": 8.0,
                        "unit": "servings",
                        "unitLong": "servings",
                        "unitShort": "servings",
                        "aisle": "Produce",
                        "name": "scallion",
                        "original": "additional chopped scallion tops for garnish",
                        "originalName": "additional chopped scallion tops for garnish",
                        "meta": [
                            "chopped",
                            "for garnish"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
                    },
                    {
                        "id": 12023,
                        "amount": 8.0,
                        "unit": "servings",
                        "unitLong": "servings",
                        "unitShort": "servings",
                        "aisle": "Ethnic Foods;Spices and Seasonings",
                        "name": "sesame seeds",
                        "original": "toasted sesame seeds, optional",
                        "originalName": "toasted sesame seeds, optional",
                        "meta": [
                            "toasted"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/sesame-seeds.png"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            },
            {
                "vegetarian": true,
                "vegan": true,
                "glutenFree": false,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": true,
                "sustainable": false,
                "weightWatcherSmartPoints": 19,
                "gaps": "no",
                "lowFodmap": false,
                "aggregateLikes": 1669,
                "spoonacularScore": 99.0,
                "healthScore": 78.0,
                "creditsText": "Jen West",
                "sourceName": "Pink When",
                "pricePerServing": 83.23,
                "extendedIngredients": [
                    {
                        "id": 2044,
                        "aisle": "Produce",
                        "image": "fresh-basil.jpg",
                        "consistency": "solid",
                        "name": "basil",
                        "nameClean": "fresh basil",
                        "original": "1/4 cup basil",
                        "originalName": "basil",
                        "amount": 0.25,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 59.147,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 20081,
                        "aisle": "Baking",
                        "image": "flour.png",
                        "consistency": "solid",
                        "name": "flour",
                        "nameClean": "wheat flour",
                        "original": "1 cup flour",
                        "originalName": "flour",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 236.588,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 1022020,
                        "aisle": "Spices and Seasonings",
                        "image": "garlic-powder.png",
                        "consistency": "solid",
                        "name": "garlic powder",
                        "nameClean": "garlic powder",
                        "original": "1/4 garlic powder",
                        "originalName": "garlic powder",
                        "amount": 0.25,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 0.25,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 1062047,
                        "aisle": "Spices and Seasonings",
                        "image": "garlic-salt.jpg",
                        "consistency": "solid",
                        "name": "garlic salt",
                        "nameClean": "garlic salt",
                        "original": "garlic salt with parsley (to sprinkle)",
                        "originalName": "garlic salt with parsley (to sprinkle)",
                        "amount": 2.0,
                        "unit": "servings",
                        "meta": [
                            "with parsley (to sprinkle)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 11352,
                        "aisle": "Produce",
                        "image": "potatoes-yukon-gold.png",
                        "consistency": "solid",
                        "name": "potatoes",
                        "nameClean": "potato",
                        "original": "4 sliced, fresh potatoes",
                        "originalName": "sliced, fresh potatoes",
                        "amount": 4.0,
                        "unit": "",
                        "meta": [
                            "fresh",
                            "sliced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 4513,
                        "aisle": null,
                        "image": null,
                        "consistency": null,
                        "name": "vegetable oil",
                        "nameClean": null,
                        "original": "vegetable oil",
                        "originalName": "vegetable oil",
                        "amount": 2.0,
                        "unit": "servings",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    }
                ],
                "id": 715594,
                "title": "Homemade Garlic and Basil French Fries",
                "readyInMinutes": 45,
                "servings": 2,
                "sourceUrl": "http://www.pinkwhen.com/homemade-french-fries/",
                "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
                "imageType": "jpg",
                "summary": "The recipe Homemade Garlic and Basil French Fries is ready <b>in roughly 45 minutes</b> and is definitely a super <b>vegan</b> option for lovers of American food. One serving contains <b>596 calories</b>, <b>18g of protein</b>, and <b>15g of fat</b>. For <b>83 cents per serving</b>, you get a side dish that serves 2. Several people made this recipe, and 1669 would say it hit the spot. If you have garlic salt, flour, garlic powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/homemade-french-fries-with-fresh-garlic-and-dill-494220\">Homemade French Fries with Fresh Garlic and Dill</a>, <a href=\"https://spoonacular.com/recipes/roasted-garlic-french-fries-519898\">Roasted Garlic French Fries</a>, and <a href=\"https://spoonacular.com/recipes/sweet-potato-fries-with-basil-salt-and-garlic-mayonnaise-120735\">Sweet Potato Fries With Basil Salt and Garlic Mayonnaise</a> for similar recipes.",
                "cuisines": [
                    "American"
                ],
                "dishTypes": [
                    "lunch",
                    "main course",
                    "main dish",
                    "dinner"
                ],
                "diets": [
                    "dairy free",
                    "lacto ovo vegetarian",
                    "vegan"
                ],
                "occasions": [],
                "analyzedInstructions": [],
                "spoonacularSourceUrl": "https://spoonacular.com/homemade-garlic-and-basil-french-fries-715594",
                "usedIngredientCount": 0,
                "missedIngredientCount": 3,
                "missedIngredients": [
                    {
                        "id": 2044,
                        "amount": 0.25,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Produce",
                        "name": "basil",
                        "original": "1/4 cup basil",
                        "originalName": "basil",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-basil.jpg"
                    },
                    {
                        "id": 1022020,
                        "amount": 0.25,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Spices and Seasonings",
                        "name": "garlic powder",
                        "original": "1/4 garlic powder",
                        "originalName": "garlic powder",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic-powder.png"
                    },
                    {
                        "id": 11352,
                        "amount": 4.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "potatoes",
                        "original": "4 sliced, fresh potatoes",
                        "originalName": "sliced, fresh potatoes",
                        "meta": [
                            "fresh",
                            "sliced"
                        ],
                        "extendedName": "fresh potatoes",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            },
            {
                "vegetarian": true,
                "vegan": false,
                "glutenFree": false,
                "dairyFree": false,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": true,
                "sustainable": false,
                "weightWatcherSmartPoints": 15,
                "gaps": "no",
                "lowFodmap": false,
                "preparationMinutes": 5,
                "cookingMinutes": 0,
                "aggregateLikes": 689,
                "spoonacularScore": 99.0,
                "healthScore": 63.0,
                "creditsText": "Jen West",
                "sourceName": "Pink When",
                "pricePerServing": 204.29,
                "extendedIngredients": [
                    {
                        "id": 9040,
                        "aisle": "Produce",
                        "image": "bananas.jpg",
                        "consistency": "solid",
                        "name": "banana",
                        "nameClean": "ripe banana",
                        "original": "¼ cup mashed banana",
                        "originalName": "mashed banana",
                        "amount": 0.25,
                        "unit": "cup",
                        "meta": [
                            "mashed"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 59.147,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 10018617,
                        "aisle": "Sweet Snacks;Baking",
                        "image": "graham-crackers.jpg",
                        "consistency": "solid",
                        "name": "graham cracker crumbs",
                        "nameClean": "graham cracker crumbs",
                        "original": "2 tbsp graham cracker crumbs",
                        "originalName": "graham cracker crumbs",
                        "amount": 2.0,
                        "unit": "tbsp",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 16223,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "soy-milk.jpg",
                        "consistency": "liquid",
                        "name": "soy milk",
                        "nameClean": "soymilk",
                        "original": "1 cup soy milk",
                        "originalName": "soy milk",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 236.588,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 9316,
                        "aisle": "Produce",
                        "image": "strawberries.png",
                        "consistency": "solid",
                        "name": "strawberries",
                        "nameClean": "strawberries",
                        "original": "½ cup strawberries",
                        "originalName": "strawberries",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 118.294,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 1119,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "vanilla-yogurt.png",
                        "consistency": "liquid",
                        "name": "vanilla yogurt",
                        "nameClean": "vanilla yogurt",
                        "original": "1 container vanilla yogurt",
                        "originalName": "vanilla yogurt",
                        "amount": 1.0,
                        "unit": "container",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "container",
                                "unitLong": "container"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "container",
                                "unitLong": "container"
                            }
                        }
                    }
                ],
                "id": 715497,
                "title": "Berry Banana Breakfast Smoothie",
                "readyInMinutes": 5,
                "servings": 1,
                "sourceUrl": "http://www.pinkwhen.com/berry-banana-breakfast-smoothie/",
                "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
                "imageType": "jpg",
                "summary": "If you have around <b>5 minutes</b> to spend in the kitchen, Berry Banana Breakfast Smoothie might be a tremendous <b>lacto ovo vegetarian</b> recipe to try. This recipe makes 1 servings with <b>501 calories</b>, <b>21g of protein</b>, and <b>11g of fat</b> each. For <b>$2.19 per serving</b>, this recipe <b>covers 32%</b> of your daily requirements of vitamins and minerals. 688 people found this recipe to be tasty and satisfying. It is brought to you by Pink When. Head to the store and pick up graham crackers, soy milk, banana, and a few other things to make it today. It works well as a morn meal. Overall, this recipe earns a <b>super spoonacular score of 100%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-249239\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-and-banana-oat-breakfast-smoothie-626817\">Berry and Bananan Oat Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-breakfast-smoothie-774875\">Berry Breakfast Smoothie</a>.",
                "cuisines": [],
                "dishTypes": [
                    "morning meal",
                    "brunch",
                    "breakfast"
                ],
                "diets": [
                    "lacto ovo vegetarian"
                ],
                "occasions": [],
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Take some yogurt in your favorite flavor and add 1 container to your blender.",
                                "ingredients": [
                                    {
                                        "id": 1116,
                                        "name": "yogurt",
                                        "localizedName": "yogurt",
                                        "image": "plain-yogurt.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404726,
                                        "name": "blender",
                                        "localizedName": "blender",
                                        "image": "blender.png"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.",
                                "ingredients": [
                                    {
                                        "id": 10018617,
                                        "name": "graham cracker crumbs",
                                        "localizedName": "graham cracker crumbs",
                                        "image": "graham-crackers.jpg"
                                    },
                                    {
                                        "id": 16223,
                                        "name": "soymilk",
                                        "localizedName": "soymilk",
                                        "image": "soy-milk.jpg"
                                    },
                                    {
                                        "id": 1009054,
                                        "name": "berries",
                                        "localizedName": "berries",
                                        "image": "berries-mixed.jpg"
                                    },
                                    {
                                        "id": 9040,
                                        "name": "banana",
                                        "localizedName": "banana",
                                        "image": "bananas.jpg"
                                    }
                                ],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "spoonacularSourceUrl": "https://spoonacular.com/berry-banana-breakfast-smoothie-715497",
                "usedIngredientCount": 0,
                "missedIngredientCount": 5,
                "missedIngredients": [
                    {
                        "id": 9040,
                        "amount": 0.25,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Produce",
                        "name": "banana",
                        "original": "¼ cup mashed banana",
                        "originalName": "mashed banana",
                        "meta": [
                            "mashed"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                    },
                    {
                        "id": 10018617,
                        "amount": 2.0,
                        "unit": "tbsp",
                        "unitLong": "tablespoons",
                        "unitShort": "Tbsp",
                        "aisle": "Sweet Snacks;Baking",
                        "name": "graham cracker crumbs",
                        "original": "2 tbsp graham cracker crumbs",
                        "originalName": "graham cracker crumbs",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/graham-crackers.jpg"
                    },
                    {
                        "id": 16223,
                        "amount": 1.0,
                        "unit": "cup",
                        "unitLong": "cup",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "soy milk",
                        "original": "1 cup soy milk",
                        "originalName": "soy milk",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/soy-milk.jpg"
                    },
                    {
                        "id": 9316,
                        "amount": 0.5,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Produce",
                        "name": "strawberries",
                        "original": "½ cup strawberries",
                        "originalName": "strawberries",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/strawberries.png"
                    },
                    {
                        "id": 1119,
                        "amount": 1.0,
                        "unit": "container",
                        "unitLong": "container",
                        "unitShort": "container",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "vanilla yogurt",
                        "original": "1 container vanilla yogurt",
                        "originalName": "vanilla yogurt",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-yogurt.png"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            },
            {
                "vegetarian": true,
                "vegan": true,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "weightWatcherSmartPoints": 5,
                "gaps": "no",
                "lowFodmap": false,
                "aggregateLikes": 19,
                "spoonacularScore": 99.0,
                "healthScore": 93.0,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 69.09,
                "extendedIngredients": [
                    {
                        "id": 2069,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "balsamic-vinegar.jpg",
                        "consistency": "liquid",
                        "name": "balsamic vinegar",
                        "nameClean": "balsamic vinegar",
                        "original": "3 tablespoons balsamic vinegar",
                        "originalName": "balsamic vinegar",
                        "amount": 3.0,
                        "unit": "tablespoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 3.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.png",
                        "consistency": "solid",
                        "name": "garlic",
                        "nameClean": "garlic",
                        "original": "1 clove garlic, minced",
                        "originalName": "garlic, minced",
                        "amount": 1.0,
                        "unit": "clove",
                        "meta": [
                            "minced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "clove",
                                "unitLong": "clove"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "clove",
                                "unitLong": "clove"
                            }
                        }
                    },
                    {
                        "id": 11233,
                        "aisle": "Produce",
                        "image": "kale.jpg",
                        "consistency": "solid",
                        "name": "kale",
                        "nameClean": "kale",
                        "original": "1 bunch curly kale, stems removed and chopped",
                        "originalName": "curly kale, stems removed and chopped",
                        "amount": 1.0,
                        "unit": "bunch",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "bunch",
                                "unitLong": "bunch"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "bunch",
                                "unitLong": "bunch"
                            }
                        }
                    },
                    {
                        "id": 4053,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "olive-oil.jpg",
                        "consistency": "liquid",
                        "name": "olive oil",
                        "nameClean": "olive oil",
                        "original": "Olive oil",
                        "originalName": "Olive oil",
                        "amount": 2.0,
                        "unit": "servings",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    }
                ],
                "id": 644387,
                "title": "Garlicky Kale",
                "readyInMinutes": 45,
                "servings": 2,
                "sourceUrl": "http://www.foodista.com/recipe/J2FTJBF7/garlicky-kale",
                "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
                "imageType": "jpg",
                "summary": "Garlicky Kale might be just the side dish you are searching for. This caveman, gluten free, primal, and whole 30 recipe serves 2 and costs <b>69 cents per serving</b>. One serving contains <b>179 calories</b>, <b>3g of protein</b>, and <b>15g of fat</b>. A few people made this recipe, and 17 would say it hit the spot. If you have olive oil, garlic, curly kale, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is awesome. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-14910\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-crostini-15010\">Garlicky Kale Crostini</a> for similar recipes.",
                "cuisines": [],
                "dishTypes": [
                    "side dish"
                ],
                "diets": [
                    "gluten free",
                    "dairy free",
                    "paleolithic",
                    "lacto ovo vegetarian",
                    "primal",
                    "vegan"
                ],
                "occasions": [],
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Heat the olive oil in a large pot over medium heat.",
                                "ingredients": [
                                    {
                                        "id": 4053,
                                        "name": "olive oil",
                                        "localizedName": "olive oil",
                                        "image": "olive-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404752,
                                        "name": "pot",
                                        "localizedName": "pot",
                                        "image": "stock-pot.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
                                "ingredients": [
                                    {
                                        "id": 11233,
                                        "name": "kale",
                                        "localizedName": "kale",
                                        "image": "kale.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 3,
                                "step": "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
                                "ingredients": [
                                    {
                                        "id": 2053,
                                        "name": "vinegar",
                                        "localizedName": "vinegar",
                                        "image": "vinegar-(white).jpg"
                                    },
                                    {
                                        "id": 11215,
                                        "name": "garlic",
                                        "localizedName": "garlic",
                                        "image": "garlic.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 4,
                                "step": "Serve hot.",
                                "ingredients": [],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "spoonacularSourceUrl": "https://spoonacular.com/garlicky-kale-644387",
                "usedIngredientCount": 0,
                "missedIngredientCount": 3,
                "missedIngredients": [
                    {
                        "id": 2069,
                        "amount": 3.0,
                        "unit": "tablespoons",
                        "unitLong": "tablespoons",
                        "unitShort": "Tbsp",
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "name": "balsamic vinegar",
                        "original": "3 tablespoons balsamic vinegar",
                        "originalName": "balsamic vinegar",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/balsamic-vinegar.jpg"
                    },
                    {
                        "id": 11215,
                        "amount": 1.0,
                        "unit": "clove",
                        "unitLong": "clove",
                        "unitShort": "clove",
                        "aisle": "Produce",
                        "name": "garlic",
                        "original": "1 clove garlic, minced",
                        "originalName": "garlic, minced",
                        "meta": [
                            "minced"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                    },
                    {
                        "id": 11233,
                        "amount": 1.0,
                        "unit": "bunch",
                        "unitLong": "bunch",
                        "unitShort": "bunch",
                        "aisle": "Produce",
                        "name": "kale",
                        "original": "1 bunch curly kale, stems removed and chopped",
                        "originalName": "curly kale, stems removed and chopped",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/kale.jpg"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            },
            {
                "vegetarian": false,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "weightWatcherSmartPoints": 32,
                "gaps": "no",
                "lowFodmap": false,
                "aggregateLikes": 124,
                "spoonacularScore": 99.0,
                "healthScore": 100.0,
                "pricePerServing": 355.78,
                "extendedIngredients": [
                    {
                        "id": 10211821,
                        "aisle": "Produce",
                        "image": "bell-pepper-orange.png",
                        "consistency": "solid",
                        "name": "bell peppers",
                        "nameClean": "bell pepper",
                        "original": "Bell Peppers for garnishing",
                        "originalName": "Bell Peppers for garnishing",
                        "amount": 1.0,
                        "unit": "serving",
                        "meta": [
                            "for garnishing"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            }
                        }
                    },
                    {
                        "id": 5006,
                        "aisle": "Meat",
                        "image": "whole-chicken.jpg",
                        "consistency": "solid",
                        "name": "chicken",
                        "nameClean": "whole chicken",
                        "original": "1.5 cups of Chopped Chicken",
                        "originalName": "Chopped Chicken",
                        "amount": 1.5,
                        "unit": "cups",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 354.882,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 4582,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "vegetable-oil.jpg",
                        "consistency": "liquid",
                        "name": "cooking oil",
                        "nameClean": "cooking oil",
                        "original": "2.5 Cooking spoons of oil",
                        "originalName": "Cooking spoons of oil",
                        "amount": 2.5,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.5,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 2.5,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 93605,
                        "aisle": "Ethnic Foods",
                        "image": "chili-paste.png",
                        "consistency": "solid",
                        "name": "curry paste",
                        "nameClean": "red curry paste",
                        "original": "1 teaspoon of Curry",
                        "originalName": "Curry",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.png",
                        "consistency": "solid",
                        "name": "garlic cloves",
                        "nameClean": "garlic",
                        "original": "2 garlic cloves",
                        "originalName": "garlic cloves",
                        "amount": 2.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11216,
                        "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
                        "image": "ginger.png",
                        "consistency": "solid",
                        "name": "ginger",
                        "nameClean": "ginger",
                        "original": "Small piece of Chopped ginger",
                        "originalName": "Small of Chopped ginger",
                        "amount": 1.0,
                        "unit": "piece",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 16091,
                        "aisle": "Nuts;Savory Snacks",
                        "image": "peanuts.png",
                        "consistency": "solid",
                        "name": "groundnut",
                        "nameClean": "peanuts",
                        "original": "1 cup of groundnut (Blended) or 1 Cooking spoon of peanut Butter",
                        "originalName": "groundnut (Blended) or 1 Cooking spoon of peanut Butter",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [
                            "(Blended)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 236.588,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11282,
                        "aisle": "Produce",
                        "image": "brown-onion.png",
                        "consistency": "solid",
                        "name": "onions",
                        "nameClean": "onion",
                        "original": "2 handfuls of Chopped onions",
                        "originalName": "Chopped onions",
                        "amount": 2.0,
                        "unit": "handfuls",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "handfuls",
                                "unitLong": "handfuls"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "handfuls",
                                "unitLong": "handfuls"
                            }
                        }
                    },
                    {
                        "id": 10211821,
                        "aisle": "Produce",
                        "image": "bell-pepper-orange.png",
                        "consistency": "solid",
                        "name": "bell pepper",
                        "nameClean": "bell pepper",
                        "original": "Pepper",
                        "originalName": "Pepper",
                        "amount": 1.0,
                        "unit": "serving",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            }
                        }
                    },
                    {
                        "id": 2047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "solid",
                        "name": "salt",
                        "nameClean": "table salt",
                        "original": "Salt",
                        "originalName": "Salt",
                        "amount": 1.0,
                        "unit": "serving",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            }
                        }
                    },
                    {
                        "id": 1042027,
                        "aisle": null,
                        "image": "seasoning.png",
                        "consistency": "solid",
                        "name": "seasoning",
                        "nameClean": "seasoning",
                        "original": "Seasoning",
                        "originalName": "Seasoning",
                        "amount": 1.0,
                        "unit": "serving",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            }
                        }
                    },
                    {
                        "id": 11507,
                        "aisle": "Produce",
                        "image": "sweet-potato.png",
                        "consistency": "solid",
                        "name": "sweet potato",
                        "nameClean": "sweet potato",
                        "original": "1/2 small sweet potato (Chopped)",
                        "originalName": "sweet potato (Chopped)",
                        "amount": 0.5,
                        "unit": "small",
                        "meta": [
                            "chopped",
                            "()"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "small",
                                "unitLong": "smalls"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "small",
                                "unitLong": "smalls"
                            }
                        }
                    },
                    {
                        "id": 2049,
                        "aisle": "Produce;Spices and Seasonings",
                        "image": "thyme.jpg",
                        "consistency": "solid",
                        "name": "thyme",
                        "nameClean": "thyme",
                        "original": "Pinch of thyme",
                        "originalName": "Pinch of thyme",
                        "amount": 1.0,
                        "unit": "pinch",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "pinch",
                                "unitLong": "pinch"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "pinch",
                                "unitLong": "pinch"
                            }
                        }
                    },
                    {
                        "id": 11529,
                        "aisle": "Produce",
                        "image": "tomato.png",
                        "consistency": "solid",
                        "name": "tomato",
                        "nameClean": "tomato",
                        "original": "1 Chopped small tomato",
                        "originalName": "Chopped small tomato",
                        "amount": 1.0,
                        "unit": "small",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "small",
                                "unitLong": "small"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "small",
                                "unitLong": "small"
                            }
                        }
                    },
                    {
                        "id": 11529,
                        "aisle": "Produce",
                        "image": "tomato.png",
                        "consistency": "solid",
                        "name": "tomato",
                        "nameClean": "tomato",
                        "original": "1.5 Cooking spoons of Blended tomato",
                        "originalName": "Cooking spoons of Blended tomato",
                        "amount": 1.5,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.5,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    }
                ],
                "id": 716268,
                "title": "African Chicken Peanut Stew",
                "readyInMinutes": 45,
                "servings": 1,
                "sourceUrl": "http://www.afrolems.com/2014/03/18/african-chicken-peanut-stew-recipe/",
                "image": "https://spoonacular.com/recipeImages/716268-312x231.jpg",
                "imageType": "jpg",
                "summary": "Need a <b>gluten free and dairy free main course</b>? African Chicken Peanut Stew could be a tremendous recipe to try. This recipe makes 1 servings with <b>1377 calories</b>, <b>75g of protein</b>, and <b>102g of fat</b> each. For <b>$3.87 per serving</b>, this recipe <b>covers 62%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 124 people have tried and liked this recipe. Head to the store and pick up bell peppers, tomato, pepper, and a few other things to make it today. To use up the tomato you could follow this main course with the <a href=\"https://spoonacular.com/recipes/pink-peony-popcorn-balls-129348\">Pink Peony Popcorn Balls</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/african-chicken-peanut-stew-245461\">African Chicken Peanut Stew</a>, <a href=\"https://spoonacular.com/recipes/west-african-peanut-chicken-stew-163315\">West African Peanut-Chicken Stew</a>, and <a href=\"https://spoonacular.com/recipes/one-pot-african-peanut-stew-854978\">One-Pot African Peanut Stew</a> for similar recipes.",
                "cuisines": [
                    "African"
                ],
                "dishTypes": [
                    "lunch",
                    "main course",
                    "main dish",
                    "dinner"
                ],
                "diets": [
                    "gluten free",
                    "dairy free"
                ],
                "occasions": [
                    "fall",
                    "winter"
                ],
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Season and Boil the Chicken for 10 minutes with salt, pepper, seasoning, a handful of onions.Once the chicken is ready, in the same stock, Boil the chopped sweet potatoes till its almost cooked. Save the stock in a separate Bowl and the chicken and potatoes in a separate Bowl as well.In a pot, heat up one cooking spoon of oil and fry the chicken till it Browns. Take it out and heat up the other 1.5 cooking spoons of oil and fry the onions, tomatoes Both chopped and Blended, ginger and garlic.",
                                "ingredients": [
                                    {
                                        "id": 11507,
                                        "name": "sweet potato",
                                        "localizedName": "sweet potato",
                                        "image": "sweet-potato.png"
                                    },
                                    {
                                        "id": 1042027,
                                        "name": "seasoning",
                                        "localizedName": "seasoning",
                                        "image": "seasoning.png"
                                    },
                                    {
                                        "id": 11352,
                                        "name": "potato",
                                        "localizedName": "potato",
                                        "image": "potatoes-yukon-gold.png"
                                    },
                                    {
                                        "id": 11529,
                                        "name": "tomato",
                                        "localizedName": "tomato",
                                        "image": "tomato.png"
                                    },
                                    {
                                        "id": 5006,
                                        "name": "whole chicken",
                                        "localizedName": "whole chicken",
                                        "image": "whole-chicken.jpg"
                                    },
                                    {
                                        "id": 11215,
                                        "name": "garlic",
                                        "localizedName": "garlic",
                                        "image": "garlic.png"
                                    },
                                    {
                                        "id": 11216,
                                        "name": "ginger",
                                        "localizedName": "ginger",
                                        "image": "ginger.png"
                                    },
                                    {
                                        "id": 11282,
                                        "name": "onion",
                                        "localizedName": "onion",
                                        "image": "brown-onion.png"
                                    },
                                    {
                                        "id": 1002030,
                                        "name": "pepper",
                                        "localizedName": "pepper",
                                        "image": "pepper.jpg"
                                    },
                                    {
                                        "id": 1006615,
                                        "name": "stock",
                                        "localizedName": "stock",
                                        "image": "chicken-broth.png"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "salt.jpg"
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "bowl.jpg"
                                    },
                                    {
                                        "id": 404752,
                                        "name": "pot",
                                        "localizedName": "pot",
                                        "image": "stock-pot.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 10,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 2,
                                "step": "Add your seasoning, curry, thyme, parsley, salt and pepper to the pot.",
                                "ingredients": [
                                    {
                                        "id": 1102047,
                                        "name": "salt and pepper",
                                        "localizedName": "salt and pepper",
                                        "image": "salt-and-pepper.jpg"
                                    },
                                    {
                                        "id": 1042027,
                                        "name": "seasoning",
                                        "localizedName": "seasoning",
                                        "image": "seasoning.png"
                                    },
                                    {
                                        "id": 11297,
                                        "name": "parsley",
                                        "localizedName": "parsley",
                                        "image": "parsley.jpg"
                                    },
                                    {
                                        "id": 2015,
                                        "name": "curry powder",
                                        "localizedName": "curry powder",
                                        "image": "curry-powder.jpg"
                                    },
                                    {
                                        "id": 2049,
                                        "name": "thyme",
                                        "localizedName": "thyme",
                                        "image": "thyme.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404752,
                                        "name": "pot",
                                        "localizedName": "pot",
                                        "image": "stock-pot.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 3,
                                "step": "Pour in your stock, chicken and potatoes to cook further.Stir in your peanut Butter and allow to cook for 10 minutes on low heat.If your sauce gets too thick, add a little water to it.",
                                "ingredients": [
                                    {
                                        "id": 16098,
                                        "name": "peanut butter",
                                        "localizedName": "peanut butter",
                                        "image": "peanut-butter.png"
                                    },
                                    {
                                        "id": 11352,
                                        "name": "potato",
                                        "localizedName": "potato",
                                        "image": "potatoes-yukon-gold.png"
                                    },
                                    {
                                        "id": 5006,
                                        "name": "whole chicken",
                                        "localizedName": "whole chicken",
                                        "image": "whole-chicken.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "sauce",
                                        "localizedName": "sauce",
                                        "image": ""
                                    },
                                    {
                                        "id": 1006615,
                                        "name": "stock",
                                        "localizedName": "stock",
                                        "image": "chicken-broth.png"
                                    },
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "water.png"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 10,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 4,
                                "step": "Serve with white rice or more sweet potatoes.You could also garnish the dish with Bell peppers.   ",
                                "ingredients": [
                                    {
                                        "id": 11507,
                                        "name": "sweet potato",
                                        "localizedName": "sweet potato",
                                        "image": "sweet-potato.png"
                                    },
                                    {
                                        "id": 10211821,
                                        "name": "bell pepper",
                                        "localizedName": "bell pepper",
                                        "image": "bell-pepper-orange.png"
                                    },
                                    {
                                        "id": 10220444,
                                        "name": "white rice",
                                        "localizedName": "white rice",
                                        "image": "uncooked-white-rice.png"
                                    }
                                ],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "sourceName": null,
                "creditsText": null,
                "spoonacularSourceUrl": "https://spoonacular.com/african-chicken-peanut-stew-716268",
                "usedIngredientCount": 0,
                "missedIngredientCount": 11,
                "missedIngredients": [
                    {
                        "id": 10211821,
                        "amount": 1.0,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "bell peppers",
                        "original": "Bell Peppers for garnishing",
                        "originalName": "Bell Peppers for garnishing",
                        "meta": [
                            "for garnishing"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png"
                    },
                    {
                        "id": 5006,
                        "amount": 1.5,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Meat",
                        "name": "chicken",
                        "original": "1.5 cups of Chopped Chicken",
                        "originalName": "Chopped Chicken",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
                    },
                    {
                        "id": 93605,
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "unitLong": "teaspoon",
                        "unitShort": "tsp",
                        "aisle": "Ethnic Foods",
                        "name": "curry paste",
                        "original": "1 teaspoon of Curry",
                        "originalName": "Curry",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-paste.png"
                    },
                    {
                        "id": 11215,
                        "amount": 2.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "garlic cloves",
                        "original": "2 garlic cloves",
                        "originalName": "garlic cloves",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                    },
                    {
                        "id": 11216,
                        "amount": 1.0,
                        "unit": "piece",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
                        "name": "ginger",
                        "original": "Small piece of Chopped ginger",
                        "originalName": "Small of Chopped ginger",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/ginger.png"
                    },
                    {
                        "id": 16091,
                        "amount": 1.0,
                        "unit": "cup",
                        "unitLong": "cup",
                        "unitShort": "cup",
                        "aisle": "Nuts;Savory Snacks",
                        "name": "groundnut",
                        "original": "1 cup of groundnut (Blended) or 1 Cooking spoon of peanut Butter",
                        "originalName": "groundnut (Blended) or 1 Cooking spoon of peanut Butter",
                        "meta": [
                            "(Blended)"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/peanuts.png"
                    },
                    {
                        "id": 11282,
                        "amount": 2.0,
                        "unit": "handfuls",
                        "unitLong": "handfuls",
                        "unitShort": "handfuls",
                        "aisle": "Produce",
                        "name": "onions",
                        "original": "2 handfuls of Chopped onions",
                        "originalName": "Chopped onions",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
                    },
                    {
                        "id": 1042027,
                        "amount": 1.0,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": null,
                        "name": "seasoning",
                        "original": "Seasoning",
                        "originalName": "Seasoning",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png"
                    },
                    {
                        "id": 11507,
                        "amount": 0.5,
                        "unit": "small",
                        "unitLong": "smalls",
                        "unitShort": "small",
                        "aisle": "Produce",
                        "name": "sweet potato",
                        "original": "1/2 small sweet potato (Chopped)",
                        "originalName": "sweet potato (Chopped)",
                        "meta": [
                            "chopped",
                            "()"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/sweet-potato.png"
                    },
                    {
                        "id": 2049,
                        "amount": 1.0,
                        "unit": "pinch",
                        "unitLong": "pinch",
                        "unitShort": "pinch",
                        "aisle": "Produce;Spices and Seasonings",
                        "name": "thyme",
                        "original": "Pinch of thyme",
                        "originalName": "Pinch of thyme",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/thyme.jpg"
                    },
                    {
                        "id": 11529,
                        "amount": 1.0,
                        "unit": "small",
                        "unitLong": "small",
                        "unitShort": "small",
                        "aisle": "Produce",
                        "name": "tomato",
                        "original": "1 Chopped small tomato",
                        "originalName": "Chopped small tomato",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            },
            {
                "vegetarian": false,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": true,
                "sustainable": false,
                "weightWatcherSmartPoints": 3,
                "gaps": "no",
                "lowFodmap": false,
                "aggregateLikes": 361,
                "spoonacularScore": 99.0,
                "healthScore": 89.0,
                "pricePerServing": 908.06,
                "extendedIngredients": [
                    {
                        "id": 2009,
                        "aisle": "Spices and Seasonings",
                        "image": "chili-powder.jpg",
                        "consistency": "solid",
                        "name": "chili powder",
                        "nameClean": "chili powder",
                        "original": "1 teaspoon of chili powder",
                        "originalName": "chili powder",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.png",
                        "consistency": "solid",
                        "name": "garlic",
                        "nameClean": "garlic",
                        "original": "2 cloves of garlic",
                        "originalName": "garlic",
                        "amount": 2.0,
                        "unit": "cloves",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            }
                        }
                    },
                    {
                        "id": 10014412,
                        "aisle": "Frozen",
                        "image": "ice-cubes.png",
                        "consistency": "solid",
                        "name": "ice cubes",
                        "nameClean": "ice",
                        "original": "Seasoning Cubes",
                        "originalName": "Seasoning Cubes",
                        "amount": 1.0,
                        "unit": "serving",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "serving",
                                "unitLong": "serving"
                            }
                        }
                    },
                    {
                        "id": 9159,
                        "aisle": "Produce",
                        "image": "lime.jpg",
                        "consistency": "solid",
                        "name": "limes",
                        "nameClean": "lime",
                        "original": "3 Limes",
                        "originalName": "Limes",
                        "amount": 3.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 3.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11821,
                        "aisle": "Produce",
                        "image": "red-pepper.jpg",
                        "consistency": "solid",
                        "name": "red bell pepper",
                        "nameClean": "red pepper",
                        "original": "1 Red bell pepper",
                        "originalName": "Red bell pepper",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [
                            "red"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 10011282,
                        "aisle": "Produce",
                        "image": "red-onion.png",
                        "consistency": "solid",
                        "name": "red onion",
                        "nameClean": "red onion",
                        "original": "1 large Red onion",
                        "originalName": "Red onion",
                        "amount": 1.0,
                        "unit": "large",
                        "meta": [
                            "red"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "large",
                                "unitLong": "large"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "large",
                                "unitLong": "large"
                            }
                        }
                    },
                    {
                        "id": 2047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "solid",
                        "name": "salt",
                        "nameClean": "table salt",
                        "original": "2 tablespoons of Salt",
                        "originalName": "Salt",
                        "amount": 2.0,
                        "unit": "tablespoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 10011819,
                        "aisle": "Produce;Ethnic Foods",
                        "image": "habanero-pepper.jpg",
                        "consistency": "solid",
                        "name": "scotch bonnet chili peppers",
                        "nameClean": "habanero chili",
                        "original": "4 scotch bonnet peppers",
                        "originalName": "scotch bonnet peppers",
                        "amount": 4.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 90560,
                        "aisle": "Gourmet",
                        "image": "escargot.png",
                        "consistency": "solid",
                        "name": "snails",
                        "nameClean": "escargot",
                        "original": "8 snails",
                        "originalName": "snails",
                        "amount": 8.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 8.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 8.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11529,
                        "aisle": "Produce",
                        "image": "tomato.png",
                        "consistency": "solid",
                        "name": "tomatoes",
                        "nameClean": "tomato",
                        "original": "5 Large tomatoes",
                        "originalName": "Large tomatoes",
                        "amount": 5.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 5.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 5.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 4513,
                        "aisle": null,
                        "image": null,
                        "consistency": null,
                        "name": "vegetable cooking oil",
                        "nameClean": null,
                        "original": "1 cooking spoon of Vegetable Oil",
                        "originalName": "cooking spoon of Vegetable Oil",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    }
                ],
                "id": 716381,
                "title": "Nigerian Snail Stew",
                "readyInMinutes": 45,
                "servings": 1,
                "sourceUrl": "http://www.afrolems.com/2015/12/08/nigerian-snail-stew/",
                "image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
                "imageType": "jpg",
                "summary": "Nigerian Snail Stew might be just the main course you are searching for. For <b>$9.08 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. This recipe makes 1 servings with <b>363 calories</b>, <b>23g of protein</b>, and <b>5g of fat</b> each. Plenty of people made this recipe, and 361 would say it hit the spot. If you have chili powder, snails, limes, and a few other ingredients on hand, you can make it. To use up the ice cubes you could follow this main course with the <a href=\"https://spoonacular.com/recipes/nectarine-blackberry-and-pecan-sundaes-50465\">Nectarine, Blackberry, and Pecan Sundaes</a> as a dessert. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/nigerian-kidney-bean-stew-with-a-peanut-sauce-112643\">Nigerian Kidney Bean Stew With a Peanut Sauce</a>, <a href=\"https://spoonacular.com/recipes/little-snail-rolls-369096\">Little Snail Rolls</a>, and <a href=\"https://spoonacular.com/recipes/maple-snail-cookies-76877\">Maple Snail Cookies</a> for similar recipes.",
                "cuisines": [],
                "dishTypes": [
                    "lunch",
                    "main course",
                    "main dish",
                    "dinner"
                ],
                "diets": [
                    "gluten free",
                    "dairy free",
                    "paleolithic",
                    "primal"
                ],
                "occasions": [
                    "fall",
                    "winter"
                ],
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "In a bowl, wash the snails with lime and salt till all the slime is gone.",
                                "ingredients": [
                                    {
                                        "id": 90560,
                                        "name": "escargot",
                                        "localizedName": "escargot",
                                        "image": "escargot.png"
                                    },
                                    {
                                        "id": 9159,
                                        "name": "lime",
                                        "localizedName": "lime",
                                        "image": "lime.jpg"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "salt.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "bowl.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Place the snail in a pot with the chili powder, seasoning cubes, chopped garlic, 1/2 of the onion(chopped) and a pinch of salt and bring to boil for about 15-18 minutes.In a separate pot, place the tomatoes, bell pepper, scotch bonnet peppers, crush with a wooden spoon till some of the juices come out and bring to boil till they are all soft on low heat. (This helps to dry up some of the extra water from the tomatoes)In a pot, pour in your oil, cut your onions in rings and fry in the hot oil on medium heat.",
                                "ingredients": [
                                    {
                                        "id": 0,
                                        "name": "seasoning cube",
                                        "localizedName": "seasoning cube",
                                        "image": "stock-cube.jpg"
                                    },
                                    {
                                        "id": 2009,
                                        "name": "chili powder",
                                        "localizedName": "chili powder",
                                        "image": "chili-powder.jpg"
                                    },
                                    {
                                        "id": 10211821,
                                        "name": "bell pepper",
                                        "localizedName": "bell pepper",
                                        "image": "bell-pepper-orange.png"
                                    },
                                    {
                                        "id": 11529,
                                        "name": "tomato",
                                        "localizedName": "tomato",
                                        "image": "tomato.png"
                                    },
                                    {
                                        "id": 10111333,
                                        "name": "peppers",
                                        "localizedName": "peppers",
                                        "image": "green-pepper.jpg"
                                    },
                                    {
                                        "id": 11215,
                                        "name": "garlic",
                                        "localizedName": "garlic",
                                        "image": "garlic.png"
                                    },
                                    {
                                        "id": 11282,
                                        "name": "onion",
                                        "localizedName": "onion",
                                        "image": "brown-onion.png"
                                    },
                                    {
                                        "id": 10014052,
                                        "name": "scotch whiskey",
                                        "localizedName": "scotch whiskey",
                                        "image": "whiskey-bottle.jpg"
                                    },
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "water.png"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "salt.jpg"
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404732,
                                        "name": "wooden spoon",
                                        "localizedName": "wooden spoon",
                                        "image": "wooden-spoon.jpg"
                                    },
                                    {
                                        "id": 404752,
                                        "name": "pot",
                                        "localizedName": "pot",
                                        "image": "stock-pot.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 18,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 3,
                                "step": "Pour in your tomato-pepper mix and allow to fry for about 8-10 minutes on low heat.",
                                "ingredients": [
                                    {
                                        "id": 1002030,
                                        "name": "pepper",
                                        "localizedName": "pepper",
                                        "image": "pepper.jpg"
                                    },
                                    {
                                        "id": 11529,
                                        "name": "tomato",
                                        "localizedName": "tomato",
                                        "image": "tomato.png"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 10,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 4,
                                "step": "Pour in the left-over stock from the snail and allow to cook for 5 more minutes on medium heat.",
                                "ingredients": [
                                    {
                                        "id": 1006615,
                                        "name": "stock",
                                        "localizedName": "stock",
                                        "image": "chicken-broth.png"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 5,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 5,
                                "step": "Add your seasoning cubes and taste for salt.",
                                "ingredients": [
                                    {
                                        "id": 0,
                                        "name": "seasoning cube",
                                        "localizedName": "seasoning cube",
                                        "image": "stock-cube.jpg"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "salt.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 6,
                                "step": "Add your snails and stir in and allow to stew for 2-4 minutes more on medium heat.",
                                "ingredients": [
                                    {
                                        "id": 90560,
                                        "name": "escargot",
                                        "localizedName": "escargot",
                                        "image": "escargot.png"
                                    },
                                    {
                                        "id": 0,
                                        "name": "stew",
                                        "localizedName": "stew",
                                        "image": ""
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 4,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 7,
                                "step": "Serve with Rice, Pasta, Plantain, Yams or Potatoes.",
                                "ingredients": [
                                    {
                                        "id": 9277,
                                        "name": "plantain",
                                        "localizedName": "plantain",
                                        "image": "plantains.jpg"
                                    },
                                    {
                                        "id": 11352,
                                        "name": "potato",
                                        "localizedName": "potato",
                                        "image": "potatoes-yukon-gold.png"
                                    },
                                    {
                                        "id": 20420,
                                        "name": "pasta",
                                        "localizedName": "pasta",
                                        "image": "fusilli.jpg"
                                    },
                                    {
                                        "id": 20444,
                                        "name": "rice",
                                        "localizedName": "rice",
                                        "image": "uncooked-white-rice.png"
                                    },
                                    {
                                        "id": 11601,
                                        "name": "yam",
                                        "localizedName": "yam",
                                        "image": "sweet-potato.png"
                                    }
                                ],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "sourceName": null,
                "creditsText": null,
                "spoonacularSourceUrl": "https://spoonacular.com/nigerian-snail-stew-716381",
                "usedIngredientCount": 0,
                "missedIngredientCount": 8,
                "missedIngredients": [
                    {
                        "id": 2009,
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "unitLong": "teaspoon",
                        "unitShort": "tsp",
                        "aisle": "Spices and Seasonings",
                        "name": "chili powder",
                        "original": "1 teaspoon of chili powder",
                        "originalName": "chili powder",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg"
                    },
                    {
                        "id": 11215,
                        "amount": 2.0,
                        "unit": "cloves",
                        "unitLong": "cloves",
                        "unitShort": "cloves",
                        "aisle": "Produce",
                        "name": "garlic",
                        "original": "2 cloves of garlic",
                        "originalName": "garlic",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                    },
                    {
                        "id": 9159,
                        "amount": 3.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "limes",
                        "original": "3 Limes",
                        "originalName": "Limes",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/lime.jpg"
                    },
                    {
                        "id": 11821,
                        "amount": 1.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "red bell pepper",
                        "original": "1 Red bell pepper",
                        "originalName": "Red bell pepper",
                        "meta": [
                            "red"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-pepper.jpg"
                    },
                    {
                        "id": 10011282,
                        "amount": 1.0,
                        "unit": "large",
                        "unitLong": "large",
                        "unitShort": "large",
                        "aisle": "Produce",
                        "name": "red onion",
                        "original": "1 large Red onion",
                        "originalName": "Red onion",
                        "meta": [
                            "red"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-onion.png"
                    },
                    {
                        "id": 10011819,
                        "amount": 4.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce;Ethnic Foods",
                        "name": "scotch bonnet chili peppers",
                        "original": "4 scotch bonnet peppers",
                        "originalName": "scotch bonnet peppers",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/habanero-pepper.jpg"
                    },
                    {
                        "id": 90560,
                        "amount": 8.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Gourmet",
                        "name": "snails",
                        "original": "8 snails",
                        "originalName": "snails",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/escargot.png"
                    },
                    {
                        "id": 11529,
                        "amount": 5.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "tomatoes",
                        "original": "5 Large tomatoes",
                        "originalName": "Large tomatoes",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            },
            {
                "vegetarian": true,
                "vegan": true,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "weightWatcherSmartPoints": 13,
                "gaps": "no",
                "lowFodmap": false,
                "aggregateLikes": 53,
                "spoonacularScore": 99.0,
                "healthScore": 100.0,
                "pricePerServing": 185.77,
                "extendedIngredients": [
                    {
                        "id": 20040,
                        "aisle": "Pasta and Rice",
                        "image": "uncooked-brown-rice.png",
                        "consistency": "solid",
                        "name": "brown rice",
                        "nameClean": "brown rice",
                        "original": "2/3 cup dried brown rice (2 cups cooked)",
                        "originalName": "2/3 cup dried brown rice cooked)",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [
                            "dried",
                            "cooked"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 473.176,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11124,
                        "aisle": "Produce",
                        "image": "sliced-carrot.png",
                        "consistency": "solid",
                        "name": "carrots",
                        "nameClean": "carrot",
                        "original": "2 medium carrots, sliced",
                        "originalName": "carrots, sliced",
                        "amount": 2.0,
                        "unit": "medium",
                        "meta": [
                            "sliced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "medium",
                                "unitLong": "mediums"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "medium",
                                "unitLong": "mediums"
                            }
                        }
                    },
                    {
                        "id": 11143,
                        "aisle": "Produce",
                        "image": "celery.jpg",
                        "consistency": "solid",
                        "name": "celery",
                        "nameClean": "celery",
                        "original": "2 stalks celery, sliced",
                        "originalName": "celery, sliced",
                        "amount": 2.0,
                        "unit": "stalks",
                        "meta": [
                            "sliced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "stalks",
                                "unitLong": "stalks"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "stalks",
                                "unitLong": "stalks"
                            }
                        }
                    },
                    {
                        "id": 2007,
                        "aisle": "Spices and Seasonings",
                        "image": "celery-seed.jpg",
                        "consistency": "solid",
                        "name": "celery seed",
                        "nameClean": "celery seed",
                        "original": "1 teaspoon celery seed",
                        "originalName": "celery seed",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 16032,
                        "aisle": "Pasta and Rice;Canned and Jarred",
                        "image": "kidney-beans.jpg",
                        "consistency": "solid",
                        "name": "dried kidney beans",
                        "nameClean": "dried kidney beans",
                        "original": "2/3 cup dried kidney beans (2 cups cooked)",
                        "originalName": "2/3 cup dried kidney beans cooked)",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [
                            "dried",
                            "cooked"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 473.176,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 2023,
                        "aisle": "Produce;Spices and Seasonings",
                        "image": "marjoram.jpg",
                        "consistency": "solid",
                        "name": "dried marjoram",
                        "nameClean": "marjoram",
                        "original": "1 teaspoon dried marjoram",
                        "originalName": "dried marjoram",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [
                            "dried"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 2042,
                        "aisle": "Spices and Seasonings",
                        "image": "thyme.jpg",
                        "consistency": "solid",
                        "name": "dried thyme",
                        "nameClean": "dried thyme",
                        "original": "2 teaspoons dried thyme",
                        "originalName": "dried thyme",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [
                            "dried"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 11209,
                        "aisle": "Produce",
                        "image": "eggplant.png",
                        "consistency": "solid",
                        "name": "eggplant",
                        "nameClean": "eggplant",
                        "original": "1 medium eggplant, chopped",
                        "originalName": "eggplant, chopped",
                        "amount": 1.0,
                        "unit": "medium",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "medium",
                                "unitLong": "medium"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "medium",
                                "unitLong": "medium"
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.png",
                        "consistency": "solid",
                        "name": "garlic",
                        "nameClean": "garlic",
                        "original": "2 cloves garlic, minced or crushed",
                        "originalName": "garlic, minced or crushed",
                        "amount": 2.0,
                        "unit": "cloves",
                        "meta": [
                            "minced",
                            "crushed"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            }
                        }
                    },
                    {
                        "id": 11052,
                        "aisle": "Produce",
                        "image": "green-beans-or-string-beans.jpg",
                        "consistency": "solid",
                        "name": "green beans",
                        "nameClean": "green beans",
                        "original": "3 handfuls of green beans, chopped",
                        "originalName": "green beans, chopped",
                        "amount": 3.0,
                        "unit": "handfuls",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "handfuls",
                                "unitLong": "handfuls"
                            },
                            "metric": {
                                "amount": 3.0,
                                "unitShort": "handfuls",
                                "unitLong": "handfuls"
                            }
                        }
                    },
                    {
                        "id": 1002030,
                        "aisle": "Spices and Seasonings",
                        "image": "pepper.jpg",
                        "consistency": "solid",
                        "name": "ground pepper",
                        "nameClean": "black pepper",
                        "original": "fresh ground black pepper",
                        "originalName": "fresh ground black pepper",
                        "amount": 6.0,
                        "unit": "servings",
                        "meta": [
                            "fresh",
                            "black"
                        ],
                        "measures": {
                            "us": {
                                "amount": 6.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 6.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 1012038,
                        "aisle": "Spices and Seasonings",
                        "image": "dried-sage.png",
                        "consistency": "solid",
                        "name": "ground sage",
                        "nameClean": "ground sage",
                        "original": "2 teaspoons ground sage",
                        "originalName": "ground sage",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 93627,
                        "aisle": "Spices and Seasonings;Condiments",
                        "image": "dark-sauce.jpg",
                        "consistency": "solid",
                        "name": "liquid smoke",
                        "nameClean": "liquid smoke",
                        "original": "1/2 to 1 teaspoon liquid smoke, to taste",
                        "originalName": "liquid smoke, to taste",
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "meta": [
                            "to taste"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 4053,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "olive-oil.jpg",
                        "consistency": "liquid",
                        "name": "olive oil",
                        "nameClean": "olive oil",
                        "original": "2 tablespoons olive oil",
                        "originalName": "olive oil",
                        "amount": 2.0,
                        "unit": "tablespoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 11821,
                        "aisle": "Produce",
                        "image": "red-pepper.jpg",
                        "consistency": "solid",
                        "name": "red bell pepper",
                        "nameClean": "red pepper",
                        "original": "1 red bell pepper, seeded and chopped",
                        "originalName": "red bell pepper, seeded and chopped",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [
                            "red",
                            "seeded",
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 10011282,
                        "aisle": "Produce",
                        "image": "red-onion.png",
                        "consistency": "solid",
                        "name": "red onion",
                        "nameClean": "red onion",
                        "original": "1 small white or red onion, diced",
                        "originalName": "white or red onion, diced",
                        "amount": 1.0,
                        "unit": "small",
                        "meta": [
                            "diced",
                            "white",
                            "red"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "small",
                                "unitLong": "small"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "small",
                                "unitLong": "small"
                            }
                        }
                    },
                    {
                        "id": 1012047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "solid",
                        "name": "sea salt",
                        "nameClean": "coarse sea salt",
                        "original": "1 1/2 teaspoons sea salt, or to taste",
                        "originalName": "sea salt, or to taste",
                        "amount": 1.5,
                        "unit": "teaspoons",
                        "meta": [
                            "to taste"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 1.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 1016168,
                        "aisle": "Condiments",
                        "image": "hot-sauce-or-tabasco.png",
                        "consistency": "liquid",
                        "name": "sriracha",
                        "nameClean": "sriracha",
                        "original": "1 teaspoon sriracha or other hot sauce",
                        "originalName": "sriracha or other hot sauce",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 11529,
                        "aisle": "Produce",
                        "image": "tomato.png",
                        "consistency": "solid",
                        "name": "tomatoes",
                        "nameClean": "tomato",
                        "original": "2 medium tomatoes, diced",
                        "originalName": "tomatoes, diced",
                        "amount": 2.0,
                        "unit": "medium",
                        "meta": [
                            "diced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "medium",
                                "unitLong": "mediums"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "medium",
                                "unitLong": "mediums"
                            }
                        }
                    },
                    {
                        "id": 6615,
                        "aisle": "Canned and Jarred",
                        "image": "chicken-broth.png",
                        "consistency": "liquid",
                        "name": "vegetable stock",
                        "nameClean": "vegetable stock",
                        "original": "3 cups vegetable stock",
                        "originalName": "vegetable stock",
                        "amount": 3.0,
                        "unit": "cups",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 709.764,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    }
                ],
                "id": 782601,
                "title": "Red Kidney Bean Jambalaya",
                "readyInMinutes": 45,
                "servings": 6,
                "sourceUrl": "http://foodandspice.blogspot.com/2016/05/red-kidney-bean-jambalaya.html",
                "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
                "imageType": "jpg",
                "summary": "Red Kidney Bean Jambalaya might be just the <b>Creole</b> recipe you are searching for. One serving contains <b>538 calories</b>, <b>21g of protein</b>, and <b>8g of fat</b>. For <b>$1.69 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. This recipe from foodandspice.blogspot.com has 52 fans. A few people really liked this main course. Head to the store and pick up brown rice, vegetable stock, liquid smoke, and a few other things to make it today. To use up the sea salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/raspberry-sea-salt-brownies-494161\">Raspberry Sea Salt Brownies</a> as a dessert. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/red-kidney-bean-dip-148569\">Red Kidney Bean Dip</a>, <a href=\"https://spoonacular.com/recipes/kidney-bean-dip-119992\">Kidney Bean Dip</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a> for similar recipes.",
                "cuisines": [
                    "Creole",
                    "Cajun"
                ],
                "dishTypes": [
                    "lunch",
                    "main course",
                    "main dish",
                    "dinner"
                ],
                "diets": [
                    "gluten free",
                    "dairy free",
                    "lacto ovo vegetarian",
                    "vegan"
                ],
                "occasions": [],
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.",
                                "ingredients": [
                                    {
                                        "id": 16033,
                                        "name": "kidney beans",
                                        "localizedName": "kidney beans",
                                        "image": "kidney-beans.jpg"
                                    },
                                    {
                                        "id": 20040,
                                        "name": "brown rice",
                                        "localizedName": "brown rice",
                                        "image": "uncooked-brown-rice.png"
                                    },
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "water.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "bowl.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 960,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 2,
                                "step": "Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.",
                                "ingredients": [
                                    {
                                        "id": 16033,
                                        "name": "kidney beans",
                                        "localizedName": "kidney beans",
                                        "image": "kidney-beans.jpg"
                                    },
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "water.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404669,
                                        "name": "sauce pan",
                                        "localizedName": "sauce pan",
                                        "image": "sauce-pan.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 60,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 3,
                                "step": "Drain and set aside.",
                                "ingredients": [],
                                "equipment": []
                            },
                            {
                                "number": 4,
                                "step": "Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.",
                                "ingredients": [
                                    {
                                        "id": 2007,
                                        "name": "celery seed",
                                        "localizedName": "celery seed",
                                        "image": "celery-seed.jpg"
                                    },
                                    {
                                        "id": 11052,
                                        "name": "green beans",
                                        "localizedName": "green beans",
                                        "image": "green-beans-or-string-beans.jpg"
                                    },
                                    {
                                        "id": 11821,
                                        "name": "red pepper",
                                        "localizedName": "red pepper",
                                        "image": "red-pepper.jpg"
                                    },
                                    {
                                        "id": 11209,
                                        "name": "eggplant",
                                        "localizedName": "eggplant",
                                        "image": "eggplant.png"
                                    },
                                    {
                                        "id": 2023,
                                        "name": "marjoram",
                                        "localizedName": "marjoram",
                                        "image": "marjoram.jpg"
                                    },
                                    {
                                        "id": 11529,
                                        "name": "tomato",
                                        "localizedName": "tomato",
                                        "image": "tomato.png"
                                    },
                                    {
                                        "id": 11124,
                                        "name": "carrot",
                                        "localizedName": "carrot",
                                        "image": "sliced-carrot.png"
                                    },
                                    {
                                        "id": 11143,
                                        "name": "celery",
                                        "localizedName": "celery",
                                        "image": "celery.jpg"
                                    },
                                    {
                                        "id": 11215,
                                        "name": "garlic",
                                        "localizedName": "garlic",
                                        "image": "garlic.png"
                                    },
                                    {
                                        "id": 11282,
                                        "name": "onion",
                                        "localizedName": "onion",
                                        "image": "brown-onion.png"
                                    },
                                    {
                                        "id": 2049,
                                        "name": "thyme",
                                        "localizedName": "thyme",
                                        "image": "thyme.jpg"
                                    },
                                    {
                                        "id": 99226,
                                        "name": "sage",
                                        "localizedName": "sage",
                                        "image": "fresh-sage.png"
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404669,
                                        "name": "sauce pan",
                                        "localizedName": "sauce pan",
                                        "image": "sauce-pan.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 10,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 5,
                                "step": "Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.",
                                "ingredients": [
                                    {
                                        "id": 6615,
                                        "name": "vegetable stock",
                                        "localizedName": "vegetable stock",
                                        "image": "chicken-broth.png"
                                    },
                                    {
                                        "id": 16033,
                                        "name": "kidney beans",
                                        "localizedName": "kidney beans",
                                        "image": "kidney-beans.jpg"
                                    },
                                    {
                                        "id": 93627,
                                        "name": "liquid smoke",
                                        "localizedName": "liquid smoke",
                                        "image": "dark-sauce.jpg"
                                    },
                                    {
                                        "id": 20444,
                                        "name": "rice",
                                        "localizedName": "rice",
                                        "image": "uncooked-white-rice.png"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 45,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 6,
                                "step": "Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.",
                                "ingredients": [
                                    {
                                        "id": 1102047,
                                        "name": "salt and pepper",
                                        "localizedName": "salt and pepper",
                                        "image": "salt-and-pepper.jpg"
                                    },
                                    {
                                        "id": 93627,
                                        "name": "liquid smoke",
                                        "localizedName": "liquid smoke",
                                        "image": "dark-sauce.jpg"
                                    },
                                    {
                                        "id": 1042027,
                                        "name": "seasoning",
                                        "localizedName": "seasoning",
                                        "image": "seasoning.png"
                                    },
                                    {
                                        "id": 1016168,
                                        "name": "sriracha",
                                        "localizedName": "sriracha",
                                        "image": "hot-sauce-or-tabasco.png"
                                    },
                                    {
                                        "id": 1002030,
                                        "name": "pepper",
                                        "localizedName": "pepper",
                                        "image": "pepper.jpg"
                                    },
                                    {
                                        "id": 1002044,
                                        "name": "herbs",
                                        "localizedName": "herbs",
                                        "image": "mixed-fresh-herbs.jpg"
                                    },
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "water.png"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "salt.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "stew",
                                        "localizedName": "stew",
                                        "image": ""
                                    }
                                ],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "sourceName": null,
                "creditsText": null,
                "spoonacularSourceUrl": "https://spoonacular.com/red-kidney-bean-jambalaya-782601",
                "usedIngredientCount": 0,
                "missedIngredientCount": 17,
                "missedIngredients": [
                    {
                        "id": 20040,
                        "amount": 2.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Pasta and Rice",
                        "name": "brown rice",
                        "original": "2/3 cup dried brown rice (2 cups cooked)",
                        "originalName": "2/3 cup dried brown rice cooked)",
                        "meta": [
                            "dried",
                            "cooked"
                        ],
                        "extendedName": "cooked dried brown rice",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-brown-rice.png"
                    },
                    {
                        "id": 11124,
                        "amount": 2.0,
                        "unit": "medium",
                        "unitLong": "mediums",
                        "unitShort": "medium",
                        "aisle": "Produce",
                        "name": "carrots",
                        "original": "2 medium carrots, sliced",
                        "originalName": "carrots, sliced",
                        "meta": [
                            "sliced"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png"
                    },
                    {
                        "id": 11143,
                        "amount": 2.0,
                        "unit": "stalks",
                        "unitLong": "stalks",
                        "unitShort": "stalks",
                        "aisle": "Produce",
                        "name": "celery",
                        "original": "2 stalks celery, sliced",
                        "originalName": "celery, sliced",
                        "meta": [
                            "sliced"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/celery.jpg"
                    },
                    {
                        "id": 2007,
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "unitLong": "teaspoon",
                        "unitShort": "tsp",
                        "aisle": "Spices and Seasonings",
                        "name": "celery seed",
                        "original": "1 teaspoon celery seed",
                        "originalName": "celery seed",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/celery-seed.jpg"
                    },
                    {
                        "id": 16032,
                        "amount": 2.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Pasta and Rice;Canned and Jarred",
                        "name": "dried kidney beans",
                        "original": "2/3 cup dried kidney beans (2 cups cooked)",
                        "originalName": "2/3 cup dried kidney beans cooked)",
                        "meta": [
                            "dried",
                            "cooked"
                        ],
                        "extendedName": "cooked dried kidney beans",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/kidney-beans.jpg"
                    },
                    {
                        "id": 2023,
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "unitLong": "teaspoon",
                        "unitShort": "tsp",
                        "aisle": "Produce;Spices and Seasonings",
                        "name": "dried marjoram",
                        "original": "1 teaspoon dried marjoram",
                        "originalName": "dried marjoram",
                        "meta": [
                            "dried"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/marjoram.jpg"
                    },
                    {
                        "id": 2042,
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "unitLong": "teaspoons",
                        "unitShort": "tsp",
                        "aisle": "Spices and Seasonings",
                        "name": "dried thyme",
                        "original": "2 teaspoons dried thyme",
                        "originalName": "dried thyme",
                        "meta": [
                            "dried"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/thyme.jpg"
                    },
                    {
                        "id": 11209,
                        "amount": 1.0,
                        "unit": "medium",
                        "unitLong": "medium",
                        "unitShort": "medium",
                        "aisle": "Produce",
                        "name": "eggplant",
                        "original": "1 medium eggplant, chopped",
                        "originalName": "eggplant, chopped",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/eggplant.png"
                    },
                    {
                        "id": 11215,
                        "amount": 2.0,
                        "unit": "cloves",
                        "unitLong": "cloves",
                        "unitShort": "cloves",
                        "aisle": "Produce",
                        "name": "garlic",
                        "original": "2 cloves garlic, minced or crushed",
                        "originalName": "garlic, minced or crushed",
                        "meta": [
                            "minced",
                            "crushed"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                    },
                    {
                        "id": 11052,
                        "amount": 3.0,
                        "unit": "handfuls",
                        "unitLong": "handfuls",
                        "unitShort": "handfuls",
                        "aisle": "Produce",
                        "name": "green beans",
                        "original": "3 handfuls of green beans, chopped",
                        "originalName": "green beans, chopped",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/green-beans-or-string-beans.jpg"
                    },
                    {
                        "id": 1012038,
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "unitLong": "teaspoons",
                        "unitShort": "tsp",
                        "aisle": "Spices and Seasonings",
                        "name": "ground sage",
                        "original": "2 teaspoons ground sage",
                        "originalName": "ground sage",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dried-sage.png"
                    },
                    {
                        "id": 93627,
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "unitLong": "teaspoons",
                        "unitShort": "tsp",
                        "aisle": "Spices and Seasonings;Condiments",
                        "name": "liquid smoke",
                        "original": "1/2 to 1 teaspoon liquid smoke, to taste",
                        "originalName": "liquid smoke, to taste",
                        "meta": [
                            "to taste"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dark-sauce.jpg"
                    },
                    {
                        "id": 11821,
                        "amount": 1.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "red bell pepper",
                        "original": "1 red bell pepper, seeded and chopped",
                        "originalName": "red bell pepper, seeded and chopped",
                        "meta": [
                            "red",
                            "seeded",
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-pepper.jpg"
                    },
                    {
                        "id": 10011282,
                        "amount": 1.0,
                        "unit": "small",
                        "unitLong": "small",
                        "unitShort": "small",
                        "aisle": "Produce",
                        "name": "red onion",
                        "original": "1 small white or red onion, diced",
                        "originalName": "white or red onion, diced",
                        "meta": [
                            "diced",
                            "white",
                            "red"
                        ],
                        "extendedName": "white diced red onion",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-onion.png"
                    },
                    {
                        "id": 1016168,
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "unitLong": "teaspoon",
                        "unitShort": "tsp",
                        "aisle": "Condiments",
                        "name": "sriracha",
                        "original": "1 teaspoon sriracha or other hot sauce",
                        "originalName": "sriracha or other hot sauce",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png"
                    },
                    {
                        "id": 11529,
                        "amount": 2.0,
                        "unit": "medium",
                        "unitLong": "mediums",
                        "unitShort": "medium",
                        "aisle": "Produce",
                        "name": "tomatoes",
                        "original": "2 medium tomatoes, diced",
                        "originalName": "tomatoes, diced",
                        "meta": [
                            "diced"
                        ],
                        "extendedName": "diced tomatoes",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
                    },
                    {
                        "id": 6615,
                        "amount": 3.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Canned and Jarred",
                        "name": "vegetable stock",
                        "original": "3 cups vegetable stock",
                        "originalName": "vegetable stock",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            },
            {
                "vegetarian": true,
                "vegan": true,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "weightWatcherSmartPoints": 14,
                "gaps": "no",
                "lowFodmap": false,
                "aggregateLikes": 44,
                "spoonacularScore": 99.0,
                "healthScore": 100.0,
                "pricePerServing": 137.57,
                "extendedIngredients": [
                    {
                        "id": 12061,
                        "aisle": "Nuts",
                        "image": "almonds.jpg",
                        "consistency": "solid",
                        "name": "almonds",
                        "nameClean": "almonds",
                        "original": "1/4 cup sliced almonds (lightly toasted if desired)",
                        "originalName": "sliced almonds (lightly toasted if desired)",
                        "amount": 0.25,
                        "unit": "cup",
                        "meta": [
                            "lightly toasted",
                            "sliced",
                            "( if desired)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 59.147,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 10011090,
                        "aisle": "Produce",
                        "image": "broccoli.jpg",
                        "consistency": "solid",
                        "name": "broccoli florets",
                        "nameClean": "broccoli florets",
                        "original": "4 cups broccoli florets",
                        "originalName": "broccoli florets",
                        "amount": 4.0,
                        "unit": "cups",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 946.352,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 20040,
                        "aisle": "Pasta and Rice",
                        "image": "uncooked-brown-rice.png",
                        "consistency": "solid",
                        "name": "brown rice",
                        "nameClean": "brown rice",
                        "original": "2 cups cooked brown rice (2/3 cup dried rice)",
                        "originalName": "cooked brown rice (2/3 cup dried rice)",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [
                            "dried",
                            "cooked",
                            "()"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 473.176,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 1002046,
                        "aisle": "Condiments",
                        "image": "dijon-mustard.jpg",
                        "consistency": "liquid",
                        "name": "dijon mustard",
                        "nameClean": "creole mustard",
                        "original": "2 tablespoons Dijon mustard",
                        "originalName": "Dijon mustard",
                        "amount": 2.0,
                        "unit": "tablespoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 16056,
                        "aisle": "Pasta and Rice;Canned and Jarred;Ethnic Foods",
                        "image": "chickpeas.png",
                        "consistency": "solid",
                        "name": "dried chickpeas",
                        "nameClean": "dried chickpeas",
                        "original": "1 1/2 cup cooked chickpeas (1/2 dried chickpeas)",
                        "originalName": "cooked chickpeas (1/2 dried chickpeas)",
                        "amount": 1.5,
                        "unit": "cup",
                        "meta": [
                            "dried",
                            "cooked",
                            "()"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 354.882,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11297,
                        "aisle": "Produce;Spices and Seasonings",
                        "image": "parsley.jpg",
                        "consistency": "solid",
                        "name": "fresh parsley",
                        "nameClean": "parsley",
                        "original": "1/4 cup fresh cilantro or parsley, trimmed and chopped",
                        "originalName": "fresh cilantro or parsley, trimmed and chopped",
                        "amount": 0.25,
                        "unit": "cup",
                        "meta": [
                            "fresh",
                            "trimmed",
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 59.147,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.png",
                        "consistency": "solid",
                        "name": "garlic",
                        "nameClean": "garlic",
                        "original": "1 clove garlic, minced",
                        "originalName": "garlic, minced",
                        "amount": 1.0,
                        "unit": "clove",
                        "meta": [
                            "minced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "clove",
                                "unitLong": "clove"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "clove",
                                "unitLong": "clove"
                            }
                        }
                    },
                    {
                        "id": 11291,
                        "aisle": "Produce",
                        "image": "spring-onions.jpg",
                        "consistency": "solid",
                        "name": "green onions",
                        "nameClean": "spring onions",
                        "original": "2 to 3 green onions, trimmed and chopped, or 2 shallots finely chopped",
                        "originalName": "to 3 green onions, trimmed and chopped, or 2 shallots finely chopped",
                        "amount": 2.0,
                        "unit": "",
                        "meta": [
                            "trimmed",
                            "chopped",
                            "finely chopped",
                            "finely"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 1002030,
                        "aisle": "Spices and Seasonings",
                        "image": "pepper.jpg",
                        "consistency": "solid",
                        "name": "ground pepper",
                        "nameClean": "black pepper",
                        "original": "fresh ground black pepper",
                        "originalName": "fresh ground black pepper",
                        "amount": 6.0,
                        "unit": "servings",
                        "meta": [
                            "fresh",
                            "black"
                        ],
                        "measures": {
                            "us": {
                                "amount": 6.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 6.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 9152,
                        "aisle": "Produce",
                        "image": "lemon-juice.jpg",
                        "consistency": "liquid",
                        "name": "juice of lemon",
                        "nameClean": "lemon juice",
                        "original": "juice from 1/2 lemon (1 1/2 tablespoons)",
                        "originalName": "juice from 1/2 lemon",
                        "amount": 1.5,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.5,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 4053,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "olive-oil.jpg",
                        "consistency": "liquid",
                        "name": "olive oil",
                        "nameClean": "olive oil",
                        "original": "1 tablespoon olive oil",
                        "originalName": "olive oil",
                        "amount": 1.0,
                        "unit": "tablespoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            }
                        }
                    },
                    {
                        "id": 4053,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "olive-oil.jpg",
                        "consistency": "liquid",
                        "name": "olive oil",
                        "nameClean": "olive oil",
                        "original": "2 teaspoons olive oil",
                        "originalName": "olive oil",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 9273,
                        "aisle": "Beverages",
                        "image": "pineapple-juice.jpg",
                        "consistency": "liquid",
                        "name": "pineapple juice",
                        "nameClean": "pineapple juice",
                        "original": "2 tablespoons pineapple juice (juice from canned pineapple)",
                        "originalName": "pineapple juice (juice from canned pineapple)",
                        "amount": 2.0,
                        "unit": "",
                        "meta": [
                            "canned",
                            "(juice from pineapple)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 1032009,
                        "aisle": "Spices and Seasonings",
                        "image": "red-pepper-flakes.jpg",
                        "consistency": "solid",
                        "name": "red pepper flakes",
                        "nameClean": "red pepper flakes",
                        "original": "1/2 teaspoon red pepper flakes",
                        "originalName": "red pepper flakes",
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "meta": [
                            "red"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 1012047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "solid",
                        "name": "sea salt",
                        "nameClean": "coarse sea salt",
                        "original": "1 1/2 teaspoons sea salt, or to taste",
                        "originalName": "sea salt, or to taste",
                        "amount": 1.5,
                        "unit": "teaspoons",
                        "meta": [
                            "to taste"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 1.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 11955,
                        "aisle": "Canned and Jarred;Produce",
                        "image": "sundried-tomatoes.jpg",
                        "consistency": "solid",
                        "name": "sun-dried tomatoes",
                        "nameClean": "sun dried tomatoes",
                        "original": "1/3 cup sun-dried tomatoes, soaked in hot water for 40 minutes, drained and chopped (optional)",
                        "originalName": "sun-dried tomatoes, soaked in hot water for 40 minutes, drained and chopped (optional)",
                        "amount": 0.3333333333333333,
                        "unit": "cup",
                        "meta": [
                            "hot",
                            "drained",
                            "chopped",
                            "for 40 minutes,  and  "
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.333,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 78.863,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 10116124,
                        "aisle": "Ethnic Foods",
                        "image": "soy-sauce.jpg",
                        "consistency": "liquid",
                        "name": "tamari soy sauce",
                        "nameClean": "tamari",
                        "original": "2 teaspoons tamari (soy) sauce",
                        "originalName": "tamari (soy) sauce",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [
                            "(soy)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    }
                ],
                "id": 794349,
                "title": "Broccoli and Chickpea Rice Salad",
                "readyInMinutes": 45,
                "servings": 6,
                "sourceUrl": "http://foodandspice.blogspot.com/2016/07/broccoli-and-chickpea-rice-salad.html",
                "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
                "imageType": "jpg",
                "summary": "Need a <b>gluten free and vegan main course</b>? Broccoli and Chickpea Rice Salad could be a spectacular recipe to try. One serving contains <b>524 calories</b>, <b>19g of protein</b>, and <b>12g of fat</b>. For <b>$1.38 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up almonds, olive oil, 2 tablespoons pineapple juice (juice from canned pineapple), and a few other things to make it today. 42 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/easy-balsamic-chickpea-brown-rice-broccoli-salad-101160\">Easy Balsamic Chickpea, Brown Rice & Broccoli Salad</a>, <a href=\"https://spoonacular.com/recipes/super-easy-chickpea-brown-rice-broccoli-crockpot-casserole-584241\">Super Easy Chickpea, Brown Rice & Broccoli Crockpot Casserole</a>, and <a href=\"https://spoonacular.com/recipes/chickpea-and-broccoli-salad-29686\">Chickpean And Broccoli Salad</a>.",
                "cuisines": [],
                "dishTypes": [
                    "lunch",
                    "main course",
                    "main dish",
                    "dinner"
                ],
                "diets": [
                    "gluten free",
                    "dairy free",
                    "lacto ovo vegetarian",
                    "vegan"
                ],
                "occasions": [],
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "In a large skillet, heat the oil over medium heat.",
                                "ingredients": [
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "pan.png"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Add the broccoli, stir well, and cover. Cook, stirring often, until the broccoli is tender.",
                                "ingredients": [
                                    {
                                        "id": 11090,
                                        "name": "broccoli",
                                        "localizedName": "broccoli",
                                        "image": "broccoli.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 3,
                                "step": "Add the broccoli to a large bowl, along with the remaining salad ingredients.To make the dressing, whisk together all of the dressing ingredients in a small bowl.",
                                "ingredients": [
                                    {
                                        "id": 11090,
                                        "name": "broccoli",
                                        "localizedName": "broccoli",
                                        "image": "broccoli.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404661,
                                        "name": "whisk",
                                        "localizedName": "whisk",
                                        "image": "whisk.png"
                                    },
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "bowl.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 4,
                                "step": "Pour the dressing over the salad and toss well to coat evenly. Taste for seasoning and serve.",
                                "ingredients": [
                                    {
                                        "id": 1042027,
                                        "name": "seasoning",
                                        "localizedName": "seasoning",
                                        "image": "seasoning.png"
                                    }
                                ],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "sourceName": null,
                "creditsText": null,
                "spoonacularSourceUrl": "https://spoonacular.com/broccoli-and-chickpea-rice-salad-794349",
                "usedIngredientCount": 0,
                "missedIngredientCount": 13,
                "missedIngredients": [
                    {
                        "id": 12061,
                        "amount": 0.25,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Nuts",
                        "name": "almonds",
                        "original": "1/4 cup sliced almonds (lightly toasted if desired)",
                        "originalName": "sliced almonds (lightly toasted if desired)",
                        "meta": [
                            "lightly toasted",
                            "sliced",
                            "( if desired)"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/almonds.jpg"
                    },
                    {
                        "id": 10011090,
                        "amount": 4.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Produce",
                        "name": "broccoli florets",
                        "original": "4 cups broccoli florets",
                        "originalName": "broccoli florets",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/broccoli.jpg"
                    },
                    {
                        "id": 20040,
                        "amount": 2.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Pasta and Rice",
                        "name": "brown rice",
                        "original": "2 cups cooked brown rice (2/3 cup dried rice)",
                        "originalName": "cooked brown rice (2/3 cup dried rice)",
                        "meta": [
                            "dried",
                            "cooked",
                            "()"
                        ],
                        "extendedName": "cooked dried brown rice",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-brown-rice.png"
                    },
                    {
                        "id": 1002046,
                        "amount": 2.0,
                        "unit": "tablespoons",
                        "unitLong": "tablespoons",
                        "unitShort": "Tbsp",
                        "aisle": "Condiments",
                        "name": "dijon mustard",
                        "original": "2 tablespoons Dijon mustard",
                        "originalName": "Dijon mustard",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dijon-mustard.jpg"
                    },
                    {
                        "id": 16056,
                        "amount": 1.5,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Pasta and Rice;Canned and Jarred;Ethnic Foods",
                        "name": "dried chickpeas",
                        "original": "1 1/2 cup cooked chickpeas (1/2 dried chickpeas)",
                        "originalName": "cooked chickpeas (1/2 dried chickpeas)",
                        "meta": [
                            "dried",
                            "cooked",
                            "()"
                        ],
                        "extendedName": "cooked dried chickpeas",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/chickpeas.png"
                    },
                    {
                        "id": 11297,
                        "amount": 0.25,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Produce;Spices and Seasonings",
                        "name": "fresh parsley",
                        "original": "1/4 cup fresh cilantro or parsley, trimmed and chopped",
                        "originalName": "fresh cilantro or parsley, trimmed and chopped",
                        "meta": [
                            "fresh",
                            "trimmed",
                            "chopped"
                        ],
                        "extendedName": "trimmed fresh parsley",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg"
                    },
                    {
                        "id": 11215,
                        "amount": 1.0,
                        "unit": "clove",
                        "unitLong": "clove",
                        "unitShort": "clove",
                        "aisle": "Produce",
                        "name": "garlic",
                        "original": "1 clove garlic, minced",
                        "originalName": "garlic, minced",
                        "meta": [
                            "minced"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                    },
                    {
                        "id": 11291,
                        "amount": 2.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "green onions",
                        "original": "2 to 3 green onions, trimmed and chopped, or 2 shallots finely chopped",
                        "originalName": "to 3 green onions, trimmed and chopped, or 2 shallots finely chopped",
                        "meta": [
                            "trimmed",
                            "chopped",
                            "finely chopped",
                            "finely"
                        ],
                        "extendedName": "trimmed green onions",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
                    },
                    {
                        "id": 9152,
                        "amount": 1.5,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "juice of lemon",
                        "original": "juice from 1/2 lemon (1 1/2 tablespoons)",
                        "originalName": "juice from 1/2 lemon",
                        "meta": [],
                        "extendedName": "lemon (juice)",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
                    },
                    {
                        "id": 9273,
                        "amount": 2.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Beverages",
                        "name": "pineapple juice",
                        "original": "2 tablespoons pineapple juice (juice from canned pineapple)",
                        "originalName": "pineapple juice (juice from canned pineapple)",
                        "meta": [
                            "canned",
                            "(juice from pineapple)"
                        ],
                        "extendedName": "canned pineapple juice",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/pineapple-juice.jpg"
                    },
                    {
                        "id": 1032009,
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "unitLong": "teaspoons",
                        "unitShort": "tsp",
                        "aisle": "Spices and Seasonings",
                        "name": "red pepper flakes",
                        "original": "1/2 teaspoon red pepper flakes",
                        "originalName": "red pepper flakes",
                        "meta": [
                            "red"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-pepper-flakes.jpg"
                    },
                    {
                        "id": 11955,
                        "amount": 0.3333333333333333,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Canned and Jarred;Produce",
                        "name": "sun-dried tomatoes",
                        "original": "1/3 cup sun-dried tomatoes, soaked in hot water for 40 minutes, drained and chopped (optional)",
                        "originalName": "sun-dried tomatoes, soaked in hot water for 40 minutes, drained and chopped (optional)",
                        "meta": [
                            "hot",
                            "drained",
                            "chopped",
                            "for 40 minutes,  and  "
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/sundried-tomatoes.jpg"
                    },
                    {
                        "id": 10116124,
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "unitLong": "teaspoons",
                        "unitShort": "tsp",
                        "aisle": "Ethnic Foods",
                        "name": "tamari soy sauce",
                        "original": "2 teaspoons tamari (soy) sauce",
                        "originalName": "tamari (soy) sauce",
                        "meta": [
                            "(soy)"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/soy-sauce.jpg"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            },
            {
                "vegetarian": false,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "weightWatcherSmartPoints": 10,
                "gaps": "no",
                "lowFodmap": false,
                "preparationMinutes": 10,
                "cookingMinutes": 480,
                "aggregateLikes": 57,
                "spoonacularScore": 99.0,
                "healthScore": 100.0,
                "pricePerServing": 293.64,
                "extendedIngredients": [
                    {
                        "id": 6008,
                        "aisle": "Canned and Jarred",
                        "image": "beef-broth.png",
                        "consistency": "liquid",
                        "name": "canned beef broth",
                        "nameClean": "beef broth",
                        "original": "1 14.5oz can of Beef Broth",
                        "originalName": "Beef Broth",
                        "amount": 14.5,
                        "unit": "oz",
                        "meta": [
                            "canned"
                        ],
                        "measures": {
                            "us": {
                                "amount": 14.5,
                                "unitShort": "oz",
                                "unitLong": "ounces"
                            },
                            "metric": {
                                "amount": 411.068,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 11124,
                        "aisle": "Produce",
                        "image": "sliced-carrot.png",
                        "consistency": "solid",
                        "name": "carrots",
                        "nameClean": "carrot",
                        "original": "2 large carrots, chopped",
                        "originalName": "carrots, chopped",
                        "amount": 2.0,
                        "unit": "large",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "large",
                                "unitLong": "larges"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "large",
                                "unitLong": "larges"
                            }
                        }
                    },
                    {
                        "id": 11143,
                        "aisle": "Produce",
                        "image": "celery.jpg",
                        "consistency": "solid",
                        "name": "celery",
                        "nameClean": "celery",
                        "original": "2 stalks celery, chopped",
                        "originalName": "celery, chopped",
                        "amount": 2.0,
                        "unit": "stalks",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "stalks",
                                "unitLong": "stalks"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "stalks",
                                "unitLong": "stalks"
                            }
                        }
                    },
                    {
                        "id": 6147,
                        "aisle": "Canned and Jarred",
                        "image": "cream-of-mushroom-soup.png",
                        "consistency": "liquid",
                        "name": "cream of mushroom soup",
                        "nameClean": "condensed cream of mushroom soup",
                        "original": "1 26oz can Cream of Mushroom Soup",
                        "originalName": "Cream of Mushroom Soup",
                        "amount": 26.0,
                        "unit": "oz",
                        "meta": [
                            "canned"
                        ],
                        "measures": {
                            "us": {
                                "amount": 26.0,
                                "unitShort": "oz",
                                "unitLong": "ounces"
                            },
                            "metric": {
                                "amount": 737.088,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 11291,
                        "aisle": "Produce",
                        "image": "spring-onions.jpg",
                        "consistency": "solid",
                        "name": "green onions",
                        "nameClean": "spring onions",
                        "original": "3 green onions, chopped",
                        "originalName": "green onions, chopped",
                        "amount": 3.0,
                        "unit": "",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 3.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11352,
                        "aisle": "Produce",
                        "image": "potatoes-yukon-gold.png",
                        "consistency": "solid",
                        "name": "new potatoes",
                        "nameClean": "potato",
                        "original": "10 new (red)potatoes",
                        "originalName": "new (red)potatoes",
                        "amount": 10.0,
                        "unit": "",
                        "meta": [
                            "red",
                            "()"
                        ],
                        "measures": {
                            "us": {
                                "amount": 10.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 10.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11282,
                        "aisle": "Produce",
                        "image": "brown-onion.png",
                        "consistency": "solid",
                        "name": "onion",
                        "nameClean": "onion",
                        "original": "1 small onion chopped",
                        "originalName": "onion chopped",
                        "amount": 1.0,
                        "unit": "small",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "small",
                                "unitLong": "small"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "small",
                                "unitLong": "small"
                            }
                        }
                    },
                    {
                        "id": 1042027,
                        "aisle": null,
                        "image": "seasoning.png",
                        "consistency": "solid",
                        "name": "seasoning",
                        "nameClean": "seasoning",
                        "original": "½ cup Dale's Seasoning",
                        "originalName": "Dale's Seasoning",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 118.294,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 10023618,
                        "aisle": "Meat",
                        "image": "beef-cubes-raw.png",
                        "consistency": "solid",
                        "name": "stew meat",
                        "nameClean": "beef cubes",
                        "original": "2 pounds stew meat",
                        "originalName": "stew meat",
                        "amount": 2.0,
                        "unit": "pounds",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "lb",
                                "unitLong": "pounds"
                            },
                            "metric": {
                                "amount": 907.185,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 14412,
                        "aisle": "Beverages",
                        "image": "water.png",
                        "consistency": "liquid",
                        "name": "water",
                        "nameClean": "water",
                        "original": "2 cups water",
                        "originalName": "water",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 473.176,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    }
                ],
                "id": 715446,
                "title": "Slow Cooker Beef Stew",
                "readyInMinutes": 490,
                "servings": 6,
                "sourceUrl": "http://www.pinkwhen.com/slow-cooker-beef-stew-recipe/",
                "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
                "imageType": "jpg",
                "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One portion of this dish contains approximately <b>52g of protein</b>, <b>16g of fat</b>, and a total of <b>528 calories</b>. This recipe serves 6. For <b>$2.94 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. 58 people found this recipe to be scrumptious and satisfying. It works well as a reasonably priced main course for <b>Winter</b>. A mixture of canned beef broth, carrots, green onions, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around <b>8 hours and 10 minutes</b>. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/butternut-squash-beef-stew-instant-pot-pressure-cooker-or-slow-cooker-840470\">Butternut Squash Beef Stew (Instant Pot, Pressure Cooker or Slow Cooker)</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-990111\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-770894\">Slow-Cooker Beef Stew</a>.",
                "cuisines": [],
                "dishTypes": [
                    "lunch",
                    "main course",
                    "main dish",
                    "dinner"
                ],
                "diets": [
                    "gluten free",
                    "dairy free"
                ],
                "occasions": [
                    "fall",
                    "winter"
                ],
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "To get started, heat your slow cooker to low.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404718,
                                        "name": "slow cooker",
                                        "localizedName": "slow cooker",
                                        "image": "slow-cooker.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well.",
                                "ingredients": [
                                    {
                                        "id": 6147,
                                        "name": "cream of mushroom soup",
                                        "localizedName": "cream of mushroom soup",
                                        "image": "cream-of-mushroom-soup.png"
                                    },
                                    {
                                        "id": 6008,
                                        "name": "beef broth",
                                        "localizedName": "beef broth",
                                        "image": "beef-broth.png"
                                    },
                                    {
                                        "id": 1042027,
                                        "name": "seasoning",
                                        "localizedName": "seasoning",
                                        "image": "seasoning.png"
                                    },
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "water.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 3,
                                "step": "Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them.",
                                "ingredients": [
                                    {
                                        "id": 1102047,
                                        "name": "salt and pepper",
                                        "localizedName": "salt and pepper",
                                        "image": "salt-and-pepper.jpg"
                                    },
                                    {
                                        "id": 11291,
                                        "name": "green onions",
                                        "localizedName": "green onions",
                                        "image": "spring-onions.jpg"
                                    },
                                    {
                                        "id": 10023618,
                                        "name": "beef stew meat",
                                        "localizedName": "beef stew meat",
                                        "image": "beef-cubes-raw.png"
                                    },
                                    {
                                        "id": 11352,
                                        "name": "potato",
                                        "localizedName": "potato",
                                        "image": "potatoes-yukon-gold.png"
                                    },
                                    {
                                        "id": 11124,
                                        "name": "carrot",
                                        "localizedName": "carrot",
                                        "image": "sliced-carrot.png"
                                    },
                                    {
                                        "id": 11143,
                                        "name": "celery",
                                        "localizedName": "celery",
                                        "image": "celery.jpg"
                                    },
                                    {
                                        "id": 11282,
                                        "name": "onion",
                                        "localizedName": "onion",
                                        "image": "brown-onion.png"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 480,
                                    "unit": "minutes"
                                }
                            }
                        ]
                    }
                ],
                "sourceName": null,
                "creditsText": null,
                "spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-beef-stew-715446",
                "usedIngredientCount": 0,
                "missedIngredientCount": 9,
                "missedIngredients": [
                    {
                        "id": 6008,
                        "amount": 14.5,
                        "unit": "oz",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Canned and Jarred",
                        "name": "canned beef broth",
                        "original": "1 14.5oz can of Beef Broth",
                        "originalName": "Beef Broth",
                        "meta": [
                            "canned"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-broth.png"
                    },
                    {
                        "id": 11124,
                        "amount": 2.0,
                        "unit": "large",
                        "unitLong": "larges",
                        "unitShort": "large",
                        "aisle": "Produce",
                        "name": "carrots",
                        "original": "2 large carrots, chopped",
                        "originalName": "carrots, chopped",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png"
                    },
                    {
                        "id": 11143,
                        "amount": 2.0,
                        "unit": "stalks",
                        "unitLong": "stalks",
                        "unitShort": "stalks",
                        "aisle": "Produce",
                        "name": "celery",
                        "original": "2 stalks celery, chopped",
                        "originalName": "celery, chopped",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/celery.jpg"
                    },
                    {
                        "id": 6147,
                        "amount": 26.0,
                        "unit": "oz",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Canned and Jarred",
                        "name": "cream of mushroom soup",
                        "original": "1 26oz can Cream of Mushroom Soup",
                        "originalName": "Cream of Mushroom Soup",
                        "meta": [
                            "canned"
                        ],
                        "extendedName": "canned cream of mushroom soup",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-of-mushroom-soup.png"
                    },
                    {
                        "id": 11291,
                        "amount": 3.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "green onions",
                        "original": "3 green onions, chopped",
                        "originalName": "green onions, chopped",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
                    },
                    {
                        "id": 11352,
                        "amount": 10.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "new potatoes",
                        "original": "10 new (red)potatoes",
                        "originalName": "new (red)potatoes",
                        "meta": [
                            "red",
                            "()"
                        ],
                        "extendedName": "red new potatoes",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
                    },
                    {
                        "id": 11282,
                        "amount": 1.0,
                        "unit": "small",
                        "unitLong": "small",
                        "unitShort": "small",
                        "aisle": "Produce",
                        "name": "onion",
                        "original": "1 small onion chopped",
                        "originalName": "onion chopped",
                        "meta": [
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
                    },
                    {
                        "id": 1042027,
                        "amount": 0.5,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": null,
                        "name": "seasoning",
                        "original": "½ cup Dale's Seasoning",
                        "originalName": "Dale's Seasoning",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png"
                    },
                    {
                        "id": 10023618,
                        "amount": 2.0,
                        "unit": "pounds",
                        "unitLong": "pounds",
                        "unitShort": "lb",
                        "aisle": "Meat",
                        "name": "stew meat",
                        "original": "2 pounds stew meat",
                        "originalName": "stew meat",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            },
            {
                "vegetarian": false,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": true,
                "cheap": false,
                "veryPopular": true,
                "sustainable": false,
                "weightWatcherSmartPoints": 11,
                "gaps": "no",
                "lowFodmap": false,
                "preparationMinutes": 10,
                "cookingMinutes": 45,
                "aggregateLikes": 1866,
                "spoonacularScore": 99.0,
                "healthScore": 73.0,
                "creditsText": "Jen West",
                "sourceName": "Pink When",
                "pricePerServing": 276.67,
                "extendedIngredients": [
                    {
                        "id": 9037,
                        "aisle": "Produce",
                        "image": "avocado.jpg",
                        "consistency": "solid",
                        "name": "avocado",
                        "nameClean": "avocado",
                        "original": "additional toppings: diced avocado, micro greens, chopped basil)",
                        "originalName": "additional toppings: diced avocado, micro greens, chopped basil)",
                        "amount": 8.0,
                        "unit": "servings",
                        "meta": [
                            "diced",
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 11124,
                        "aisle": "Produce",
                        "image": "sliced-carrot.png",
                        "consistency": "solid",
                        "name": "carrots",
                        "nameClean": "carrot",
                        "original": "3 medium carrots, peeled and diced",
                        "originalName": "carrots, peeled and diced",
                        "amount": 3.0,
                        "unit": "medium",
                        "meta": [
                            "diced",
                            "peeled"
                        ],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "medium",
                                "unitLong": "mediums"
                            },
                            "metric": {
                                "amount": 3.0,
                                "unitShort": "medium",
                                "unitLong": "mediums"
                            }
                        }
                    },
                    {
                        "id": 10111143,
                        "aisle": "Produce",
                        "image": "celery.jpg",
                        "consistency": "solid",
                        "name": "celery stalks",
                        "nameClean": "celery sticks",
                        "original": "3 celery stalks, diced",
                        "originalName": "celery stalks, diced",
                        "amount": 3.0,
                        "unit": "",
                        "meta": [
                            "diced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 3.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 5062,
                        "aisle": "Meat",
                        "image": "chicken-breasts.png",
                        "consistency": "solid",
                        "name": "chicken breast",
                        "nameClean": "chicken breast",
                        "original": "2 cups fully-cooked chicken breast, shredded (may be omitted for a vegetarian version)",
                        "originalName": "fully-cooked chicken breast, shredded (may be omitted for a vegetarian version)",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [
                            "shredded",
                            "fully-cooked",
                            "for a vegetarian version)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 473.176,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11297,
                        "aisle": "Produce;Spices and Seasonings",
                        "image": "parsley.jpg",
                        "consistency": "solid",
                        "name": "flat leaf parsley",
                        "nameClean": "parsley",
                        "original": "½ cup flat leaf Italian parsley, chopped (plus extra for garnish)",
                        "originalName": "flat leaf Italian parsley, chopped (plus extra for garnish)",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [
                            "italian",
                            "chopped",
                            "for garnish)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 118.294,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.png",
                        "consistency": "solid",
                        "name": "garlic",
                        "nameClean": "garlic",
                        "original": "6 cloves of garlic, finely minced",
                        "originalName": "garlic, finely minced",
                        "amount": 6.0,
                        "unit": "cloves",
                        "meta": [
                            "finely minced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 6.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            },
                            "metric": {
                                "amount": 6.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            }
                        }
                    },
                    {
                        "id": 4053,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "olive-oil.jpg",
                        "consistency": "liquid",
                        "name": "olive oil",
                        "nameClean": "olive oil",
                        "original": "2 tablespoons olive oil",
                        "originalName": "olive oil",
                        "amount": 2.0,
                        "unit": "tablespoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 10411529,
                        "aisle": "Produce",
                        "image": "plum-tomatoes.png",
                        "consistency": "solid",
                        "name": "plum tomatoes",
                        "nameClean": "plum tomato",
                        "original": "28 ounce-can plum tomatoes, drained and rinsed, chopped",
                        "originalName": "can plum tomatoes, drained and rinsed, chopped",
                        "amount": 28.0,
                        "unit": "ounce",
                        "meta": [
                            "drained and rinsed",
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 28.0,
                                "unitShort": "oz",
                                "unitLong": "ounces"
                            },
                            "metric": {
                                "amount": 793.787,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 10016069,
                        "aisle": "Pasta and Rice;Canned and Jarred",
                        "image": "red-lentils.png",
                        "consistency": "solid",
                        "name": "red lentils",
                        "nameClean": "dried red lentils",
                        "original": "2 cups dried red lentils, rinsed",
                        "originalName": "dried red lentils, rinsed",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [
                            "dried",
                            "red",
                            "rinsed"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 473.176,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 1102047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt-and-pepper.jpg",
                        "consistency": "solid",
                        "name": "salt and pepper",
                        "nameClean": "salt and pepper",
                        "original": "salt and black pepper, to taste",
                        "originalName": "salt and black pepper, to taste",
                        "amount": 8.0,
                        "unit": "servings",
                        "meta": [
                            "black",
                            "to taste"
                        ],
                        "measures": {
                            "us": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 8.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 11564,
                        "aisle": "Produce",
                        "image": "turnips.png",
                        "consistency": "solid",
                        "name": "turnip",
                        "nameClean": "turnip",
                        "original": "1 large turnip, peeled and diced",
                        "originalName": "turnip, peeled and diced",
                        "amount": 1.0,
                        "unit": "large",
                        "meta": [
                            "diced",
                            "peeled"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "large",
                                "unitLong": "large"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "large",
                                "unitLong": "large"
                            }
                        }
                    },
                    {
                        "id": 6615,
                        "aisle": "Canned and Jarred",
                        "image": "chicken-broth.png",
                        "consistency": "liquid",
                        "name": "vegetable stock",
                        "nameClean": "vegetable stock",
                        "original": "8 cups vegetable stock",
                        "originalName": "vegetable stock",
                        "amount": 8.0,
                        "unit": "cups",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 8.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 1.893,
                                "unitShort": "l",
                                "unitLong": "liters"
                            }
                        }
                    },
                    {
                        "id": 10511282,
                        "aisle": "Produce",
                        "image": "brown-onion.png",
                        "consistency": "solid",
                        "name": "yellow onion",
                        "nameClean": "yellow onion",
                        "original": "1 medium yellow onion, diced",
                        "originalName": "yellow onion, diced",
                        "amount": 1.0,
                        "unit": "medium",
                        "meta": [
                            "diced",
                            "yellow"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "medium",
                                "unitLong": "medium"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "medium",
                                "unitLong": "medium"
                            }
                        }
                    }
                ],
                "id": 715415,
                "title": "Red Lentil Soup with Chicken and Turnips",
                "readyInMinutes": 55,
                "servings": 8,
                "sourceUrl": "http://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/",
                "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
                "imageType": "jpg",
                "summary": "Need a <b>gluten free and dairy free main course</b>? Red Lentil Soup with Chicken and Turnips could be an outstanding recipe to try. For <b>$2.8 per serving</b>, this recipe <b>covers 37%</b> of your daily requirements of vitamins and minerals. One serving contains <b>448 calories</b>, <b>23g of protein</b>, and <b>20g of fat</b>. Head to the store and pick up garlic, olive oil, celery stalks, and a few other things to make it today. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes about <b>55 minutes</b>. Plenty of people made this recipe, and 1866 would say it hit the spot. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/clean-eating-carrot-ginger-red-lentil-soup-921419\">Clean Eating Carrot & Ginger Red Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/one-pot-red-lentil-sweet-potato-stew-928497\">One-Pot Red Lentil Sweet Potato Stew</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a> for similar recipes.",
                "cuisines": [],
                "dishTypes": [
                    "soup"
                ],
                "diets": [
                    "gluten free",
                    "dairy free"
                ],
                "occasions": [
                    "fall",
                    "winter"
                ],
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "To a large dutch oven or soup pot, heat the olive oil over medium heat.",
                                "ingredients": [
                                    {
                                        "id": 4053,
                                        "name": "olive oil",
                                        "localizedName": "olive oil",
                                        "image": "olive-oil.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "soup",
                                        "localizedName": "soup",
                                        "image": ""
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404667,
                                        "name": "dutch oven",
                                        "localizedName": "dutch oven",
                                        "image": "dutch-oven.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
                                "ingredients": [
                                    {
                                        "id": 11124,
                                        "name": "carrot",
                                        "localizedName": "carrot",
                                        "image": "sliced-carrot.png"
                                    },
                                    {
                                        "id": 11143,
                                        "name": "celery",
                                        "localizedName": "celery",
                                        "image": "celery.jpg"
                                    },
                                    {
                                        "id": 11282,
                                        "name": "onion",
                                        "localizedName": "onion",
                                        "image": "brown-onion.png"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 10,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 3,
                                "step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
                                "ingredients": [
                                    {
                                        "id": 1102047,
                                        "name": "salt and pepper",
                                        "localizedName": "salt and pepper",
                                        "image": "salt-and-pepper.jpg"
                                    },
                                    {
                                        "id": 6615,
                                        "name": "vegetable stock",
                                        "localizedName": "vegetable stock",
                                        "image": "chicken-broth.png"
                                    },
                                    {
                                        "id": 10016069,
                                        "name": "red lentils",
                                        "localizedName": "red lentils",
                                        "image": "red-lentils.png"
                                    },
                                    {
                                        "id": 11529,
                                        "name": "tomato",
                                        "localizedName": "tomato",
                                        "image": "tomato.png"
                                    },
                                    {
                                        "id": 10316069,
                                        "name": "lentils",
                                        "localizedName": "lentils",
                                        "image": "lentils-brown.jpg"
                                    },
                                    {
                                        "id": 11564,
                                        "name": "turnip",
                                        "localizedName": "turnip",
                                        "image": "turnips.png"
                                    },
                                    {
                                        "id": 11215,
                                        "name": "garlic",
                                        "localizedName": "garlic",
                                        "image": "garlic.png"
                                    },
                                    {
                                        "id": 0,
                                        "name": "soup",
                                        "localizedName": "soup",
                                        "image": ""
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404794,
                                        "name": "stove",
                                        "localizedName": "stove",
                                        "image": "oven.jpg"
                                    },
                                    {
                                        "id": 404752,
                                        "name": "pot",
                                        "localizedName": "pot",
                                        "image": "stock-pot.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 22,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 4,
                                "step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
                                "ingredients": [
                                    {
                                        "id": 5062,
                                        "name": "chicken breast",
                                        "localizedName": "chicken breast",
                                        "image": "chicken-breasts.png"
                                    },
                                    {
                                        "id": 1042027,
                                        "name": "seasoning",
                                        "localizedName": "seasoning",
                                        "image": "seasoning.png"
                                    },
                                    {
                                        "id": 11297,
                                        "name": "parsley",
                                        "localizedName": "parsley",
                                        "image": "parsley.jpg"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 5,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 5,
                                "step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!",
                                "ingredients": [
                                    {
                                        "id": 10511297,
                                        "name": "fresh parsley",
                                        "localizedName": "fresh parsley",
                                        "image": "parsley.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "soup",
                                        "localizedName": "soup",
                                        "image": ""
                                    }
                                ],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "spoonacularSourceUrl": "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415",
                "usedIngredientCount": 0,
                "missedIngredientCount": 11,
                "missedIngredients": [
                    {
                        "id": 9037,
                        "amount": 8.0,
                        "unit": "servings",
                        "unitLong": "servings",
                        "unitShort": "servings",
                        "aisle": "Produce",
                        "name": "avocado",
                        "original": "additional toppings: diced avocado, micro greens, chopped basil)",
                        "originalName": "additional toppings: diced avocado, micro greens, chopped basil)",
                        "meta": [
                            "diced",
                            "chopped"
                        ],
                        "extendedName": "diced avocado",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/avocado.jpg"
                    },
                    {
                        "id": 11124,
                        "amount": 3.0,
                        "unit": "medium",
                        "unitLong": "mediums",
                        "unitShort": "medium",
                        "aisle": "Produce",
                        "name": "carrots",
                        "original": "3 medium carrots, peeled and diced",
                        "originalName": "carrots, peeled and diced",
                        "meta": [
                            "diced",
                            "peeled"
                        ],
                        "extendedName": "diced carrots",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png"
                    },
                    {
                        "id": 10111143,
                        "amount": 3.0,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "celery stalks",
                        "original": "3 celery stalks, diced",
                        "originalName": "celery stalks, diced",
                        "meta": [
                            "diced"
                        ],
                        "extendedName": "diced celery stalks",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/celery.jpg"
                    },
                    {
                        "id": 5062,
                        "amount": 2.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Meat",
                        "name": "chicken breast",
                        "original": "2 cups fully-cooked chicken breast, shredded (may be omitted for a vegetarian version)",
                        "originalName": "fully-cooked chicken breast, shredded (may be omitted for a vegetarian version)",
                        "meta": [
                            "shredded",
                            "fully-cooked",
                            "for a vegetarian version)"
                        ],
                        "extendedName": "shredded chicken breast",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png"
                    },
                    {
                        "id": 11297,
                        "amount": 0.5,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Produce;Spices and Seasonings",
                        "name": "flat leaf parsley",
                        "original": "½ cup flat leaf Italian parsley, chopped (plus extra for garnish)",
                        "originalName": "flat leaf Italian parsley, chopped (plus extra for garnish)",
                        "meta": [
                            "italian",
                            "chopped",
                            "for garnish)"
                        ],
                        "extendedName": "italian flat leaf parsley",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg"
                    },
                    {
                        "id": 11215,
                        "amount": 6.0,
                        "unit": "cloves",
                        "unitLong": "cloves",
                        "unitShort": "cloves",
                        "aisle": "Produce",
                        "name": "garlic",
                        "original": "6 cloves of garlic, finely minced",
                        "originalName": "garlic, finely minced",
                        "meta": [
                            "finely minced"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                    },
                    {
                        "id": 10411529,
                        "amount": 28.0,
                        "unit": "ounce",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Produce",
                        "name": "plum tomatoes",
                        "original": "28 ounce-can plum tomatoes, drained and rinsed, chopped",
                        "originalName": "can plum tomatoes, drained and rinsed, chopped",
                        "meta": [
                            "drained and rinsed",
                            "chopped"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/plum-tomatoes.png"
                    },
                    {
                        "id": 10016069,
                        "amount": 2.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Pasta and Rice;Canned and Jarred",
                        "name": "red lentils",
                        "original": "2 cups dried red lentils, rinsed",
                        "originalName": "dried red lentils, rinsed",
                        "meta": [
                            "dried",
                            "red",
                            "rinsed"
                        ],
                        "extendedName": "dried red lentils",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-lentils.png"
                    },
                    {
                        "id": 11564,
                        "amount": 1.0,
                        "unit": "large",
                        "unitLong": "large",
                        "unitShort": "large",
                        "aisle": "Produce",
                        "name": "turnip",
                        "original": "1 large turnip, peeled and diced",
                        "originalName": "turnip, peeled and diced",
                        "meta": [
                            "diced",
                            "peeled"
                        ],
                        "extendedName": "diced turnip",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/turnips.png"
                    },
                    {
                        "id": 6615,
                        "amount": 8.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Canned and Jarred",
                        "name": "vegetable stock",
                        "original": "8 cups vegetable stock",
                        "originalName": "vegetable stock",
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png"
                    },
                    {
                        "id": 10511282,
                        "amount": 1.0,
                        "unit": "medium",
                        "unitLong": "medium",
                        "unitShort": "medium",
                        "aisle": "Produce",
                        "name": "yellow onion",
                        "original": "1 medium yellow onion, diced",
                        "originalName": "yellow onion, diced",
                        "meta": [
                            "diced",
                            "yellow"
                        ],
                        "extendedName": "diced yellow onion",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
                    }
                ],
                "likes": 0,
                "usedIngredients": [],
                "unusedIngredients": []
            }
        ]
        this.setAsObservable()
    }

    getData(id: number): ApiRecipe {
        return this.dummylist.find(x => x.id === id)
    }

    setAsObservable() {
        this.ob = of(this.dummylist)
    }
}
