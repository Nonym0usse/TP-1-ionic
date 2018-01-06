import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the SocialsharingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socialsharing',
  templateUrl: 'socialsharing.html',
})
export class SocialsharingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, private localNotifications: LocalNotifications) {

    //check les conditions d'envoie du mail, si l'application arrive à envoyer elle renvoie un message sinon elle renvoie un message d'errreur.

    this.socialSharing.canShareViaEmail().then(() => {
      this.notif('OK.');
    }).catch(() => {
      this.notif("Impossible d'envoyer le mail...");
    });

  //Envoi un message à l'aide de la fonction shareViaEmail() qui prend en paramètre un corps de message, un sujet et un destinataire.

    this.socialSharing.shareViaEmail('Bonjour, message de test', 'Essai envoie email avec ionic', ['cyril.vella@yahoo.com']).then(() => {
      this.notif('Mail envoyé avec succès.');
    }).catch(() => {
      this.notif("Erreur lors de l'envoi du mail.");
    });

  }

  public notif(data: string)
  {
      this.localNotifications.schedule({
          title: "Ionic App",
          text: data,
          at: new Date(new Date().getTime() + 0)
      });
  }
}
