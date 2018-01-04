import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Fonction qui sert à voir en temps réel le résultat du formulaire dans la partie html.
* On a aussi un appel à la fonction konsole lorsqu'on clique sur le bouton.
*
*/

@IonicPage()
@Component({
  selector: 'page-fonction',
  templateUrl: 'fonction.html',
})
export class FonctionPage {
  app:AppData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.app = new AppData("nom", 0.3);  //appel au constructeur de la classe AppData lors de la création de la vue HTML.
  }

  konsole(){
    console.log('Message de test dans la console.');
  }

}

class AppData{ //Classe ayant un constrcuteur qui prend un paramètre une chaine de caractère et un entier / décimal.
    constructor(public nom: string, public version: Number){

    }
}
