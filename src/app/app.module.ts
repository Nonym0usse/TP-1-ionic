import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

/** MODULES **/

import { HomePage } from '../pages/home/home';
import { VideoPageModule } from '../pages/video/video.module';
import { GeolocalisationPageModule } from '../pages/geolocalisation/geolocalisation.module';
import { GooglemapsPageModule } from '../pages/googlemaps/googlemaps.module';
import { ShakePageModule } from '../pages/shake/shake.module';
import { GyroscopePageModule } from '../pages/gyroscope/gyroscope.module';
import { ToastPageModule } from '../pages/toast/toast.module';
import { FonctionPageModule } from '../pages/fonction/fonction.module';
import { TextToSpeechPageModule } from '../pages/text-to-speech/text-to-speech.module';
import { VibrationPageModule } from '../pages/vibration/vibration.module';
import { QrcodePageModule } from '../pages/qrcode/qrcode.module';
import { SocialsharingPageModule } from '../pages/socialsharing/socialsharing.module';

/** FONCTIONNALITES **/

import { Camera, CameraOptions } from '@ionic-native/camera';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { VideoPlayer } from '@ionic-native/video-player';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Shake } from '@ionic-native/shake';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    VideoPageModule,
    GeolocalisationPageModule,
    GooglemapsPageModule,
    GyroscopePageModule,
    ToastPageModule,
    VibrationPageModule,
    FonctionPageModule,
    TextToSpeechPageModule,
    ShakePageModule,
    QrcodePageModule,
    SocialsharingPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
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
    VideoPlayer,
    MediaCapture,
    Shake,
    QRScanner,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
