import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = this.authService.currentUser

  constructor(public authService: AuthService, public alertController: AlertController, public toastController: ToastController,
    private recipeService: RecipeService, private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  async sendVerificationEmail(): Promise<void> {
    this.authService.sendVerification(this.user)
    this.toast("A verification email has been send.")
  }

  async changePassword(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Change Password',
      subHeader: 'Please enter your e-mailadress so we can send you a verification message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alertColor'
        }, {
          text: 'Send',
          handler: async (inputs) => {
            //first authenticate
            const credential = await this.authService.reAuthenticateUser(inputs.password).catch(async _ => {
              await this.toast("password is incorrect.")
            })
            if (credential) {
              //run function to change password.
              this.authService.sendPasswordReset()
              this.toast(`A mail has been send to ${this.user.email}`)
            }
          },
          cssClass: 'alertColor'
        }
      ],
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'password'
        }
      ]
    })
    alert.present()
  }

  async deleteAccount(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Delete Account',
      subHeader: 'WARNING! You are about to delete your account. All information, including recipes, favorites and images will be permanently deleted. Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alertColor'
        }, {
          text: 'Delete Account',
          handler: async (inputs) => {
            //first authenticate.
            const credential = await this.authService.reAuthenticateUser(inputs.password).catch(async _ => {
              await this.toast("password is incorrect.")
            })
            if (credential) {
              await this.recipeService.deleteAllRecipes()
              await this.databaseService.deleteUser()
              this.toast("Operation succesful, user deleted.")
            }
          },
          cssClass: 'alertColor'
        }
      ],
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'password'
        }
      ]
    })
    alert.present()
  }

  async toast(message: string): Promise<void> {
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
