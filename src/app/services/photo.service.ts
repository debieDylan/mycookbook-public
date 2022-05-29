import { Injectable } from '@angular/core';
import { PermissionStatus, Photo, Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private readonly photos: Photo[] = []
  private photo: Photo
  private permissionGranted: PermissionStatus = { camera: 'granted', photos: 'granted' }

  constructor() { }

  getPhotos(): Photo[] {
    return this.photos
  }

  getPhoto(): Photo {
    return this.photo
  }

  async takePhoto(): Promise<void> {
    if (!this.haveCameraPermission() || !this.havePhotosPermission()) {
      await this.requestPermissions()
    }

    if (Capacitor.isNativePlatform()) {
      await this.takePhotoNative()
    } else {
      await this.takePhotoPWA() //dit moet uiteindelijk weg
    }

    //continue functionality to use photo
  }

  /* PERMISSIONS */

  private async requestPermissions(): Promise<void> {
    try {
      this.permissionGranted = await Camera.requestPermissions()
    } catch (error) {
      console.error(`Permissions aren't available on this device: ${Capacitor.getPlatform()} platform.`)
    }
  }

  //nakijken waar deze functie wordt opgeroepen...
  private async retrievePermissions(): Promise<void> {
    try {
      this.permissionGranted = await Camera.checkPermissions()
    } catch (error) {
      console.error(`Permissions aren't available on this device: ${Capacitor.getPlatform()} platform.`)
    }
  }

  /* HELPER FUNCTIONS */

  private haveCameraPermission(): boolean {
    return this.permissionGranted.camera === 'granted'
  }

  private havePhotosPermission(): boolean {
    return this.permissionGranted.photos === 'granted'
  }

  private determinePhotoSource(): CameraSource {
    if (this.havePhotosPermission() && this.haveCameraPermission()) {
      return CameraSource.Prompt
    }
    return this.havePhotosPermission() ? CameraSource.Photos : CameraSource.Camera
  }

  //nakijken waar dit wordt opgeroepen...
  private getPhotoFormat(uri: string): string {
    const splitUri = uri.split('.')
    return splitUri[splitUri.length - 1]
  }

  /* Native Photo Handler */
  private async takePhotoNative(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 50,
      resultType: CameraResultType.Base64,
      saveToGallery: this.havePhotosPermission(),
      source: this.determinePhotoSource(),
      width: 500,
      height: 500
    })
    this.photos.push(image)
    this.photo = image
  }

  /* PWA Photo Handler */

  private async takePhotoPWA(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 50,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      width: 500,
      height: 500
    })
    this.photos.push(image)
    this.photo = image
  }
}
