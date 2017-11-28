import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FonctionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fonction',
  templateUrl: 'fonction.html',
})
export class FonctionPage {
  app:AppData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.app = new AppData("nom", 0.3);
  }

  konsole(){
    console.log('Message de test dans la console.');
  }

}

class AppData{
    constructor(public nom: string, public version: Number){

    }
}
