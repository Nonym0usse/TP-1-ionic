import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the TextToSpeechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-to-speech',
  templateUrl: 'text-to-speech.html',
})
export class TextToSpeechPage {
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {

  }

  parler()
  {
    this.tts.speak({text: this.name, locale: 'fr-FR', rate: 1.5})
      .catch((reason: any) => console.log(reason));
  }
}
