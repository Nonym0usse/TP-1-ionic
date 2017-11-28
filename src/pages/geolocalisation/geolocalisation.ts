import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocPage page.
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

 coord1: Geoun;
  coord2: Array<Geodeux>;


 constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.coord1 = new Geoun(0, 0);
    this.coord2 = new Array<Geodeux>();
    this.geo();
  }

 ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocPage');
  }

 geo(){

   this.geolocation.getCurrentPosition().then((resp) => {

      this.coord1 = new Geoun(resp.coords.latitude, resp.coords.longitude);

   }).catch((error) => {
      console.log('Error getting location', error);
    });

   let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     this.coord2.push(new Geodeux(data.coords.latitude, data.coords.longitude));

   });


 }

}




class Geoun{

 constructor( public latitude: number, public longitude: number){ }

 }




 class Geodeux{

   constructor( public latitude: number, public longitude: number){ }

   }
