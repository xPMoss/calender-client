//----- | ANGULAR | -----//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Boostrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//----- | ROUTING | -----//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Models

//----- | ERROR | -----//
import { ErrorComponent } from './error/error.component';


//----- | AUTH | -----//
//import { AuthService } from './auth/auth.service'
//import { AuthGuard } from './auth/auth.guard'
//import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { AuthService } from '@auth0/auth0-angular';

import { environment as env } from '../environments/environment';

// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { Globals } from "./helpers/globals";
import { Debug } from "./helpers/debug/debug";


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    Debug,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: env.auth.domain,
      clientId: env.auth.clientId,
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
      ...env.auth,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    AngularFireModule.initializeApp(env.firebase),
    AngularFirestoreModule,
    NgbModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
      
    },
    AuthService,
    Globals,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
