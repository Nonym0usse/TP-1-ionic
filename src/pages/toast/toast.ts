import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * VELLA CYRIL - B3 Ingésup
 *
 * ici, nous avons les toasts qui sont appelés si l'utilisateur appuie sur un bouton.
 * la fonction create() prend en parametre la durée d'affichage du toast, leur position, et une chaine pour afficher les infos et
 * pour finir, une option permettant de fermer le toast.
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
