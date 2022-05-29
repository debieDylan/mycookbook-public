import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController, ToastController, ViewWillEnter } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { DatabaseService } from '../services/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, ViewWillEnter {

  isNative = Capacitor.isNativePlatform();
  loginForm: FormGroup
  imageSource: string

  constructor(public databaseService: DatabaseService,
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  /**
   * Everytime the user returns to this page, any filled in data is cleaned.
   */
  ionViewWillEnter(): void {
    this.loginForm.get(['email']).setValue(null)
    this.loginForm.get(['password']).setValue(null)
  }

  /**
   * A method that will sign in the user if both e-mail and password is correct.
   */
  async signInWithEmail(): Promise<void> {
    try {
      await this.authService.signInWithEmail(this.loginForm.value.email, this.loginForm.value.password)
    } catch (error) {
      this.loginForm.setErrors({ unauthenticated: true })
    }
  }

  /**
   * A method that shows an alert window, asking to provide the e-mailadress to recover a password.
   */
  async handleRecovery(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Recover Password',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alertColor'
        },
        {
          text: 'Send',
          handler: async (inputs) => {
            if (inputs.email) {
              await this.authService.sendPasswordReset(inputs.email)
                .then(async _ => await this.toastMessage(`A recovery mail has been sent to ${inputs.email}`))
                .catch(async _ => await this.toastMessage('The e-mailadress submitted is invalid.'))
            } else {
              this.toastMessage('Email is empty')
            }
          },
          cssClass: 'alertColor'
        }
      ],
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'yourEmail@gmail.com'
        }
      ]
    })
    await alert.present()
  }

  async toastMessage(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      buttons: [
        {
          side: 'end',
          text: 'OK',
          role: 'cancel'
        }
      ]
    })
    await toast.present()
  }
}
