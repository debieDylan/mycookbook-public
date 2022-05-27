import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeResolverService } from '../resolver/recipe-resolver.service';

import { FavoritesPage } from './favorites.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPage
  },
  {
    path: 'recipe-details/:id',
    resolve: {
      special: RecipeResolverService
    },
    loadChildren: () => import('../myrecipes/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPageRoutingModule {}
