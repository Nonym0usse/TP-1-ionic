import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * QR code
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner, private localNotifications: LocalNotifications) {
    console.log('Démarrage en cours...');
  }

  startQR()
  {
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized)
       {
         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
           console.log(text);
           this.qrScanner.hide();
           scanSub.unsubscribe();
         });
         this.qrScanner.show();
       } else if (status.denied) {
         console.log("Erreur. Merci de mettre les droits sur votre QrScanner.")
       } else {
         console.log("Merci de mettre les droits sur votre QrScanner.")
      }
    })
    .catch((e: any) => console.log('Erreur:', e));
  }

  public notif(data: string)
  {
      this.localNotifications.schedule({
          title: "Ionic App",
          text: data,
          at: new Date(new Date().getTime() + 0),
          badge: 1,
          led: '888888' //led notifications pour android uniquement, couleur rouge
      });
  }
}
