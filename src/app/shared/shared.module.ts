import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { ApiItemComponent } from './api-item/api-item.component';
import { InstructionComponent } from './instruction/instruction.component';
import { SwiperModule } from 'swiper/angular';
import { TocComponent } from './toc/toc.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RecipeItemComponent, ApiItemComponent, InstructionComponent, TocComponent],
  exports: [RecipeItemComponent, ApiItemComponent, InstructionComponent, TocComponent],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
    FormsModule
  ]
})
export class SharedModule { }
