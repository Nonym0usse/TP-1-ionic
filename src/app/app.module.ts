import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeolocalisationPage } from '../pages/geolocalisation/geolocalisation';
import { GooglemapsPage } from '../pages/googlemaps/googlemaps';
import { GyroscopePage } from '../pages/gyroscope/gyroscope';
import { ToastPage } from '../pages/toast/toast';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import { VibrationPage } from '../pages/vibration/vibration';
import { Vibration } from '@ionic-native/vibration';
import { FonctionPage } from '../pages/fonction/fonction';
import { TextToSpeechPage } from '../pages/text-to-speech/text-to-speech';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GeolocalisationPage,
    GooglemapsPage,
    GyroscopePage,
    ToastPage,
    VibrationPage,
    FonctionPage,
    TextToSpeechPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GeolocalisationPage,
    GooglemapsPage,
    GyroscopePage,
    ToastPage,
    VibrationPage,
    FonctionPage,
    TextToSpeechPage
  ],
  providers: [
    Camera,
    Geolocation,
    Base64ToGallery,
    LocalNotifications,
    StatusBar,
    SplashScreen,
    Vibration,
    TextToSpeech,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
