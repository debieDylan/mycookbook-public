import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyrecipesPageRoutingModule } from './myrecipes-routing.module';

import { MyrecipesPage } from './myrecipes.page';
import { SharedModule } from '../shared/shared.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyrecipesPageRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
  ],
  declarations: [MyrecipesPage]
})
export class MyrecipesPageModule { }
