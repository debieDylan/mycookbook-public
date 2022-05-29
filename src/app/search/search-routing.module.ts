import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverService } from '../resolver/data-resolver.service';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  },
  {
    path: 'recipe-details',
    loadChildren: () => import('./recipe-details/recipe-details.module').then(m => m.RecipeDetailsPageModule)
  },
  {
    path: 'recipe-details/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./recipe-details/recipe-details.module').then(m => m.RecipeDetailsPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule { }
