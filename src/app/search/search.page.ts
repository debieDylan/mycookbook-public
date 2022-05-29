import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiRecipe } from '../datatypes/apiResult';
import { ApiService } from '../services/api.service';
import { DummyService } from '../services/dummy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {

  //variable to enable / disable api
  private readApi: boolean = true

  recipes: ApiRecipe[] = []
  searchText: string = undefined
  offset: number = 0
  subscriptions: Subscription[] = []

  constructor(public apiService: ApiService, public dummy: DummyService) {
  }

  ngOnInit() {
    if (this.readApi) {
      this.retrieveRecipe()
    } else {
      console.log("read dummy data...")
      this.retrieveDummyData()
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => {
      s.unsubscribe()
    })
  }

  async retrieveRecipe(): Promise<void> {
    this.subscriptions.push(this.apiService.getRecipes(this.offset).subscribe(x => {
      x.forEach(recipe => {
        this.recipes.push(recipe)
      })
    }))
    this.offset += 10
    this.apiService.setData(this.recipes)
  }

  async loadRecipes(event: any): Promise<void> {
    if (this.readApi) {
      await this.retrieveRecipe()
    } else {
      await this.retrieveDummyData()
    }
    event.target.complete()
  }

  async retrieveDummyData(): Promise<void> {
    this.subscriptions.push(this.dummy.ob.subscribe(x => {
      x.forEach(recipe => {
        this.recipes.push(recipe)
      })
    }))
  }

  async searchChangeHandler(event: any): Promise<void> {
    this.searchText = event.detail.value
    //reset offset for search
    this.offset = 0

    //logic for presenting dummy data
    if (!this.readApi && (this.searchText !== undefined || this.searchText !== "")) {
      this.subscriptions.push(this.dummy.ob.subscribe(x => {
        this.recipes = x.filter(x => x.title.toLowerCase().includes(this.searchText))
      }))
      return
    } else if (!this.readApi) {
      await this.retrieveDummyData()
      return
    }

    //logic for presenting API data
    if (this.searchText !== undefined && this.searchText !== "") {
      this.subscriptions.push(this.apiService.getRecipesFiltered(this.searchText, this.offset).subscribe(x => {
        this.recipes = x
        this.apiService.setData(this.recipes)
      }))
    } else {
      this.recipes = []
      await this.retrieveRecipe()
    }
  }
}
