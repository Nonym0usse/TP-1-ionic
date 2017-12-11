import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
  }

  startQR()
  {
      this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized) {
         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
           console.log('Scanned something', text);

           this.qrScanner.hide(); // hide camera preview
           scanSub.unsubscribe(); // stop scanning
         });

         this.qrScanner.show();


       } else if (status.denied) {

       } else {

      }
    })
    .catch((e: any) => console.log('Error is', e));
  }
}
