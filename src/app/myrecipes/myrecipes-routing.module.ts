import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeResolverService } from '../resolver/recipe-resolver.service';

import { MyrecipesPage } from './myrecipes.page';

const routes: Routes = [
  {
    path: '',
    component: MyrecipesPage,
  },
  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipePageModule)
  },
  {
    path: 'recipe/:id',
    resolve: {
      special: RecipeResolverService
    },
    loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipePageModule)
  },
  {
    path: 'recipe-details/:id',
    resolve: {
      special: RecipeResolverService
    },
    loadChildren: () => import('./recipe-details/recipe-details.module').then(m => m.RecipeDetailsPageModule),
  },
  {
    path: 'recipe-details',
    loadChildren: () => import('./recipe-details/recipe-details.module').then(m => m.RecipeDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyrecipesPageRoutingModule { }
