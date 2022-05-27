import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {

  darkValue: boolean

  subscriptions: Subscription[] = []

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.subscriptions.push(this.themeService.darkValue.subscribe(value => {
      this.darkValue = value
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  async toggleTheme(): Promise<void> {
    await this.themeService.persistDarkValue(this.darkValue)
    this.themeService.setAppTheme()
  }
}
