import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private storageKey: string

  darkValueBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  darkValue: Observable<boolean> = this.darkValueBehavior.asObservable()

  subscriptions: Subscription[] = []

  constructor(public authService: AuthService, public auth: Auth) {
    //If the user signs out, all subscriptions in the service should be unsubscribed from.
    auth.onAuthStateChanged(user => {
      if (!user) {
        this.subscriptions.forEach(u => u.unsubscribe())
      } else {
        this.setStorageKey()
        this.retrieveDarkValue().then(value => this.darkValueBehavior.next(value))
        this.setAppTheme()
      }
    })
  }

  setAppTheme(): void {
    this.subscriptions.push(this.darkValue.subscribe(value => {
      if (value) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    }))
  }

  async persistDarkValue(value: boolean): Promise<void> {
    this.darkValueBehavior.next(value)

    this.subscriptions.push(this.darkValue.subscribe(async value => {
      await Storage.set({
        key: this.storageKey,
        value: JSON.stringify(value)
      })
    }))
  }

  async retrieveDarkValue(): Promise<boolean> {
    const theme = await Storage.get({ key: this.storageKey })

    return JSON.parse(theme.value) || false
  }

  private setStorageKey(): void {
    this.storageKey = `theme-${this.authService.currentUser.email}`
  }
}
