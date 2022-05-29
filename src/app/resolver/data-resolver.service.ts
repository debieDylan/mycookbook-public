import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiRecipe } from '../datatypes/apiResult';
import { ApiService } from '../services/api.service';
import { DummyService } from '../services/dummy.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {

  constructor(public apiService: ApiService, public dummy: DummyService) { }

  resolve(route: ActivatedRouteSnapshot): ApiRecipe {
    let recipe: ApiRecipe
    let id = route.paramMap.get('id')
    recipe = this.apiService.getDataById(Number(id))

    if (recipe === undefined) {
      recipe = this.dummy.getData(Number(id))
    }
    return recipe
  }
}
