import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { FirebaseStorage, updateMetadata, deleteObject, getDownloadURL, getStorage, ref, StringFormat, uploadString } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  storage: FirebaseStorage

  constructor(private firebase: FirebaseApp) {
    this.storage = getStorage(firebase)
   }

  async saveImage(base64Data: string, documentId: string): Promise<string> {
    const imgRef = ref(this.storage, documentId)
    const uploadResult = await uploadString(imgRef, base64Data, StringFormat.DATA_URL)
    const url = await getDownloadURL(imgRef)

    return url
  }

  async deleteImage(id: string): Promise<void> {
    const imgRef = ref(this.storage, id)
    await deleteObject(imgRef)
  }
}
