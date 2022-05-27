import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { ModalController } from '@ionic/angular';
import { TocComponent } from 'src/app/shared/toc/toc.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup
  isSubmitted = false
  errorMessage: string

  constructor(public authService: AuthService, 
              public databaseService: DatabaseService, 
              public formBuilder: FormBuilder,
              public modalController: ModalController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeat: ['', [Validators.required, Validators.minLength(6)]],
      toc: [false, [Validators.requiredTrue]]
    })
  }

  /**
   * A method that will submit the form and register a new user if the information given is valid.
   * @returns True if all information is valid and a new user is created. False if there are errors.
   */
  async register(): Promise<boolean> {
    this.isSubmitted = true


    if (!this.registerForm.valid) {
      this.errorMessage = 'Please provide all the required values.'
      this.registerForm.setErrors({active: true})
      return false
    }

    if (this.registerForm.value.password !== this.registerForm.value.repeat) {
      this.errorMessage = 'Password does not match.'
      this.registerForm.setErrors({active: true})
      return false
    }

    try {
      const result = await this.authService.signUpWithEmail(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.name)
      this.databaseService.createUser(result.user.uid, result.user.displayName)
      return true
    } catch (error) {
      this.registerForm.setErrors({active: true})

      if(error.code === 'auth/email-already-in-use') {
        this.errorMessage = 'This e-mail adress is already in use.'
      } else {
        this.errorMessage = error.message
      }
      return false
    }
  }

  async presentModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: TocComponent
    })
    return await modal.present()
  }
}
