import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LugarPage } from "../pages/lugar/lugar";
import { PerfilPage } from "../pages/perfil/perfil";
import { TabsPage } from "../pages/tabs/tabs";
import { TerceraPage } from "../pages/tercera/tercera";

// Angular firebase libraries
import { AngularFireModule } from "@angular/fire";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { PlaceAddPage } from "../pages/place-add/place-add";
import { PlacesService } from "../services/places.service";
import { LoginPage } from "../pages/login/login";
import { AuthService } from "../services/auth.service";

// Firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyCd_5pDjhvtgb-j0t80EgorvYOfY9Uzwt0",
  authDomain: "ionicplatzi-bd1c8.firebaseapp.com",
  databaseURL: "https://ionicplatzi-bd1c8.firebaseio.com",
  projectId: "ionicplatzi-bd1c8",
  storageBucket: "ionicplatzi-bd1c8.appspot.com",
  messagingSenderId: "493628059664"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    TerceraPage,
    PlaceAddPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    TerceraPage,
    PlaceAddPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PlacesService,
    AuthService
  ]
})
export class AppModule {}
