import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * Récupère les coordonnées GPS du téléphone (latitude et longitude).
 *
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

  // Cette fonction récupère les coodonnées GPS actuelle grâce à la classe Geoun.
  // On a aussi la classe Geodeux qui récupère les coordonnées GPS, ou l'on a mis toutes les coordonnées GPS dans un tableau que l'on bouclera dessus afin d'avoir
  // toutes lees dernières coordonnées GPS de la position actuelle de l'utilisateur.
 geo(){

   this.geolocation.getCurrentPosition().then((resp) => {
      this.coord1 = new Geoun(resp.coords.latitude, resp.coords.longitude);

   }).catch((error) => {
      console.log('Erreur de géolocalisation ', error);
    });

   let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
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
