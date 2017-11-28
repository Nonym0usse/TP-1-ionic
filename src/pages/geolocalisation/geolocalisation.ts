import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocalisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocalisation',
  templateUrl: 'geolocalisation.html',
})
export class GeolocalisationPage {

  coords1 : GeoModel;
coords2 : GeoModel2;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.coords1 = new GeoModel(0, 0);
    this.coords2 = new GeoModel2(0, 0);
    this.geo();
  }


  geo(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coords1 = new GeoModel(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.coords2 = new GeoModel2(data.coords.latitude, data.coords.longitude);
    });
  }


}


class GeoModel{
  constructor(public latitude: number, public longitude: number){

  }
}

class GeoModel2{
  constructor(public latitude: number, public longitude: number){

  }
}
