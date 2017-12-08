import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VideoPage } from '../pages/video/video';
import { HomePage } from '../pages/home/home';
import { GeolocalisationPage } from '../pages/geolocalisation/geolocalisation';
import { GooglemapsPage } from '../pages/googlemaps/googlemaps';
import { GyroscopePage } from '../pages/gyroscope/gyroscope';
import { ToastPage } from '../pages/toast/toast';
import { VibrationPage } from '../pages/vibration/vibration';
import { FonctionPage } from '../pages/fonction/fonction';
import { ShakePage } from '../pages/shake/shake';
import { TextToSpeechPage } from '../pages/text-to-speech/text-to-speech';
import { QrcodePage } from '../pages/qrcode/qrcode';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Appareil Photo', component: HomePage },
      { title: 'Caméscope', component: VideoPage },
      { title: 'Géolocation', component: GeolocalisationPage},
      { title: 'Google Maps', component: GooglemapsPage},
      { title: 'Gyroscope', component: GyroscopePage},
      { title: 'Toast', component: ToastPage},
      { title: 'Vibration', component: VibrationPage},
      { title: 'Autre fonctionnalité', component: FonctionPage},
      { title: 'TextToSpeech', component: TextToSpeechPage},
      { title: 'Shake', component: ShakePage},
      { title: 'QR Code', component: QrcodePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
