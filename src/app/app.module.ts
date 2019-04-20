import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable, Injector  } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { Pro } from '@ionic/pro';
//Pages
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { SelectOptionPage} from '../pages/select-option/select-option';
import { MapPage } from '../pages/map/map';
import { RecordPage } from '../pages/record/record';
import { CameraPage } from '../pages/camera/camera';
import { SpotifyPage} from '../pages/spotify/spotify';
//Plugins
import { GoogleMaps } from '@ionic-native/google-maps';
import { Camera } from '@ionic-native/camera';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    SelectOptionPage,
    MapPage,
    RecordPage,
    CameraPage,
    SpotifyPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    SelectOptionPage,
    MapPage,
    RecordPage,
    CameraPage,
    SpotifyPage,

  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    GoogleMaps,
    Media,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
