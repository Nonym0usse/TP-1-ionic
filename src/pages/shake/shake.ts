import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the ShakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shake',
  templateUrl: 'shake.html',
})
export class ShakePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private shake: Shake, private localNotifications: LocalNotifications) {
    this.shake.startWatch(60).subscribe(() => {
        this.notif('Félicitations : Vous avez shaker le téléphone !');
      });
  }

  public notif(data: string)
  {
      this.localNotifications.schedule({
          title: "Ionic App",
          text: data,
          at: new Date(new Date().getTime() + 0),
          icon: 'http://nodeimpact.com/images/favicons/apple-icon-57x57.png', //uniquement pour android
          badge: 1,
          led: 'FFFFFF' //led notifications pour android uniquement, couleur blanche
      });
  }
}
