import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { intervalToDuration } from 'date-fns';
import { ApiRecipe } from 'src/app/datatypes/apiResult';

@Component({
  selector: 'app-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.scss'],
})
export class ApiItemComponent implements OnInit {

  @Input() recipe: ApiRecipe

  constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipe.convertMinutes = this.converseToTimeFormat(this.recipe.readyInMinutes)
  }

  private converseToTimeFormat(valueInMinutes: number): string {
    const duration = intervalToDuration({start: 0, end: valueInMinutes*60 * 1000})
    return `${duration.hours.toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false})}:${duration.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`
  }

}
