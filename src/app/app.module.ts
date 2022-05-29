import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { enableIndexedDbPersistence, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker'
import { SwiperModule } from 'swiper/angular';
import { HelpComponent } from './myrecipes/recipe/component/help/help.component';

@NgModule({
  declarations: [AppComponent, HelpComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SwiperModule,
    // Firebase main import
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),

    // Firestore database import
    provideFirestore(() => {
      const firestore = getFirestore()
      //enable offline persistence
      enableIndexedDbPersistence(firestore)
      return firestore
    }),

    // Firebase authentication import
    provideAuth(() => getAuth()),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
