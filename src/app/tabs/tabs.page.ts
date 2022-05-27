import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RecipeService } from '../services/recipe.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, OnDestroy {

  currentUser 

  constructor(public authService: AuthService, public recipeService: RecipeService, private router: Router, public themeService: ThemeService) {
    
   }

  ngOnInit() {
    this.currentUser = this.authService.currentUser
    this.loadData()
  }

  ngOnDestroy(): void {
    this.recipeService.clearRecipeList()
  }

  signOut(): void {
    this.authService.signOut()
  }

  private loadData() {
    this.recipeService.loadRecipeList()
  }
  
  navigateToPage(page: string): void {
    this.router.navigateByUrl(`tabs/${page}`)
  }
}
