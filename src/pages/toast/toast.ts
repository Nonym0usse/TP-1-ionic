import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * VELLA CYRIL - B3 Ingésup
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

    ToastHaut()
    {
      let toast = this.toastCtrl.create({
        message: "Toast qui s'affiche en haut !", //message qui s'affichera
        duration: 3000, //set le temps d'affichage du Toast
        position: 'top', //position du toast (ex: bottom, top, middle)
        closeButtonText: "Fermer" //message de fermeture du toast
      });
      toast.present();
    }

    ToastBas()
    {
      let toasts = this.toastCtrl.create({
        message: "Toast qui s'affiche en bas !",
        duration: 3000,
        position: 'bottom',
        closeButtonText: "Fermer"
      });
      toasts.present();
    }
}
