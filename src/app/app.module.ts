import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { MylistPage } from '../pages/mylist/mylist';
import { SchedulePage } from '../pages/schedule/schedule';
import { DatosProvider } from '../providers/datos/datos';

@NgModule({
  declarations: [
    MyApp,
    MylistPage,
		SchedulePage
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MylistPage,
		SchedulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatosProvider
  ]
})
export class AppModule {}
