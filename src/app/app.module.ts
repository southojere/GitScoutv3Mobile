import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { GithubProvider } from '../providers/github/github';
import { MainProvider } from '../providers/main/main';

//firebase stuff
import {AngularFireModule} from "angularfire2"
import {AngularFireDatabaseModule} from "angularfire2/database"

const config ={
  apiKey: "ADD FIREBASE API KEY HERE",
  authDomain: "gitsearch-ff7bc.firebaseapp.com",
  databaseURL: "https://gitsearch-ff7bc.firebaseio.com",
  projectId: "gitsearch-ff7bc",
  storageBucket: "gitsearch-ff7bc.appspot.com",
  messagingSenderId: "1079153696687"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubProvider,
    MainProvider
  ]
})
export class AppModule {}
