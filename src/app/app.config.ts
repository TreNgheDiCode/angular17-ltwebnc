import {
  ApplicationConfig,
  InjectionToken,
  importProvidersFrom,
} from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

export const FIREBASE_OPTIONS = new InjectionToken<string>(
  'angularfire2.app.options'
);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    importProvidersFrom([
      BrowserAnimationsModule,
      NoopAnimationsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
    ]),
  ],
};
