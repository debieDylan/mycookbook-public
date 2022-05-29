import { Injectable, NgZone } from '@angular/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication'
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut } from '@angular/fire/auth';
import { updateProfile, User, UserCredential, deleteUser, EmailAuthProvider, reauthenticateWithCredential, sendPasswordResetEmail } from 'firebase/auth';
import { Capacitor } from '@capacitor/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: null | User = null

  constructor(public auth: Auth, public router: Router, private ngZone: NgZone, public navController: NavController) {
    this.auth.onAuthStateChanged(user => {
      this.setCurrentUser(user)
    })
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null
  }

  getProfilePic(): string {
    return this.currentUser && this.currentUser.photoURL ? this.currentUser.photoURL : '/assets/Portrait_Placeholder.png' //dit hier nakijken
  }

  getDisplayName(): string | undefined {
    return this.currentUser ? this.currentUser.displayName : undefined
  }

  getEmail(): string | undefined {
    return this.currentUser ? this.currentUser.email : undefined
  }

  getUserUID(): string | undefined {
    return this.currentUser ? this.currentUser.uid : undefined
  }

  async signOut(): Promise<void> {
    await FirebaseAuthentication.signOut()

    if (Capacitor.isNativePlatform()) {
      await signOut(this.auth)
    }
    this.router.navigateByUrl("/login", { replaceUrl: true })
  }

  /**
   * A method that signs in the user using password and e-mailadress.
   * @param email the e-mail needed to sign in.
   * @param password the password associated with the e-mail needed to sign in.
   */
  async signInWithEmail(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password)
  }

  /**
   * A method that will create a new user inside Firebase Auth. After creation the user will also be signed in.
   * @param email The e-mail adress that needs to be registered to a new user.
   * @param password The password that belongs to this account.
   * @param displayName The displayname of the user.
   * @returns A userCredential that will be used to create an aditional record inside Firestore.
   */
  async signUpWithEmail(email: string, password: string, displayName: string): Promise<UserCredential> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password)

    //update userCredential to fill in the Display Name
    await updateProfile(userCredential.user, { displayName: displayName })

    //send verification email
    await this.sendVerification(userCredential.user)

    return userCredential
  }

  async sendVerification(user: User): Promise<void> {
    await sendEmailVerification(user)
  }

  async updateDisplayName(displayName: string) {
    await updateProfile(this.auth.currentUser, {
      displayName
    })
  }

  /**
   * A method that deletes the user from Firebase Auth.
   * @returns The User object that is deleted from the system
   */
  async permaDeleteUser(): Promise<User> {
    const deletedUser = { ...this.currentUser }
    await deleteUser(this.currentUser)

    return deletedUser
  }

  /**
   * A method that re-authenticates the user, typically needed for sensitive operations.
   * @param password the password needed to re-authenticate
   * @returns New Usercredentials that can be used for sensitive operations.
   */
  async reAuthenticateUser(password: string): Promise<UserCredential> {
    const credential = EmailAuthProvider.credential(this.currentUser.email, password)
    const result = await reauthenticateWithCredential(this.currentUser, credential)

    return result
  }

  /**
   * A method that sends a password reset mail to the current User e-mailadress.
   */
  async sendPasswordReset(email?: string): Promise<void> {
    if (email) {
      await sendPasswordResetEmail(this.auth, email)
      return
    }
    await sendPasswordResetEmail(this.auth, this.currentUser.email)
  }

  private async setCurrentUser(user: User): Promise<void> {
    this.currentUser = user

    if (this.currentUser) {
      this.ngZone.run(() => {
        this.router.navigate([''])
      })
    } else {
      this.ngZone.run(() => {
        this.router.navigate(['login'])
      })
    }
  }
}
