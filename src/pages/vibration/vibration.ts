import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the VibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * VELLA CYRIL - B3 Ingésup
 *
 * ici, on a un bouton qui fait appel a la fonction vibreur() pour faire vibrer le téléphone.
 */

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
  }
  vibreur()
  {
    this.vibration.vibrate(1000); //vibre pour une seconde sur android, mais il n'est pas possible de set la durée sur iOS
  }
}
